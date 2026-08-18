import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "React Native", icon: <FaReact />, color: "text-cyan-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Supabase", icon: <SiSupabase />, color: "text-green-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-400" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    ],
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-950 py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">My Tech Stack</h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            These are the technologies and tools I use to build responsive,
            modern web and mobile applications.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                perspective={1200}
                glareEnable
                glareMaxOpacity={0.18}
                scale={1.04}
                transitionSpeed={1800}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl border border-slate-700 bg-white/5 p-8 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <h3 className="mb-8 text-2xl font-bold text-white">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
                      >
                        <span
                          className={`text-lg transition-transform duration-300 ${skill.color}`}
                        >
                          {skill.icon}
                        </span>

                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
