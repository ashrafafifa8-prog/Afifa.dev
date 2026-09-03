import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiCplusplus,
} from "react-icons/si";

const tools = [
  {
    name: "HTML5",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    icon: SiCss,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
  },
  {
    name: "Figma",
    icon: SiFigma,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "Netlify",
    icon: SiNetlify,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
];

const ToolItem = ({ tool, active, onPress, onRelease }) => {
  const Icon = tool.icon;

  return (
    <motion.div
      onPointerDown={onPress}
      onPointerUp={onRelease}
      onPointerLeave={onRelease}
      whileHover={{
        scale: 1.06,
        y: -5,
      }}
      whileTap={{
        scale: 1.13,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className={`
        group
        flex
        shrink-0
        cursor-pointer
        select-none
        items-center
        gap-3
        rounded-2xl
        border
        px-6
        py-4
        transition-all
        duration-300

        ${
          active
            ? `
              border-[#8B5CF6]
              bg-[#8B5CF6]/10
              opacity-100
              shadow-[0_0_35px_rgba(139,92,246,0.25)]
            `
            : `
              border-[#302340]/60
              bg-[#0D0915]/70
              opacity-30
            `
        }

        hover:border-[#8B5CF6]/60
        hover:bg-[#130D1D]
        hover:opacity-100
      `}
    >
      {/* Icon */}
      <motion.div
        animate={{
          scale: active ? 1.18 : 1,
          rotate: active ? 5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <Icon
          size={30}
          className={`
            transition-all
            duration-300

            ${
              active
                ? `
                  text-[#5EEAD4]
                  drop-shadow-[0_0_12px_rgba(94,234,212,0.55)]
                `
                : `
                  text-[#A78BFA]
                `
            }
          `}
        />
      </motion.div>

      {/* Tool Name */}
      <span
        className={`
          whitespace-nowrap
          text-sm
          font-medium
          transition-colors
          duration-300

          ${
            active
              ? "text-[#F8F5FF]"
              : "text-[#A8A1B2]"
          }
        `}
      >
        {tool.name}
      </span>
    </motion.div>
  );
};

const Tools = () => {
  const [active, setActive] = useState(null);

  const firstRow = tools.slice(0, 6);
  const secondRow = tools.slice(6);

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#080610]
        py-24
        text-[#F8F5FF]
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/4
            top-0
            h-[300px]
            w-[400px]
            rounded-full
            bg-[#6D28D9]/10
            blur-[130px]
          "
        />

        {/* Teal Glow */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-1/4
            h-[280px]
            w-[350px]
            rounded-full
            bg-[#5EEAD4]/5
            blur-[130px]
          "
        />
      </div>

      {/* ================= HEADING ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-14
          max-w-7xl
          px-6
          text-center
        "
      >
        {/* Small Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-10 bg-[#8B5CF6]" />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#C4B5FD]
            "
          >
            My Stack
          </span>

          <span className="h-px w-10 bg-[#8B5CF6]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            text-4xl
            font-bold
            tracking-tight
            md:text-6xl
          "
        >
          Tools I{" "}
          <span
            className="
              bg-gradient-to-r
              from-[#C4B5FD]
              via-[#8B5CF6]
              to-[#5EEAD4]
              bg-clip-text
              text-transparent
            "
          >
            Work With
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-[#8F8799]
            md:text-base
          "
        >
          Technologies and creative tools I use to turn ideas
          into polished digital experiences.
        </motion.p>
      </div>

      {/* ================= MOVING TOOLS ================= */}

      <div
        className="
          relative
          z-10
          space-y-5
          overflow-hidden
        "
      >

        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-32
            bg-gradient-to-r
            from-[#080610]
            to-transparent
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-32
            bg-gradient-to-l
            from-[#080610]
            to-transparent
          "
        />

        {/* ================= FIRST ROW ================= */}

        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            gap-5
          "
        >
          {[...firstRow, ...firstRow, ...firstRow].map(
            (tool, index) => (
              <ToolItem
                key={`first-${index}`}
                tool={tool}
                active={active === tool.name}
                onPress={() => setActive(tool.name)}
                onRelease={() => setActive(null)}
              />
            )
          )}
        </motion.div>

        {/* ================= SECOND ROW ================= */}

        <motion.div
          animate={{
            x: ["-33.33%", "0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            gap-5
          "
        >
          {[...secondRow, ...secondRow, ...secondRow].map(
            (tool, index) => (
              <ToolItem
                key={`second-${index}`}
                tool={tool}
                active={active === tool.name}
                onPress={() => setActive(tool.name)}
                onRelease={() => setActive(null)}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;