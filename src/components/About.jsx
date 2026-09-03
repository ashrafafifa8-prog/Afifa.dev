
import React from "react";
import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiTool,
} from "react-icons/fi";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Framer Motion",
  ];

  const tools = [
    "Figma",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const chipAnimation = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#080610]
        text-[#F8F5FF]
        py-14
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            w-[350px]
            h-[350px]
            rounded-full
            bg-[#6D28D9]/10
            blur-[120px]
            -left-40
            top-10
          "
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            w-[300px]
            h-[300px]
            rounded-full
            bg-[#8B5CF6]/10
            blur-[120px]
            -right-32
            bottom-5
          "
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-9 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-3"
          >
            <span className="w-8 h-px bg-[#8B5CF6]" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#C4B5FD]
              "
            >
              About Me
            </span>

            <span className="w-8 h-px bg-[#8B5CF6]" />
          </motion.div>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              tracking-tight
            "
          >
            Turning ideas into{" "}

            <span
              className="
                ml-2
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
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >

            {/* Intro */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="
                text-white
                text-sm
                md:text-base
                leading-7
                max-w-xl
              "
            >
              I’m Afifa Ashraf, and I love turning ideas into beautiful
              digital experiences — combining clean code, modern design,
              and creativity to build websites that feel as good as they look.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.15,
                  },
                },
              }}
              className="
                mt-3
                text-white
                text-sm
                leading-6
                max-w-xl
              "
            >
              Currently pursuing my BS in Software Engineering, I focus
              on creating modern interfaces with attention to design,
              usability and performance. I love learning new technologies
              and turning concepts into meaningful digital products.
            </motion.p>

            {/* Education Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="
                mt-5
                p-4
                rounded-2xl
                border
                border-[#302340]
                bg-[#0D0A15]/80
                backdrop-blur-xl
                hover:border-[#8B5CF6]/50
                transition-colors
                duration-300
              "
            >
              <div className="flex items-start gap-4">

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    w-10
                    h-10
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
                  <FiCode size={18} />
                </motion.div>

                <div>
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.2em]
                      text-[#7C708D]
                    "
                  >
                    Education
                  </p>

                  <h3 className="mt-1 text-base font-semibold">
                    BS Software Engineering
                  </h3>

                  <p className="mt-1 text-xs text-[#A8A1B2]">
                    5th Semester
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Skills */}
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
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-5"
            >
              <div className="flex items-center gap-3 mb-3">

                <FiLayers
                  className="text-[#8B5CF6]"
                  size={17}
                />

                <h3
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#C4B5FD]
                  "
                >
                  Core Skills
                </h3>

              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipAnimation}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-[#302340]
                      bg-[#0D0A15]
                      text-xs
                      text-[#BFB5D1]
                      hover:border-[#8B5CF6]
                      hover:text-[#C4B5FD]
                      transition-colors
                      duration-300
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Tools */}
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
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-5"
            >
              <div className="flex items-center gap-3 mb-3">

                <FiTool
                  className="text-[#8B5CF6]"
                  size={17}
                />

                <h3
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#C4B5FD]
                  "
                >
                  Tools I Use
                </h3>

              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-wrap gap-2"
              >
                {tools.map((tool) => (
                  <motion.span
                    key={tool}
                    variants={chipAnimation}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-[#302340]
                      text-xs
                      text-[#91899F]
                      hover:text-[#C4B5FD]
                      hover:border-[#8B5CF6]
                      transition-colors
                      duration-300
                    "
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Explore Button */}
            <motion.div
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
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="flex mt-6"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  bg-[#8B5CF6]
                  text-white
                  text-sm
                  font-medium
                  hover:bg-[#A78BFA]
                  hover:text-[#080610]
                  transition-colors
                  duration-300
                "
              >
                Explore My Work

                <FiArrowUpRight
                  size={16}
                  className="
                    group-hover:rotate-45
                    transition-transform
                    duration-300
                  "
                />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative flex justify-center"
          >

            {/* Outer Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[280px]
                h-[280px]
                rounded-full
                bg-[#8B5CF6]/10
                blur-[80px]
              "
            />

            {/* Image Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                rotateX: -2,
              }}
              className="
                relative
                w-[270px]
                md:w-[310px]
                h-[350px]
                md:h-[400px]
                rounded-[1.7rem]
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
                  rounded-[1.3rem]
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

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

