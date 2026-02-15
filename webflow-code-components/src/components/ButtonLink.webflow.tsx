import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ButtonLink from "./ButtonLink";

export default declareComponent(ButtonLink, {
  name: "Button Link",
  description: "Reusable button-style link for CTAs.",
  group: "Kingdom Construction / Conversion",
  props: {
    label: props.Text({ name: "Label", defaultValue: "Request a Quote", group: "Content" }),
    link: props.Link({ name: "Link", group: "Content" }),
    variant: props.Variant({ name: "Variant", defaultValue: "Primary", options: ["Primary", "Secondary", "Ghost"], group: "Visual" }),
    size: props.Variant({ name: "Size", defaultValue: "Medium", options: ["Small", "Medium"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
