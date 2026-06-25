import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DownloadCVButton from "./DownloadCVButton.jsx";

const techLabels = ["React", "JavaScript", "HTML", "CSS", "SQL", "Backend APIs", "Databases"];

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/40 bg-[radial-gradient(ellipse_120%_80%_at_0%_-20%,rgba(187,168,232,0.12)_0%,transparent_55%),radial-gradient(ellipse_100%_60%_at_100%_0%,rgba(176,205,150,0.1)_0%,transparent_50%),linear-gradient(165deg,#faf8ff_0%,#ffffff_50%,#f4faf4_100%)] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm">
            Portfolio &amp; CV
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Computer Science Master&apos;s Student | Junior Web Developer
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-slate-700 md:text-xl">
            I build clean web applications using React, JavaScript, SQL databases, and backend technologies.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-[1.0625rem]">
            I am interested in digital technology, data-driven solutions, and marketing technology platforms.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#e8dff8]/90 bg-gradient-to-r from-[#efe8fb] via-[#e8dcf7] to-[#dfd0f2] px-7 py-3 text-sm font-semibold text-slate-700 shadow-[0_4px_22px_-6px_rgba(139,114,196,0.28)] transition hover:-translate-y-0.5 hover:from-[#ebe3fa] hover:via-[#e2d5f5] hover:to-[#d9c8ef]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#e8dff6]/90 bg-white/75 px-7 py-3 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-[#ddd0f0] hover:bg-[#fcfaff]"
            >
              Contact Me
            </a>
            <DownloadCVButton className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#e8dff6]/90 bg-white/75 px-7 py-3 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-[#ddd0f0] hover:bg-[#fcfaff] disabled:hover:translate-y-0" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#e8ddff]/60 via-transparent to-[#dce9d4]/50 blur-2xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/50 p-1 shadow-[0_2px_28px_-4px_rgba(88,72,120,0.1)] backdrop-blur-xl">
            <div className="relative bg-gradient-to-br from-slate-900/[0.03] via-[#f8f6ff] to-[#f0f7ef] p-6 sm:p-8">
              <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Focus areas
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Web", "React and JavaScript interfaces"],
                    ["Data", "SQL and database-driven features"],
                    ["Backend", "C#/.NET and Java Spring Boot basics"],
                    ["Digital", "Clean UI and practical product work"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-xl border border-slate-200/70 bg-white/80 p-4">
                      <p className="text-sm font-semibold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {techLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/90 bg-white/85 px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-[0_2px_12px_-2px_rgba(72,62,98,0.08)] backdrop-blur-sm sm:text-xs"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
