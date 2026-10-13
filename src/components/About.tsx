import { FaGraduationCap, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const aboutCards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    text: "Bachelor of Science in Information Technology",
  },
  {
    icon: <FaLaptopCode />,
    title: "Development",
    text: "React • React Native • TypeScript",
  },
  {
    icon: <FaUserTie />,
    title: "Experience",
    text: "Web Development • Virtual Assistance • Cybersecurity",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-slate-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Static background accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/[0.04] to-transparent" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            About Me
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get to <span className="text-cyan-400">Know Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Passionate about building modern applications, learning new
            technologies, and turning ideas into useful digital experiences.
          </p>
        </motion.div>

        {/* ABOUT CONTENT */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* LEFT: INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                My Background
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              A Developer Who Loves{" "}
              <span className="text-cyan-400">Creating & Learning.</span>
            </h3>

            <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
              I'm an{" "}
              <span className="font-medium text-slate-200">
                Information Technology graduate
              </span>{" "}
              with experience in frontend development, React Native, and virtual
              assistance. I enjoy building responsive applications, solving
              technical challenges, and exploring modern technologies.
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">
              During my internship, I gained hands-on experience in
              cybersecurity monitoring. My work as an e-commerce Virtual
              Assistant has also strengthened my communication, organization,
              attention to detail, and problem-solving skills.
            </p>
          </motion.div>

          {/* RIGHT: INFORMATION CARDS */}
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-slate-900 sm:p-6 ${
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-xl text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400/15 sm:h-14 sm:w-14 sm:text-2xl">
                    {card.icon}
                  </div>

                  {/* DETAILS */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      {card.title}
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-slate-400">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
