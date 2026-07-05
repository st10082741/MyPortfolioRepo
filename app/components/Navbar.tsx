"use client";

// This component shows the top navigation and the EN/PT toggle.
import Link from "next/link";
import { translations, useLanguage } from "./LanguageProvider";

export default function Navbar() {
  // Read the current language from the provider and update it when the user clicks EN or PT.
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-white">
          {t.home}
        </Link>

        <div className="flex items-center gap-5 text-sm text-gray-300">
          <Link href="/technology" className="hover:text-white">
            {t.projectsSkills}
          </Link>
          <Link href="/focus" className="hover:text-white">
            {t.focus}
          </Link>
          {/* Use a direct home-page anchor so the browser jumps quickly to the contact section. */}
          <a href="/#contact" className="hover:text-white">
            {t.contact}
          </a>
          {/* This small toggle lets visitors switch between English and Portuguese instantly. */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-1 text-xs font-semibold ${language === "en" ? "bg-white text-slate-950" : "text-gray-300"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("pt")}
              className={`rounded-full px-2 py-1 text-xs font-semibold ${language === "pt" ? "bg-white text-slate-950" : "text-gray-300"}`}
            >
              PT
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
