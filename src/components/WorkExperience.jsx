
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
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#7C3AED]/10 blur-[150px]"
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
          className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#A855F7]/10 blur-[150px]"
        />

        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/5 blur-[120px]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          {/* Small Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#8B5CF6]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A78BFA]">
              My Journey
            </span>

            <span className="h-[1px] w-8 bg-[#8B5CF6]" />
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

        {/* Experience Cards */}
        <div className="relative mt-20 grid gap-8 md:grid-cols-2">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.div
                key={experience.title}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative ${
                  index === 1 ? "md:mt-20" : ""
                }`}
              >
                {/* Outer Glow */}
                <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-br from-[#8B5CF6]/0 via-[#8B5CF6]/20 to-[#C4B5FD]/0 opacity-70 blur-sm transition-all duration-500 group-hover:from-[#8B5CF6]/50 group-hover:via-[#A78BFA]/70 group-hover:to-[#C4B5FD]/40 group-hover:opacity-100" />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                  className="relative min-h-[430px] overflow-hidden rounded-[30px] border border-[#302340] bg-[#0D0915]/95 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#8B5CF6]/40 group-hover:shadow-[0_30px_90px_rgba(124,58,237,0.18)] md:p-9"
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
                    className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#8B5CF6]/10"
                  />

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#8B5CF6]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#8B5CF6]/25" />

                  {/* Top Row */}
                  <div className="relative flex items-start justify-between">
                    {/* Icon Box */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: -6,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4C3470] bg-gradient-to-br from-[#211332] to-[#100B17] text-[#C4B5FD] shadow-[0_10px_35px_rgba(124,58,237,0.15)] transition-all duration-300 group-hover:border-[#8B5CF6]/70 group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.3)]"
                    >
                      <Icon size={26} />
                    </motion.div>

                    {/* Number */}
                    <span className="font-mono text-5xl font-bold text-[#17101F] transition-colors duration-500 group-hover:text-[#241735]">
                      {experience.number}
                    </span>
                  </div>

                  {/* Type */}
                  <div className="relative mt-8">
                    <span className="rounded-full border border-[#3A2A4D] bg-[#120C1A] px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-[#9B8DA8] transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:text-[#C4B5FD]">
                      {experience.type}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="relative mt-5">
                    <h3 className="text-2xl font-bold tracking-tight text-[#F8F5FF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D8B4FE] md:text-3xl">
                      {experience.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#9B7BFF]">
                      {experience.company}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="relative my-6 h-px w-full bg-gradient-to-r from-[#302340] via-[#302340] to-transparent" />

                  {/* Duration */}
                  <div className="relative flex items-center gap-2 text-xs text-[#756B81]">
                    <FiCalendar size={14} />
                    <span>{experience.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="relative mt-5 text-sm leading-7 text-[#918799]">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          y: -3,
                        }}
                        className="rounded-lg border border-[#302340] bg-[#120C1A] px-3 py-1.5 text-[11px] text-[#A8A1B2] transition-all duration-300 hover:border-[#8B5CF6]/60 hover:bg-[#1B1029] hover:text-[#D8B4FE] hover:shadow-[0_5px_20px_rgba(139,92,246,0.15)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom Arrow */}
                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#302340] bg-[#120C1A] text-[#A78BFA] transition-all duration-300 group-hover:border-[#8B5CF6]/60 group-hover:bg-[#1B1029] group-hover:text-[#D8B4FE]"
                  >
                    <FiArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </motion.div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
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
          }}
          className="mt-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#51485C]">
            Learning • Building • Growing
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;

