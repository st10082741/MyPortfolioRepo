import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    // CHANGED: Modular homepage wrapper with shared background styling.
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      {/* CHANGED: Decorative gradient orbs to create depth across all sections. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute right-10 top-[28rem] h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      {/* CHANGED: Reusable component composition (Experience intentionally excluded). */}
      <div className="relative">
        <Hero />
        <About />
        <Skills />

        <Education />
        {/* The contact section has its own id so the navbar can jump directly to it. */}
        <Contact />
      </div>
    </main>
  );
}
