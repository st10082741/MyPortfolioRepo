import ProjectCard from "./ProjectCard";

// Project data used by the homepage cards. These are the real project entries you wanted to showcase.
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
    title: "International Payment system (Banking app)",
    description:
      "Secure registration and authentication, local and international payments, and multi-currency support in a user-focused mobile experience.",
    tech: ["Kotlin", "Android", "SQLite", "Firebase"],
    image: "/projects/internationalPayment.jpg",
    href: "https://www.youtube.com/watch?v=VVqGxbS9MRM",
  },
  {
    title: "TimeTap (Scheduling App)",
    description:
      "A scheduling solution for task planning, reminders, and structured appointment workflows.",
    tech: ["React", "TypeScript", "SQL"],
    image: "/projects/TimetapPic.jpg",
    href: "https://www.youtube.com/watch?v=LbB8C7H4UAc",
  },
  {
    title: "Kipido (Glass Repair Service Website)",
    description:
      "Business website for service visibility, quote requests, and customer communication with MVC architecture.",
    tech: ["C# / MVC", "HTML", "CSS"],
    image: "/projects/KipidoPic.png",
    href: "https://kipidowebapp20250811114617-grepejakgchaceh5.australiacentral-01.azurewebsites.net/",
  },
  {
    title: "Dykana Website",
    description:
      "DK is a strategic partner that supports mining projects from concession acquisition to mine closure, delivering expertise throughout every stage of the mining value chain.",
    tech: ["C#", "ASP.NET Core", "Azure", "SQL"],
    image: "/projects/DykanaPic.png",
    href: "https://dykanawebapp20250808122525-gqenasejgmhqfgga.canadacentral-01.azurewebsites.net/",
  },

  {
    // CHANGED (PT): Projeto real da Materfamilia com resumo em portugues.
    title: "Website da Materfamilia",
    description:
      "A Materfamilia e uma empresa social dedicada ao empoderamento de agregados familiares chefiados por mulheres (FHH16), por meio de intervencoes juridicas, financeiras e de coaching. O objetivo e restaurar a estabilidade financeira, ampliar o acesso a justica e reduzir a vulnerabilidade a violencia baseada no genero.",
    // CHANGED: Stack real usada neste projeto.
    tech: ["C#", "ASP.NET Core", "CSS"],
    // CHANGED: Imagem local confirmada em public/projects/mater.png.
    image: "/projects/mater.png",
    // CHANGED: Link real do website em producao.
    href: "https://materfamilia-hpdvhschf6frb5cy.canadacentral-01.azurewebsites.net/",
  },
];

export default function Projects() {
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
