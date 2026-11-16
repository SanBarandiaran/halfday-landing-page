"use client";

import { useState } from "react";
import { RocketIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";

type BillingPeriod = "monthly" | "yearly";

export function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section
      id="pricing"
      className={`${halfdayDisplayBold.variable} ${halfdayBody.variable} flex w-full scroll-mt-20 flex-col items-center gap-14 bg-[#F0ECE3] px-6 py-20 sm:gap-[60px] sm:px-10 sm:py-24 lg:py-[90px]`}
    >
      <Reveal className="flex flex-col items-center gap-1 text-center">
        <h2 className="font-[family-name:var(--font-halfday-display-bold)] text-[36px] leading-[1.2] font-bold text-black sm:text-[56px] lg:text-[80px]">
          FREE TO USE.
        </h2>
        <p className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
          <span className="font-[family-name:var(--font-halfday-display-bold)] text-[36px] leading-[1.2] font-bold text-black sm:text-[56px] lg:text-[80px]">
            PRO
          </span>
          <RocketIcon className="size-9 shrink-0 sm:size-12 lg:size-24" />
          <span className="font-[family-name:var(--font-halfday-display-bold)] text-[36px] leading-[1.2] font-bold text-black sm:text-[56px] lg:text-[80px]">
            WHEN YOU&apos;RE BUSY.
          </span>
        </p>
      </Reveal>

      <Reveal delay={100} className="flex items-center justify-center gap-2 rounded-full border-[4px] border-[#FF9C8E] bg-black px-3 py-2">
        {(["monthly", "yearly"] as BillingPeriod[]).map((period) => (
          <button
            key={period}
            type="button"
            onClick={() => setBilling(period)}
            aria-pressed={billing === period}
            className={`rounded-full px-4 py-2 font-[family-name:var(--font-halfday-body)] text-lg font-bold capitalize transition-colors sm:text-xl lg:text-[25px] ${
              billing === period ? "bg-white text-black" : "text-white hover:text-white/70"
            }`}
          >
            {period}
          </button>
        ))}
      </Reveal>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Reveal
          delay={150}
          className="flex flex-col items-start gap-7 rounded-lg bg-[#FF9C8E] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
        >
          <h3 className="font-[family-name:var(--font-halfday-body)] text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-[42px]">
            Free
          </h3>
          <div className="flex flex-col items-start gap-4">
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black sm:text-2xl lg:text-[32px]">
              $0. Forever.
            </p>
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black sm:text-2xl lg:text-[32px]">
              The calculator.
            </p>
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black sm:text-2xl lg:text-[32px]">
              One saved rate.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-[family-name:var(--font-halfday-body)] text-lg font-bold text-white transition-all hover:scale-105 hover:bg-zinc-800 sm:text-xl lg:text-[25px]"
          >
            Start free
          </a>
        </Reveal>

        <Reveal
          delay={250}
          className="flex flex-col items-start gap-7 rounded-lg bg-[#F1AF55] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
        >
          <h3 className="font-[family-name:var(--font-halfday-body)] text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-[42px]">
            Pro
          </h3>
          <div className="flex flex-col items-start gap-4">
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black transition-opacity duration-300 sm:text-2xl lg:text-[32px]">
              {billing === "monthly" ? "$8 a month." : "$80 a year. That's 2 months free."}
            </p>
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black sm:text-2xl lg:text-[32px]">
              A rate for every client.
            </p>
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black sm:text-2xl lg:text-[32px]">
              Quotes as PDFs.
            </p>
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black sm:text-2xl lg:text-[32px]">
              Any currency.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-[family-name:var(--font-halfday-body)] text-lg font-bold text-white transition-all hover:scale-105 hover:bg-zinc-800 sm:text-xl lg:text-[25px]"
          >
            Go Pro
          </a>
        </Reveal>
      </div>
    </section>
  );
}
