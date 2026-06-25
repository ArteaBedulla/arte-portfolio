import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

const items = [
  {
    title: "Scientific Master’s Degree in Computer Science",
    place: "Faculty of Natural Sciences, University of Tirana",
    status: "Currently pursuing",
    description:
      "Currently pursuing a Scientific Master’s degree in Computer Science, with focus on software systems, databases, web applications, and practical academic projects.",
    accent: "lavender",
  },
  {
    title: "Bachelor’s Degree in Computer Science",
    place: "Faculty of Natural Sciences, University of Tirana",
    status: "Completed",
    description:
      "Completed undergraduate studies in Computer Science, gaining foundations in programming, algorithms, databases, web development, software engineering, and application design.",
    accent: "matcha",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-b border-white/40 bg-[linear-gradient(180deg,#faf8ff_0%,#ffffff_100%)] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="ACADEMIC PATH" title="Education" />

        <div className="relative mt-14 space-y-0">
          <div
            className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-gradient-to-b from-[#c4b5e8]/80 via-[#b8d4b0]/70 to-transparent md:left-8"
            aria-hidden
          />

          <ul className="relative space-y-12">
            {items.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="relative flex gap-6 md:gap-10"
              >
                <div
                  className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white shadow-md md:h-11 md:w-11 ${
                    item.accent === "lavender"
                      ? "bg-gradient-to-br from-[#e8ddff] to-[#ddd0f5]"
                      : "bg-gradient-to-br from-[#dce9d4] to-[#c5dcc0]"
                  }`}
                >
                  <GraduationCap className="h-4 w-4 text-slate-800 md:h-5 md:w-5" />
                </div>
                <div className="min-w-0 flex-1 rounded-[1.5rem] border border-white/75 bg-white/65 p-6 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-8">
                  <h3 className="font-display text-lg font-semibold text-slate-900 md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{item.place}</p>
                  <p
                    className={`mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${
                      item.accent === "lavender"
                        ? "bg-[#f0eaff] text-[#5c4d7a]"
                        : "bg-[#edf5ea] text-[#3d5c45]"
                    }`}
                  >
                    {item.status}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
