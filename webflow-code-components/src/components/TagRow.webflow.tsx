import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import TagRow from "./TagRow";

export default declareComponent(TagRow, {
  name: "Tag Row",
  description: "Compact tag list (one per line).",
  group: "Kingdom Construction / SEO-AEO",
  props: {
    tags: props.Text({ name: "Tags (one per line)", defaultValue: "Arlington, TX\nInterior painting\nCabinet refinishing", group: "Content" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Neutral", options: ["Neutral", "Accent", "Inverted"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
