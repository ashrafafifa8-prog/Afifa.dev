import React from "react";

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
      className="relative min-h-screen overflow-hidden bg-[#080610] text-[#F8F5FF]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#6D28D9]/20 blur-[140px] -top-20 -left-20 animate-pulse" />

        <div className="absolute w-[550px] h-[550px] rounded-full bg-[#8B5CF6]/20 blur-[160px] top-[25%] -right-40 animate-[float_8s_ease-in-out_infinite]" />

        <div className="absolute w-[450px] h-[300px] rounded-full bg-[#4C1D95]/25 blur-[130px] bottom-0 left-[20%]" />
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
          <div className="flex items-center justify-center gap-4 mb-7 hero-item">
            <span className="w-12 h-px bg-[#8B5CF6]" />

            <p className="text-sm md:text-base tracking-[0.4em] uppercase text-[#C4B5FD]">
              Hello, I'm
            </p>

            <span className="w-12 h-px bg-[#8B5CF6]" />
          </div>

          {/* Main Name */}
          <h1
            className="
              hero-item
              text-[clamp(3rem,8vw,7.5rem)]
              leading-none
              font-black
              tracking-[-0.04em]
              whitespace-nowrap
            "
          >
            <span className="text-[#F8F5FF]">
              AFIFA
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4B5FD] via-[#8B5CF6] to-[#A78BFA]">
              {" "}ASHRAF
            </span>
          </h1>

          {/* Role */}
          <h2
            className="
              hero-item
              mt-7
              text-2xl
              md:text-4xl
              font-semibold
              text-[#F8F5FF]
            "
          >
            Digital Experience Designer
            <span className="text-[#5EEAD4]">.</span>
          </h2>

          {/* Description */}
          <p
            className="
              hero-item
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
          </p>

          {/* Buttons */}
          <div
            className="
              hero-item
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
          </div>

          {/* Social Icons */}
          <div
            className="
              hero-item
              flex
              justify-center
              items-center
              gap-4
              mt-11
            "
          >
            {/* GitHub */}
            <a
              href="#"
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
              href="#"
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
              href="#"
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
          </div>

          {/* Scroll */}
          <div className="hero-item mt-10 flex flex-col items-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#7C708D]">
              Scroll
            </span>

            <div className="mt-3 w-px h-9 bg-gradient-to-b from-[#8B5CF6] to-transparent animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;