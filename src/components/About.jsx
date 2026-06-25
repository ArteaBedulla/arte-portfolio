import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-white/40 bg-[linear-gradient(180deg,#ffffff_0%,#faf8ff_50%,#f8fcf8_100%)] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="About" title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-[1.75rem] border border-white/75 bg-white/60 p-8 shadow-[0_2px_28px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-10"
        >
          <div className="prose prose-slate max-w-none text-base leading-[1.8] text-slate-600">
            <p>
              I am a Computer Science graduate from the Faculty of Natural Sciences, University of Tirana,
              and I am currently pursuing a Scientific Master&apos;s degree in Computer Science at the same
              faculty.
            </p>
            <p className="mt-6">
              I have practical experience from academic and portfolio projects where I worked with web
              development, databases, and backend technologies. My main focus is building clean and
              structured web applications using React, JavaScript, HTML, CSS, SQL databases, and backend
              frameworks such as C#/.NET and Java Spring Boot.
            </p>
            <p className="mt-6">
              I am especially interested in digital technology, data-driven solutions, and learning how
              technology is used in real business environments. I am motivated to keep improving my
              technical and communication skills through practical work and team collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
