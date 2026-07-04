const ventures = [
  {
    name: "Web Design & Product Direction",
    focus: "Crafting clear, user-centered digital experiences",
    summary:
      "Bringing ideas to life through thoughtful interface design, strong product thinking, and polished digital experiences that feel modern and intuitive.",
    stage: "Active",
  },
  {
    name: "Frontend Development",
    focus: "Turning concepts into responsive, high-quality interfaces",
    summary:
      "Building modern frontend experiences with React, Next.js, and TypeScript to create fast, reliable, and engaging user journeys.",
    stage: "Active",
  },
  {
    name: "Backend Development",
    focus: "Building dependable systems behind the scenes",
    summary:
      "Designing robust backend solutions with strong architecture, secure logic, and scalable services that support real business needs.",
    stage: "Active",
  },
];

export default function VenturesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-20 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-16 top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/55 p-8 shadow-2xl shadow-cyan-950/40 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Where strategy, design, and technology meet to create real impact
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            This is where ideas turn into thoughtful products, reliable systems,
            and practical solutions built with purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/technology"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Technology Profile
            </a>
            <a
              href="mailto:bachisumbo@gmail.com?subject=Portfolio%20Inquiry"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-cyan-300/60 hover:bg-cyan-400/10"
            >
              Email Me
            </a>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-semibold tracking-tight">
            Current Focus
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ventures.map((venture) => (
              <article
                key={venture.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.08]"
              >
                <p className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  {venture.stage}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{venture.name}</h3>
                <p className="mt-2 text-sm font-medium text-cyan-200">
                  {venture.focus}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {venture.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-lg shadow-black/25">
          <h2 className="text-2xl font-semibold">Aligned with outcomes</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Every venture is structured around clear delivery goals, measurable
            impact, and maintainable technical foundations.
          </p>
        </section>
      </div>
    </main>
  );
}
