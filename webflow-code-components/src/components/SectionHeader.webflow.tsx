import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import SectionHeader from "./SectionHeader";

export default declareComponent(SectionHeader, {
  name: "Section Header",
  description: "Reusable section heading block with eyebrow, accent rule, and body text.",
  group: "Kingdom Construction / Content",
  props: {
    eyebrow: props.Text({ name: "Eyebrow", defaultValue: "Trusted Painting", group: "Content" }),
    heading: props.Text({
      name: "Heading",
      defaultValue: "Clear scopes. Clean finishes. Consistent communication.",
      group: "Content",
    }),
    body: props.Text({
      name: "Body",
      defaultValue: "Use this header to introduce a section and set expectations for the next block.",
      group: "Content",
    }),
    align: props.Variant({ name: "Alignment", defaultValue: "Left", options: ["Left", "Center"], group: "Layout" }),
    size: props.Variant({ name: "Size", defaultValue: "Medium", options: ["Medium", "Large"], group: "Layout" }),
    showRule: props.Visibility({ name: "Show Accent Rule", defaultValue: true, group: "Layout" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
