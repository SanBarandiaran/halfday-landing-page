"use client";

import { useState } from "react";
import { RocketIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ShakeOnce } from "@/components/shake-once";
import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";
import type { PricingPlan } from "@/sanity/queries";

type BillingPeriod = "monthly" | "yearly";

const CARD_STYLE = ["bg-[#FF9C8E]", "bg-[#F1AF55]"];

export function Pricing({ plans }: { plans: PricingPlan[] }) {
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
          <ShakeOnce>
            <RocketIcon className="size-9 shrink-0 sm:size-12 lg:size-24" />
          </ShakeOnce>
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
        {plans.map((plan, index) => (
          <Reveal
            key={plan._id}
            delay={150 + index * 100}
            direction="bottom"
            className={`flex flex-col items-center gap-7 rounded-lg ${CARD_STYLE[index % CARD_STYLE.length]} p-8 text-center transition-transform duration-300 hover:-translate-y-1 sm:items-start sm:p-10 sm:text-left`}
          >
            <h3 className="font-[family-name:var(--font-halfday-body)] text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-[42px]">
              {plan.name}
            </h3>
            <div className="flex flex-col items-center gap-4 sm:items-start">
              <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black transition-opacity duration-300 sm:text-2xl lg:text-[32px]">
                {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              </p>
              {plan.features.map((feature) => (
                <p
                  key={feature}
                  className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight text-black sm:text-2xl lg:text-[32px]"
                >
                  {feature}
                </p>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-[family-name:var(--font-halfday-body)] text-lg font-bold text-white transition-all hover:scale-105 hover:bg-zinc-800 sm:text-xl lg:text-[25px]"
            >
              {plan.ctaLabel}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
