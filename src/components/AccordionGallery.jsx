
import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { FiArrowUpRight } from "react-icons/fi";

const AccordionGallery = ({
  items = [],
  defaultIndex = 0,
  accentColor = "#8B5CF6",
  textColor = "#F8F5FF",
  gap = 10,
  radius = 22,
  expandRatio = 0.52,
  height = 520,
  duration = 0.65,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 5,
  grayscale = true,
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const overlayRefs = useRef([]);
  const contentRefs = useRef([]);
  const timelineRef = useRef(null);

  const [active, setActive] = useState(
    Math.min(Math.max(defaultIndex, 0), items.length - 1)
  );

  const count = items.length;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------------------------------------
  // Layout Animation
  // ---------------------------------------
  const applyLayout = useCallback(
    (animate = true) => {
      const panels = panelRefs.current;

      if (!panels.length) return;

      const ratio = Math.min(Math.max(expandRatio, 0.25), 0.8);

      const grow =
        count > 1 ? (ratio * (count - 1)) / (1 - ratio) : 1;

      timelineRef.current?.kill();

      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;

        const media = mediaRefs.current[i];
        const overlay = overlayRefs.current[i];
        const content = contentRefs.current[i];

        const isActive = i === active;

        const rotate =
          i < active ? tilt : i > active ? -tilt : 0;

        const animationDuration =
          animate && !prefersReduced ? duration : 0;

        // ---------------------------------------
        // Panel Animation
        // ---------------------------------------
        tl.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            rotateY: rotate,
            duration: animationDuration,
            ease,
          },
          0
        );

        // ---------------------------------------
        // Image Animation
        // ---------------------------------------
        if (media) {
          const drift = active - i;

          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,

              // Keep image centered with only very small movement
              x: isActive ? 0 : drift * parallax * 8,

              // Reduced zoom
              scale: isActive ? 1 : 1,

              filter: grayscale
                ? `grayscale(${isActive ? 0 : 1})`
                : "grayscale(0)",

              duration: animationDuration,
              ease,
            },
            0
          );
        }

        // ---------------------------------------
        // Overlay Animation
        // ---------------------------------------
        if (overlay) {
          tl.to(
            overlay,
            {
              opacity: isActive ? 0.25 : 0.7,
              duration: animationDuration,
              ease,
            },
            0
          );
        }

        // ---------------------------------------
        // Content Animation
        // ---------------------------------------
        if (content) {
          if (isActive) {
            tl.to(
              content,
              {
                opacity: 1,
                y: 0,
                duration: animationDuration * 0.8,
                ease,
              },
              animate ? 0.18 : 0
            );
          } else {
            tl.to(
              content,
              {
                opacity: 0,
                y: 20,
                duration: animationDuration * 0.4,
                ease,
              },
              0
            );
          }
        }
      });

      timelineRef.current = tl;
    },
    [
      active,
      count,
      duration,
      ease,
      expandRatio,
      grayscale,
      parallax,
      prefersReduced,
      tilt,
    ]
  );

  // ---------------------------------------
  // Effects
  // ---------------------------------------
  useEffect(() => {
    applyLayout(false);

    const handleResize = () => {
      applyLayout(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      timelineRef.current?.kill();
    };
  }, [applyLayout]);

  if (!items.length) return null;

  return (
    <div
      ref={rootRef}
      className="
        flex
        w-full
        min-h-[520px]
        overflow-hidden
        [perspective:1600px]
        max-[768px]:min-h-[700px]
        max-[768px]:flex-col
      "
      style={{
        gap: `${gap}px`,
      }}
    >
      {items.map((item, index) => {
        const isActive = index === active;

        return (
          <article
            key={item.title}
            ref={(el) => (panelRefs.current[index] = el)}
            className={`
              group
              relative
              min-w-0
              min-h-0
              flex-[1_1_0]
              cursor-pointer
              overflow-hidden
              border
              border-[#302340]
              bg-[#0D0915]
              [transform-style:preserve-3d]
              max-[768px]:!flex-[1_1_0]
              max-[768px]:min-h-[140px]
              max-[768px]:!rotate-0

              ${
                isActive
                  ? "shadow-[0_25px_80px_rgba(139,92,246,0.2)]"
                  : ""
              }
            `}
            style={{
              borderRadius: `${radius}px`,
              minHeight: `${height}px`,
              willChange: "flex-grow, transform",
            }}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                setActive((index + 1) % count);
              }

              if (e.key === "ArrowLeft") {
                e.preventDefault();
                setActive((index - 1 + count) % count);
              }
            }}
          >
            {/* =================================
                IMAGE
            ================================= */}

            <div className="absolute inset-0 overflow-hidden bg-[#0D0915]">
              <div
                ref={(el) => (mediaRefs.current[index] = el)}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-full
                  w-full
                "
                style={{
                  transform: "translate(-50%, -50%)",
                  transformOrigin: "center center",
                }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable="false"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";

                      e.currentTarget.parentElement.innerHTML = `
                        <div style="
                          width:100%;
                          height:100%;
                          display:flex;
                          align-items:center;
                          justify-content:center;
                          background:linear-gradient(
                            135deg,
                            #171025,
                            #0D0915,
                            #09070D
                          );
                        ">
                          <span style="
                            color:#6F657A;
                            font-size:10px;
                            letter-spacing:0.25em;
                            text-transform:uppercase;
                          ">
                            Project Preview
                          </span>
                        </div>
                      `;
                    }}
                    className="
                      block
                      h-full
                      w-full
                      select-none
                      object-contain
                      object-center
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-[#171025]
                      via-[#0D0915]
                      to-[#09070D]
                    "
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-px w-14 bg-[#8B5CF6]" />

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.35em]
                          text-[#6F657A]
                        "
                      >
                        Project Preview
                      </p>

                      <div className="mx-auto mt-4 h-px w-14 bg-[#5EEAD4]/40" />
                    </div>
                  </div>
                )}
              </div>

              {/* Dark Overlay */}
              <div
                ref={(el) => (overlayRefs.current[index] = el)}
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#080610]
                  via-[#080610]/45
                  to-[#080610]/10
                "
                style={{
                  opacity: isActive ? 0.25 : 0.7,
                }}
              />

              {/* Purple Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-24
                  h-56
                  w-56
                  rounded-full
                  bg-[#8B5CF6]/20
                  blur-[90px]
                "
              />
            </div>

            {/* =================================
                NUMBER
            ================================= */}

            <div className="absolute right-5 top-5 z-20">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#4A3860]
                  bg-[#080610]/70
                  text-[11px]
                  font-medium
                  text-[#C4B5FD]
                  backdrop-blur-md
                "
              >
                0{index + 1}
              </span>
            </div>

            {/* =================================
                CONTENT
            ================================= */}

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                p-6
                max-[768px]:p-5
              "
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              {/* Label */}
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-8 w-[3px] rounded-full"
                  style={{
                    background: accentColor,
                    boxShadow: `0 0 18px ${accentColor}`,
                  }}
                />

                <span
                  className="
                  
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#C4B5FD]
                  "
                >
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  md:text-3xl
                "
                style={{
                  color: textColor,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#D0C9D8]
                "
              >
                {item.description}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-[#4A3860]
                      bg-[#0D0915]/70
                      px-3
                      py-1.5
                      text-[10px]
                      text-[#C4B5FD]
                      backdrop-blur-md
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              {item.link && item.link !== "#" ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-3
                    group/link
                  "
                >
                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#A8A1B2]
                      transition-colors
                      duration-300
                      group-hover/link:text-[#C4B5FD]
                    "
                  >
                    View Project
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8B5CF6]/50
                      bg-[#8B5CF6]/15
                      text-[#C4B5FD]
                      transition-all
                      duration-300
                      group-hover/link:translate-x-1
                      group-hover/link:border-[#8B5CF6]
                      group-hover/link:bg-[#8B5CF6]/25
                    "
                  >
                    <FiArrowUpRight size={15} />
                  </span>
                </a>
              ) : (
                <div className="mt-5 inline-flex items-center gap-3">
                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#6F657A]
                    "
                  >
                    Coming Soon
                  </span>
                </div>
              )}
            </div>

            {/* Active Border */}
            <div
              className={`
                pointer-events-none
                absolute
                inset-0
                rounded-[inherit]
                border
                transition-all
                duration-500
                ${
                  isActive
                    ? "border-[#8B5CF6]/60"
                    : "border-transparent"
                }
              `}
            />
          </article>
        );
      })}
    </div>
  );
};

export default AccordionGallery;

