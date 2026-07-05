export default function Hero() {
  return (
    // CHANGED: New premium hero with stronger hierarchy and CTA actions.
    <section className="px-6 pb-10 pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/60 p-8 shadow-2xl shadow-cyan-950/40 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Technology Professional
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Victor Sumbo
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              Full-stack .NET developer focused on building dependable systems
              from concept to delivery.
            </p>

            {/* CHANGED: Clear call-to-action buttons for primary navigation paths. */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/technology"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Explore Technology
              </a>
              <a
                href="/focus"
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-cyan-300/60 hover:bg-cyan-400/10"
              >
                View Focus
              </a>
              {/* Download CV from the public folder so it works on the deployed site. */}
              <a
                href="/Victor-Sumbo-CV.pdf"
                download
                className="rounded-xl border border-amber-300/40 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-400/20"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src="/projects/Profile.JPG"
              alt="Victor Sumbo"
              className="h-48 w-48 rounded-full border-4 border-cyan-400/40 object-cover shadow-2xl shadow-cyan-950/40 lg:h-56 lg:w-56"
            />
          </div>
        </div>

        {/* CHANGED: Branded highlight metrics for quick professional credibility. */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-cyan-300/25 bg-cyan-500/10 p-4">
            <p className="text-2xl font-bold">1+</p>
            <p className="mt-1 text-sm text-cyan-100/90">
              Years across multiple sectors
            </p>
          </article>
          <article className="rounded-xl border border-emerald-300/25 bg-emerald-500/10 p-4">
            <p className="text-2xl font-bold">End-to-End</p>
            <p className="mt-1 text-sm text-emerald-100/90">
              Delivery from requirements to support
            </p>
          </article>
          <article className="rounded-xl border border-amber-300/25 bg-amber-500/10 p-4">
            <p className="text-2xl font-bold">Full Stack</p>
            <p className="mt-1 text-sm text-amber-100/90">
              Frontend, backend, data, and integration
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
