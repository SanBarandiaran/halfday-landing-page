"use client";

import { useEffect, useState } from "react";
import { ArrowUpRightIcon, CalendarIcon, UsersIcon } from "@/components/icons";

type SpendRow = {
  label: string;
  price: string;
  badgeColor: string;
  badgeTextColor?: string;
  initial: string;
};

type SpendCardContent = {
  id: string;
  eyebrow: string;
  amount: string;
  icon: "calendar" | "users";
  rows: SpendRow[];
};

type Slot = {
  rotate: number;
  translate: [number, number];
  zIndex: number;
};

const cardContents: SpendCardContent[] = [
  {
    id: "upcoming",
    eyebrow: "UPCOMING · 30 DAYS",
    amount: "$155.45",
    icon: "calendar",
    rows: [
      { label: "iCloud+", price: "$4.99", badgeColor: "#0A84FF", initial: "i" },
      { label: "Anytime Fitness", price: "$25.99", badgeColor: "#6B21A8", initial: "A" },
      { label: "Spotify", price: "$13.99", badgeColor: "#1ED760", badgeTextColor: "#000", initial: "S" },
      { label: "Youtube", price: "$32.99", badgeColor: "#FF0000", initial: "Y" },
    ],
  },
  {
    id: "category",
    eyebrow: "CATEGORY SPEND",
    amount: "$155.45",
    icon: "users",
    rows: [
      { label: "Entertainment", price: "$53.97", badgeColor: "#FFE76C", badgeTextColor: "#000", initial: "E" },
      { label: "Software", price: "$47.99", badgeColor: "#0082C7", initial: "S" },
      { label: "Health", price: "$49.00", badgeColor: "#00B1A7", initial: "H" },
      { label: "Transport", price: "$4.49", badgeColor: "#AF493C", initial: "T" },
    ],
  },
  {
    id: "monthly",
    eyebrow: "MONTHLY SPEND",
    amount: "$141.46",
    icon: "calendar",
    rows: [
      { label: "Netflix", price: "$25.00", badgeColor: "#000000", initial: "N" },
      { label: "Spotify", price: "$13.99", badgeColor: "#1ED760", badgeTextColor: "#000", initial: "S" },
      { label: "Youtube", price: "$32.00", badgeColor: "#FF0000", initial: "Y" },
      { label: "Framer", price: "$290.46", badgeColor: "#18181B", initial: "F" },
    ],
  },
];

// Fixed visual positions in the stack, back to front. Card content cycles
// through these slots on an interval so the stack endlessly shuffles.
const slots: Slot[] = [
  { rotate: -6, translate: [-33, 25], zIndex: 10 },
  { rotate: -4, translate: [-15, 16], zIndex: 20 },
  { rotate: -2, translate: [-8, 8], zIndex: 30 },
];

const ROTATE_INTERVAL_MS = 1000;

function SpendCard({ content, slot }: { content: SpendCardContent; slot: Slot }) {
  const Icon = content.icon === "calendar" ? CalendarIcon : UsersIcon;

  return (
    <div
      className="absolute left-0 top-0 flex size-[450px] origin-top-left flex-col items-start gap-8 rounded-2xl border-t border-t-[#F1F1F1] bg-white p-10 shadow-[0_2px_25px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out"
      style={{
        transform: `rotate(${slot.rotate}deg) translate(${slot.translate[0]}px, ${slot.translate[1]}px)`,
        zIndex: slot.zIndex,
      }}
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium tracking-[-0.06em] text-black/50">{content.eyebrow}</span>
          <span className="text-[42px] font-medium leading-[1.1] tracking-[-0.06em] text-black">{content.amount}</span>
        </div>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#F0F0F0]">
          <Icon className="size-6 text-black" />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-5">
        {content.rows.map((row) => (
          <div
            key={row.label}
            className="flex h-12 w-full shrink-0 items-center justify-between rounded-lg bg-[#F0F0F0] px-5"
          >
            <div className="flex items-center gap-2">
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-md text-sm font-semibold"
                style={{ backgroundColor: row.badgeColor, color: row.badgeTextColor ?? "#FFFFFF" }}
              >
                {row.initial}
              </div>
              <span className="text-[15px] font-semibold tracking-[-0.06em] text-black">{row.label}</span>
            </div>
            <span className="text-[15px] tracking-[-0.06em] text-black/50">{row.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setOffset((prev) => (prev + 1) % cardContents.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-12 bg-white px-6 py-20 md:px-10">
      <div className="mx-auto flex w-full max-w-[1150px] flex-col items-center justify-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex max-w-xl animate-[fade-up_0.7s_ease-out_both] flex-col items-start gap-9 text-center lg:text-left">
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <h1 className="text-[44px] font-medium leading-[0.95] tracking-[-0.06em] text-black sm:text-[60px] lg:text-[78px]">
              Know where your money goes
            </h1>
            <p className="max-w-md text-lg leading-7 tracking-[-0.03em] text-black/80 sm:text-xl">
              Track every subscription, see what&apos;s due next, and stop paying for things you no longer use.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-[14px] bg-black px-6 py-4 text-lg font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Start tracking for free
            <ArrowUpRightIcon className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="relative size-[450px] shrink-0 scale-[0.62] animate-[fade-up_0.8s_ease-out_0.15s_both] sm:scale-[0.8] lg:scale-100">
          {cardContents.map((content, cardIndex) => {
            // Render cards in a fixed, stable order so React never reorders
            // the underlying DOM nodes — only the slot (and its CSS
            // transition) changes, which keeps the motion smooth.
            const slotIndex = (((cardIndex - offset) % slots.length) + slots.length) % slots.length;
            return <SpendCard key={content.id} content={content} slot={slots[slotIndex]} />;
          })}
        </div>
      </div>
    </section>
  );
}
