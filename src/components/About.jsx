import React from "react";

import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiTool,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#080610]
        text-[#F8F5FF]
        py-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            w-[400px]
            h-[400px]
            rounded-full
            bg-[#6D28D9]/10
            blur-[130px]
            -left-40
            top-20
          "
        />

        <div
          className="
            absolute
            w-[350px]
            h-[350px]
            rounded-full
            bg-[#8B5CF6]/10
            blur-[130px]
            -right-32
            bottom-10
          "
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Section Heading */}
        <div className="mb-14 text-center">

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-10 h-px bg-[#8B5CF6]" />

            <span
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#C4B5FD]
              "
            >
              About Me
            </span>

            <span className="w-10 h-px bg-[#8B5CF6]" />
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
            "
          >
            Turning ideas into

            <span
              className="
                ml-3
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#C4B5FD]
                via-[#8B5CF6]
                to-[#A78BFA]
              "
            >
              digital experiences.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Intro */}
            <p
              className="
                text-white
                text-base
                md:text-lg
                leading-8
                max-w-xl
              "
            >
              I’m Afifa Ashraf, and I love turning ideas into beautiful
              digital experiences — combining clean code, modern design,
              and creativity to build websites that feel as good as they look.
            </p>

            <p
              className="
                mt-5
                text-white
                leading-7
                max-w-xl
              "
            >
              Currently pursuing my BS in Software Engineering, I focus
              on creating modern interfaces with attention to design,
              usability and performance. I love learning new technologies
              and turning concepts into meaningful digital products.
            </p>

            {/* Education Card */}
            <div
              className="
                mt-8
                p-5
                rounded-2xl
                border
                border-[#302340]
                bg-[#0D0A15]/80
                backdrop-blur-xl
                hover:border-[#8B5CF6]/50
                transition-all
                duration-300
              "
            >
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-11
                    h-11
                    shrink-0
                    rounded-xl
                    bg-[#8B5CF6]/10
                    border
                    border-[#8B5CF6]/20
                    flex
                    items-center
                    justify-center
                    text-[#C4B5FD]
                  "
                >
                  <FiCode size={20} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-[#7C708D]
                    "
                  >
                    Education
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    BS Software Engineering
                  </h3>

                  <p className="mt-1 text-sm text-[#A8A1B2]">
                    5th Semester
                  </p>
                </div>

              </div>
            </div>

            {/* Skills */}
            <div className="mt-8">

              <div className="flex items-center gap-3 mb-4">

                <FiLayers
                  className="text-[#8B5CF6]"
                  size={18}
                />

                <h3
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-[#C4B5FD]
                  "
                >
                  Core Skills
                </h3>

              </div>

              <div className="flex flex-wrap gap-2.5">

                {[
                  "React",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#302340]
                      bg-[#0D0A15]
                      text-sm
                      text-[#BFB5D1]
                      hover:border-[#8B5CF6]
                      hover:text-[#C4B5FD]
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Tools */}
            <div className="mt-7">

              <div className="flex items-center gap-3 mb-4">

                <FiTool
                  className="text-[#8B5CF6]"
                  size={18}
                />

                <h3
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-[#C4B5FD]
                  "
                >
                  Tools I Use
                </h3>

              </div>

              <div className="flex flex-wrap gap-2.5">

                {[
                  "Figma",
                  "Git",
                  "GitHub",
                  "Vercel",
                  "Netlify",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#302340]
                      text-sm
                      text-[#91899F]
                      hover:text-[#C4B5FD]
                      hover:border-[#8B5CF6]
                      transition-all
                      duration-300
                    "
                  >
                    {tool}
                  </span>
                ))}

              </div>

            </div>

            {/* Explore Button */}
            <div className="flex mt-9">

              <a
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  bg-[#8B5CF6]
                  text-white
                  font-medium
                  hover:bg-[#A78BFA]
                  hover:text-[#080610]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Explore My Work

                <FiArrowUpRight
                  size={17}
                  className="
                    group-hover:rotate-45
                    transition-transform
                    duration-300
                  "
                />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative flex justify-center">

            {/* Outer Glow */}
            <div
              className="
                absolute
                w-[320px]
                h-[320px]
                rounded-full
                bg-[#8B5CF6]/10
                blur-[90px]
              "
            />

            {/* Image Card */}
            <div
              className="
                relative
                w-[300px]
                md:w-[350px]
                h-[390px]
                md:h-[450px]
                rounded-[2rem]
                border
                border-[#3A2850]
                bg-[#0D0A15]
                overflow-hidden
                shadow-[0_0_60px_rgba(139,92,246,0.12)]
              "
            >

              {/* Image */}
              <div
                className="
                  absolute
                  inset-3
                  rounded-[1.5rem]
                  border
                  border-[#302340]
                  overflow-hidden
                  bg-[#080610]
                "
              >
                <img
                  src="/image1.png.png"
                  alt="Afifa Ashraf"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;