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
    "Locally owned service",
  ];

  const features = [
    "Transparent pricing",
    "Friendly, respectful technicians",
    "Flexible financing options",
    "Reliable scheduling",
  ];

  const specials = [
    "$99 seasonal tune-up",
    "Drain cleaning offers",
    "New system financing available",
  ];

  return (
    <main
      className="min-h-screen bg-[var(--bg)] text-slate-900"
      style={{
        ["--bg" as string]: "#f5efe6",
        ["--surface" as string]: "#fbf8f3",
        ["--navy" as string]: "#0d2137",
        ["--navy-2" as string]: "#132b45",
        ["--gold" as string]: "#b6872b",
        ["--gold-soft" as string]: "#ead7ad",
        ["--red" as string]: "#9b2d20",
        ["--green" as string]: "#163f2c",
      }}
    >
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--navy) 0%, #09182c 45%, var(--navy-2) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(182,135,43,0.22),transparent_42%)]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--red)]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[var(--gold)]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-soft)] backdrop-blur-sm">
              <span>Residential &amp; Commercial</span>
              <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
              <span>Same-Day Service</span>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--gold-soft)]">
                Elite Air Heating &amp; Cooling Company
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                Reliable comfort,
                <span className="block text-[var(--gold-soft)]">done the ELITE way.</span>
              </h1>
              <p className="max-w-lg text-base leading-7 text-slate-200 md:text-lg">
                Have the ELITE take care of it for you. From emergency repairs to
                system installs and routine maintenance, we make home comfort
                simple, honest, and dependable.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-[var(--red)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:brightness-110">
                Request Service
              </button>
              <button className="rounded-full border border-white/30 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12">
                View Specials
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

          <div className="relative">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="rounded-[24px] border border-[var(--gold)]/20 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-soft)]">
                      Trusted comfort care
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      A company you can trust.
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--gold)]/30 bg-[var(--red)]/80 text-2xl shadow-lg">
                    🛡️
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {features.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-sm text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-[var(--gold)]/20 bg-[var(--green)]/70 px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-soft)]">
                    Seasonal Savings
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Nothing like the ELITE way.
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    Flexible comfort solutions, fair pricing, and service that feels
                    easy from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--green)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              Current Specials
            </span>
            <p className="text-sm font-medium md:text-base">
              Let us handle it for you — ask about tune-ups, financing, and seasonal savings.
            </p>
          </div>
          <button className="text-sm font-semibold underline underline-offset-4">
            See Offers
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              Our Services
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--navy)] md:text-4xl">
              Comfort solutions for every season.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-base">
            Whether you need a quick repair, a new system installation, or year-round
            maintenance, Elite Air is here to keep your home or business comfortable.
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

      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-[var(--navy)] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold-soft)]">
              Why Homeowners Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              You&apos;re not just booking a service call.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              You&apos;re choosing a team that values honesty, quality, and comfort. We show up,
              explain your options clearly, and help you make the right decision for your space.
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
            <h3 className="mt-3 text-3xl font-semibold text-[var(--navy)]">
              Seasonal specials that make comfort more affordable.
            </h3>
            <div className="mt-6 space-y-3">
              {specials.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <button className="mt-6 rounded-full bg-[var(--red)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              Schedule an Estimate
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--gold)]/15 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              Financing & Maintenance
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--navy)] md:text-4xl">
              Making total home comfort comfortably affordable.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Ask about financing options, membership plans, and seasonal maintenance designed
              to keep your system running efficiently all year long.
            </p>
          </div>
          <button className="rounded-full border border-[var(--navy)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white">
            Explore Plans
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-[30px] bg-[linear-gradient(135deg,var(--red),#7f2018)] px-8 py-10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:flex md:items-center md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold-soft)]">
              Ready to get started?
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Have the ELITE take care of it for you.
            </h2>
            <p className="mt-4 text-sm leading-7 text-red-50 md:text-base">
              From repairs and tune-ups to full system replacements, Elite Air is ready to help
              you stay comfortable in every season.
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
