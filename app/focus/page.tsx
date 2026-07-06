"use client";

// This page shows the focus content in the currently selected language.
import { translations, useLanguage } from "../components/LanguageProvider";

export default function VenturesPage() {
  // The focus page also uses the same language system for its copy.
  const { language } = useLanguage();
  const t = translations[language].focus;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-20 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-16 top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/55 p-8 shadow-2xl shadow-cyan-950/40 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {t.heading}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            {t.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/projects-skills"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="mailto:bachisumbo@gmail.com?subject=Portfolio%20Inquiry"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-cyan-300/60 hover:bg-cyan-400/10"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t.currentFocus}
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.cards.map((venture) => (
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
          <h2 className="text-2xl font-semibold">{t.outcomesHeading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {t.outcomesDescription}
          </p>
        </section>
      </div>
    </main>
  );
}
