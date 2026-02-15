import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import HomePageBodyV2 from "./HomePageBodyV2";
import { chromeProps } from "../pageChromeDefaults";

export default declareComponent(HomePageBodyV2, {
  name: "Home Page Body V2",
  description: "Premium one-page composition inspired by the Kimi K design with scroll-reveal interactions.",
  group: "Kingdom Construction / Pages",
  props: {
    navBrand: chromeProps.navBrand(props),
    navLinks: chromeProps.navLinks(props),
    navCtaLabel: chromeProps.navCtaLabel(props),
    navCtaLink: chromeProps.navCtaLink(props),
    navBrandLink: chromeProps.navBrandLink(props),

    heroImage: props.Image({ name: "Hero Background", group: "Hero" }),
    heroImageAlt: props.Text({
      name: "Hero Image Alt",
      defaultValue: "Luxury interior with modern painted finishes",
      group: "Hero",
    }),
    heroEyebrow: props.Text({
      name: "Hero Eyebrow",
      defaultValue: "Arlington Luxury Interiors & Exterior Painting",
      group: "Hero",
    }),
    heroHeadline: props.Text({
      name: "Hero Headline",
      defaultValue: "Built for elegance. Finishes that endure.",
      group: "Hero",
    }),
    heroBody: props.Text({
      name: "Hero Body",
      defaultValue:
        "A complete paint, cabinetry, and finishes workflow tailored for high-end homes across Texas—planned cleanly, communicated clearly, executed with precision.",
      group: "Hero",
    }),
    heroPrimaryLabel: props.Text({
      name: "Hero Primary Button Label",
      defaultValue: "View Portfolio",
      group: "Hero",
    }),
    heroPrimaryLink: props.Link({ name: "Hero Primary Button Link", group: "Hero" }),
    heroSecondaryLabel: props.Text({
      name: "Hero Secondary Button Label",
      defaultValue: "Get a Quote",
      group: "Hero",
    }),
    heroSecondaryLink: props.Link({ name: "Hero Secondary Button Link", group: "Hero" }),

    servicesHeadline: props.Text({
      name: "Services Headline",
      defaultValue: "Precision Services",
      group: "Services",
    }),
    servicesIntro: props.Text({
      name: "Services Intro",
      defaultValue:
        "From interiors to exteriors, our process combines design discipline with durable systems for long-lived results.",
      group: "Services",
    }),
    serviceCards: props.Text({
      name: "Service Cards",
      defaultValue:
        "Interior Painting | Crisp color stories with controlled edge detail | Explore Interior Services | /services\nExterior Painting | Protective exterior systems and full preparation protocol | Explore Exterior Systems | /services\nCabinet Refinishing | Durable finishes and edge-perfect surfaces | Browse Cabinet Work | /projects",
      group: "Services",
    }),

    processHeadline: props.Text({
      name: "Process Headline",
      defaultValue: "A Disciplined Process",
      group: "Process",
    }),
    processIntro: props.Text({
      name: "Process Intro",
      defaultValue:
        "Every project follows a transparent sequence: plan, protect, execute, and finish with quality verification.",
      group: "Process",
    }),
    processItems: props.Text({
      name: "Process Steps",
      defaultValue:
        "01 | Scope | Site walkthrough, measurements, timeline, and itemized plan.\n02 | Prepare | Surface prep, masking, and controlled coverage workflow.\n03 | Finish | Expert application with quality checkpoints and dust control.\n04 | Walk | Final walk-through, cleanup, and long-term care guidance.",
      group: "Process",
    }),

    portfolioHeadline: props.Text({
      name: "Portfolio Headline",
      defaultValue: "Curated Work",
      group: "Portfolio",
    }),
    portfolioIntro: props.Text({
      name: "Portfolio Intro",
      defaultValue:
        "Recent residential work balancing refined design, livability, and long-term performance.",
      group: "Portfolio",
    }),
    portfolioItems: props.Text({
      name: "Portfolio Items",
      defaultValue:
        "Modern Living Room|Interior Painting|https://lh3.googleusercontent.com/aida-public/AB6AXuAXDQ_rvXFRX6iFD5YGI_BlwWikwPHdgnJLibeXXGNPbXghGzpT95EtxeivjbE9eVEkTemT2JEFbcxrNMsS55aIL6wkKpOZuyPnL1kw14_zk_LAD0FaW-qjHSgVg2DH-XRzB2pSSfSF8sp5hq8BFoz_Sr4ys_7q8cZKvNUzlXoM7XYYDUq3_Lt5jHh2RsgJz1zPF_9QLQRer9N_iV1s2o4uPYqkGqSj_yLa4rM_kc8Ofx_STTxmo-4XvARNQK7O3gu5TB5Dgake-ezr|Design-forward interior restoration with painterly depth.|/projects\nAlea Pro Kitchen|Cabinet Refinishing|https://lh3.googleusercontent.com/aida-public/AB6AXuCPNIm5cPJbson0g9W6gMB5ofAU2OSZv3zMLIuaK0IrCUDTC4kWM0nD2CtyiCxrUTFfL0oeV06CVbPv9crm7NykdA90Tmy-dZKP1G45EYqiqTUWqjBjRnZFaGKXcZNUKn1kLbFELJoNVe9_dGQCTVSZbppuXvT1B_qstlWEoSrJFXR_kzkYN86b5TJl84a5PzKn5UBpdlyqEKIDV1ezN-N8SrqIhkaDHN4UDrJmEimxpA165oGIxx0KlF8Z3bv4iX1E65pT96s95NPZ|Refined wood tones and premium surface consistency.|/projects\nNirnia Kitchen|Cabinet Refinishing|https://lh3.googleusercontent.com/aida-public/AB6AXuAXDQ_rvXFRX6iFD5YGI_BlwWikwPHdgnJLibeXXGNPbXghGzpT95EtxeivjbE9eVEkTemT2JEFbcxrNMsS55aIL6wkKpOZuyPnL1kw14_zk_LAD0FaW-qjHSgVg2DH-XRzB2pSSfSF8sp5hq8BFoz_Sr4ys_7q8cZKvNUzlXoM7XYYDUq3_Lt5jHh2RsgJz1zPF_9QLQRer9N_iV1s2o4uPYqkGqSj_yLa4rM_kc8Ofx_STTxmo-4XvARNQK7O3gu5TB5Dgake-ezr|Practical modern materials with clean, controlled transitions.|/projects",
      group: "Portfolio",
    }),

    testimonialHeadline: props.Text({
      name: "Testimonial Headline",
      defaultValue: "What Clients Say",
      group: "Testimonials",
    }),
    testimonialIntro: props.Text({
      name: "Testimonial Intro",
      defaultValue:
        "Clients consistently cite our precision, cleanliness, and end-of-day communication.",
      group: "Testimonials",
    }),
    testimonialItems: props.Text({
      name: "Testimonials",
      defaultValue:
        "Every edge was flawless, and their prep was cleaner than expected. We felt confident from day one.|M. Reynolds|Interior Painting Client\nThe team was disciplined, responsive, and transparent at every check-in. Work looks finished.|A. Chen|Kitchen Refacing Client\nFast turnaround, no mess, and excellent color consistency across all surfaces.|D. Patel|Exterior Painting Client",
      group: "Testimonials",
    }),

    quoteHeadline: props.Text({
      name: "Quote Headline",
      defaultValue: "Ready to elevate your home?",
      group: "Call to Action",
    }),
    quoteBody: props.Text({
      name: "Quote Body",
      defaultValue:
        "Tell us your timeline and requirements. We respond with a practical scope and clear recommendation within one business day.",
      group: "Call to Action",
    }),
    quotePrimaryLabel: props.Text({
      name: "Quote CTA Label",
      defaultValue: "Get a Free Quote",
      group: "Call to Action",
    }),
    quotePrimaryLink: props.Link({ name: "Quote CTA Link", group: "Call to Action" }),
    quotePhone: props.Text({
      name: "Quote Phone",
      defaultValue: "817-555-0147",
      group: "Call to Action",
    }),
    quoteEmail: props.Text({
      name: "Quote Email",
      defaultValue: "mailto:info@thekingdomconstructiontx.com",
      group: "Call to Action",
    }),

    footerHeadline: chromeProps.footerHeadline(props),
    footerText: chromeProps.footerText(props),
    footerServicesTitle: chromeProps.footerServicesTitle(props),
    footerServices: chromeProps.footerServices(props),
    footerCompanyTitle: chromeProps.footerCompanyTitle(props),
    footerCompany: chromeProps.footerCompany(props),
    footerConnectTitle: chromeProps.footerConnectTitle(props),
    footerConnect: chromeProps.footerConnect(props),
    footerCopy: chromeProps.footerCopy(props),
  },
  options: {
    applyTagSelectors: true,
    ssr: true,
  },
});
