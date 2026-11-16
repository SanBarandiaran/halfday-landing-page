import { LightningIcon } from "@/components/icons";
import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={`${halfdayDisplayBold.variable} ${halfdayBody.variable} flex w-full scroll-mt-20 flex-col items-center gap-16 bg-[#F0ECE3] px-6 py-20 sm:gap-20 sm:px-10 sm:py-28 lg:py-[120px]`}
    >
      <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
        <span className="font-[family-name:var(--font-halfday-display-bold)] text-[36px] leading-[1.2] font-bold text-black sm:text-[56px] lg:text-[80px]">
          How HALFDAY
        </span>
        <LightningIcon className="size-9 rotate-[12deg] shrink-0 sm:size-12 lg:size-[90px]" />
        <span className="font-[family-name:var(--font-halfday-display-bold)] text-[36px] leading-[1.2] font-bold text-black sm:text-[56px] lg:text-[80px]">
          works
        </span>
      </h2>

      <div className="flex max-w-3xl flex-col items-center gap-9 text-center sm:gap-12">
        <p className="rotate-[1deg] font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black italic sm:text-2xl lg:text-[36px]">
          Take home. <span className="font-bold underline decoration-1 underline-offset-4 [text-underline-position:from-font]">What you keep</span>. After the business is paid.
        </p>
        <p className="-rotate-[1deg] font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black italic sm:text-2xl lg:text-[36px]">
          Costs. Software. Gear. The accountant.{" "}
          <span className="font-bold underline decoration-1 underline-offset-4 [text-underline-position:from-font]">It all counts</span>.
        </p>
        <p className="rotate-[2deg] font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-medium text-black italic sm:text-2xl lg:text-[36px]">
          <span className="font-bold underline decoration-1 underline-offset-4 [text-underline-position:from-font]">Real days</span>. Not 52 weeks. Holidays are real.
        </p>
      </div>
    </section>
  );
}
