import { defineField, defineType } from "sanity";

export const pricingPlan = defineType({
  name: "pricingPlan",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "monthlyPrice",
      description: 'Shown when the monthly toggle is selected, e.g. "$8 a month."',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "yearlyPrice",
      description: 'Shown when the yearly toggle is selected, e.g. "$80 a year. That\'s 2 months free."',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "ctaLabel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "monthlyPrice" },
  },
});
