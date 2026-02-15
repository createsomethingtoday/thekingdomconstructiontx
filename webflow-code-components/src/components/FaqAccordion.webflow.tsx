import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import FaqAccordion from "./FaqAccordion";

export default declareComponent(FaqAccordion, {
  name: "FAQ Accordion",
  description: "Single FAQ item with editable question and answer content.",
  group: "Kingdom Construction",
  props: {
    question: props.Text({ name: "Question", defaultValue: "Do you handle prep and cleanup?", group: "Content" }),
    answer: props.Text({
      name: "Answer",
      defaultValue:
        "Yes. Every project includes prep protection, surface correction, final walkthrough, and full cleanup before sign-off.",
      group: "Content",
    }),
    initiallyOpen: props.Visibility({ name: "Initially Open", defaultValue: false, group: "Behavior" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
