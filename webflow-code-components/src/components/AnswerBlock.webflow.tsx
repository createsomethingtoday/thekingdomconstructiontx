import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import AnswerBlock from "./AnswerBlock";

export default declareComponent(AnswerBlock, {
  name: "Answer Block",
  description: "Question + answer block for AEO-friendly content sections.",
  group: "Kingdom Construction / SEO-AEO",
  props: {
    question: props.Text({ name: "Question", defaultValue: "How long does a typical interior repaint take?", group: "Content" }),
    answer: props.Text({
      name: "Answer",
      defaultValue: "Most rooms take 1 to 2 days depending on prep, drying time, and trim detail. We confirm schedule during walkthrough.",
      group: "Content",
    }),
    tone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Brand"], group: "Visual" }),
    showMark: props.Visibility({ name: "Show Q Mark", defaultValue: true, group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
