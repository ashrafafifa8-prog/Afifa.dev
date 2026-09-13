
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiBookOpen,
  FiAward,
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
      "Worked on responsive interfaces, reusable components and modern user experiences.",
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
      "Built a strong foundation in frontend development through responsive websites and modern technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "03",
    type: "CERTIFICATE",
    title: "Frontend Development",
    company: "Coursera",
    duration: "Completed",
    icon: FiAward,
    description:
      "Strengthened my understanding of modern web development and responsive interface design.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Web Development",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const Icon = experience.icon;

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        className="
          relative
          h-full
          min-h-[360px]
          overflow-hidden
          rounded-[22px]
          border
          border-[#30263D]
          bg-[#0D0A15]
          p-5
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#8B5CF6]/50
          hover:shadow-[0_20px_55px_rgba(124,58,237,0.20)]
        "
      >
        {/* Cursor Following Purple Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-20
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            background: `radial-gradient(
              180px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(139, 92, 246, 0.18),
              transparent 65%
            )`,
          }}
        />

        {/* Top Purple Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#7C3AED]/10 blur-3xl transition-all duration-500 group-hover:bg-[#8B5CF6]/20" />

        {/* Content */}
        <div className="relative z-10">

          {/* Top Row */}
          <div className="flex items-start justify-between">

            {/* Number */}
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#6D28D9]">
              {experience.number}
            </span>

            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-[#8B5CF6]/20
                bg-[#8B5CF6]/10
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:border-[#A78BFA]/50
                group-hover:bg-[#8B5CF6]/15
                group-hover:shadow-[0_0_22px_rgba(139,92,246,0.25)]
              "
            >
              <Icon
                size={18}
                className="text-[#BFA7FF]"
              />
            </div>
          </div>

          {/* Type */}
          <div className="mt-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9D7AEA]">
              {experience.type}
            </span>

            {/* Title */}
            <h3 className="mt-2 text-xl font-bold leading-tight text-[#F5F0FF] transition-colors duration-300 group-hover:text-[#D8B4FE]">
              {experience.title}
            </h3>

            {/* Company */}
            <p className="mt-1.5 text-xs font-medium text-[#9B8BAA]">
              {experience.company}
            </p>
          </div>

          {/* Line */}
          <div className="my-5 h-px bg-gradient-to-r from-[#30263D] via-[#8B5CF6]/20 to-transparent" />

          {/* Duration */}
          <div className="flex items-center gap-2 text-[10px] font-medium text-[#71677B]">
            <FiCalendar
              size={13}
              className="text-[#8B5CF6]"
            />

            <span>{experience.duration}</span>
          </div>

          {/* Description */}
          <p className="mt-3 text-xs leading-6 text-[#81788C]">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-md
                  border
                  border-[#30263D]
                  bg-[#120E1A]
                  px-2
                  py-1
                  text-[8px]
                  font-medium
                  text-[#968DA1]
                  transition-all
                  duration-300
                  group-hover:border-[#8B5CF6]/25
                  group-hover:text-[#BFA7FF]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Arrow */}
        <div
          className="
            absolute
            bottom-5
            right-5
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border
            border-[#30263D]
            text-[#62596D]
            transition-all
            duration-500
            group-hover:border-[#8B5CF6]/50
            group-hover:bg-[#8B5CF6]/10
            group-hover:text-[#BFA7FF]
            group-hover:shadow-[0_0_18px_rgba(139,92,246,0.25)]
          "
        >
          <FiArrowUpRight size={13} />
        </div>

        {/* Bottom Purple Accent */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-gradient-to-r
            from-[#6D28D9]
            via-[#8B5CF6]
            to-[#C4B5FD]
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#080610]
        px-5
        py-24
        text-white
        sm:px-8
        lg:px-12
      "
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[5%] top-20 h-72 w-72 rounded-full bg-[#7C3AED]/10 blur-[130px]" />

        <div className="absolute right-[5%] bottom-10 h-72 w-72 rounded-full bg-[#A855F7]/10 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-7 bg-[#8B5CF6]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#A78BFA]">
              My Journey
            </span>

            <span className="h-px w-7 bg-[#8B5CF6]" />

          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">

            Experience{" "}

            <span className="bg-gradient-to-r from-[#E9D5FF] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
              & Learning
            </span>

          </h2>

          <p className="mt-4 text-sm leading-7 text-[#81788C]">
            A few milestones that shaped my journey in frontend development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.number}
              experience={experience}
              index={index}
            />
          ))}

        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-12 text-center"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#4F4858]">
            Learning · Building · Growing
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default WorkExperience;
