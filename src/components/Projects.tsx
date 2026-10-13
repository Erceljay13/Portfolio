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
    <section
      id="projects"
      className="relative scroll-mt-0 bg-slate-900 px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10 lg:pt-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Here are some of the projects I've built using modern technologies
            for web, desktop, and mobile development.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.1, 0.3),
              }}
              whileHover={{ y: -5 }}
              className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 sm:rounded-3xl"
            >
              {/* PROJECT IMAGE SLIDER */}
              <div className="relative overflow-hidden bg-slate-950">
                {project.images?.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={project.images.length > 1}
                    pagination={
                      project.images.length > 1 ? { clickable: true } : false
                    }
                    className="h-52 sm:h-60 lg:h-64"
                  >
                    {project.images.map((image: string, i: number) => (
                      <SwiperSlide key={i}>
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${i + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="flex h-52 items-center justify-center bg-slate-950 text-sm text-slate-400 sm:h-60 lg:h-64">
                    Project Preview Coming Soon
                  </div>
                )}
              </div>

              {/* PROJECT DETAILS */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                  {project.title}
                </h3>

                <ProjectDescription text={project.description} />

                {/* TECHNOLOGY BADGES */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs font-medium text-cyan-200 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:text-sm"
                    >
                      {techIcons[tech] && (
                        <span className="text-base">{techIcons[tech]}</span>
                      )}

                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                {(project.github && project.github !== "#") ||
                (project.demo && project.demo !== "#") ? (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-400 sm:flex-none"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300 sm:flex-none"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
