import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ServiceCard from "./ServiceCard";

export default declareComponent(ServiceCard, {
  name: "Service Card",
  description: "Reusable service card for lists, grids, and detail sidebars.",
  group: "Kingdom Construction",
  props: {
    title: props.Text({ name: "Title", defaultValue: "Interior Painting", group: "Content" }),
    summary: props.Text({
      name: "Summary",
      defaultValue: "Precision prep, clean lines, and durable finishes for occupied homes.",
      group: "Content",
    }),
    bulletList: props.Text({
      name: "Bullet List (one item per line)",
      defaultValue: "Cabinets\nWalls and ceilings\nTrim and doors",
      group: "Content",
    }),
    ctaLabel: props.Text({ name: "CTA Label", defaultValue: "Explore Service", group: "CTA" }),
    ctaLink: props.Link({ name: "CTA Link", group: "CTA" }),
    iconImage: props.Image({ name: "Icon Image", group: "Visual" }),
    isFeatured: props.Visibility({ name: "Featured", defaultValue: false, group: "Visual" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Dark"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
