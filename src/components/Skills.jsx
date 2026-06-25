import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

const categories = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "UI Design basics"],
  },
  {
    title: "Backend & Data",
    items: ["SQL", "Databases", "C# / .NET basics", "Java Spring Boot basics", "PHP basics"],
  },
  { title: "Tools", items: ["Git / GitHub"] },
];

const ease = [0.22, 1, 0.36, 1];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-white/40 bg-white/35 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Capabilities" title="Skills" subtitle="Focused on the fundamentals needed for junior web work, databases and practical delivery." />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.05, ease }}
              className="rounded-[1.5rem] border border-white/75 bg-white/60 p-6 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.07)] backdrop-blur-xl md:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900">{cat.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200/70 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
