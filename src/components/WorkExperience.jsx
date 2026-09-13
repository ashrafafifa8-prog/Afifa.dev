
import React from "react";

import { motion } from "framer-motion";

import {
  FiBriefcase,
  FiBookOpen,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

import OrbitImages from "./OrbitImages";

const experiences = [
  {
    number: "01",
    type: "INTERNSHIP",
    title: "Frontend Developer Intern",
    company: "Exlon",
    duration: "3 Months",
    icon: FiBriefcase,
    description:
      "Worked on modern and responsive web interfaces with a focus on clean UI, reusable components and smooth user experiences.",
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    images: [
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/javascript",
      "https://cdn.simpleicons.org/tailwindcss",
      "https://cdn.simpleicons.org/html5",
      "https://cdn.simpleicons.org/css3",
    ],
  },

  {
    number: "02",
    type: "COURSE",
    title: "Frontend Development",
    company: "Frontend Development",
    duration: "Completed",
    icon: FiBookOpen,
    description:
      "Built a strong foundation in frontend development by creating responsive websites and exploring modern web technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
    images: [
      "https://cdn.simpleicons.org/html5",
      "https://cdn.simpleicons.org/css3",
      "https://cdn.simpleicons.org/javascript",
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/tailwindcss",
    ],
  },

  {
    number: "03",
    type: "CERTIFICATE",
    title: "Frontend Development",
    company: "Coursera",
    duration: "Completed",
    icon: FiAward,
    description:
      "Completed frontend development learning through Coursera, strengthening my understanding of modern web development and responsive interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Web Development",
    ],
    images: [
      "https://cdn.simpleicons.org/coursera",
      "https://cdn.simpleicons.org/javascript",
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/html5",
      "https://cdn.simpleicons.org/css3",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#080610] px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#7C3AED]/10 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-[350px] w-[350px] rounded-full bg-[#A855F7]/10 blur-[130px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#8B5CF6]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A78BFA]">
              My Journey
            </span>

            <span className="h-px w-8 bg-[#8B5CF6]" />
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Experience{" "}
            <span className="bg-gradient-to-r from-[#E9D5FF] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
              & Learning
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#8F8799] md:text-base">
            A collection of experiences and learning milestones that helped
            shape me into the developer I am today.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.div
                key={experience.number}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#8B5CF6]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative min-h-[580px] overflow-hidden rounded-3xl border border-[#302340] bg-[#0D0915] p-7 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#8B5CF6]/50 group-hover:bg-[#100B19]">

                  {/* Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black text-[#6D28D9]/30 transition-colors duration-300 group-hover:text-[#8B5CF6]/40">
                      {experience.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
                      <Icon
                        size={24}
                        className="text-[#A78BFA]"
                      />
                    </div>
                  </div>

                  {/* ORBIT ANIMATION */}
                  <div className="relative mx-auto mt-3 h-[150px] w-full overflow-visible">

                    <OrbitImages
                      images={experience.images}
                      altPrefix={`${experience.title} technology`}
                      shape="ellipse"

                      /* Important sizing */
                      baseWidth={300}
                      radiusX={115}
                      radiusY={42}

                      rotation={0}
                      duration={12}
                      itemSize={42}

                      direction="normal"
                      fill={true}

                      width="100%"
                      height="100%"

                      responsive={true}

                      showPath={false}

                      centerContent={
                        <motion.div
                          animate={{
                            scale: [1, 1.08, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8B5CF6]/40 bg-[#100B19] shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                        >
                          <Icon
                            size={20}
                            className="text-[#C4B5FD]"
                          />
                        </motion.div>
                      }
                    />
                  </div>

                  {/* Type */}
                  <div className="mt-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B5CF6]">
                      {experience.type}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-[#F8F5FF] transition-colors duration-300 group-hover:text-[#D8B4FE]">
                      {experience.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#A78BFA]">
                      {experience.company}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="mt-5 flex items-center gap-2 text-xs text-[#756B81]">
                    <FiCalendar size={14} />
                    <span>{experience.duration}</span>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-[#302340]" />

                  {/* Description */}
                  <p className="text-sm leading-7 text-[#918799]">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[#302340] bg-[#120C1A] px-3 py-1.5 text-[10px] text-[#A8A1B2] transition-all duration-300 hover:border-[#8B5CF6]/60 hover:bg-[#1B1029] hover:text-[#D8B4FE]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#6D28D9] to-[#C4B5FD] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Text */}
        <div className="relative z-10 mt-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#51485C]">
            Learning • Building • Growing
          </span>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;

