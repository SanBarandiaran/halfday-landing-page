"use client";

import { useMemo, useState } from "react";
import { CalculatorGlyphIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export function Calculator() {
  const [takeHome, setTakeHome] = useState(60000);
  const [costs, setCosts] = useState(6000);
  const [weeksOff, setWeeksOff] = useState(4);
  const [daysPerWeek, setDaysPerWeek] = useState(4);

  const { dayRate, hourlyRate } = useMemo(() => {
    const weeksWorked = 52 - clamp(weeksOff, 0, 12);
    const billableDays = Math.max(weeksWorked * clamp(daysPerWeek, 1, 5), 1);
    const rate = (Math.max(takeHome, 0) + Math.max(costs, 0)) / billableDays;
    return { dayRate: Math.round(rate), hourlyRate: Math.round(rate / 8) };
  }, [takeHome, costs, weeksOff, daysPerWeek]);

  return (
    <section
      id="calculator"
      className={`${halfdayDisplayBold.variable} ${halfdayBody.variable} flex w-full scroll-mt-20 flex-col items-center gap-14 bg-[#F0ECE3] px-6 py-20 sm:gap-16 sm:px-10 sm:py-24 lg:py-[90px]`}
    >
      <Reveal className="flex items-center gap-3 sm:gap-4">
        <h2 className="font-[family-name:var(--font-halfday-display-bold)] text-[40px] leading-[1.2] font-bold text-black sm:text-[56px] lg:text-[80px]">
          Your numbers
        </h2>
        <CalculatorGlyphIcon className="size-10 shrink-0 sm:size-14 lg:size-[83px]" />
      </Reveal>

      <Reveal delay={100} className="flex w-full max-w-xl flex-col items-stretch gap-7 sm:gap-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <label
            htmlFor="take-home"
            className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black sm:text-2xl lg:text-[36px]"
          >
            Take home this year
          </label>
          <div className="flex items-center gap-3">
            <input
              id="take-home"
              type="number"
              min={0}
              step={1000}
              value={takeHome}
              onChange={(event) => setTakeHome(Number(event.target.value) || 0)}
              className="h-[52px] w-[110px] rounded-lg bg-[#FF9C8E] px-3 text-right font-[family-name:var(--font-halfday-body)] text-lg font-semibold text-black outline-none placeholder:text-black/40 focus-visible:ring-2 focus-visible:ring-black sm:w-[120px]"
            />
            <span className="font-[family-name:var(--font-halfday-body)] text-2xl font-medium text-[#C2C1C1]">$</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <label
            htmlFor="costs"
            className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black sm:text-2xl lg:text-[36px]"
          >
            Business costs*
          </label>
          <div className="flex items-center gap-3">
            <input
              id="costs"
              type="number"
              min={0}
              step={500}
              value={costs}
              onChange={(event) => setCosts(Number(event.target.value) || 0)}
              className="h-[52px] w-[110px] rounded-lg bg-[#FF9C8E] px-3 text-right font-[family-name:var(--font-halfday-body)] text-lg font-semibold text-black outline-none placeholder:text-black/40 focus-visible:ring-2 focus-visible:ring-black sm:w-[120px]"
            />
            <span className="font-[family-name:var(--font-halfday-body)] text-2xl font-medium text-[#C2C1C1]">$</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <label
            htmlFor="weeks-off"
            className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black sm:text-2xl lg:text-[36px]"
          >
            Weeks off
          </label>
          <div className="flex items-center gap-3">
            <input
              id="weeks-off"
              type="number"
              min={0}
              max={12}
              value={weeksOff}
              onChange={(event) => setWeeksOff(clamp(Number(event.target.value), 0, 12))}
              className="h-[52px] w-[110px] rounded-lg bg-[#FF9C8E] px-3 text-right font-[family-name:var(--font-halfday-body)] text-lg font-semibold text-black outline-none focus-visible:ring-2 focus-visible:ring-black sm:w-[120px]"
            />
            <span className="font-[family-name:var(--font-halfday-body)] text-xl font-medium text-[#C2C1C1]">0 to 12</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <label
            htmlFor="days-per-week"
            className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black sm:text-2xl lg:text-[36px]"
          >
            Days you bill a week
          </label>
          <div className="flex items-center gap-3">
            <input
              id="days-per-week"
              type="number"
              min={1}
              max={5}
              value={daysPerWeek}
              onChange={(event) => setDaysPerWeek(clamp(Number(event.target.value), 1, 5))}
              className="h-[52px] w-[110px] rounded-lg bg-[#FF9C8E] px-3 text-right font-[family-name:var(--font-halfday-body)] text-lg font-semibold text-black outline-none focus-visible:ring-2 focus-visible:ring-black sm:w-[120px]"
            />
            <span className="font-[family-name:var(--font-halfday-body)] text-xl font-medium text-[#C2C1C1]">1 to 5</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200} className="flex flex-col items-center gap-[68px]">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-[family-name:var(--font-halfday-body)] text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-[42px]">
              Your day rate
            </h3>
            <p
              key={dayRate}
              className="animate-[pop-in_0.25s_ease-out] font-[family-name:var(--font-halfday-display-bold)] text-[56px] leading-[1.2] font-bold text-[#F1AF55] sm:text-[72px] lg:text-[88px]"
            >
              ${dayRate.toLocaleString()}
            </p>
            <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black sm:text-2xl lg:text-[36px]">
              That&apos;s ${hourlyRate} an hour.
            </p>
          </div>
          <p className="font-[family-name:var(--font-halfday-body)] max-w-md text-center text-base leading-tight font-medium text-black sm:text-lg lg:text-[22px]">
            Higher than you thought? Good. Nobody bills 52 weeks.
          </p>
        </div>

        <p className="font-[family-name:var(--font-halfday-body)] text-base leading-tight font-medium text-black sm:text-lg lg:text-[22px]">
          *software, gear, insurance, accountant
        </p>
      </Reveal>
    </section>
  );
}
