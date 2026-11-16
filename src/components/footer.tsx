import Link from "next/link";
import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";

const links = [
  { label: "Calculator", href: "/#calculator" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer
      className={`${halfdayDisplayBold.variable} ${halfdayBody.variable} flex w-full flex-col items-start gap-6 bg-[#F0ECE3] px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10`}
    >
      <div className="flex flex-wrap items-end gap-2">
        <span className="font-[family-name:var(--font-halfday-display-bold)] text-xl leading-[1.2] font-bold text-black">
          HALFDAY.
        </span>
        <span className="font-[family-name:var(--font-halfday-body)] text-sm leading-tight text-black">
          Made for freelancers who are done guessing.
        </span>
      </div>

      <nav className="flex flex-wrap items-center gap-x-8 gap-y-2">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-[family-name:var(--font-halfday-body)] text-base leading-tight font-medium text-black transition-opacity hover:opacity-60 sm:text-lg lg:text-[20px]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
