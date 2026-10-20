"use client";
import Image from "next/image";
import { useLanguage, translations } from "./LanguageProvider";

// Technology: TypeScript + React (TSX) + Next.js
// Purpose: Reusable portfolio project card that supports a public
// application link and an optional video demonstration link.

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];

  // Path to a screenshot inside the /public directory.
  image?: string;

  // Public-facing application or project URL.
  href?: string;

  // Optional demonstration video for restricted features,
  // such as an administrative dashboard.
  demoUrl?: string;
};

// Renders an individual portfolio project.
// Only projects with demoUrl will display the second button.
export default function ProjectCard({
  title,
  description,
  tech,
  image,
  href,
  demoUrl,
}: ProjectCardProps) {

  // Read the currently selected website language.
const { language } = useLanguage();

// Get the translated text for the project buttons.
const buttonText = translations[language].technology;
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-white/90 p-6 shadow-md shadow-cyan-100/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-200/60 dark:border-cyan-300/20 dark:bg-slate-900/75 dark:shadow-none">

      {/* Project screenshot */}
      {image ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-cyan-200/80 shadow-sm shadow-cyan-100/60 dark:border-cyan-300/20 dark:shadow-none">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={1200}
            height={700}
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      {/* Project title */}
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      {/* Project description */}
      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </p>

      {/* Technology badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800 dark:border-cyan-300/30 dark:bg-cyan-500/10 dark:text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Project links:
          The live application remains the primary action.
          The demo button appears only when demoUrl exists. */}
      <div className="mt-auto flex flex-wrap gap-3 pt-6">

        {/* Main application link */}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-cyan-500 hover:to-emerald-500 dark:from-cyan-500 dark:to-teal-500"
          >
            {buttonText.viewProject}
          </a>
        ) : null}

        {/* Optional admin dashboard demonstration */}
        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-500/10"
          >
            {buttonText.watchAdminDemo}
          </a>
        ) : null}

        {/* Fallback when no links are available */}
        {!href && !demoUrl ? (
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Project link coming soon.
          </p>
        ) : null}
      </div>
    </article>
  );
}
