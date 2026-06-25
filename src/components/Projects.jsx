import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Shield, Users, Workflow } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

import planoraTasks from "../assets/landing/1.png";
import planoraMemory from "../assets/landing/2.png";
import planoraMoments from "../assets/landing/3.png";
import planoraFocus from "../assets/landing/4.png";

import helixLanding from "../assets/helixcore/6.png";
import helixDashboard from "../assets/helixcore/7.png";
import helixLogin from "../assets/helixcore/8.png";
import helixClientPortal from "../assets/helixcore/9.png";

const planoraTech = ["React", "JavaScript", "HTML", "CSS/Tailwind", "SQL Database", "Backend API"];

const planoraFeatures = [
  "User authentication",
  "Task and category management",
  "Focus and reading sessions",
  "Memory Wall",
  "Responsive dashboard interface",
];

const planoraGallery = [
  { img: planoraTasks, label: "Tasks & Categories", description: "Task management with a clear, practical layout." },
  { img: planoraMemory, label: "Memory Wall", description: "A space for saving meaningful memories and notes." },
  { img: planoraMoments, label: "Moments", description: "Personal moments and reflections inside the app." },
  { img: planoraFocus, label: "Focus & Reading", description: "Focus sessions and reading progress in a simple dashboard." },
];

const helixTech = ["React", "JavaScript", "Java Spring Boot", "SQL Server", "REST APIs"];

const helixFeatures = [
  "Role-based access",
  "Client and case management",
  "DNA sample tracking",
  "Analysis and profile management",
  "Invoice and payment modules",
  "Professional dashboard interface",
];

const helixCards = [
  { icon: Shield, title: "Protected Access", text: "Access control for staff and client roles." },
  { icon: Workflow, title: "Lab Workflow", text: "Structured handling of cases, samples and analysis." },
  { icon: Users, title: "Client Management", text: "Clean screens for client records and case data." },
  { icon: BarChart3, title: "Dashboard View", text: "A practical overview for laboratory operations." },
];

const helixGallery = [
  { img: helixLanding, label: "Landing", description: "A straightforward landing page for the system." },
  { img: helixDashboard, label: "Dashboard", description: "Dashboard for cases, samples, invoices and payments." },
  { img: helixLogin, label: "Login", description: "Simple protected login screen for the system." },
  { img: helixClientPortal, label: "Client Portal", description: "Client area for viewing personal records and updates." },
];

const ease = [0.22, 1, 0.36, 1];

function GalleryCard({ item, index }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease }}
      className="overflow-hidden rounded-[1.25rem] border border-white/78 bg-white/60 shadow-[0_2px_24px_-4px_rgba(88,72,120,0.08)] backdrop-blur-xl"
    >
      <div className="bg-gradient-to-b from-slate-50/90 to-white/70 p-2 sm:p-3">
        <img src={item.img} alt={item.label} className="w-full rounded-xl object-cover object-top ring-1 ring-slate-900/[0.05] sm:rounded-[1rem]" />
      </div>
      <figcaption className="border-t border-white/55 px-5 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</span>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
      </figcaption>
    </motion.figure>
  );
}

function ProjectBlock({ title, subtitle, description, tech, features, cards, gallery, accent }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
      className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/70 p-6 shadow-[0_4px_40px_-12px_rgba(88,72,120,0.12)] backdrop-blur-xl md:p-10"
    >
      <div className="flex flex-col gap-3">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/90 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
          <span className={`h-2 w-2 rounded-full ${accent}`} aria-hidden />
          Featured
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h3>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{subtitle}</p>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-[1.0625rem]">{description}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-full border border-slate-200/75 bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {features.map((item) => (
          <span key={item} className="rounded-full border border-[#e8ddff]/90 bg-gradient-to-r from-[#f5f0ff]/90 to-[#edf6ea]/80 px-3 py-1 text-[11px] font-semibold text-slate-700 sm:text-xs">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`#${title.toLowerCase().includes("planora") ? "planora-demo" : "helixcore-demo"}`}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#e8dff8]/90 bg-gradient-to-r from-[#efe8fb] via-[#e8dcf7] to-[#dfd0f2] px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_4px_22px_-6px_rgba(139,114,196,0.24)] transition hover:-translate-y-0.5 hover:from-[#ebe3fa] hover:via-[#e2d5f5] hover:to-[#d9c8ef]"
        >
          {title.toLowerCase().includes("planora") ? "View Project" : "Case Study"}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {cards ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-[1.15rem] border border-white/78 bg-white/60 p-5 shadow-sm">
                <span className="inline-flex rounded-xl bg-gradient-to-br from-[#f0eaff] to-[#eaf4e6] p-2.5 text-slate-700 ring-1 ring-cyan-100/35">
                  <Icon className="h-4 w-4" />
                </span>
                <h4 className="mt-3 text-sm font-semibold text-slate-900">{card.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{card.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {gallery.map((item, index) => (
          <GalleryCard key={item.label} item={item} index={index} />
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-white/40 bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(187,168,232,0.1)_0%,transparent_55%),linear-gradient(180deg,#faf8ff_0%,#ffffff_55%,#f6faf6_100%)] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Work" title="Featured Projects" subtitle="Two selected projects that show practical web development, databases and structured product work." />

        <ProjectBlock
          title="Planora — Productivity &amp; Memory Wall Web App"
          subtitle="Selected project 1"
          description="Planora is a productivity web application created to help users organize tasks, focus sessions, reading progress, quotes, and personal memories. The project includes authentication, task management, a memory wall, dashboard-style pages, and a responsive interface."
          tech={planoraTech}
          features={planoraFeatures}
          cards={null}
          gallery={planoraGallery}
          accent="bg-[#8b72c4]"
        />

        <div className="mt-12">
          <ProjectBlock
            title="HelixCore — Enterprise DNA Laboratory Management System"
            subtitle="Selected project 2"
            description="HelixCore is an enterprise-style academic project designed for managing the workflow of a DNA laboratory. The system includes modules for clients, cases, DNA samples, laboratory analysis, genetic profiles, invoices, payments, and role-based access."
            tech={helixTech}
            features={helixFeatures}
            cards={helixCards}
            gallery={helixGallery}
            accent="bg-cyan-600"
          />
        </div>
      </div>
    </section>
  );
}
