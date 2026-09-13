import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#080610] text-[#F8F5FF]"
    >
      {/* ================= GLOW ================= */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#6D28D9]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 top-10 h-[350px] w-[350px] rounded-full bg-[#7C3AED]/10 blur-[140px]" />

      {/* ================= TOP BORDER ================= */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-black tracking-tight">
              AFIFA{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
                ASHRAF
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#A8A1B2]">
              Digital Experience Designer focused on creating modern,
              meaningful and memorable digital experiences.
            </p>

            <p className="mt-5 text-sm font-medium text-[#C4B5FD]">
              Let's create something remarkable together.
            </p>

            {/* SOCIALS */}
            <div className="mt-7 flex items-center gap-3">

              {/* GITHUB */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8B5CF6]/25 bg-[#100C18]/70 text-[#8F849F] transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
              >
                <FiGithub size={17} />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8B5CF6]/25 bg-[#100C18]/70 text-[#8F849F] transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
              >
                <FiLinkedin size={17} />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:ashrafafifa8@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8B5CF6]/25 bg-[#100C18]/70 text-[#8F849F] transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
              >
                <FiMail size={17} />
              </a>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C4B5FD]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#home"
                className="w-fit text-sm text-[#8F849F] transition-colors duration-300 hover:text-[#C4B5FD]"
              >
                Home
              </a>

              <a
                href="#about"
                className="w-fit text-sm text-[#8F849F] transition-colors duration-300 hover:text-[#C4B5FD]"
              >
                About
              </a>

              <a
                href="#projects"
                className="w-fit text-sm text-[#8F849F] transition-colors duration-300 hover:text-[#C4B5FD]"
              >
                Projects
              </a>

              <a
                href="#tools"
                className="w-fit text-sm text-[#8F849F] transition-colors duration-300 hover:text-[#C4B5FD]"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="w-fit text-sm text-[#8F849F] transition-colors duration-300 hover:text-[#C4B5FD]"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-[#8F849F] transition-colors duration-300 hover:text-[#C4B5FD]"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C4B5FD]">
              Get In Touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#8F849F]">
              Have a project in mind?
              <br />
              I'd love to hear about it.
            </p>

            <a
              href="mailto:ashrafafifa8@gmail.com"
              className="group mt-5 flex w-fit items-center gap-2 text-sm font-medium text-[#F8F5FF]"
            >
              Start a conversation
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="flex items-center gap-1.5 text-xs text-[#71677C]">
            © {currentYear} Afifa Ashraf.
            Made with
            <FiHeart className="text-[#8B5CF6]" size={12} />
            and creativity.
          </p>

          <p className="text-xs tracking-wide text-[#71677C]">
            Designed & Built by Afifa Ashraf
          </p>

          {/* BACK TO TOP */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#8B5CF6]/25 bg-[#100C18]/70 text-[#A8A1B2] transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD]"
          >
            <FiArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <motion.a
        href="https://wa.me/923000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#7C3AED]
          text-white
          shadow-[0_0_30px_rgba(124,58,237,0.4)]
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#8B5CF6]
          hover:shadow-[0_0_40px_rgba(139,92,246,0.55)]
        "
      >
        <FaWhatsapp size={25} />
      </motion.a>
    </footer>
  );
};

export default Footer;