import React from "react";
import CursorGrid from "./CursorGrid";
import { motion } from "framer-motion";

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
      className="relative min-h-screen w-full overflow-hidden bg-[#080610]"
    >
      {/* ================= CURSOR GRID ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <CursorGrid
          cellSize={65}
          color="#7C3AED"
          radius={190}
          falloff="smooth"
          holdTime={350}
          fadeDuration={1000}
          lineWidth={1.4}
          maxOpacity={1}
          fillOpacity={0.08}
          gridOpacity={0.025}
          cellRadius={6}
          clickPulse={true}
          pulseSpeed={700}
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* ================= BACKGROUND NAME ================= */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden">
        <span
          className="
            whitespace-nowrap
            text-[clamp(5rem,16vw,15rem)]
            font-black
            uppercase
            tracking-[-0.08em]
            text-transparent
            [-webkit-text-stroke:1px_rgba(139,92,246,0.15)]
          "
        >
          AFIFA ASHRAF
        </span>
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[#080610]/15" />

      {/* ================= CENTER PURPLE GLOW ================= */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D28D9]/10 blur-[170px]" />

      {/* ================= CORNER GLOWS ================= */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 z-[2] h-[350px] w-[350px] rounded-full bg-[#5B21B6]/8 blur-[150px]" />

      <div className="pointer-events-none absolute -right-24 -top-24 z-[2] h-[350px] w-[350px] rounded-full bg-[#7C3AED]/8 blur-[150px]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 flex min-h-screen w-full items-center justify-center px-5 py-24 md:px-10 lg:px-16">
        <div className="w-full max-w-5xl text-center">

          {/* HELLO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-5"
          >
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-[#A78BFA]">
              Hello, I'm
            </span>
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="whitespace-nowrap text-[clamp(2.5rem,8vw,7rem)] font-black leading-none tracking-[-0.06em] text-[#F8F5FF]"
          >
            AFIFA{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
              ASHRAF
            </span>
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="mt-6 text-xl font-medium text-[#C4B5FD] md:text-2xl"
          >
            Digital Experience Designer
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#A8A1B2] md:text-base"
          >
            I don't just build websites — I craft digital experiences that
            make people stop, explore, and remember.
          </motion.p>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            {/* VIEW WORK */}
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6D28D9] hover:shadow-[0_0_35px_rgba(124,58,237,0.4)]"
            >
              View My Work

              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            {/* LET'S TALK */}
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-[#8B5CF6]/40 bg-[#100C18]/50 px-7 py-3.5 text-sm font-semibold text-[#F8F5FF] backdrop-blur-md transition-all duration-300 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
            >
              Let's Talk

              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* ================= SOCIAL ICONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: "easeOut",
            }}
            className="mt-9 flex items-center justify-center gap-4"
          >
            {/* GITHUB */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#100C18]/80 text-[#8F849F] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD] hover:shadow-[0_0_22px_rgba(139,92,246,0.25)]"
            >
              <FiGithub size={18} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#100C18]/80 text-[#8F849F] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD] hover:shadow-[0_0_22px_rgba(139,92,246,0.25)]"
            >
              <FiLinkedin size={18} />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:ashrafafifa8@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#100C18]/80 text-[#8F849F] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD] hover:shadow-[0_0_22px_rgba(139,92,246,0.25)]"
            >
              <FiMail size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#7C708D]">
          Scroll
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-[#7C3AED] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;