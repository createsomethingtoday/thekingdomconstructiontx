import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import BookPageBody from "./BookPageBody";

export default declareComponent(BookPageBody, {
  name: "Book Page Body",
  description: "Full Booking page layout with shared page chrome (nav + footer). Includes a slot for an embed (calendar, scheduler, etc.).",
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

    heroEyebrow: props.Text({ name: "Eyebrow", defaultValue: "Book", group: "Hero" }),
    heroHeadline: props.Text({ name: "Headline", defaultValue: "Book a consult in minutes", group: "Hero" }),
    heroBody: props.Text({
      name: "Body",
      defaultValue: "Pick a time that works. We’ll confirm scope and next steps quickly.",
      group: "Hero",
    }),
    heroPrimaryLabel: props.Text({ name: "Primary Button Label", defaultValue: "Request a Quote", group: "Hero" }),
    heroPrimaryLink: props.Link({ name: "Primary Button Link", group: "Hero" }),
    heroSecondaryLabel: props.Text({ name: "Secondary Button Label", defaultValue: "Call Now", group: "Hero" }),
    heroSecondaryLink: props.Link({ name: "Secondary Button Link", group: "Hero" }),
    heroBackgroundImage: props.Image({ name: "Background Image", group: "Hero" }),
    heroLayoutVariant: props.Variant({
      name: "Layout",
      defaultValue: "Framed",
      options: ["Full Bleed", "Framed"],
      group: "Hero",
    }),
    heroShowOverlay: props.Visibility({ name: "Show Overlay", defaultValue: true, group: "Hero" }),

    bookingEyebrow: props.Text({ name: "Eyebrow", defaultValue: "Scheduling", group: "Booking" }),
    bookingHeading: props.Text({ name: "Heading", defaultValue: "Choose a time", group: "Booking" }),
    bookingBody: props.Text({
      name: "Body",
      defaultValue: "If you don’t see a time that works, request a quote and we’ll coordinate.",
      group: "Booking",
    }),

    bookingEmbed: props.Slot({ name: "Embed Slot", group: "Booking" }),

    quoteHeadline: props.Text({ name: "Headline", defaultValue: "Need help now?", group: "Quote Strip" }),
    quoteDetail: props.Text({
      name: "Detail",
      defaultValue: "Call or request a quote. We’ll confirm scope and schedule quickly.",
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
