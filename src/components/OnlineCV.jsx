import { motion } from "framer-motion";
import DownloadCVButton from "./DownloadCVButton.jsx";
import SectionTitle from "./SectionTitle.jsx";

const ease = [0.22, 1, 0.36, 1];

export default function OnlineCV() {
  return (
    <section
      id="online-cv"
      className="scroll-mt-24 border-b border-white/40 bg-white/45 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Resume"
          title="Online CV"
          subtitle="A structured overview you can skim quickly — education, skills, interests and more."
        />

        <div className="mt-12 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="rounded-[1.5rem] border border-white/75 bg-white/65 p-8 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-10"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900">A. Personal Profile</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Computer Science graduate and Scientific Master&apos;s student with experience in academic
              and personal full-stack projects. Interested in web development, software architecture,
              backend systems, frontend interfaces, databases and secure digital systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05, ease }}
            className="rounded-[1.5rem] border border-white/75 bg-white/65 p-8 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-10"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900">B. Education</h3>
            <ul className="mt-6 space-y-6">
              <li className="border-l-2 border-[#b8a6e0]/80 pl-5">
                <p className="font-semibold text-slate-900">Scientific Master&apos;s Degree in Computer Science</p>
                <p className="text-slate-600">Faculty of Natural Sciences</p>
                <p className="mt-1 text-sm font-medium text-[#6b9b7a]">Currently pursuing</p>
              </li>
              <li className="border-l-2 border-[#9bbf90]/90 pl-5">
                <p className="font-semibold text-slate-900">Bachelor&apos;s Degree in Computer Science</p>
                <p className="text-slate-600">Faculty of Natural Sciences</p>
                <p className="mt-1 text-sm font-medium text-slate-500">Completed</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease }}
            className="rounded-[1.5rem] border border-white/75 bg-white/65 p-8 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-10"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900">C. Technical Skills</h3>
            <dl className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
              <div>
                <dt className="font-semibold text-slate-800">Frontend:</dt>
                <dd className="mt-1">
                  React, Vite, JavaScript, Tailwind CSS, HTML, CSS, Framer Motion
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-800">Backend:</dt>
                <dd className="mt-1">
                  C#, ASP.NET Core, Java, Spring Boot, REST APIs, MVC Architecture, Authentication
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-800">Database:</dt>
                <dd className="mt-1">
                  SQL Server, MySQL, Entity Framework Core, JPA/Hibernate, ERD Design, SQL Queries
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-800">Tools:</dt>
                <dd className="mt-1">Git, GitHub, VS Code, Cursor AI, Postman, SSMS, Vercel</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-800">Concepts:</dt>
                <dd className="mt-1">
                  Enterprise Architecture, RBAC, UML, 3-Tier Architecture, Data Warehouse Basics
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease }}
            className="rounded-[1.5rem] border border-white/75 bg-white/65 p-8 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-10"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900">D. Professional Interests</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Full-stack web development",
                "React frontend development",
                "C# backend development",
                "Backend APIs",
                "Database-driven applications",
                "Enterprise systems",
                "UI/UX-focused digital products",
                "Secure web applications",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease }}
            className="rounded-[1.5rem] border border-white/75 bg-white/65 p-8 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-10"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900">E. Soft Skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Problem solving",
                "Analytical thinking",
                "Attention to detail",
                "Continuous learning",
                "Creativity",
                "Communication",
                "Project organization",
                "Adaptability",
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-slate-200/75 bg-white/85 px-4 py-1.5 text-sm font-medium text-slate-700"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14, ease }}
            className="rounded-[1.5rem] border border-white/75 bg-white/65 p-8 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl md:p-10"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900">F. Languages</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>Albanian — Native</li>
              <li>English — Professional / Academic</li>
            </ul>
          </motion.div>

          <div className="flex justify-center pt-2">
            <DownloadCVButton className="inline-flex items-center gap-2 rounded-full border border-[#e8dff8]/90 bg-gradient-to-r from-[#efe8fb] via-[#e8dcf7] to-[#dfd0f2] px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-[0_4px_22px_-6px_rgba(139,114,196,0.28)] transition hover:-translate-y-0.5 hover:from-[#ebe3fa] hover:via-[#e2d5f5] hover:to-[#d9c8ef] disabled:hover:translate-y-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
