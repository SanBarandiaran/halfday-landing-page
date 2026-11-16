import { ArrowRightIcon, LinkIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ShakeOnce } from "@/components/shake-once";
import { halfdayBody, halfdayDisplayBold } from "@/lib/fonts";

const faqs = [
  {
    question: "Is this before tax?",
    answer: "Your take home is what you keep. Put your tax money in costs.",
    indent: false,
  },
  {
    question: "I charge by project. Now what?",
    answer: "Check it against your day rate. A 10 day project is at least 10 day rates.",
    indent: true,
  },
  {
    question: "Do I need an account?",
    answer: "No. The calculator works without one.",
    indent: false,
  },
  {
    question: "Can I cancel Pro?",
    answer: "Any time. Two clicks. Your rates stay on Free.",
    indent: true,
  },
  {
    question: "Are you my accountant?",
    answer: "No. But you should probably call yours.",
    indent: false,
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className={`${halfdayDisplayBold.variable} ${halfdayBody.variable} flex w-full scroll-mt-20 flex-col items-center gap-14 bg-[#F0ECE3] px-6 py-20 sm:gap-16 sm:px-10 sm:py-24`}
    >
      <Reveal className="flex items-center gap-1">
        <h2 className="font-[family-name:var(--font-halfday-display-bold)] text-[32px] leading-[1.2] font-bold text-black sm:text-[48px] lg:text-[60px]">
          FAQ
        </h2>
        <ShakeOnce>
          <LinkIcon className="size-6 shrink-0 sm:size-8 lg:size-[58px]" />
        </ShakeOnce>
      </Reveal>

      <div className="-rotate-[1deg] flex w-full max-w-3xl flex-col gap-8 sm:gap-10">
        {faqs.map((item, index) => (
          <Reveal key={item.question} delay={index * 80} className={`flex items-start gap-3 ${item.indent ? "sm:pl-5" : ""}`}>
            <ShakeOnce className="mt-1">
              <ArrowRightIcon className="size-7 shrink-0 text-black transition-transform duration-300 sm:size-9 lg:size-12" />
            </ShakeOnce>
            <div className="flex flex-col items-start">
              <p className="font-[family-name:var(--font-halfday-body)] text-xl leading-tight font-semibold text-black sm:text-2xl lg:text-[32px]">
                {item.question}
              </p>
              <p className="font-[family-name:var(--font-halfday-body)] text-lg leading-tight font-thin text-black sm:text-xl lg:text-[32px]">
                {item.answer}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
