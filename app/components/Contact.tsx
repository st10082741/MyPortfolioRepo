export default function Contact() {
  return (
    // CHANGED: Contact is now a polished CTA block aligned with homepage branding.
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-lg shadow-black/20">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Ready To Collaborate
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Open to opportunities where I can contribute to reliable,
          high-impact products and business-focused systems.
        </p>

        {/* CHANGED: Added direct navigation CTA to your full technology profile. */}
        <a
          href="/technology"
          className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-amber-300 to-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
        >
          View Full Technology Profile
        </a>
      </div>
    </section>
  );
}
