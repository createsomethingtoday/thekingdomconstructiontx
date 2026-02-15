import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ProofMetrics from "./ProofMetrics";

export default declareComponent(ProofMetrics, {
  name: "Proof Metrics",
  description: "Three-metric trust block for speed, quality, and reliability claims.",
  group: "Kingdom Construction / Trust",
  props: {
    metric1Value: props.Text({ name: "Metric 1 Value", defaultValue: "2.1 hrs", group: "Metric 1" }),
    metric1Label: props.Text({ name: "Metric 1 Label", defaultValue: "Average response time", group: "Metric 1" }),
    metric2Value: props.Text({ name: "Metric 2 Value", defaultValue: "5.0", group: "Metric 2" }),
    metric2Label: props.Text({ name: "Metric 2 Label", defaultValue: "Typical customer rating", group: "Metric 2" }),
    metric3Value: props.Text({ name: "Metric 3 Value", defaultValue: "1 week", group: "Metric 3" }),
    metric3Label: props.Text({ name: "Metric 3 Label", defaultValue: "Common turnaround window", group: "Metric 3" }),
    tone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Brand"], group: "Visual" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
