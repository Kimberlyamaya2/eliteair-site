export default function HomePage() {
  const services = [
    {
      title: "Heating Repair",
      text: "Fast diagnostics and dependable repairs to restore warmth and peace of mind.",
      icon: "🔥",
    },
    {
      title: "AC Installation",
      text: "Energy-efficient cooling systems installed with clean workmanship and honest guidance.",
      icon: "❄️",
    },
    {
      title: "Maintenance Plans",
      text: "Seasonal tune-ups that help prevent breakdowns and keep your system running strong.",
      icon: "🛠️",
    },
  ];

  const trustPoints = [
    "Licensed & insured",
    "Residential & commercial",
    "Same-day service available",
    "Locally owned",
  ];

  return (
    <main
      className="min-h-screen bg-[var(--bg)] text-slate-900"
      style={{
        ["--bg" as string]: "#f4eee4",
        ["--surface" as string]: "#fbf7f1",
        ["--navy" as string]: "#0d2137",
        ["--navy-2" as string]: "#132842",
        ["--gold" as string]: "#b6872b",
        ["--gold-soft" as string]: "#ecd9ac",
        ["--red" as string]: "#9b2d20",
        ["--green" as string]: "#12402c",
      }}
    >
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(90deg, #071731 0%, #0a1b34 38%, #132842 72%, #0e2239 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,135,43,0.12),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-12 md:py-14">
          <div className="max-w-xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-black/20 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-soft)]">
              <span>Residential &amp; Commercial</span>
              <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
              <span>Same-Day Service</span>
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--gold-soft)] md:text-xs">
              Elite Air Heating &amp; Cooling Company
            </p>

            <h1 className="max-w-lg text-4xl font-semibold leading-[1.08] text-white md:text-5xl">
              Check out our seasonal
              <span className="block">specials and save!</span>
            </h1>

            <p className="max-w-md text-sm leading-7 text-slate-200 md:text-base">
              Install, repair, and tune-ups by certified Elite Air technicians.
              Flexible scheduling, honest pricing, and friendly service for every
              home and business.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button className="rounded-full bg-[var(--red)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:brightness-110">
                View Offers
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Schedule Now
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-200">
              {trustPoints.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[420px] rounded-[28px] border border-white/10 bg-white/6 p-4 shadow-[0_22px_55px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-5">
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-soft)]">
                      Trusted comfort care
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white md:text-[28px]">
                      A company you can trust.
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--gold)]/30 bg-[var(--red)]/85 text-xl shadow-lg">
                    🛡️
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Transparent pricing",
                    "Friendly, respectful technicians",
                    "Flexible financing options",
                    "Reliable scheduling",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-sm leading-6 text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl border border-[var(--gold)]/20 bg-[var(--green)]/80 px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-soft)]">
                    Seasonal Savings
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Nothing like the ELITE way.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-100">
                    Flexible comfort solutions, fair pricing, and service that
                    feels easy from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--green)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              Special
            </span>
            <p className="text-sm font-medium">
              $375 → $99 Drain Cleaning Special
            </p>
          </div>
          <button className="text-sm font-semibold underline underline-offset-4">
            See Offer ›
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-8 grid gap-4 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              Our Services
            </p>
            <h2 className="mt-2 max-w-md text-3xl font-semibold leading-tight text-[var(--navy)] md:text-4xl">
              Comfort solutions for every season.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 md:justify-self-end md:text-base">
            Whether you need a quick repair, a new system installation, or
            year-round maintenance, Elite Air is here to keep your home or
            business comfortable.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[24px] border border-[var(--gold)]/20 bg-[var(--surface)] p-6 shadow-[0_16px_35px_rgba(13,33,55,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--navy)] text-2xl text-white">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--navy)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.text}
              </p>
              <button className="mt-5 text-sm font-semibold text-[var(--red)] hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-[var(--navy)] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold-soft)]">
              Why Homeowners Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              We deliver comfort with honesty.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              We show up, explain your options clearly, and help you make the
              right decision for your home or business.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Clear communication from start to finish",
                "Respectful service in your home or business",
                "High-efficiency system recommendations",
                "Maintenance plans designed for long-term savings",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--gold)]/25 bg-[var(--surface)] p-8 shadow-[0_16px_40px_rgba(13,33,55,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              Featured Offers
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-[var(--navy)]">
              Seasonal specials that make comfort more affordable.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Ask about current discounts, tune-up specials, and financing
              options designed to fit your budget.
            </p>
            <button className="mt-6 rounded-full bg-[var(--red)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              Schedule an Estimate
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--gold)]/15 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              Financing & Maintenance
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--navy)] md:text-4xl">
              Making total home comfort comfortably affordable.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Ask about financing options, membership plans, and seasonal
              maintenance designed to keep your system running efficiently all
              year long.
            </p>
          </div>
          <button className="rounded-full border border-[var(--navy)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white">
            Explore Plans
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-[30px] bg-[linear-gradient(135deg,var(--red),#7f2018)] px-8 py-10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:flex md:items-center md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold-soft)]">
              Ready to get started?
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Have the ELITE take care of it for you.
            </h2>
            <p className="mt-4 text-sm leading-7 text-red-50 md:text-base">
              From repairs and tune-ups to full system replacements, Elite Air
              is ready to help you stay comfortable in every season.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--red)] transition hover:brightness-95">
              Request Service
            </button>
            <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Call Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}