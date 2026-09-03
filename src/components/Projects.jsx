import React from "react";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Real Estate Website",
    description:
      "A modern and responsive real estate website designed with a clean interface and smooth user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "", // yahan baad mein image path lagana
    link: "https://your-real-estate-project.vercel.app",
  },
  {
    title: "Novel Node",
    description:
      "An online library platform designed to explore, search and organize novels through a user-friendly interface.",
    tech: ["HTML", "CSS", "Tailwind CSS"],
    image: "", // yahan baad mein image path lagana
    link: "https://your-novel-node-project.vercel.app",
  },
  {
    title: "Foodie",
    description:
      "A modern food website featuring recipes, products and an engaging responsive interface.",
    tech: ["React", "Tailwind CSS", "React Router"],
    image: "", // yahan baad mein image path lagana
    link: "https://your-foodie-project.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080610] py-28 text-[#F8F5FF]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-[#6D28D9]/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#5EEAD4]/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#8B5CF6]" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C4B5FD]">
              Selected Work
            </span>

            <span className="h-px w-10 bg-[#8B5CF6]" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Projects That{" "}
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#8B5CF6] to-[#5EEAD4] bg-clip-text text-transparent">
              Speak
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#A8A1B2] md:text-lg">
            A collection of projects where design, development and
            thoughtful user experiences come together.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative block
                overflow-hidden
                rounded-3xl
                border border-[#302340]
                bg-[#0D0915]
                transition-all duration-500
                hover:-translate-y-3
                hover:border-[#8B5CF6]/70
                hover:shadow-[0_25px_70px_rgba(139,92,246,0.16)]
              "
            >
              {/* Project Number */}
              <div className="absolute right-5 top-5 z-20">
                <span
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-[#3A2850]
                    bg-[#080610]/80
                    text-xs font-medium
                    text-[#A8A1B2]
                    backdrop-blur-md
                    transition-all duration-300
                    group-hover:border-[#5EEAD4]/50
                    group-hover:text-[#5EEAD4]
                  "
                >
                  0{index + 1}
                </span>
              </div>

              {/* Image Area */}
              <div
                className="
                  relative
                  mx-3 mt-3
                  h-56
                  overflow-hidden
                  rounded-2xl
                  border border-[#302340]
                  bg-[#100B19]
                "
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />
                ) : (
                  /* Empty Image Placeholder */
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-3 h-px w-12 bg-[#8B5CF6]" />

                      <p className="text-xs uppercase tracking-[0.3em] text-[#5C5268]">
                        Project Preview
                      </p>

                      <div className="mx-auto mt-3 h-px w-12 bg-[#5EEAD4]/40" />
                    </div>
                  </div>
                )}

                {/* Image Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#080610]
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                {/* View Icon */}
                <div
                  className="
                    absolute bottom-4 right-4
                    flex h-11 w-11
                    translate-y-3
                    items-center justify-center
                    rounded-full
                    bg-[#8B5CF6]
                    text-white
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <FiArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">

                <div className="mb-3 flex items-center justify-between">
                  <h3
                    className="
                      text-xl font-semibold
                      text-[#F8F5FF]
                      transition-colors duration-300
                      group-hover:text-[#C4B5FD]
                    "
                  >
                    {project.title}
                  </h3>

                  <FiExternalLink
                    size={17}
                    className="
                      text-[#6F657A]
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-[#5EEAD4]
                    "
                  />
                </div>

                <p className="min-h-[72px] text-sm leading-6 text-[#92899D]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border border-[#3A2850]
                        bg-[#130D1D]
                        px-3 py-1.5
                        text-[11px]
                        text-[#B9AEC6]
                        transition-colors duration-300
                        group-hover:border-[#4C3470]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-full bg-[#241B30]" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#6F657A]">
                    View Project
                  </span>

                  <FiArrowUpRight
                    size={17}
                    className="
                      text-[#8B5CF6]
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;