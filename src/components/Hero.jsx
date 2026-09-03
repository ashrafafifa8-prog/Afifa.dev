
import React from "react";
import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080610]
        text-[#F8F5FF]
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#6D28D9]/20
            blur-[140px]
            -top-20
            -left-20
            animate-pulse
          "
        />

        <div
          className="
            absolute
            w-[550px]
            h-[550px]
            rounded-full
            bg-[#8B5CF6]/20
            blur-[160px]
            top-[25%]
            -right-40
            animate-[float_8s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            w-[450px]
            h-[300px]
            rounded-full
            bg-[#4C1D95]/25
            blur-[130px]
            bottom-0
            left-[20%]
          "
        />
      </div>

      {/* Subtle Background Name */}
      <div
        className="
          absolute
          top-[17%]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[12vw]
          font-black
          tracking-tight
          text-transparent
          [-webkit-text-stroke:1px_rgba(139,92,246,0.15)]
          pointer-events-none
          select-none
        "
      >
        AFIFA ASHRAF
      </div>

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          max-w-7xl
          mx-auto
          px-6
          flex
          items-center
          justify-center
          text-center
          pt-24
        "
      >
        <div className="max-w-5xl">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="flex items-center justify-center gap-4 mb-7"
          >
            <span className="w-12 h-px bg-[#8B5CF6]" />

            <p className="text-sm md:text-base tracking-[0.4em] uppercase text-[#C4B5FD]">
              Hello, I'm
            </p>

            <span className="w-12 h-px bg-[#8B5CF6]" />
          </motion.div>

          {/* Main Name */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.3,
                },
              },
            }}
            className="
              text-[clamp(3rem,8vw,7.5rem)]
              leading-none
              font-black
              tracking-[-0.04em]
              whitespace-nowrap
            "
          >
            {/* AFIFA */}
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  filter: "blur(12px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              className="text-[#F8F5FF]"
            >
              AFIFA
            </motion.span>

            {/* ASHRAF */}
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  filter: "blur(12px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#C4B5FD]
                via-[#8B5CF6]
                to-[#A78BFA]
              "
            >
              {" "}ASHRAF
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: "easeOut",
            }}
            className="
              mt-7
              text-2xl
              md:text-4xl
              font-semibold
              text-[#F8F5FF]
            "
          >
            Digital Experience Designer

            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[#5EEAD4]"
            >
              .
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 1.3,
              ease: "easeOut",
            }}
            className="
              mt-6
              mx-auto
              max-w-2xl
              text-base
              md:text-lg
              leading-8
              text-[#A8A1B2]
            "
          >
            I don't just build websites — I craft digital experiences
            that make people stop, explore, and remember.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.5,
              ease: "easeOut",
            }}
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-4
              mt-9
            "
          >
            {/* View Work */}
            <a
              href="#projects"
              className="
                group
                flex
                items-center
                gap-2
                px-7
                py-3.5
                rounded-full
                bg-[#8B5CF6]
                text-white
                font-medium
                shadow-[0_0_30px_rgba(139,92,246,0.25)]
                hover:bg-[#A78BFA]
                hover:text-[#080610]
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]
                transition-all
                duration-300
              "
            >
              View My Work

              <FiArrowUpRight
                size={18}
                className="
                  group-hover:rotate-45
                  transition-transform
                  duration-300
                "
              />
            </a>

            {/* Let's Talk */}
            <a
              href="#contact"
              className="
                flex
                items-center
                gap-2
                px-7
                py-3.5
                rounded-full
                border
                border-[#4C3470]
                text-[#C4B5FD]
                hover:bg-[#24143A]
                hover:border-[#8B5CF6]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.7,
              ease: "easeOut",
            }}
            className="
              flex
              justify-center
              items-center
              gap-4
              mt-11
            "
          >
            {/* GitHub */}
            <a
              href="https://github.com/ashrafafifa8-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#302340]
                flex
                items-center
                justify-center
                text-[#A8A1B2]
                hover:text-[#C4B5FD]
                hover:border-[#8B5CF6]
                hover:bg-[#24143A]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FiGithub size={19} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/afifa-ashraf03/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#302340]
                flex
                items-center
                justify-center
                text-[#A8A1B2]
                hover:text-[#C4B5FD]
                hover:border-[#8B5CF6]
                hover:bg-[#24143A]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FiLinkedin size={19} />
            </a>

            {/* Email */}
            <a
              href="mailto:ashrafafifa8@gmail.com"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#302340]
                flex
                items-center
                justify-center
                text-[#A8A1B2]
                hover:text-[#C4B5FD]
                hover:border-[#8B5CF6]
                hover:bg-[#24143A]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FiMail size={19} />
            </a>
          </motion.div>

          {/* Scroll */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.9,
              ease: "easeOut",
            }}
            className="mt-10 flex flex-col items-center"
          >
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#7C708D]">
              Scroll
            </span>

            <div className="mt-3 w-px h-9 bg-gradient-to-b from-[#8B5CF6] to-transparent animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

