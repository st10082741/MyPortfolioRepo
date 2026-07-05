import ProjectCard from "../components/ProjectCard";

// Data-first approach:
// Keep projects in an array, then map over them in JSX.
// This makes it easy to add/edit projects without touching layout code.
const projects = [
  {
    title: "LingoChat (Real-time Translation Chat App)",
    description:
      "A chat app concept focused on real-time translation and language detection to support multilingual conversations.",
    tech: ["Next.js", "TypeScript", "APIs", "UI/UX"],
    image: "/projects/lingochat.jpg",
    href: "https://www.youtube.com/watch?v=g4qtV2MkSrs&t=248s",
  },
  {
    title: "International Payment system(banking app)",
    description:
      "The system implements secure customer registration and authentication with protection against brute-force attacks. It supports local and international payments with multi-currency selection. The frontend is built using React, ensuring a responsive UI, while all communications are secured via HTTPS to protect data in transit.",
    tech: ["kotlin", "Android", "SQLite", "firebase"],
    image: "/projects/internationalPayment.jpg",
    href: "https://www.youtube.com/watch?v=VVqGxbS9MRM",
  },
  {
    title: "Timetap (Scheduling App)",
    description:
      "TimeTap is a simple and efficient time management app that helps users plan tasks, set reminders, and stay organized. It enables better productivity by allowing users to manage their schedules, prioritize activities, and meet deadlines with ease.",
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    image: "/projects/TimetapPic.jpg",
    href: "https://www.youtube.com/watch?v=LbB8C7H4UAc",
  },

  {
    title: "Kipido (Glass repairs service Business website)",
    description:
      "Kipido is a business website developed for Kipido Glass Repairs to showcase services, provide contact and quote requests, and strengthen the company’s online presence. The site was built using the MVC architectural pattern, ensuring a clean, maintainable structure and readiness for future expansion.",
    tech: ["C#/MVC", "CSS", "HTML"],
    image: "/projects/KipidoPic.png",
    href: "https://kipidowebapp20250811114617-grepejakgchaceh5.australiacentral-01.azurewebsites.net/",
  },
  // CHANGED: Added Materfamilia to keep this route aligned with the main projects pages.
  {
    title: "Website da Materfamilia",
    description:
      "A Materfamilia e uma empresa social dedicada ao empoderamento de agregados familiares chefiados por mulheres (FHH16), por meio de intervencoes juridicas, financeiras e de coaching. O objetivo e restaurar a estabilidade financeira, ampliar o acesso a justica e reduzir a vulnerabilidade a violencia baseada no genero.",
    tech: ["C#", "ASP.NET Core", "CSS"],
    image: "/projects/mater.png",
    href: "https://materfamilia-hpdvhschf6frb5cy.canadacentral-01.azurewebsites.net/",
  },
];

// Group skills by category so they can be rendered in separate cards.
const skillSections = [
  {
    title: "Programming Languages",
    items: ["C#", "Javascript", "HTML", "CSS", "Java", "TypeScript"],
  },
  {
    title: "Databases",
    items: ["SQL", "MySQL", "Oracle"],
  },
  {
    title: "Framework & Libraries",
    items: [
      "ASP.NET MVC",
      "ASP.NET Core",
      "Entity Framework",
      "WPF",
      "Windows Forms",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Product and Delivery",
    items: [
      "Full stack development",
      "Requirements gathering and solutions design",
      "End-to-end project lifecycle delivery",
      "Deployment, hosting and maintenance",
      "Client-focused solution building",
    ],
  },
];

// Separate tools list for quick pill-style rendering.
const tools = [
  "VS Code",
  "Visual Studio",
  "GitHub",
  "Vercel",
  "Postman",
  "SSMS",
  "Oracle Tools",
  "MySQL Workbench",
];

export default function TechnologyPage() {
  return (
    // Main page background + text color with light/dark support.
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-cyan-50/40 to-sky-100 px-6 py-20 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-6xl">
        {/* HERO SECTION:
            Top summary area to communicate your profile quickly. */}
        <section className="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-white via-amber-50/60 to-cyan-50/60 p-8 shadow-xl shadow-amber-100/40 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
            Technology Profile
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Building reliable products from idea to delivery
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
            I design and build full-stack solutions with a focus on clean
            architecture, maintainability, and measurable business outcomes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/focus"
              className="rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.02] dark:shadow-none"
            >
              See My Focus
            </a>
          </div>

          {/* Quick stat cards for visual credibility and summary. */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-cyan-200 bg-cyan-50/80 p-4 shadow-sm shadow-cyan-100 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none">
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Core languages and platforms
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4 shadow-sm shadow-amber-100 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none">
              <p className="text-2xl font-bold">8+</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Engineering tools in daily use
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-sm shadow-emerald-100 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none">
              <p className="text-2xl font-bold">End-to-End</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Delivery from requirements to support
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
                Featured Projects
              </h2>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                Practical work that demonstrates architecture, execution, and
                product thinking.
              </p>
            </div>
          </div>

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
        </section>

        {/* TECHNICAL SKILLS SECTION:
            Nested map:
            1) map skill categories
            2) map items inside each category */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Organized by capability areas from my CV.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {skillSections.map((section) => (
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
          <h2 className="text-3xl font-semibold tracking-tight">Tools I Use</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {tools.map((tool) => (
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
