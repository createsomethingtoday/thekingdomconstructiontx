import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import AreaCard from "./AreaCard";

export default declareComponent(AreaCard, {
  name: "Area Card",
  description: "Service area card for city/region pages. Bind props from the service-areas CMS collection.",
  group: "Kingdom Construction / Content",
  props: {
    city: props.Text({ name: "City", defaultValue: "Arlington", group: "Content" }),
    regionLine: props.Text({ name: "Region Line", defaultValue: "DFW Metroplex", group: "Content" }),
    highlights: props.Text({
      name: "Highlights (one per line)",
      defaultValue: "Interior and exterior painting\nCabinet refinishing\nHandyman repairs",
      group: "Content",
    }),
    ctaLabel: props.Text({ name: "CTA Label", defaultValue: "View Area", group: "CTA" }),
    ctaLink: props.Link({ name: "CTA Link", group: "CTA" }),
    image: props.Image({ name: "Image", group: "Visual" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Dark"], group: "Visual" }),
    featured: props.Visibility({ name: "Featured", defaultValue: false, group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
