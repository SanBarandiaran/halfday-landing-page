import { Hero } from "@/components/sections/hero";
import { Calculator } from "@/components/sections/calculator";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { client } from "@/sanity/client";
import { PRICING_PLANS_QUERY } from "@/sanity/queries";

export default async function Home() {
  const plans = await client.fetch(PRICING_PLANS_QUERY, {}, { next: { revalidate: 60 } });

  return (
    <>
      <Hero />
      <Calculator />
      <HowItWorks />
      <Pricing plans={plans} />
      <Faq />
    </>
  );
}
