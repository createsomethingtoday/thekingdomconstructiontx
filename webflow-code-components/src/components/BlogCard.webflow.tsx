import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import BlogCard from "./BlogCard";

export default declareComponent(BlogCard, {
  name: "Blog Card",
  description: "Card for blog post listing pages and related post blocks.",
  group: "Kingdom Construction / Content",
  props: {
    title: props.Text({ name: "Title", defaultValue: "How to prep walls for a durable paint finish", group: "Content" }),
    date: props.Text({ name: "Date", defaultValue: "Feb 14, 2026", group: "Content" }),
    excerpt: props.Text({
      name: "Excerpt",
      defaultValue: "A clean finish starts with prep. Here are the steps we use to avoid flashing and peeling.",
      group: "Content",
    }),
    category: props.Text({ name: "Category", defaultValue: "Painting", group: "Content" }),
    image: props.Image({ name: "Image", group: "Visual" }),
    ctaLabel: props.Text({ name: "CTA Label", defaultValue: "Read Post", group: "CTA" }),
    ctaLink: props.Link({ name: "CTA Link", group: "CTA" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
