import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ProjectCard from "./ProjectCard";

export default declareComponent(ProjectCard, {
  name: "Project Card",
  description: "Project highlight card for the projects CMS template and listings.",
  group: "Kingdom Construction / Content",
  props: {
    title: props.Text({ name: "Title", defaultValue: "Kitchen cabinet refinishing", group: "Content" }),
    location: props.Text({ name: "Location", defaultValue: "Arlington, TX", group: "Content" }),
    summary: props.Text({
      name: "Summary",
      defaultValue: "A clean, durable refinish with minimal downtime and a crisp sprayed finish.",
      group: "Content",
    }),
    image: props.Image({ name: "Image", group: "Visual" }),
    tags: props.Text({ name: "Tags (one per line)", defaultValue: "Refinishing\nSprayed finish\nFast turnaround", group: "Content" }),
    ctaLabel: props.Text({ name: "CTA Label", defaultValue: "View Project", group: "CTA" }),
    ctaLink: props.Link({ name: "CTA Link", group: "CTA" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
