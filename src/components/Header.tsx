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
    <header className="bg-[var(--navy)] text-white">
      {/* top strip */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs">
        <div className="flex gap-6">
          <button className="hover:underline">Savings</button>
          <button className="hover:underline">Financing</button>
          <button className="hover:underline">Memberships</button>
          <button className="hover:underline">Careers</button>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold tracking-wide">
            615-953-9885
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[var(--red)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
          >
            Request Service
          </Link>
        </div>
      </div>

      {/* main nav */}
      <div className="bg-white text-slate-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* logo area */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)] text-xs font-bold text-white">
              EA
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Elite Air HVAC</p>
              <p className="text-[11px] text-slate-500">
                Heating • Cooling • Comfort
              </p>
            </div>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "text-[var(--navy)] font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* request button */}
          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-[var(--red)] bg-white px-4 py-2 text-xs font-semibold text-[var(--red)] md:inline-flex"
          >
            Request Service
          </Link>
        </div>
      </div>
    </header>
  );
}
