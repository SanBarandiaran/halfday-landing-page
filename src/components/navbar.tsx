"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";

const navLinks = [
  { label: "Calculator", href: "/#calculator" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Auto-close if the viewport grows into the desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`${halfdayDisplayBold.variable} ${halfdayBody.variable} fixed inset-x-0 top-0 z-50 bg-[#F0ECE3]`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10 lg:py-5">
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-halfday-display-bold)] text-xl leading-[1.2] font-bold text-black lg:text-[22px]"
        >
          HALFDAY
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-halfday-body)] text-[20px] leading-[1.2] font-semibold text-black transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 lg:hidden"
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-hidden={!open}
        className={`grid border-t bg-[#F0ECE3] transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] border-black/10" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="flex min-h-0 flex-col gap-1 overflow-hidden px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="font-[family-name:var(--font-halfday-body)] rounded-lg px-2 py-3 text-xl font-semibold text-black transition-colors hover:bg-black/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#calculator"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="font-[family-name:var(--font-halfday-body)] mt-2 inline-flex items-center justify-center rounded-full border-[3px] border-[#FF9C8E] bg-black px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-zinc-800"
          >
            Find my rate
          </Link>
        </div>
      </nav>

      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 bg-black/20 lg:hidden"
        />
      )}
    </header>
  );
}
