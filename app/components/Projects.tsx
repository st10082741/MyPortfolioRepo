"use client";

import ProjectCard from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";
import { getLocalizedProjects } from "../data/projects";

export default function Projects() {
  const { language } = useLanguage();
  // CHANGED: Reuse a single shared source for project cards across pages.
  const projects = getLocalizedProjects(language);

  return (
    // CHANGED: Replaced placeholder projects with real project card grid.
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-2 text-slate-300">
          Practical work that demonstrates architecture, delivery, and product
          thinking.
        </p>

        {/* CHANGED: Projects now reuse ProjectCard for consistency and scalability. */}
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
