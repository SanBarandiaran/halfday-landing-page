import { ArrowUpRightIcon, LogoMark } from "@/components/icons";

const navLinks = [
  { label: "Product", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Pricing", href: "#" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 bg-white px-5 py-5">
      <a href="#" className="flex shrink-0 items-center gap-1 text-black">
        <LogoMark className="size-6" />
        <span className="text-2xl font-semibold leading-none">Subby</span>
      </a>

      <nav className="hidden items-center gap-10 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-lg font-medium text-black transition-colors hover:text-black/60"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#"
        className="group inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-black px-3 py-2 text-lg font-medium text-white transition-colors hover:bg-zinc-800"
      >
        <span className="hidden sm:inline">Start tracking for free</span>
        <span className="sm:hidden">Start free</span>
        <ArrowUpRightIcon className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </header>
  );
}
