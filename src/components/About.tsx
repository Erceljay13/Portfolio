import { FaGraduationCap, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900 py-28 px-6"
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
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold">Get to know me</h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            I'm passionate about creating modern applications and continuously
            improving my skills through real-world projects and professional
            experience.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-3xl font-bold">Who am I?</h3>

            <p className="mb-6 leading-8 text-slate-400">
              I'm an Information Technology graduate with experience in Frontend
              Development, React Native, and Virtual Assistance. I enjoy
              building responsive applications, solving technical challenges,
              and learning modern technologies.
            </p>

            <p className="leading-8 text-slate-400">
              During my internship, I gained hands-on experience in
              cybersecurity monitoring, while my work as a Virtual Assistant
              strengthened my communication, organization, and problem-solving
              skills.
            </p>
          </motion.div>

          {/* Right */}
          <div className="grid gap-6">
            {[
              {
                icon: <FaGraduationCap />,
                title: "Education",
                text: "BS Information Technology",
              },
              {
                icon: <FaLaptopCode />,
                title: "Development",
                text: "React • React Native • TypeScript",
              },
              {
                icon: <FaUserTie />,
                title: "Experience",
                text: "Frontend Development • Virtual Assistant • Cybersecurity Internship",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl text-cyan-400">
                    {card.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">{card.title}</h4>

                    <p className="text-slate-400">{card.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
