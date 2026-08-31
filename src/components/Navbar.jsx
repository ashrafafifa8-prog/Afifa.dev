import React, { useEffect, useState } from "react";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#C4B5FD]" />

        <div className="absolute -inset-5 rounded-full bg-[#8B5CF6]/20 blur-xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-5 pt-5">
        <div
          className="
            max-w-6xl mx-auto
            h-[62px]
            px-5 md:px-6
            flex items-center justify-between
            rounded-full
            bg-[#0B0810]/80
            backdrop-blur-xl
            border border-[#302340]
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          "
        >

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-wide text-[#F8F5FF] group"
          >
            Afifa
            <span className="text-[#8B5CF6] group-hover:text-[#5EEAD4] transition duration-300">
              .Dev
            </span>
          </a>


          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#about"
              className="text-sm text-[#A8A1B2] hover:text-[#C4B5FD] transition duration-300"
            >
              About Me
            </a>

            <a
              href="#skills"
              className="text-sm text-[#A8A1B2] hover:text-[#C4B5FD] transition duration-300"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="text-sm text-[#A8A1B2] hover:text-[#C4B5FD] transition duration-300"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-sm text-[#A8A1B2] hover:text-[#C4B5FD] transition duration-300"
            >
              Projects
            </a>

          </div>


          {/* Buttons */}
          <div className="flex items-center gap-2">

            {/* Download CV */}
            <a
              href="/CV.pdf"
              download
              className="
                hidden sm:flex
                items-center gap-2
                text-sm
                px-4 py-2
                rounded-full
                border border-[#3A2A4D]
                text-[#C4B5FD]
                hover:border-[#8B5CF6]
                hover:bg-[#24143A]
                transition duration-300
              "
            >
              <FiDownload size={15} />
              Download CV
            </a>


            {/* Hire Me */}
            <a
              href="#contact"
              className="
                flex items-center gap-1.5
                text-sm
                px-5 py-2.5
                rounded-full
                bg-[#8B5CF6]
                text-white
                font-medium
                shadow-[0_0_20px_rgba(139,92,246,0.25)]
                hover:bg-[#A78BFA]
                hover:text-[#0B0810]
                hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]
                transition duration-300
              "
            >
              Hire Me
              <FiArrowUpRight size={16} />
            </a>

          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;