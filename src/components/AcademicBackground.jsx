import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

const topics = [
  "Web Development",
  "Database Design",
  "UML Modeling",
  "Use Case Diagrams",
  "Sequence Diagrams",
  "MVC in Java",
  "Java Spring Boot Basics",
  "Database Design",
  "SQL Queries",
  "Structured Problem Solving",
  "Team Collaboration",
];

const ease = [0.22, 1, 0.36, 1];

export default function AcademicBackground() {
  return (
    <section
      id="academic-background"
      className="scroll-mt-24 border-b border-white/40 bg-white/40 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Studies"
          title="Academic & Technical Background"
          subtitle="Academic topics that support practical web development, database work, structured systems and problem solving."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {topics.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.35, ease }}
              className="rounded-full border border-white/85 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
