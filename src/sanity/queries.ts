import { defineQuery } from "next-sanity";

export const PRICING_PLANS_QUERY = defineQuery(
  `*[_type == "pricingPlan"] | order(order asc){ _id, name, monthlyPrice, yearlyPrice, features, ctaLabel }`
);

export type PricingPlan = {
  _id: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  ctaLabel: string;
};
