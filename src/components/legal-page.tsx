import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";

type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <section
      className={`${halfdayDisplayBold.variable} ${halfdayBody.variable} flex w-full flex-col items-center bg-[#F0ECE3] px-6 pb-20 pt-32 md:px-10`}
    >
      <div className="flex w-full max-w-[760px] flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="font-[family-name:var(--font-halfday-display-bold)] text-[40px] font-bold leading-[1.2] text-black sm:text-[56px]">
            {title}
          </h1>
          <p className="font-[family-name:var(--font-halfday-body)] text-sm text-black/50">Last updated: {updated}</p>
          <p className="font-[family-name:var(--font-halfday-body)] rounded-lg bg-[#F2F2F2] px-4 py-3 text-sm leading-6 text-black/70">
            This is placeholder content for development purposes and does not constitute real legal terms. Replace
            it with your own policy before launch.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="font-[family-name:var(--font-halfday-display-bold)] text-2xl font-bold text-black">
                {section.heading}
              </h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className="font-[family-name:var(--font-halfday-body)] text-lg leading-7 text-black/80">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
