import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-slate-950 py-28 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            I'm always interested in new opportunities, freelance projects, and
            collaborations. Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-400"
          >
            <FaEnvelope className="text-3xl text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-slate-400">your@email.com</p>
            </div>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-400"
          >
            <FaGithub className="text-3xl text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">GitHub</h3>
              <p className="text-slate-400">github.com/yourusername</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-400"
          >
            <FaLinkedin className="text-3xl text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">LinkedIn</h3>
              <p className="text-slate-400">Connect with me</p>
            </div>
          </a>

          <div className="flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <FaMapMarkerAlt className="text-3xl text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">Location</h3>
              <p className="text-slate-400">Aurora, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
