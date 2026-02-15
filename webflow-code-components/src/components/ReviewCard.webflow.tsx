import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ReviewCard from "./ReviewCard";

export default declareComponent(ReviewCard, {
  name: "Review Card",
  description: "Customer proof block for testimonial lists and sidebars.",
  group: "Kingdom Construction",
  props: {
    quote: props.Text({
      name: "Quote",
      defaultValue: "They finished our interior repaint in three days and left the site cleaner than they found it.",
      group: "Content",
    }),
    customerName: props.Text({ name: "Customer Name", defaultValue: "Jordan C.", group: "Attribution" }),
    cityState: props.Text({ name: "City and State", defaultValue: "Arlington, TX", group: "Attribution" }),
    projectType: props.Text({ name: "Project Type", defaultValue: "Interior Painting", group: "Attribution" }),
    rating: props.Number({ name: "Rating", defaultValue: 5, min: 1, max: 5, decimals: 0, group: "Attribution" }),
    showProjectTag: props.Visibility({ name: "Show Project Tag", defaultValue: true, group: "Attribution" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
