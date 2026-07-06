"use client";

// This page shows the projects and skills content in the currently selected language.
import ProjectCard from "../components/ProjectCard";
import { translations, useLanguage } from "../components/LanguageProvider";
import { getLocalizedProjects } from "../data/projects";

export default function ProjectsSkillsPage() {
  // The projects and skills page reads all of its text from the shared translations.
  const { language } = useLanguage();
  const t = translations[language].technology;
  const projects = getLocalizedProjects(language);

  return (
    // Main page background + text color with light/dark support.
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-cyan-50/40 to-sky-100 px-6 py-20 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-6xl">
        {/* HERO SECTION:
            Top summary area to communicate your profile quickly. */}
        <section className="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-white via-amber-50/60 to-cyan-50/60 p-8 shadow-xl shadow-amber-100/40 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {t.heading}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
            {t.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/focus"
              className="rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.02] dark:shadow-none"
            >
              {t.cta}
            </a>
          </div>

          {/* Quick stat cards for visual credibility and summary. */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-cyan-200 bg-cyan-50/80 p-4 shadow-sm shadow-cyan-100 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none">
              <p className="text-2xl font-bold">{t.stats[0].value}</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.stats[0].label}
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4 shadow-sm shadow-amber-100 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none">
              <p className="text-2xl font-bold">{t.stats[1].value}</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.stats[1].label}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-sm shadow-emerald-100 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none">
              <p className="text-2xl font-bold">{t.stats[2].value}</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.stats[2].label}
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION:
            Uses `projects.map()` to generate cards dynamically. */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                {t.projectsHeading}
              </h2>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                {t.projectsCopy}
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION:
            Nested map:
            1) map skill categories
            2) map items inside each category */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t.skillsHeading}
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {t.skillsCopy}
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {t.skillSections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-md shadow-sky-100/50 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none"
              >
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* TOOLS SECTION:
            Pills/chips style generated from `tools.map()`. */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t.toolsHeading}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm shadow-amber-100/70 dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:shadow-none"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
