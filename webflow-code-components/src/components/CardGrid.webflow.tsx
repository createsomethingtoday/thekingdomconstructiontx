import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import CardGrid from "./CardGrid";

export default declareComponent(CardGrid, {
  name: "Card Grid",
  description: "Responsive grid layout for cards and section blocks.",
  group: "Kingdom Construction / Layout",
  props: {
    columns: props.Variant({ name: "Columns", defaultValue: "Auto", options: ["Auto", "2", "3", "4"], group: "Layout" }),
    gap: props.Variant({ name: "Gap", defaultValue: "Normal", options: ["Compact", "Normal", "Spacious"], group: "Layout" }),
    children: props.Slot({ name: "Cards", group: "Content" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
