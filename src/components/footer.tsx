"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/icons";

const links = [
  { label: "Product", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const [time, setTime] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
      setYear(now.getFullYear());
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="flex w-full flex-col items-center bg-black px-6 py-10 md:px-10 md:py-12">
      <div className="flex w-full max-w-[1240px] flex-col gap-16 md:gap-20">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="flex shrink-0 items-center gap-1 text-white">
            <LogoMark className="size-6" />
            <span className="text-2xl font-semibold leading-none">Subby</span>
          </a>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-white transition-colors hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-2 border-t border-[#4A4848] pt-5 text-[#7E7978] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-lg font-medium">
            <span>LOCAL TIME:</span>
            <span>{time ?? "--:--"}</span>
          </div>
          <p className="text-lg font-medium">©{year ?? ""} Subby - Made with Magic in Barcelona</p>
        </div>
      </div>
    </footer>
  );
}
