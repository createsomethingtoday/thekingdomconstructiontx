import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ClickToCall from "./ClickToCall";

export default declareComponent(ClickToCall, {
  name: "Click To Call",
  description: "Compact phone CTA with optional helper text.",
  group: "Kingdom Construction / Conversion",
  props: {
    label: props.Text({ name: "Label", defaultValue: "Call or text", group: "Phone" }),
    phoneNumber: props.Text({ name: "Phone Number", defaultValue: "(817) 555-0147", group: "Phone" }),
    helperText: props.Text({ name: "Helper Text", defaultValue: "Fast response", group: "Phone" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Neutral", options: ["Neutral", "Accent", "Inverted"], group: "Visual" }),
    size: props.Variant({ name: "Size", defaultValue: "Medium", options: ["Small", "Medium"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
