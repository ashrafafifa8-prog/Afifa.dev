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

  const socialLinks = [
    {
      icon: <FiGithub size={18} />,
      href: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={18} />,
      href: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FiMail size={18} />,
      href: "mailto:ashrafafifa8@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#080610] text-[#F8F5FF]"
    >
      {/* ================= GLOW ================= */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#6D28D9]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[320px] w-[320px] rounded-full bg-[#7C3AED]/10 blur-[140px]" />

      {/* TOP LINE */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />

      {/* ================= MAIN ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* ================= BRAND ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-black tracking-tight">
              AFIFA{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
                ASHRAF
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#A8A1B2]">
              Digital Experience Designer creating modern, engaging and
              meaningful digital experiences.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-[#8B5CF6]/25
                    bg-[#100C18]/70
                    text-[#8F849F]
                    backdrop-blur-md
                    transition-all duration-300
                    hover:border-[#A78BFA]
                    hover:bg-[#8B5CF6]/10
                    hover:text-[#C4B5FD]
                    hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]
                  "
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= QUICK LINKS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C4B5FD]">
              Explore
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-y-3">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Tools", "#tools"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="
                    w-fit text-sm text-[#8F849F]
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-[#C4B5FD]
                  "
                >
                  {name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ================= CONTACT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C4B5FD]">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#8F849F]">
              Have an idea or project in mind?
              <br />
              Let's create something remarkable.
            </p>

            <a
              href="mailto:ashrafafifa8@gmail.com"
              className="
                group mt-5 inline-flex items-center gap-2
                rounded-full
                border border-[#8B5CF6]/30
                bg-[#100C18]/70
                px-5 py-2.5
                text-sm font-medium
                text-[#C4B5FD]
                transition-all duration-300
                hover:border-[#A78BFA]
                hover:bg-[#8B5CF6]/10
                hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
              "
            >
              Start a conversation

              <FiArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </a>
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-[#71677C]">
            © {currentYear} Afifa Ashraf.
            <span>Made with</span>
            <FiHeart
              size={12}
              className="text-[#8B5CF6]"
            />
            <span>and creativity.</span>
          </p>

          <p className="text-xs text-[#71677C]">
            Designed & Built by Afifa Ashraf
          </p>

          {/* BACK TO TOP */}
          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            aria-label="Back to top"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-[#8B5CF6]/25
              bg-[#100C18]/70
              text-[#A8A1B2]
              transition-all duration-300
              hover:border-[#A78BFA]
              hover:bg-[#8B5CF6]/10
              hover:text-[#C4B5FD]
            "
          >
            <FiArrowUp size={15} />
          </motion.a>
        </div>
      </div>

      {/* ================================================= */}
      {/* FLOATING SOCIAL BUTTONS - RIGHT SIDE */}
      {/* ================================================= */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

        {/* WHATSAPP */}
        <motion.a
          href="https://wa.me/923067683141"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -3 }}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-[#8B5CF6]/30
            bg-[#100C18]/90
            text-[#C4B5FD]
            shadow-[0_0_25px_rgba(124,58,237,0.25)]
            backdrop-blur-md
            transition-all duration-300
            hover:border-[#A78BFA]
            hover:bg-[#7C3AED]
            hover:text-white
            hover:shadow-[0_0_35px_rgba(124,58,237,0.5)]
          "
        >
          <FaWhatsapp size={22} />
        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.1, y: -3 }}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-[#8B5CF6]/30
            bg-[#100C18]/90
            text-[#C4B5FD]
            shadow-[0_0_25px_rgba(124,58,237,0.2)]
            backdrop-blur-md
            transition-all duration-300
            hover:border-[#A78BFA]
            hover:bg-[#7C3AED]
            hover:text-white
            hover:shadow-[0_0_35px_rgba(124,58,237,0.5)]
          "
        >
          <FiLinkedin size={19} />
        </motion.a>

        {/* GITHUB */}
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, y: -3 }}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-[#8B5CF6]/30
            bg-[#100C18]/90
            text-[#C4B5FD]
            shadow-[0_0_25px_rgba(124,58,237,0.2)]
            backdrop-blur-md
            transition-all duration-300
            hover:border-[#A78BFA]
            hover:bg-[#7C3AED]
            hover:text-white
            hover:shadow-[0_0_35px_rgba(124,58,237,0.5)]
          "
        >
          <FiGithub size={19} />
        </motion.a>

      </div>
    </footer>
  );
};

export default Footer;