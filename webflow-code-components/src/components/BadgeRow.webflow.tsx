import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import BadgeRow from "./BadgeRow";

export default declareComponent(BadgeRow, {
  name: "Badge Row",
  description: "Row of compact trust badges (one per line).",
  group: "Kingdom Construction / Trust",
  props: {
    badges: props.Text({
      name: "Badges (one per line)",
      defaultValue: "Insured\nClean worksite\nClear schedule\nLocal crew",
      group: "Content",
    }),
    align: props.Variant({ name: "Align", defaultValue: "Left", options: ["Left", "Center"], group: "Layout" }),
    variant: props.Variant({ name: "Style", defaultValue: "Filled", options: ["Filled", "Outline"], group: "Visual" }),
    size: props.Variant({ name: "Size", defaultValue: "Medium", options: ["Small", "Medium"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
