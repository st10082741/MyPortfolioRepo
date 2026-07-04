import Image from "next/image";

// Props are the inputs this component receives from the parent page.
// Think of this as a contract for what a project card needs to render.
type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  // `image` expects a path from /public, for example: "/projects/lingochat.jpg"
  // If you add a new image file to public/projects, pass that path from page.tsx.
  image?: string;
  href?: string; // Optional: some projects may not have a public link yet.
};

// Reusable card component for one project.
// The Technology page maps over project data and renders this component for each item.
export default function ProjectCard({
  title,
  description,
  tech,
  image,
  href,
}: ProjectCardProps) {
  return (
    // Main card container with light/dark styles and hover animation.
    <article className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-white/90 p-6 shadow-md shadow-cyan-100/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-200/60 dark:border-cyan-300/20 dark:bg-slate-900/75 dark:shadow-none">
      {/* Project screenshot shown at the top of each card */}
      {image ? (
        // This block only renders when `image` exists.
        // If no image is passed, the card still works without a screenshot.
        <div className="mb-4 overflow-hidden rounded-xl border border-cyan-200/80 shadow-sm shadow-cyan-100/60 dark:border-cyan-300/20 dark:shadow-none">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={1200}
            height={700}
            // object-cover keeps image nicely cropped in a fixed card area.
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      {/* Project title */}
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      {/* Short project summary */}
      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </p>

      {/* Tech badges:
          We loop through the `tech` array and create one pill per technology. */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            // React needs a stable key for each list item.
            key={item}
            className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800 dark:border-cyan-300/30 dark:bg-cyan-500/10 dark:text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-2">
        {/* Conditional rendering:
            If a link exists, show the CTA button.
            If not, show a "coming soon" message. */}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-cyan-500 hover:to-emerald-500 dark:from-cyan-500 dark:to-teal-500"
          >
            View Project
          </a>
        ) : (
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Project link coming soon.
          </p>
        )}
      </div>
    </article>
  );
}
