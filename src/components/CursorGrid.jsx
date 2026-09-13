
import { useRef, useEffect } from "react";

const FALLOFF_CURVES = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  sharp: (t) => t * t * t,
};

const hexToRgb = (hex) => {
  const h = hex.replace("#", "");
  const v =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;

  const num = parseInt(v.slice(0, 6), 16);

  return [
    (num >> 16) & 255,
    (num >> 8) & 255,
    num & 255,
  ];
};

const CursorGrid = ({
  cellSize = 65,
  color = "#7C3AED",
  radius = 190,
  falloff = "smooth",
  holdTime = 350,
  fadeDuration = 1000,
  lineWidth = 1.4,
  maxOpacity = 1,
  fillOpacity = 0.08,
  gridOpacity = 0.025,
  cellRadius = 6,
  clickPulse = true,
  pulseSpeed = 700,
  className = "",
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const propsRef = useRef({});
  const wakeRef = useRef(null);

  propsRef.current = {
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let cols = 0;
    let rows = 0;

    let offX = 0;
    let offY = 0;

    let alphas = new Float32Array(0);
    let touched = new Float64Array(0);

    let w = 0;
    let h = 0;

    const pulses = [];

    let raf = 0;
    let running = false;
    let lastFrame = 0;

    /* --------------------------------
       BUILD GRID
    -------------------------------- */

    const rebuild = () => {
      const p = propsRef.current;

      w = container.offsetWidth;
      h = container.offsetHeight;

      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / p.cellSize) + 1;
      rows = Math.ceil(h / p.cellSize) + 1;

      offX = (w - cols * p.cellSize) / 2;
      offY = (h - rows * p.cellSize) / 2;

      alphas = new Float32Array(cols * rows);
      touched = new Float64Array(cols * rows);
    };

    /* --------------------------------
       CELL CENTER
    -------------------------------- */

    const cellCenter = (i) => {
      const p = propsRef.current;

      const cx =
        offX +
        (i % cols) * p.cellSize +
        p.cellSize / 2;

      const cy =
        offY +
        Math.floor(i / cols) * p.cellSize +
        p.cellSize / 2;

      return [cx, cy];
    };

    /* --------------------------------
       LIGHT CELLS
    -------------------------------- */

    const energize = (x, y, boost = 1) => {
      const p = propsRef.current;

      const r = Math.max(p.radius, 1);

      const ease =
        FALLOFF_CURVES[p.falloff] ||
        FALLOFF_CURVES.smooth;

      const now = performance.now();

      const minCol = Math.max(
        0,
        Math.floor(
          (x - r - offX) / p.cellSize
        )
      );

      const maxCol = Math.min(
        cols - 1,
        Math.floor(
          (x + r - offX) / p.cellSize
        )
      );

      const minRow = Math.max(
        0,
        Math.floor(
          (y - r - offY) / p.cellSize
        )
      );

      const maxRow = Math.min(
        rows - 1,
        Math.floor(
          (y + r - offY) / p.cellSize
        )
      );

      for (let row = minRow; row <= maxRow; row++) {
        for (
          let col = minCol;
          col <= maxCol;
          col++
        ) {
          const i = row * cols + col;

          const [cx, cy] = cellCenter(i);

          const distance = Math.hypot(
            cx - x,
            cy - y
          );

          if (distance > r) continue;

          const intensity =
            ease(1 - distance / r) *
            p.maxOpacity *
            boost;

          if (intensity > alphas[i]) {
            alphas[i] = intensity;
          }

          touched[i] = now;
        }
      }
    };

    /* --------------------------------
       DRAW
    -------------------------------- */

    const draw = (now) => {
      const p = propsRef.current;

      const dt = Math.min(
        now - lastFrame,
        50
      );

      lastFrame = now;

      ctx.clearRect(0, 0, w, h);

      const [cr, cg, cb] = hexToRgb(
        p.color
      );

      /* STATIC GRID */

      if (p.gridOpacity > 0) {
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${p.gridOpacity})`;

        ctx.lineWidth = 1;

        ctx.beginPath();

        for (
          let col = 0;
          col <= cols;
          col++
        ) {
          const x =
            Math.round(
              offX + col * p.cellSize
            ) + 0.5;

          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }

        for (
          let row = 0;
          row <= rows;
          row++
        ) {
          const y =
            Math.round(
              offY + row * p.cellSize
            ) + 0.5;

          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }

        ctx.stroke();
      }

      /* CLICK PULSE */

      for (
        let pi = pulses.length - 1;
        pi >= 0;
        pi--
      ) {
        const pulse = pulses[pi];

        const age =
          (now - pulse.t0) / 1000;

        const ringRadius =
          age * p.pulseSpeed;

        if (
          ringRadius >
          Math.hypot(w, h)
        ) {
          pulses.splice(pi, 1);
          continue;
        }

        const band = p.cellSize * 1.2;

        const minCol = Math.max(
          0,
          Math.floor(
            (pulse.x -
              ringRadius -
              band -
              offX) /
              p.cellSize
          )
        );

        const maxCol = Math.min(
          cols - 1,
          Math.floor(
            (pulse.x +
              ringRadius +
              band -
              offX) /
              p.cellSize
          )
        );

        const minRow = Math.max(
          0,
          Math.floor(
            (pulse.y -
              ringRadius -
              band -
              offY) /
              p.cellSize
          )
        );

        const maxRow = Math.min(
          rows - 1,
          Math.floor(
            (pulse.y +
              ringRadius +
              band -
              offY) /
              p.cellSize
          )
        );

        for (
          let row = minRow;
          row <= maxRow;
          row++
        ) {
          for (
            let col = minCol;
            col <= maxCol;
            col++
          ) {
            const i = row * cols + col;

            const [cx, cy] =
              cellCenter(i);

            const distance = Math.hypot(
              cx - pulse.x,
              cy - pulse.y
            );

            if (
              Math.abs(
                distance - ringRadius
              ) <
              band / 2
            ) {
              alphas[i] =
                Math.max(
                  alphas[i],
                  p.maxOpacity
                );

              touched[i] = now;
            }
          }
        }
      }

      /* ACTIVE CELLS */

      let anyVisible =
        pulses.length > 0;

      const fadeStep =
        dt /
        Math.max(
          p.fadeDuration,
          16
        );

      const half =
        p.cellSize / 2;

      for (
        let i = 0;
        i < alphas.length;
        i++
      ) {
        let alpha = alphas[i];

        if (alpha <= 0) continue;

        if (
          now - touched[i] >
          p.holdTime
        ) {
          alpha = Math.max(
            0,
            alpha - fadeStep
          );

          alphas[i] = alpha;

          if (alpha <= 0) continue;
        }

        anyVisible = true;

        const [cx, cy] =
          cellCenter(i);

        /* SOFT OUTER GLOW */

        const glow =
          ctx.createRadialGradient(
            cx,
            cy,
            0,
            cx,
            cy,
            p.cellSize * 1.35
          );

        glow.addColorStop(
          0,
          `rgba(${cr}, ${cg}, ${cb}, ${
            alpha * 0.32
          })`
        );

        glow.addColorStop(
          0.45,
          `rgba(${cr}, ${cg}, ${cb}, ${
            alpha * 0.14
          })`
        );

        glow.addColorStop(
          1,
          `rgba(${cr}, ${cg}, ${cb}, 0)`
        );

        ctx.fillStyle = glow;

        ctx.fillRect(
          cx - p.cellSize,
          cy - p.cellSize,
          p.cellSize * 2,
          p.cellSize * 2
        );

        /* CELL SHINE */

        const gradient =
          ctx.createRadialGradient(
            cx,
            cy,
            half * 0.05,
            cx,
            cy,
            p.cellSize
          );

        gradient.addColorStop(
          0,
          `rgba(${cr}, ${cg}, ${cb}, ${
            alpha
          })`
        );

        gradient.addColorStop(
          0.35,
          `rgba(${cr}, ${cg}, ${cb}, ${
            alpha * 0.65
          })`
        );

        gradient.addColorStop(
          0.7,
          `rgba(${cr}, ${cg}, ${cb}, ${
            alpha * 0.22
          })`
        );

        gradient.addColorStop(
          1,
          `rgba(${cr}, ${cg}, ${cb}, 0)`
        );

        const x =
          cx - half + 0.5;

        const y =
          cy - half + 0.5;

        const size =
          p.cellSize - 1;

        ctx.beginPath();

        if (p.cellRadius > 0) {
          ctx.roundRect(
            x,
            y,
            size,
            size,
            p.cellRadius
          );
        } else {
          ctx.rect(
            x,
            y,
            size,
            size
          );
        }

        /* CELL FILL */

        if (p.fillOpacity > 0) {
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${
            alpha *
            p.fillOpacity
          })`;

          ctx.fill();
        }

        /* CELL BORDER */

        ctx.strokeStyle =
          gradient;

        ctx.lineWidth =
          p.lineWidth;

        ctx.stroke();
      }

      if (anyVisible) {
        raf =
          requestAnimationFrame(
            draw
          );
      } else {
        running = false;

        if (
          p.gridOpacity <= 0
        ) {
          ctx.clearRect(
            0,
            0,
            w,
            h
          );
        }
      }
    };

    /* --------------------------------
       START ANIMATION
    -------------------------------- */

    const wake = () => {
      if (running) return;

      running = true;

      lastFrame =
        performance.now();

      raf =
        requestAnimationFrame(
          draw
        );
    };

    wakeRef.current = wake;

    /* --------------------------------
       POINTER POSITION
       WINDOW LISTENER = WORKS
       OVER TEXT + BUTTONS
    -------------------------------- */

    const getLocalPosition = (event) => {
      const rect =
        canvas.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      return {
        x,
        y,
        inside:
          x >= 0 &&
          x <= rect.width &&
          y >= 0 &&
          y <= rect.height,
      };
    };

    const onPointerMove = (event) => {
      const {
        x,
        y,
        inside,
      } = getLocalPosition(event);

      if (!inside) return;

      energize(x, y, 1.15);

      wake();
    };

    const onPointerDown = (event) => {
      if (
        !propsRef.current
          .clickPulse
      ) {
        return;
      }

      const {
        x,
        y,
        inside,
      } = getLocalPosition(event);

      if (!inside) return;

      pulses.push({
        x,
        y,
        t0: performance.now(),
      });

      /* Strong click brightness */

      energize(x, y, 1.5);

      wake();
    };

    /* --------------------------------
       RESIZE
    -------------------------------- */

    const resizeObserver =
      new ResizeObserver(() => {
        rebuild();
        wake();
      });

    resizeObserver.observe(
      container
    );

    rebuild();
    wake();

    /* WINDOW EVENTS */

    window.addEventListener(
      "pointermove",
      onPointerMove
    );

    window.addEventListener(
      "pointerdown",
      onPointerDown
    );

    return () => {
      cancelAnimationFrame(raf);

      resizeObserver.disconnect();

      window.removeEventListener(
        "pointermove",
        onPointerMove
      );

      window.removeEventListener(
        "pointerdown",
        onPointerDown
      );
    };
  }, [cellSize]);

  /* Repaint when visual props change */

  useEffect(() => {
    wakeRef.current?.();
  }, [
    gridOpacity,
    color,
    lineWidth,
    maxOpacity,
    fillOpacity,
    cellRadius,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden${
        className
          ? ` ${className}`
          : ""
      }`}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
      />
    </div>
  );
};

export default CursorGrid;

