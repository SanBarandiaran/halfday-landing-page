"use client";

import { useState } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

type BillingPeriod = "monthly" | "annually";

type Plan = {
  id: string;
  name: string;
  badge: string;
  price: string;
  period: string;
  theme: "light" | "dark";
  features: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    id: "free",
    name: "FREE",
    badge: "FOR GETTING ORGANIZED",
    price: "$0",
    period: "/forever",
    theme: "light",
    features: ["Track up for 5 subscriptions", "Monthly and annual totals", "Upcoming-payment timeline"],
    cta: "Start tracking for free",
  },
  {
    id: "pro",
    name: "PRO",
    badge: "FOR GETTING ORGANIZED",
    price: "$4",
    period: "/month",
    theme: "dark",
    features: ["Unlimited subscriptions", "Smart renewal reminders", "Category and review insights"],
    cta: "Start tracking subscriptions",
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section className="flex w-full flex-col items-center bg-[#F2F2F2] px-6 py-20 md:px-10 md:py-28">
      <div className="flex w-full max-w-[1240px] flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <h2 className="max-w-xl text-[40px] font-medium leading-[0.95] tracking-[-0.06em] text-black sm:text-[56px] lg:text-[72px]">
            Simple pricing.
            <br />
            No surprises.
          </h2>
          <p className="max-w-sm text-lg leading-7 tracking-[-0.06em] text-black sm:text-xl">
            Start with the essentials, upgrade when your subscription list grows.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex items-start gap-1 rounded bg-black p-1">
            {(["monthly", "annually"] as BillingPeriod[]).map((period) => (
              <button
                key={period}
                type="button"
                onClick={() => setBilling(period)}
                className={`rounded px-2.5 py-2.5 text-sm font-bold tracking-wide uppercase transition-colors ${
                  billing === period ? "bg-[#FEFF7F] text-[#4A4949]" : "bg-black text-white"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => {
            const isDark = plan.theme === "dark";
            return (
              <div
                key={plan.id}
                className={`flex flex-col gap-10 rounded-2xl p-5 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
              >
                <div className="flex flex-col gap-9">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[32px] font-bold leading-none tracking-[-0.06em] sm:text-[42px]">
                      {plan.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-lg px-2.5 py-2.5 text-sm font-bold tracking-wide text-[#4A4949] ${
                        isDark ? "bg-[#FEFF7F]" : "bg-[#F0F0F0]"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <span className="text-[64px] font-semibold leading-none tracking-[-0.06em] sm:text-[88px] lg:text-[100px]">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-lg tracking-[-0.06em] text-[#767676] sm:text-xl">{plan.period}</span>
                  </div>

                  <div className="flex flex-col">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 border-t-2 border-[#F0F0F0] py-3.5">
                        <CheckIcon className={`size-6 shrink-0 ${isDark ? "text-[#FEFF7F]" : "text-black"}`} />
                        <span className="text-lg font-semibold sm:text-xl">{feature}</span>
                      </div>
                    ))}
                    <div className="h-[54px] border-t-2 border-[#F0F0F0]" />
                  </div>
                </div>

                <a
                  href="#"
                  className={`group flex h-[60px] items-center justify-between rounded-2xl px-4 text-lg font-medium transition-colors sm:text-xl ${
                    isDark ? "bg-[#FEFF7F] text-black hover:bg-[#f5f66b]" : "bg-black text-white hover:bg-zinc-800"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRightIcon className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
