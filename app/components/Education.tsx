"use client";

import { translations, useLanguage } from "./LanguageProvider";

export default function Education() {
  // Education items are mapped from the translation data for each language.
  const { language } = useLanguage();
  const t = translations[language].education;

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">{t.eyebrow}</h2>
        <p className="mt-2 text-slate-300">{t.heading}</p>

        <div className="mt-6 grid gap-4">
          {t.items.map((item) => (
            <article
              key={item.qualification}
              className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-900/70 p-6 transition hover:border-cyan-300/50 hover:bg-slate-900"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {item.qualification}
                  </h3>
                  <p className="mt-1 text-slate-300">{item.institution}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-medium text-cyan-300">
                    {item.period}
                  </p>
                  <span className="mt-2 inline-flex rounded-full border border-emerald-300/35 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {item.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
