import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ProcessSteps from "./ProcessSteps";

export default declareComponent(ProcessSteps, {
  name: "Process Steps",
  description: "Step list for explaining how a project runs (one step per line).",
  group: "Kingdom Construction / Content",
  props: {
    steps: props.Text({
      name: "Steps (one per line; optional 'Title :: Body')",
      defaultValue:
        "Walkthrough :: Confirm scope, timeline, and access\nPrep :: Protect surfaces and correct problem areas\nFinish :: Apply coatings and clean lines\nSign-off :: Final walkthrough and touch-ups",
      group: "Content",
    }),
    layout: props.Variant({ name: "Layout", defaultValue: "Grid", options: ["Grid", "List"], group: "Layout" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Brand"], group: "Visual" }),
    showNumbers: props.Visibility({ name: "Show Numbers", defaultValue: true, group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
