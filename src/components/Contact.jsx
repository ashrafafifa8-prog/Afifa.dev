import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    text: "ashrafafifa8@gmail.com",
    href: "mailto:ashrafafifa8@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    text: "+92 300 0000000",
    href: "tel:+923000000000",
  },
  {
    icon: FiMapPin,
    title: "Location",
    text: "Pakistan",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#080610] px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#7C3AED]/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#A855F7]/10 blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#8B5CF6]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A78BFA]">
              Get In Touch
            </span>

            <span className="h-px w-8 bg-[#8B5CF6]" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-[#E9D5FF] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#8F8799] md:text-base"
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Let's create something amazing together.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B7BFF]">
                Contact Details
              </span>

              <h3 className="mt-3 text-2xl font-bold text-[#F8F5FF]">
                Let's talk about your{" "}
                <span className="text-[#BFA2FF]">next idea.</span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#817889]">
                I'm always open to discussing new projects, creative ideas,
                opportunities or collaborations.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-[#2E243A] bg-[#0D0915]/80 p-4 backdrop-blur-xl transition-all duration-300 hover:border-[#8B5CF6]/50 hover:bg-[#120C1C] hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)]"
                  >
                    {/* Animated Icon */}
                    <motion.div
                      whileHover={{
                        rotate: -8,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4A3470] bg-gradient-to-br from-[#211332] to-[#100B17] text-[#C4B5FD] shadow-[0_8px_25px_rgba(124,58,237,0.15)]"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="absolute inset-0 rounded-xl bg-[#8B5CF6]/10 blur-md"
                      />

                      <Icon size={20} className="relative z-10" />
                    </motion.div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#655B70]">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-sm text-[#C2BACB] transition-colors duration-300 group-hover:text-[#D8B4FE]">
                        {item.text}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="ml-auto text-[#51475D] transition-colors group-hover:text-[#A78BFA]"
                    >
                      <FiArrowUpRight size={18} />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#51485C]">
                Follow me
              </span>

              <div className="h-px w-8 bg-[#302340]" />

              <motion.a
                href="#"
                whileHover={{ y: -4, scale: 1.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#302340] bg-[#0D0915] text-[#9B91A5] transition-all duration-300 hover:border-[#8B5CF6]/60 hover:text-[#C4B5FD] hover:shadow-[0_8px_25px_rgba(139,92,246,0.2)]"
              >
                <FiGithub size={18} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -4, scale: 1.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#302340] bg-[#0D0915] text-[#9B91A5] transition-all duration-300 hover:border-[#8B5CF6]/60 hover:text-[#C4B5FD] hover:shadow-[0_8px_25px_rgba(139,92,246,0.2)]"
              >
                <FiLinkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Glow Border */}
            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-[#8B5CF6]/50 via-[#8B5CF6]/10 to-[#C4B5FD]/30 opacity-70 blur-sm" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#332744] bg-[#0D0915]/95 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-9">

              {/* Decorative Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#8B5CF6]/10"
              />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#8B5CF6]/10 blur-[70px]"
              />

              <div className="relative z-10">

                <div className="mb-7">
                  <h3 className="text-2xl font-bold text-[#F8F5FF]">
                    Send me a message
                  </h3>

                  <p className="mt-2 text-sm text-[#756C80]">
                    Fill out the form and I'll get back to you soon.
                  </p>
                </div>

                <form className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#80758C]">
                        Your Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#302340] bg-[#100B17] px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#4F4758] transition-all duration-300 focus:border-[#8B5CF6]/70 focus:bg-[#130D1C] focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#80758C]">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="hello@example.com"
                        className="w-full rounded-xl border border-[#302340] bg-[#100B17] px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#4F4758] transition-all duration-300 focus:border-[#8B5CF6]/70 focus:bg-[#130D1C] focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#80758C]">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Let's work together"
                      className="w-full rounded-xl border border-[#302340] bg-[#100B17] px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#4F4758] transition-all duration-300 focus:border-[#8B5CF6]/70 focus:bg-[#130D1C] focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#80758C]">
                      Message
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Tell me a little about your project..."
                      className="w-full resize-none rounded-xl border border-[#302340] bg-[#100B17] px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#4F4758] transition-all duration-300 focus:border-[#8B5CF6]/70 focus:bg-[#130D1C] focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                    />
                  </div>

                  {/* Button */}
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.25)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(139,92,246,0.35)]"
                  >
                    <span className="relative z-10">
                      Send Message
                    </span>

                    <motion.span
                      whileHover={{ x: 5, rotate: -10 }}
                      className="relative z-10"
                    >
                      <FiSend size={17} />
                    </motion.span>

                    {/* Button Shine */}
                    <motion.div
                      animate={{
                        x: ["-120%", "120%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-20 -skew-x-12 bg-white/10"
                    />
                  </motion.button>

                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#51485C]">
            Let's build something beautiful together ✦
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;