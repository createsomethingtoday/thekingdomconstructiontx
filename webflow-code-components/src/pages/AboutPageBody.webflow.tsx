import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import AboutPageBody from "./AboutPageBody";

export default declareComponent(AboutPageBody, {
  name: "About Page Body",
  description: "Full About page layout with shared page chrome (nav + footer). Story, process, guarantee, and CTA.",
  group: "Kingdom Construction / Pages",
  props: {
    navBrand: props.Text({ name: "Brand Label", defaultValue: "The Kingdom Construction", group: "Chrome" }),
    navLinks: props.Text({
      name: "Navigation Links",
      defaultValue:
        "Home | /\nServices | /services\nProjects | /projects\nAbout | /about\nContact | /contact",
      group: "Chrome",
    }),
    navCtaLabel: props.Text({ name: "Navigation CTA Label", defaultValue: "Request a Quote", group: "Chrome" }),
    navCtaLink: props.Link({ name: "Navigation CTA Link", group: "Chrome" }),
    navBrandLink: props.Link({ name: "Brand Link", group: "Chrome" }),

    footerHeadline: props.Text({ name: "Footer Headline", defaultValue: "The Kingdom Construction", group: "Chrome" }),
    footerText: props.Text({
      name: "Footer Body",
      defaultValue: "Craftsmanship-led painting, cabinetry, and handyperson work across DFW.",
      group: "Chrome",
    }),
    footerServicesTitle: props.Text({ name: "Footer Services Title", defaultValue: "Services", group: "Chrome" }),
    footerServices: props.Text({
      name: "Footer Services (Label | Link)",
      defaultValue: "Services | /services\nProjects | /projects\nAbout | /about\nBook | /book\nReviews | /reviews",
      group: "Chrome",
    }),
    footerCompanyTitle: props.Text({ name: "Footer Company Title", defaultValue: "Company", group: "Chrome" }),
    footerCompany: props.Text({
      name: "Footer Company (Label | Link)",
      defaultValue: "Careers | /careers\nService Areas | /service-areas\nGallery | /projects\nBlog | /blog",
      group: "Chrome",
    }),
    footerConnectTitle: props.Text({ name: "Footer Connect Title", defaultValue: "Connect", group: "Chrome" }),
    footerConnect: props.Text({
      name: "Footer Connect (Label | Link)",
      defaultValue: "Call us | tel:8175550147\nEmail | mailto:info@thekingdomconstructiontx.com\nDMZ office | /",
      group: "Chrome",
    }),
    footerCopy: props.Text({ name: "Footer Copyright", defaultValue: "© 2026 The Kingdom Construction. All rights reserved.", group: "Chrome" }),

    heroEyebrow: props.Text({ name: "Eyebrow", defaultValue: "About The Kingdom Construction", group: "Hero" }),
    heroHeadline: props.Text({ name: "Headline", defaultValue: "Craftsmanship you can schedule", group: "Hero" }),
    heroBody: props.Text({
      name: "Body",
      defaultValue: "We show up on time, protect your space, and deliver a finish that holds up.",
      group: "Hero",
    }),
    heroPrimaryLabel: props.Text({ name: "Primary Button Label", defaultValue: "Request a Quote", group: "Hero" }),
    heroPrimaryLink: props.Link({ name: "Primary Button Link", group: "Hero" }),
    heroSecondaryLabel: props.Text({ name: "Secondary Button Label", defaultValue: "View Services", group: "Hero" }),
    heroSecondaryLink: props.Link({ name: "Secondary Button Link", group: "Hero" }),
    heroBackgroundImage: props.Image({ name: "Background Image", group: "Hero" }),
    heroLayoutVariant: props.Variant({
      name: "Layout",
      defaultValue: "Framed",
      options: ["Full Bleed", "Framed"],
      group: "Hero",
    }),
    heroShowOverlay: props.Visibility({ name: "Show Overlay", defaultValue: true, group: "Hero" }),

    storyEyebrow: props.Text({ name: "Eyebrow", defaultValue: "Our story", group: "Story" }),
    storyHeading: props.Text({ name: "Heading", defaultValue: "Built on clear communication", group: "Story" }),
    storySubheading: props.Text({
      name: "Subheading",
      defaultValue: "A crew that respects your home and your time.",
      group: "Story",
    }),
    storyBody: props.Text({
      name: "Body (one paragraph per line)",
      defaultValue:
        "We started with a simple promise: show up, do it right, and leave the space cleaner than we found it.\nFrom prep to final walkthrough, we keep you informed and we keep the details tight.\nThat’s how we earn repeat clients across DFW.",
      group: "Story",
    }),

    processEyebrow: props.Text({ name: "Eyebrow", defaultValue: "Process", group: "Process" }),
    processHeading: props.Text({ name: "Heading", defaultValue: "How work gets done here", group: "Process" }),
    processBody: props.Text({
      name: "Body",
      defaultValue: "A simple system that keeps timelines and quality predictable.",
      group: "Process",
    }),
    processSteps: props.Text({
      name: "Steps (Title :: Body, one per line)",
      defaultValue:
        "Scope + estimate :: We confirm what’s included and when we can start.\nProtect + prep :: Floors covered, surfaces prepped, details taped clean.\nFinish + walkthrough :: Crisp lines, durable coatings, and a final checklist.",
      group: "Process",
    }),
    processLayout: props.Variant({ name: "Layout", defaultValue: "Grid", options: ["Grid", "List"], group: "Process" }),
    processTone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Brand"], group: "Process" }),
    processShowNumbers: props.Visibility({ name: "Show Numbers", defaultValue: true, group: "Process" }),

    guaranteeBadge: props.Text({ name: "Badge", defaultValue: "Our guarantee", group: "Guarantee" }),
    guaranteeHeading: props.Text({ name: "Heading", defaultValue: "No-surprises workmanship", group: "Guarantee" }),
    guaranteeBody: props.Text({
      name: "Body",
      defaultValue: "Clear scope, clean prep, and a finish that lasts. If something isn’t right, we fix it.",
      group: "Guarantee",
    }),
    guaranteeBullets: props.Text({
      name: "Bullets (one per line)",
      defaultValue: "Transparent estimate\nProtected floors + surfaces\nFinal walkthrough checklist",
      group: "Guarantee",
    }),
    guaranteeCtaLabel: props.Text({ name: "CTA Label", defaultValue: "Request a Quote", group: "Guarantee" }),
    guaranteeCtaLink: props.Link({ name: "CTA Link", group: "Guarantee" }),
    guaranteeTone: props.Variant({ name: "Tone", defaultValue: "Light", options: ["Light", "Brand"], group: "Guarantee" }),

    quoteHeadline: props.Text({ name: "Headline", defaultValue: "Ready to start?", group: "Quote Strip" }),
    quoteDetail: props.Text({
      name: "Detail",
      defaultValue: "Request a quote and we’ll confirm scope and schedule quickly.",
      group: "Quote Strip",
    }),
    quotePhoneLabel: props.Text({ name: "Phone Label", defaultValue: "Call now", group: "Quote Strip" }),
    quotePhoneNumber: props.Text({ name: "Phone Number", defaultValue: "(817) 555-0147", group: "Quote Strip" }),
    quoteCtaLabel: props.Text({ name: "CTA Label", defaultValue: "Request a Quote", group: "Quote Strip" }),
    quoteCtaLink: props.Link({ name: "CTA Link", group: "Quote Strip" }),
    quoteTone: props.Variant({ name: "Tone", defaultValue: "Brand", options: ["Light", "Dark", "Brand"], group: "Quote Strip" }),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
