import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ConstructionHero from "./ConstructionHero";

export default declareComponent(ConstructionHero, {
  name: "Construction Hero",
  description: "Hero block for service and landing pages with editable CTAs and background media.",
  group: "Kingdom Construction",
  props: {
    eyebrow: props.Text({ name: "Eyebrow", defaultValue: "DFW Painting and Handyman Team", group: "Content" }),
    headline: props.Text({
      name: "Headline",
      defaultValue: "Build trust fast with a conversion-ready hero section",
      group: "Content",
    }),
    headlineTag: props.Variant({
      name: "Headline Tag",
      defaultValue: "H1",
      options: ["H1", "H2"],
      group: "Content",
    }),
    body: props.Text({
      name: "Body",
      defaultValue:
        "Use this section for value proposition, local service coverage, and first-click conversion intent.",
      group: "Content",
    }),
    primaryLabel: props.Text({ name: "Primary Button Label", defaultValue: "Request a Quote", group: "Primary CTA" }),
    primaryLink: props.Link({ name: "Primary Button Link", group: "Primary CTA" }),
    secondaryLabel: props.Text({ name: "Secondary Button Label", defaultValue: "View Services", group: "Secondary CTA" }),
    secondaryLink: props.Link({ name: "Secondary Button Link", group: "Secondary CTA" }),
    backgroundImage: props.Image({ name: "Background Image", group: "Visual" }),
    layoutVariant: props.Variant({
      name: "Layout",
      defaultValue: "Full Bleed",
      options: ["Full Bleed", "Framed"],
      group: "Visual",
    }),
    showOverlay: props.Visibility({ name: "Show Overlay", defaultValue: true, group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
