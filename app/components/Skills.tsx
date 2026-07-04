const skills = [
  ".NET / C#",
  "React / Next.js",
  "TypeScript",
  "SQL",
  "HTML / CSS",
  "API Integration",
  "Entity Framework",
  "System Design",
];

export default function Skills() {
  return (
    // CHANGED: Skills section now matches homepage visual system.
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20">
        <h2 className="text-3xl font-semibold tracking-tight">Core Skills</h2>
        <p className="mt-3 text-slate-300">
          Technologies and engineering capabilities used to deliver reliable
          solutions.
        </p>

        {/* CHANGED: Replaced plain list with reusable styled skill pills. */}
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
