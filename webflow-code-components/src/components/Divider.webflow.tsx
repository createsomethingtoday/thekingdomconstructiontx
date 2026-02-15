import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import Divider from "./Divider";

export default declareComponent(Divider, {
  name: "Divider",
  description: "Horizontal rule or spacer.",
  group: "Kingdom Construction / Layout",
  props: {
    style: props.Variant({ name: "Style", defaultValue: "Line", options: ["Line", "Accent", "Space"], group: "Layout" }),
    thickness: props.Variant({ name: "Thickness", defaultValue: "Hairline", options: ["Hairline", "Medium"], group: "Layout" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
