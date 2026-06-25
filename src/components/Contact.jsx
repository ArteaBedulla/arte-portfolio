import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import DownloadCVButton from "./DownloadCVButton.jsx";
import SectionTitle from "./SectionTitle.jsx";

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(187,168,232,0.12)_0%,transparent_50%),linear-gradient(180deg,#faf8ff_0%,#ffffff_40%,#f5faf5_100%)] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          align="center"
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Open to internships and junior web development opportunities focused on web applications, databases and digital technology."
          className="max-w-2xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto mt-12 flex max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <a
            href="mailto:arteabedulla75@gmail.com"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#e8dff8]/90 bg-gradient-to-r from-[#efe8fb] via-[#e8dcf7] to-[#dfd0f2] px-8 py-3 text-sm font-semibold text-slate-700 shadow-[0_4px_22px_-6px_rgba(139,114,196,0.28)] transition hover:-translate-y-0.5 hover:from-[#ebe3fa] hover:via-[#e2d5f5] hover:to-[#d9c8ef]"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://github.com/ArteaBedulla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#e4daf5]/95 bg-[#faf8ff]/85 px-8 py-3 text-sm font-semibold text-slate-600 shadow-[0_2px_16px_-4px_rgba(139,114,196,0.12)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#d8cbf0] hover:bg-[#f7f3fc]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <DownloadCVButton className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#e8dff6]/90 bg-white/75 px-8 py-3 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-[#ddd0f0] hover:bg-[#fcfaff] disabled:hover:translate-y-0" />
        </motion.div>
      </div>
    </section>
  );
}
