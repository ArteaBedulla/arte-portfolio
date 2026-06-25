import { motion } from "framer-motion";
import {
  GraduationCap,
  LayoutDashboard,
  Palette,
  BookMarked,
} from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

const highlights = [
  { title: "Computer Science Graduate", icon: GraduationCap },
  { title: "Master's Student", icon: BookMarked },
  { title: "Web Development", icon: LayoutDashboard },
  { title: "UI/UX Interest", icon: Palette },
  { title: "Project-Based Learning", icon: Palette },
];

const ease = [0.22, 1, 0.36, 1];

export default function ProfessionalProfile() {
  return (
    <section
      id="professional-profile"
      className="scroll-mt-24 border-b border-white/40 bg-white/40 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Overview"
          title="Professional Profile"
          subtitle="Computer Science graduate from the Faculty of Natural Sciences, University of Tirana, and Scientific Master's student at the same faculty. Practical experience from academic and portfolio projects in web development, databases and backend technologies."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/75 bg-white/65 p-6 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl transition-shadow hover:shadow-[0_8px_32px_-8px_rgba(88,72,120,0.12)]"
              >
                <span className="inline-flex rounded-xl bg-gradient-to-br from-[#f0eaff] to-[#eaf4e6] p-2.5 text-slate-700 ring-1 ring-white/80">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
