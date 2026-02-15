import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import QuoteStrip from "./QuoteStrip";

export default declareComponent(QuoteStrip, {
  name: "Quote Strip",
  description: "Compact conversion section with phone and booking CTA.",
  group: "Kingdom Construction",
  props: {
    headline: props.Text({ name: "Headline", defaultValue: "Need a reliable crew this week?", group: "Content" }),
    detail: props.Text({
      name: "Detail",
      defaultValue: "Book a walkthrough and receive a same-day scope for painting, refinishing, or repairs.",
      group: "Content",
    }),
    phoneLabel: props.Text({ name: "Phone Label", defaultValue: "Call or text", group: "Phone" }),
    phoneNumber: props.Text({ name: "Phone Number", defaultValue: "(817) 555-0147", group: "Phone" }),
    ctaLabel: props.Text({ name: "CTA Label", defaultValue: "Book an Estimate", group: "CTA" }),
    ctaLink: props.Link({ name: "CTA Link", group: "CTA" }),
    tone: props.Variant({
      name: "Tone",
      defaultValue: "Brand",
      options: ["Brand", "Light", "Dark"],
      group: "Visual",
    }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
