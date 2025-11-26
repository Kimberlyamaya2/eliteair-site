export default function HomePage() {
  return (
    <div className="bg-[var(--bg)]">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-dark)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center">
          {/* left copy */}
          <div className="space-y-6 md:w-1/2">
            <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em]">
              Seasonal Specials · Same-Day Service
            </div>

            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Check out our seasonal
              <br />
              specials and save!
            </h1>

            <p className="max-w-md text-sm text-blue-100">
              Install, repair, and tune-ups by certified Elite Air technicians.
              Flexible scheduling, honest pricing, and friendly service.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-full bg-[var(--red)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110">
                View Offers
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/15">
                Schedule Now
              </button>
            </div>

            <p className="text-xs text-blue-100/80">
              Emergency service available · Licensed & insured
            </p>
          </div>

          {/* right visual placeholder */}
          <div className="md:w-1/2">
            <div className="h-52 w-full rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-sm" />
          </div>
        </div>
      </section>

      {/* green promo strip */}
      <section className="bg-[var(--green)] text-sm text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
              Special
            </span>
            <span>$375 → $99 Drain Cleaning Special</span>
          </div>
          <button className="text-xs font-semibold underline underline-offset-4">
            See Offer ›
          </button>
        </div>
      </section>

      {/* comfort band */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">
          We Deliver Comfort
        </h2>

        <div className="rounded-2xl border border-red-300 bg-white px-6 py-5 shadow-sm">
          <h3 className="text-sm font-semibold">
            Making Total Home Comfort Comfortably Affordable
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            High-efficiency systems with expert installation and transparent
            pricing. Ask about maintenance plans and financing options.
          </p>
          <button className="mt-3 text-sm font-semibold text-[var(--navy)] hover:underline">
            Learn More ›
          </button>
        </div>
      </section>
    </div>
  );
}
