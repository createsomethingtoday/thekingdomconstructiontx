import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import ProjectsPageBody from "./ProjectsPageBody";

export default declareComponent(ProjectsPageBody, {
  name: "Projects Page Body",
  description: "Full Projects index layout with shared page chrome (nav + footer). Edit projects via a structured multiline list.",
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

    heroEyebrow: props.Text({ name: "Eyebrow", defaultValue: "Projects", group: "Hero" }),
    heroHeadline: props.Text({ name: "Headline", defaultValue: "See the finish in real spaces", group: "Hero" }),
    heroBody: props.Text({
      name: "Body",
      defaultValue: "Browse recent work across DFW. Clean prep, crisp lines, and durable coatings.",
      group: "Hero",
    }),
    heroPrimaryLabel: props.Text({ name: "Primary Button Label", defaultValue: "Request a Quote", group: "Hero" }),
    heroPrimaryLink: props.Link({ name: "Primary Button Link", group: "Hero" }),
    heroSecondaryLabel: props.Text({ name: "Secondary Button Label", defaultValue: "View Services", group: "Hero" }),
    heroSecondaryLink: props.Link({ name: "Secondary Button Link", group: "Hero" }),
    heroBackgroundImage: props.Image({ name: "Background Image", group: "Hero" }),
    heroLayoutVariant: props.Variant({
      name: "Layout",
      defaultValue: "Full Bleed",
      options: ["Full Bleed", "Framed"],
      group: "Hero",
    }),
    heroShowOverlay: props.Visibility({ name: "Show Overlay", defaultValue: true, group: "Hero" }),

    projectsEyebrow: props.Text({ name: "Eyebrow", defaultValue: "Gallery", group: "Projects" }),
    projectsHeading: props.Text({ name: "Heading", defaultValue: "Recent projects", group: "Projects" }),
    projectsBody: props.Text({
      name: "Body",
      defaultValue: "Edit the list below: Title | Location | Summary | /link",
      group: "Projects",
    }),
    projectsItems: props.Text({
      name: "Projects List",
      defaultValue:
        "Interior repaint | Dallas, TX | Clean lines and durable washable finish | /projects\nCabinet refinishing | Plano, TX | Factory-smooth spray finish | /projects\nExterior refresh | Frisco, TX | Weather-ready system for lasting color | /projects\nTrim + doors | Grapevine, TX | Crisp enamel finish throughout | /projects",
      group: "Projects",
    }),
    projectsCtaLabel: props.Text({ name: "Card CTA Label", defaultValue: "View Project", group: "Projects" }),

    quoteHeadline: props.Text({ name: "Headline", defaultValue: "Want results like these?", group: "Quote Strip" }),
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
