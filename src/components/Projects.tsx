import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectDescription from "./ProjectDescription";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  SiTypescript,
  SiTailwindcss,
  SiReactrouter,
  SiSupabase,
  SiVite,
  SiVercel,
  SiMysql,
  SiExpo,
  SiPostgresql,
  SiGooglemaps,
} from "react-icons/si";

const techIcons: Record<string, ReactNode> = {
  React: <FaReact className="text-cyan-400" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "React Native": <FaReact className="text-cyan-400" />,

  TypeScript: <SiTypescript className="text-blue-400" />,

  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,

  "React Router": <SiReactrouter className="text-red-500" />,

  Supabase: <SiSupabase className="text-green-400" />,

  Vercel: <SiVercel className="text-white" />,

  Vite: <SiVite className="text-violet-400" />,

  Java: <FaJava className="text-orange-500" />,

  MySQL: <SiMysql className="text-blue-500" />,

  Expo: <SiExpo className="text-white" />,

  PostgreSQL: <SiPostgresql className="text-blue-400" />,

  "Google Maps": <SiGooglemaps className="text-red-400" />,

  Web3Forms: <FaEnvelope className="text-cyan-400" />,
};

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="scroll-mt-24 bg-slate-900 py-28 px-6"
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
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Here are some of the projects I've built using modern technologies
            for web, desktop, and mobile development.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 transition hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Image Slider */}
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-60"
              >
                {project.images?.map((image: string, i: number) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt={`${project.title}-${i}`}
                      className="h-full w-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <ProjectDescription text={project.description} />

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      <span className="text-lg">{techIcons[tech]}</span>

                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 transition hover:border-cyan-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
