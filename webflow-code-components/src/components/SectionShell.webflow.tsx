import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import SectionShell from "./SectionShell";

export default declareComponent(SectionShell, {
  name: "Section Shell",
  description: "Layout wrapper with background + width controls. Use as the outer container for sections.",
  group: "Kingdom Construction / Layout",
  props: {
    sectionId: props.Id({ name: "Section ID", group: "Layout" }),
    background: props.Variant({
      name: "Background",
      defaultValue: "Paper",
      options: ["Paper", "Surface", "Brand", "Brand Deep"],
      group: "Layout",
    }),
    padding: props.Variant({
      name: "Vertical Padding",
      defaultValue: "Normal",
      options: ["Tight", "Normal", "Spacious"],
      group: "Layout",
    }),
    maxWidth: props.Variant({
      name: "Max Width",
      defaultValue: "Standard",
      options: ["Narrow", "Standard", "Wide", "Full"],
      group: "Layout",
    }),
    children: props.Slot({ name: "Content", group: "Content" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
