import { useForm, ValidationError } from "@formspree/react";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";


function Contact() {
  // Replace YOUR_FORM_ID with your actual Formspree ID.
  const [state, handleSubmit, reset] = useForm("xqpedvnd");

  const inputStyle =
    "w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      {/* Static glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's <span className="text-cyan-400">Work Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project in mind, a job opportunity, or just want to connect?
            Send me a message and I'll get back to you as soon as I can.
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          {state.succeeded ? (
            <div
              className="flex flex-col items-center py-10 text-center"
              role="status"
            >
              <FaCheckCircle className="mb-5 text-5xl text-emerald-400" />

              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                Thank you for reaching out! Your message has been submitted
                successfully. I'll get back to you as soon as possible.
              </p>

              <button
                type="button"
                onClick={reset}
                className="mt-7 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={inputStyle}
                />

                <ValidationError
                  field="name"
                  prefix="Name"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputStyle}
                />

                <ValidationError
                  field="email"
                  prefix="Email"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or question..."
                  className={`${inputStyle} resize-y`}
                />

                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              {/* General errors */}
              <ValidationError
                errors={state.errors}
                className="text-sm text-red-400"
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >
                <FaPaperPlane />

                {state.submitting ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-5 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-white">Connect With Me</h3>

          <p className="mt-2 text-sm text-slate-400">
            Find me on social media or reach out directly.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/Erceljay13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ercel-jay-antonis-634283250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/erceljay.antonis.3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaFacebook />
            </a>

            {/* Email */}
            <a
              href="mailto:erceljayantonis7@gmail.com"
              aria-label="Send me an email"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
