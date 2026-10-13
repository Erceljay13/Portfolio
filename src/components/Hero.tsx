import { motion } from "framer-motion";
import profile from "../assets/me.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 px-5 pb-14 pt-28 sm:px-8 md:px-10 md:pb-20 md:pt-24"
    >
      {/* Static background glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Main content */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* PROFILE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative order-1 flex flex-col items-center justify-center md:order-2"
        >
          <div className="relative">
            {/* Static photo glow */}
            <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Responsive photo */}
            <div className="relative h-52 w-52 overflow-hidden rounded-full border-[3px] border-cyan-400 bg-white shadow-2xl shadow-cyan-500/20 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96">
              <img
                src={profile}
                alt="Ercel Jay Antonis"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Photo badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative -mt-4 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium text-slate-200 shadow-lg sm:text-sm"
          >
            React & React Native
          </motion.span>
        </motion.div>

        {/* INTRODUCTION */}
        <div className="order-2 flex min-w-0 flex-col items-center text-center md:order-1 md:items-start md:text-left">
          {/* Availability badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Freelance · Remote Work
          </motion.span>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ercel Jay
            <br />
            <span className="bg-gradient-to-r from-white via-white to-cyan-400 bg-clip-text text-transparent">
              Antonis
            </span>
          </motion.h1>

          {/* Job title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-base font-medium leading-relaxed text-cyan-300 sm:text-lg lg:text-xl"
          >
            Frontend Developer · React Native Developer
          </motion.h2>

          {/* About */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
          >
            I build responsive websites and mobile applications using React,
            TypeScript, and modern technologies. I enjoy creating clean,
            user-friendly interfaces and solving real-world problems.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-7 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 sm:text-base"
            >
              View Projects
            </a>

            <a
              href="/Ercel Jay Antonis_Resume.pdf"
              download="Ercel Jay Antonis_Resume.pdf"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 sm:text-base"
            >
              Download CV
            </a>
          </motion.div>

          {/* SPECIALIZATION BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:justify-start"
          >
            {[
              "Web Development",
              "Mobile Development",
              "E-commerce Operations",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
