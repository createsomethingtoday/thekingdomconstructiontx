import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import Breadcrumbs from "./Breadcrumbs";

export default declareComponent(Breadcrumbs, {
  name: "Breadcrumbs",
  description: "Simple breadcrumb navigation (one crumb per line: Label|/path).",
  group: "Kingdom Construction / SEO-AEO",
  props: {
    items: props.Text({
      name: "Items (one per line; Label|/path)",
      defaultValue: "Home|/\nServices|/services\nInterior Painting",
      group: "Content",
    }),
    separator: props.Variant({ name: "Separator", defaultValue: "Chevron", options: ["Chevron", "Slash", "Dot"], group: "Visual" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Neutral", options: ["Neutral", "Inverted"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
