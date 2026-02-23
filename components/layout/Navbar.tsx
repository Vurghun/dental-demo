"use client";

import { Menu, X, Stethoscope, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0f172a]/10 bg-[#0f172a] shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <Stethoscope className="h-6 w-6" aria-hidden />
          <span>Ankara Dental</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:bg-white/90"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0f172a]"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
