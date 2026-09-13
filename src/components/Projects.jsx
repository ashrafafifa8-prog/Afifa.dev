import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import AccordionGallery from "./AccordionGallery";

const projects = [
  {
    title: "Real Estate Website",

    description:
      "A modern and responsive real estate website designed with a clean interface, elegant visuals and smooth user experience.",

    tech: ["React", "Tailwind CSS", "JavaScript"],

    image: "",

    link: "https://your-real-estate-project.vercel.app",
  },

  {
    title: "SmartBuy",

    description:
      "A modern e-commerce platform with product browsing, responsive layouts and smooth shopping interactions built with React.",

    tech: ["React", "Tailwind CSS", "React Router"],

    image: "",

    link: "https://your-smartbuy-project.vercel.app",
  },

  {
    title: "Foodie",

    description:
      "A modern food website featuring recipes, products and an engaging responsive interface with smooth navigation.",

    tech: ["React", "Tailwind CSS", "React Router"],

    image: "",

    link: "https://your-foodie-project.vercel.app",
  },

  {
    title: "Portfolio Website",

    description:
      "A personal portfolio designed to showcase creative development work, technical skills and modern digital experiences.",

    tech: ["React", "Tailwind CSS", "Framer Motion"],

    image: "",

    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#080610]
        py-28
        text-[#F8F5FF]
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#6D28D9]/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            top-1/2
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#8B5CF6]/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-[#5EEAD4]/5
            blur-[150px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Heading */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#8B5CF6]" />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#C4B5FD]
              "
            >
              Selected Work
            </span>

            <span className="h-px w-10 bg-[#8B5CF6]" />
          </div>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              md:text-6xl
            "
          >
            Projects That{" "}
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
              Speak
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-[#A8A1B2]
              md:text-lg
            "
          >
            A collection of projects where design, development and
            thoughtful user experiences come together.
          </p>
        </motion.div>

        {/* Accordion Gallery */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <AccordionGallery
            items={projects}
            defaultIndex={1}
            accentColor="#8B5CF6"
            textColor="#F8F5FF"
            height={520}
            gap={10}
            radius={22}
            expandRatio={0.52}
            duration={0.65}
            ease="power3.out"
            parallax={0.5}
            tilt={5}
            grayscale={true}
          />
        </motion.div>

        {/* Bottom Hint */}
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
            delay: 0.25,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-8 bg-[#302340]" />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#6F657A]
            "
          >
            Hover to explore
          </span>

          <FiArrowUpRight
            size={14}
            className="text-[#8B5CF6]"
          />

          <span className="h-px w-8 bg-[#302340]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;