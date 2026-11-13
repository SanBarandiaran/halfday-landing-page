import type { CSSProperties } from "react";

type Renewal = {
  day: string;
  month: string;
  name: string;
  price: string;
  height: number;
  bg: string;
  textColor: "black" | "white";
};

const renewals: Renewal[] = [
  { day: "08", month: "September", name: "Netflix", price: "$25.99", height: 320, bg: "#BAE786", textColor: "black" },
  { day: "12", month: "September", name: "Spotify", price: "$13.99", height: 200, bg: "#FEFF7F", textColor: "black" },
  { day: "18", month: "September", name: "Adobe", price: "$32.99", height: 360, bg: "#43297B", textColor: "white" },
  { day: "22", month: "September", name: "iCloud", price: "$4.49", height: 200, bg: "#FFFFFF", textColor: "black" },
];

export function Renewals() {
  return (
    <section
      id="how-it-works"
      className="flex w-full scroll-mt-24 flex-col items-center bg-[#F2F2F2] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="flex w-full max-w-[1240px] flex-col gap-16 md:gap-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <h2 className="max-w-xl text-[40px] font-medium leading-[0.95] tracking-[-0.06em] text-black sm:text-[56px] lg:text-[72px]">
            Forget about surprise renewals.
          </h2>
          <p className="max-w-sm text-lg leading-7 tracking-[-0.06em] text-black sm:text-xl">
            Know what&apos;s due before it becomes another charge. Start saving money!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:flex lg:items-end lg:justify-center lg:gap-6">
          {renewals.map((renewal) => (
            <div
              key={renewal.name}
              className="flex h-48 flex-col items-start rounded-lg p-5 lg:h-[var(--bar-height)] lg:flex-1"
              style={{ backgroundColor: renewal.bg, "--bar-height": `${renewal.height}px` } as CSSProperties}
            >
              <div
                className="text-[56px] font-bold leading-[0.9] tracking-[-0.06em] sm:text-[72px] lg:text-[88px]"
                style={{ color: renewal.textColor }}
              >
                {renewal.day}
              </div>
              <div className="flex w-full flex-1 items-end justify-between gap-4">
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-xs tracking-[-0.06em]" style={{ color: renewal.textColor }}>
                    {renewal.month}
                  </span>
                  <span className="text-sm font-bold tracking-[-0.06em]" style={{ color: renewal.textColor }}>
                    {renewal.name}
                  </span>
                </div>
                <span className="shrink-0 text-sm tracking-[-0.06em]" style={{ color: renewal.textColor }}>
                  {renewal.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
