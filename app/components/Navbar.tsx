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
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="font-semibold tracking-wide text-white">
          {t.home}
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
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
          {/* This compact dropdown keeps the language switch tidy on mobile. */}
          <label className="sr-only" htmlFor="language-select">
            Language
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(event) => setLanguage(event.target.value as "en" | "pt")}
            className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs font-semibold text-white outline-none"
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
