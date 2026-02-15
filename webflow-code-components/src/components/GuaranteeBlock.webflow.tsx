import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import GuaranteeBlock from "./GuaranteeBlock";

export default declareComponent(GuaranteeBlock, {
  name: "Guarantee Block",
  description: "Enterprise-style guarantee/warranty section with bullets and optional CTA.",
  group: "Kingdom Construction / Trust",
  props: {
    badge: props.Text({ name: "Badge", defaultValue: "Warranty", group: "Content" }),
    heading: props.Text({ name: "Heading", defaultValue: "We protect your schedule and your finish.", group: "Content" }),
    body: props.Text({
      name: "Body",
      defaultValue: "Set expectations clearly and remove risk from the buying decision.",
      group: "Content",
    }),
    bulletList: props.Text({
      name: "Bullets (one per line)",
      defaultValue: "Written scope before work begins\nClean worksite and protection\nFinal walkthrough before sign-off",
      group: "Content",
    }),
    ctaLabel: props.Text({ name: "CTA Label", defaultValue: "See our process", group: "CTA" }),
    ctaLink: props.Link({ name: "CTA Link", group: "CTA" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Brand"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
