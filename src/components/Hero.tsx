import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/me.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-28 pb-16 md:pt-6"
    >
      {/* Static Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* PHOTO — first on mobile, right column on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 flex flex-col items-center md:order-2"
        >
          {/* Static Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <div className="relative">
            <div className="overflow-hidden rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20">
              <img
                src={profile}
                alt="Ercel Jay Antonis"
                className="h-90 w-90 object-cover"
              />
            </div>
          </div>

          {/* Tag chip overlapping the bottom of the photo */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative -mt-5 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-sm font-medium text-slate-300 shadow-lg"
          >
            React & React Native
          </motion.span>
        </motion.div>

        {/* TEXT — second on mobile, left column on desktop */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-400"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            Freelance · Remote Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl"
          >
            Ercel Jay
            <br />
            Antonis
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-xl text-slate-300 sm:text-2xl"
          >
            Frontend Developer • React Native Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 max-w-xl leading-8 text-slate-400"
          >
            I build responsive websites and mobile applications using React,
            TypeScript, and modern technologies. I enjoy creating clean,
            user-friendly interfaces and solving real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold transition hover:scale-105 hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="/Ercel Jay Antonis_Resume.pdf"
              download="Ercel Jay Antonis_Resume.pdf"
              className="rounded-xl border border-cyan-500 px-7 py-3 font-semibold transition hover:bg-cyan-500/10 hover:scale-105"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex gap-6 text-3xl"
          >
            <a
              href="https://github.com/Erceljay13"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/erceljay.antonis.3"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaFacebook />
            </a>

            <a
              href="mailto:erceljayantonis7@gmail.com"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
