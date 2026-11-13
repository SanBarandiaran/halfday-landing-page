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
    <section className="flex w-full flex-col items-center bg-white px-6 pb-20 pt-32 md:px-10">
      <div className="flex w-full max-w-[760px] flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="text-[40px] font-medium leading-[0.95] tracking-[-0.06em] text-black sm:text-[56px]">
            {title}
          </h1>
          <p className="text-sm tracking-[-0.03em] text-black/50">Last updated: {updated}</p>
          <p className="rounded-lg bg-[#F0F0F0] px-4 py-3 text-sm leading-6 text-black/70">
            This is placeholder content for development purposes and does not constitute real legal terms. Replace
            it with your own policy before launch.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium tracking-[-0.03em] text-black">{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-lg leading-7 tracking-[-0.03em] text-black/80">
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
