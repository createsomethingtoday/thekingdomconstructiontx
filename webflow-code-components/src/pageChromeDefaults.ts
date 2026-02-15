import { props } from "@webflow/data-types";

export const chromeGroup = "Chrome";

export const chromePropsDefaults = {
  navBrand: {
    name: "Brand Label",
    defaultValue: "The Kingdom Construction",
  },
  navLinks: {
    name: "Navigation Links",
    defaultValue: "Home | /\nServices | /services\nProjects | /projects\nAbout | /about\nContact | /contact",
  },
  navCtaLabel: {
    name: "Navigation CTA Label",
    defaultValue: "Request a Quote",
  },
  footerHeadline: {
    name: "Footer Headline",
    defaultValue: "The Kingdom Construction",
  },
  footerText: {
    name: "Footer Body",
    defaultValue: "Craftsmanship-led painting, cabinetry, and handyperson work across DFW.",
  },
  footerServicesTitle: {
    name: "Footer Services Title",
    defaultValue: "Services",
  },
  footerServices: {
    name: "Footer Services (Label | Link)",
    defaultValue:
      "Services | /services\nProjects | /projects\nAbout | /about\nBook | /book\nReviews | /reviews",
  },
  footerCompanyTitle: {
    name: "Footer Company Title",
    defaultValue: "Company",
  },
  footerCompany: {
    name: "Footer Company (Label | Link)",
    defaultValue: "Careers | /careers\nService Areas | /service-areas\nGallery | /projects\nBlog | /blog",
  },
  footerConnectTitle: {
    name: "Footer Connect Title",
    defaultValue: "Connect",
  },
  footerConnect: {
    name: "Footer Connect (Label | Link)",
    defaultValue: "Call us | tel:8175550147\nEmail | mailto:info@thekingdomconstructiontx.com\nDMZ office | /",
  },
  footerCopy: {
    name: "Footer Copyright",
    defaultValue: "© 2026 The Kingdom Construction. All rights reserved.",
  },
};

export const chromeProps = {
  navBrand: (propsInstance = props): ReturnType<typeof props.Text> =>
    propsInstance.Text({
      ...chromePropsDefaults.navBrand,
      group: chromeGroup,
    }),
  navLinks: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.navLinks,
      group: chromeGroup,
    }),
  navCtaLabel: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.navCtaLabel,
      group: chromeGroup,
    }),
  navCtaLink: (propsInstance = props) =>
    propsInstance.Link({
      name: "Navigation CTA Link",
      group: chromeGroup,
    }),
  navBrandLink: (propsInstance = props) =>
    propsInstance.Link({
      name: "Brand Link",
      group: chromeGroup,
    }),
  footerHeadline: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerHeadline,
      group: chromeGroup,
    }),
  footerText: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerText,
      group: chromeGroup,
    }),
  footerServicesTitle: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerServicesTitle,
      group: chromeGroup,
    }),
  footerServices: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerServices,
      group: chromeGroup,
    }),
  footerCompanyTitle: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerCompanyTitle,
      group: chromeGroup,
    }),
  footerCompany: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerCompany,
      group: chromeGroup,
    }),
  footerConnectTitle: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerConnectTitle,
      group: chromeGroup,
    }),
  footerConnect: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerConnect,
      group: chromeGroup,
    }),
  footerCopy: (propsInstance = props) =>
    propsInstance.Text({
      ...chromePropsDefaults.footerCopy,
      group: chromeGroup,
    }),
};
