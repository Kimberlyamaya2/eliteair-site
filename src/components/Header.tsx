"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/financing", label: "Financing" },
  { href: "/maintenance-plans", label: "Memberships" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="text-white shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
      <div className="bg-[var(--navy-soft)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-[11px] uppercase tracking-[0.16em]">
          <div className="flex gap-6 text-white/75">
            <button className="hover:text-white">Savings</button>
            <button className="hover:text-white">Financing</button>
            <button className="hover:text-white">Memberships</button>
            <button className="hover:text-white">Careers</button>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-black/35 px-3 py-1 font-semibold">
              615-953-9885
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--red)] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em]"
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-black/40 bg-[var(--navy)]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--red),var(--green))] text-sm font-bold text-white shadow-md">
              EA
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold uppercase tracking-[0.18em]">
                Elite Air
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">
                Heating &amp; Cooling Company
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "relative text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--gold)]"
                      : "text-white/70 hover:text-white"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-[var(--gold)] bg-black/30 px-5 py-2.5 text-xs font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--navy)] md:inline-flex"
          >
            Request Service
          </Link>
        </div>
      </div>
    </header>
  );
}