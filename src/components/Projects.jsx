import { motion } from "framer-motion";
import { BarChart3, Shield, Users, Workflow } from "lucide-react";
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
      className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
    >
      <div className="bg-white p-3 sm:p-4">
        <img
          src={item.img}
          alt={item.label}
          className="h-[260px] w-full rounded-xl border border-slate-100 object-contain shadow-sm bg-white"
        />
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
      className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span className={`h-2 w-2 rounded-full ${accent}`} aria-hidden />
            Featured
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h3>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{subtitle}</p>
          <p className="max-w-4xl text-base leading-relaxed text-slate-600 md:text-[1.0625rem]">{description}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-1 flex flex-wrap gap-2">
            {features.map((item) => (
              <span key={item} className="rounded-full border border-slate-100 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm sm:text-xs">
                {item}
              </span>
            ))}
          </div>

          {cards ? (
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                    <span className="inline-flex rounded-xl bg-white p-2.5 text-slate-700 shadow-sm ring-1 ring-slate-100">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h4 className="mt-3 text-sm font-semibold text-slate-900">{card.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{card.text}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {gallery.map((item, index) => (
            <GalleryCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-white/40 bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(187,168,232,0.1)_0%,transparent_55%),linear-gradient(180deg,#faf8ff_0%,#ffffff_55%,#f6faf6_100%)] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Work" title="Featured Projects" subtitle="Two selected academic and portfolio projects focused on web development, databases, and structured digital systems." />

        <ProjectBlock
          title="Planora — Productivity &amp; Memory Wall Web App"
          subtitle="SELECTED PROJECT 1"
          description="Planora is a productivity web application designed to help users organize daily tasks, focus sessions, reading progress, quotes, and personal memories. The project includes user authentication, task management, a memory wall, dashboard-style pages, and a responsive interface."
          tech={planoraTech}
          features={planoraFeatures}
          cards={null}
          gallery={planoraGallery}
          accent="bg-[#8b72c4]"
        />

        <div className="mt-12">
          <ProjectBlock
            title="HelixCore — Enterprise DNA Laboratory Management System"
            subtitle="SELECTED PROJECT 2"
            description="HelixCore is an enterprise-style academic project designed to manage the workflow of a DNA laboratory. The system includes modules for clients, cases, DNA samples, laboratory analysis, genetic profiles, invoices, payments, and role-based access."
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
