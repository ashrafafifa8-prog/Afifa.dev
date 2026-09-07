
import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiBookOpen,
  FiCalendar,
  FiArrowUpRight,
} from "react-icons/fi";

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
    skills: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
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
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080610] px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#A855F7]/10 blur-[150px]"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#8B5CF6]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A78BFA]">
              My Journey
            </span>

            <span className="h-px w-8 bg-[#8B5CF6]" />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
          >
            Experience{" "}
            <span className="bg-gradient-to-r from-[#E9D5FF] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
              & Learning
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-sm leading-7 text-[#8F8799] md:text-base"
          >
            A collection of experiences and learning milestones that helped
            shape me into the developer I am today.
          </motion.p>
        </motion.div>

        {/* Cards Container */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.title}
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.96,
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
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative ${
                    index === 1 ? "md:mt-16" : ""
                  }`}
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-br from-[#8B5CF6]/0 via-[#8B5CF6]/20 to-[#C4B5FD]/0 opacity-60 blur-sm transition-all duration-500 group-hover:via-[#8B5CF6]/60 group-hover:opacity-100" />

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    }}
                    className="relative min-h-[390px] overflow-hidden rounded-[26px] border border-[#302340] bg-[#0D0915]/95 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#8B5CF6]/50 group-hover:shadow-[0_25px_70px_rgba(124,58,237,0.2)]"
                  >
                    {/* Decorative Circle */}
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full border border-[#8B5CF6]/10"
                    />

                    {/* Card Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8B5CF6]/10 blur-[70px]"
                    />

                    {/* Top Row */}
                    <div className="relative flex items-start justify-between">
                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          rotate: -8,
                          scale: 1.1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4C3470] bg-gradient-to-br from-[#211332] to-[#100B17] text-[#C4B5FD] shadow-[0_8px_25px_rgba(124,58,237,0.15)] transition-all duration-300 group-hover:border-[#8B5CF6]/70 group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)]"
                      >
                        <Icon size={23} />
                      </motion.div>

                      {/* Number */}
                      <span className="font-mono text-4xl font-bold text-[#17101F] transition-colors duration-500 group-hover:text-[#241735]">
                        {experience.number}
                      </span>
                    </div>

                    {/* Type */}
                    <div className="relative mt-6">
                      <span className="rounded-full border border-[#3A2A4D] bg-[#120C1A] px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-[#9B8DA8] transition-all duration-300 group-hover:border-[#8B5CF6]/50 group-hover:text-[#C4B5FD]">
                        {experience.type}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="relative mt-4">
                      <h3 className="text-xl font-bold tracking-tight text-[#F8F5FF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D8B4FE]">
                        {experience.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#9B7BFF]">
                        {experience.company}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="relative my-5 h-px bg-gradient-to-r from-[#302340] to-transparent" />

                    {/* Duration */}
                    <div className="relative flex items-center gap-2 text-xs text-[#756B81]">
                      <FiCalendar size={13} />
                      <span>{experience.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="relative mt-4 text-xs leading-6 text-[#918799]">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="relative mt-5 flex flex-wrap gap-1.5">
                      {experience.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{
                            y: -2,
                            scale: 1.03,
                          }}
                          className="rounded-lg border border-[#302340] bg-[#120C1A] px-2.5 py-1.5 text-[10px] text-[#A8A1B2] transition-all duration-300 hover:border-[#8B5CF6]/60 hover:bg-[#1B1029] hover:text-[#D8B4FE] hover:shadow-[0_4px_15px_rgba(139,92,246,0.15)]"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        x: 3,
                      }}
                      className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#302340] bg-[#120C1A] text-[#A78BFA] transition-all duration-300 group-hover:border-[#8B5CF6]/60 group-hover:bg-[#1B1029] group-hover:text-[#D8B4FE]"
                    >
                      <FiArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </motion.div>

                    {/* Bottom Animated Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute bottom-0 left-6 right-6 h-[2px] origin-left bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD]"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
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
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-16 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#51485C]">
            Learning • Building • Growing
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;

