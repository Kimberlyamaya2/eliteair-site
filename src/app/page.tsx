export default function HomePage() {
  return (
    <div className="bg-[var(--bg)]">
           {/* HERO */}
      <section
        className="relative text-white"
        style={{
          backgroundColor: "var(--navy)",
          backgroundImage:
            "radial-gradient(circle at top, rgba(200,154,60,0.18), transparent 60%)",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          {/* left copy */}
          <div className="space-y-6 md:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              <span>Residential &amp; Commercial</span>
              <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
              <span>Same-Day Service</span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight md:text-4xl text-white">
              Check out our seasonal
              <br />
              specials and save!
            </h1>

            <p className="max-w-md text-sm text-slate-100">
              Install, repair, and tune-ups by certified Elite Air technicians.
              Flexible scheduling, honest pricing, and friendly service for
              every home and business.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-full bg-[var(--red)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.4)] transition hover:brightness-110">
                View Offers
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/15">
                Schedule Now
              </button>
            </div>

            <p className="text-xs text-slate-200">
              Emergency service available · Licensed &amp; insured · Locally
              owned
            </p>
          </div>

          {/* right visual placeholder */}
          <div className="md:w-1/2">
            <div className="relative h-56 w-full rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-sm" />
          </div>
        </div>
      </section>


      {/* green promo strip */}
      <section className="bg-[var(--green)] text-sm text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              Special
            </span>
            <span className="font-medium">
              $375 → $99 Drain Cleaning Special
            </span>
          </div>
          <button className="text-xs font-semibold underline underline-offset-4">
            See Offer ›
          </button>
        </div>
      </section>

      {/* comfort band */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--navy)]">
          We Deliver Comfort
        </h2>

        <div className="rounded-2xl border border-[var(--gold)]/60 bg-[var(--surface)] px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
          <h3 className="text-sm font-semibold text-[var(--navy)]">
            Making Total Home Comfort Comfortably Affordable
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            High-efficiency systems with expert installation and transparent
            pricing. Ask about maintenance plans, memberships, and flexible
            financing options.
          </p>
          <button className="mt-3 text-sm font-semibold text-[var(--navy)] hover:underline">
            Learn More ›
          </button>
        </div>
      </section>
    </div>
  );
}
