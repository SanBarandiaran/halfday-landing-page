import Link from "next/link";
import { PercentCutIcon, SquiggleIcon } from "@/components/icons";
import { halfdayBody, halfdayDisplayBold, halfdayDisplayLight } from "@/lib/fonts";

export function Hero() {
  return (
    <section
      id="hero"
      className={`${halfdayDisplayBold.variable} ${halfdayDisplayLight.variable} ${halfdayBody.variable} flex min-h-dvh w-full scroll-mt-20 flex-col items-center justify-center gap-10 bg-[#F0ECE3] px-6 pt-28 pb-16 sm:gap-12 sm:px-10 lg:gap-16 lg:pt-24`}
    >
      <div className="flex animate-[fade-up_0.7s_ease-out_both] flex-col items-center gap-6 text-center sm:gap-7">
        <div className="flex rotate-[2deg] flex-wrap items-baseline justify-center gap-x-4 gap-y-1 sm:gap-x-6 lg:gap-x-8">
          <span className="font-[family-name:var(--font-halfday-display-bold)] text-[52px] leading-[1.2] font-bold text-black sm:text-[84px] lg:text-[128px]">
            STOP
          </span>
          <span className="inline-flex flex-wrap items-baseline justify-center">
            <span className="font-[family-name:var(--font-halfday-display-light)] text-[30px] leading-[1.2] font-light tracking-[-0.04em] text-[#FF9C8E] italic sm:text-[46px] lg:text-[70px]">
              UNDER
            </span>
            <span className="font-[family-name:var(--font-halfday-display-bold)] text-[52px] leading-[1.2] font-bold text-[#F1AF55] underline decoration-1 underline-offset-[6px] [text-underline-position:from-font] sm:text-[84px] lg:text-[128px]">
              CHARGING
            </span>
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex rotate-[1deg] flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3">
            <span className="font-[family-name:var(--font-halfday-body)] text-[22px] leading-[1.2] font-bold text-black sm:text-[32px] lg:text-[48px]">
              The day rate app
            </span>
            <PercentCutIcon className="size-7 shrink-0 sm:size-10 lg:size-[52px]" />
            <span className="font-[family-name:var(--font-halfday-body)] text-[22px] leading-[1.2] font-bold text-black sm:text-[32px] lg:text-[48px]">
              for freelancers
            </span>
            <SquiggleIcon className="size-7 shrink-0 sm:size-10 lg:size-[52px]" />
          </div>

          <p className="font-[family-name:var(--font-halfday-body)] -rotate-[1deg] text-[17px] leading-[1.2] font-medium text-black sm:text-[22px] lg:text-[28px]">
            Work out what to charge in under a minute.
          </p>
        </div>
      </div>

      <Link
        href="/#calculator"
        className="font-[family-name:var(--font-halfday-body)] inline-flex animate-[fade-up_0.8s_ease-out_0.15s_both] items-center justify-center rounded-full border-[4px] border-[#FF9C8E] bg-black px-6 py-3.5 text-base leading-[1.2] font-bold text-white transition-colors hover:bg-zinc-800 sm:px-7 sm:py-4 sm:text-lg lg:px-8 lg:text-[25px]"
      >
        Find my rate
      </Link>
    </section>
  );
}
