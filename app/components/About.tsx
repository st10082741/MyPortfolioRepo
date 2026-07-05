"use client";

import { translations, useLanguage } from "./LanguageProvider";

export default function About() {
  // This section reads its text from the translation object.
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {t.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.heading}</h2>
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-6 leading-relaxed text-slate-300">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
