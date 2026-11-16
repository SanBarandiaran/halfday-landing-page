import { Hero } from "@/components/sections/hero";
import { Calculator } from "@/components/sections/calculator";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Calculator />
      <HowItWorks />
      <Pricing />
      <Faq />
    </>
  );
}
