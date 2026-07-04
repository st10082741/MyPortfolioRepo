export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Let&apos;s build something meaningful
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Open to opportunities, collaborations, and conversations around
            product thinking, reliable systems, and thoughtful digital delivery.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-left">
            <h3 className="text-lg font-semibold">Direct contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <span className="font-medium text-white">Name:</span> Victor Sumbo
              </li>
              <li>
                <span className="font-medium text-white">Phone:</span>{" "}
                <a
                  href="tel:+27842842365"
                  className="text-cyan-300 transition hover:text-cyan-200"
                >
                  +27 84 284 2365
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Email:</span>{" "}
                <a
                  href="mailto:bachisumbo@gmail.com"
                  className="text-cyan-300 transition hover:text-cyan-200"
                >
                  bachisumbo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-6 text-left">
            <h3 className="text-lg font-semibold">Prefer a quick reply?</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              I&apos;m happy to chat over email or WhatsApp. If you&apos;re reaching
              out, a few details help a lot: your name, project context, and timeline.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:bachisumbo@gmail.com?subject=Portfolio%20Inquiry"
                className="rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Email Me
              </a>
              <a
                href="https://wa.me/27842842365?text=Hello%20Victor%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect."
                className="rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:scale-[1.02]"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
