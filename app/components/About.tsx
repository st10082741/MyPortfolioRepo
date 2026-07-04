export default function About() {
  return (
    // CHANGED: Added reusable section id for navigation/anchors.
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          About
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Engineering with business context
        </h2>
        <p className="mt-6 leading-relaxed text-slate-300">
          I am a technology professional and entrepreneur who builds and
          operates systems that support real-world business and organisational
          needs. My work sits at the intersection of software engineering,
          business operations, and multi-sector problem solving.
        </p>
        <p className="mt-4 leading-relaxed text-slate-300">
          I focus on practical outcomes, translating technical solutions into
          clear, actionable value for stakeholders and guiding initiatives from
          concept through execution.
        </p>
      </div>
    </section>
  );
}
