import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import HomePageBody from "./HomePageBody";
import { chromeProps } from "../pageChromeDefaults";

export default declareComponent(HomePageBody, {
  name: "Home Page Body",
  description:
    "High-end stitched page composition with editor controls for hero, feature sections, portfolio, metrics, nav, and footer.",
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
      defaultValue: "Luxury modern living room with floor to ceiling windows",
      group: "Hero",
    }),
    heroEyebrow: props.Text({
      name: "Hero Eyebrow",
      defaultValue: "Contemporary Home Transformation",
      group: "Hero",
    }),
    heroHeadline: props.Text({
      name: "Hero Headline",
      defaultValue: "Built for style. Finished for life.",
      group: "Hero",
    }),
    heroBody: props.Text({
      name: "Hero Body",
      defaultValue:
        "Interior and exterior painting, cabinetry, and handyman upgrades for luxury homes across Texas—without disruption and without delay.",
      group: "Hero",
    }),
    heroPrimaryLabel: props.Text({ name: "Hero Primary Button Label", defaultValue: "View Projects", group: "Hero" }),
    heroPrimaryLink: props.Link({ name: "Hero Primary Button Link", group: "Hero" }),
    heroSecondaryLabel: props.Text({
      name: "Hero Secondary Button Label",
      defaultValue: "Request a Quote",
      group: "Hero",
    }),
    heroSecondaryLink: props.Link({ name: "Hero Secondary Button Link", group: "Hero" }),
    heroMiniImage: props.Image({ name: "Hero Mini Image", group: "Hero" }),
    heroMiniImageAlt: props.Text({
      name: "Hero Mini Image Alt",
      defaultValue: "Interior detail",
      group: "Hero",
    }),
    heroPanelText: props.Text({
      name: "Hero Side Panel Text",
      defaultValue:
        "From one-room refreshes to full-home transformations, we combine design discipline with practical craftsmanship.",
      group: "Hero",
    }),
    heroPanelCtaLabel: props.Text({
      name: "Hero Side Panel CTA Label",
      defaultValue: "Explore Our Process",
      group: "Hero",
    }),
    heroPanelCtaLink: props.Link({ name: "Hero Side Panel CTA Link", group: "Hero" }),

    featureImage: props.Image({ name: "Feature Image", group: "Feature Spotlight" }),
    featureImageAlt: props.Text({
      name: "Feature Image Alt",
      defaultValue: "Modern minimalist living room",
      group: "Feature Spotlight",
    }),
    featureBadge: props.Text({
      name: "Feature Badge",
      defaultValue: "Premium Craftsmanship",
      group: "Feature Spotlight",
    }),
    featureHeadline: props.Text({
      name: "Feature Headline",
      defaultValue: "Precision work for timeless spaces",
      group: "Feature Spotlight",
    }),
    featureBody: props.Text({
      name: "Feature Body",
      defaultValue:
        "Meticulous prep, controlled systems, and consistent paint edges produce surfaces that look intentional and hold their finish over time.",
      group: "Feature Spotlight",
    }),
    featureCtaLabel: props.Text({
      name: "Feature CTA Label",
      defaultValue: "Explore Services",
      group: "Feature Spotlight",
    }),
    featureCtaLink: props.Link({ name: "Feature CTA Link", group: "Feature Spotlight" }),

    featureSideImage: props.Image({ name: "Secondary Feature Image", group: "Feature Spotlight" }),
    featureSideImageAlt: props.Text({
      name: "Secondary Feature Image Alt",
      defaultValue: "Outdoor chair design",
      group: "Feature Spotlight",
    }),
    featureSideEyebrow: props.Text({
      name: "Secondary Feature Eyebrow",
      defaultValue: "Aesthetic Standards",
      group: "Feature Spotlight",
    }),
    featureSideHeadline: props.Text({
      name: "Secondary Feature Headline",
      defaultValue: "Design-led execution with practical results",
      group: "Feature Spotlight",
    }),
    featureSideBody: props.Text({
      name: "Secondary Feature Body",
      defaultValue:
        "We blend refined styling with residential practicality so your upgrades deliver beauty and daily usability.",
      group: "Feature Spotlight",
    }),
    featureSideCtaLabel: props.Text({
      name: "Secondary Feature CTA Label",
      defaultValue: "See Work Types",
      group: "Feature Spotlight",
    }),
    featureSideCtaLink: props.Link({ name: "Secondary Feature CTA Link", group: "Feature Spotlight" }),

    metricsHeadline: props.Text({
      name: "Metrics Headline",
      defaultValue: "Trusted by clients across Texas",
      group: "Proof",
    }),
    metricItems: props.Text({
      name: "Metric Items",
      defaultValue:
        "500+|Projects completed\n48hr|Average response window\n98%|Client satisfaction\n8+|Years in luxury project work",
      group: "Proof",
    }),

    storyEyebrowA: props.Text({ name: "Story Eyebrow A", defaultValue: "Elegant Interiors", group: "Story" }),
    storyEyebrowB: props.Text({ name: "Story Eyebrow B", defaultValue: "Reliable Process", group: "Story" }),
    storyHeadline: props.Text({
      name: "Story Headline",
      defaultValue: "Modern style. Timeless comfort.",
      group: "Story",
    }),
    storyBody: props.Text({
      name: "Story Body",
      defaultValue:
        "Each project follows one sequence: scope, schedule, prep, execution, and a quality walkthrough. Clear communication at every stage keeps every timeline transparent.",
      group: "Story",
    }),
    storyImage: props.Image({ name: "Story Image", group: "Story" }),
    storyImageAlt: props.Text({
      name: "Story Image Alt",
      defaultValue: "Modern living room wide angle",
      group: "Story",
    }),
    storyCtaLabel: props.Text({ name: "Story CTA Label", defaultValue: "Talk to Our Team", group: "Story" }),
    storyCtaLink: props.Link({ name: "Story CTA Link", group: "Story" }),

    collectionHeadline: props.Text({
      name: "Portfolio Headline",
      defaultValue: "Explore Our Curated Collection",
      group: "Portfolio",
    }),
    collectionIntro: props.Text({
      name: "Portfolio Intro",
      defaultValue: "Recent work across living spaces, kitchens, and exteriors where design and practicality are balanced.",
      group: "Portfolio",
    }),
    collectionCtaLabel: props.Text({
      name: "Portfolio CTA Label",
      defaultValue: "View All Collections",
      group: "Portfolio",
    }),
    collectionCtaLink: props.Link({ name: "Portfolio CTA Link", group: "Portfolio" }),
    collectionCaption: props.Text({
      name: "Portfolio Caption",
      defaultValue: "Every room receives a finish-first design system built to hold up under daily use.",
      group: "Portfolio",
    }),
    collectionItems: props.Text({
      name: "Portfolio Items",
      defaultValue:
        "Contemporary Living | /projects | Crisp walls and soft textures | https://lh3.googleusercontent.com/aida-public/AB6AXuAKdap_EeIhXEJxxKSiMOeGkg44e_e1hWYkqZ9e_oEubCdNQgyLtINAxSAEhA9VqTDnhyG5uEwnZP1BWrTyZh_g1y4qYoADJGewExFbJVI8Eo-6-4HNiuxavHMa9rQukRZ3d3ONDnDI6GRmjBmjcOOE4YsMfGN8AxmSebNYaqeAXA2IOYA2ISfXMMKNyLgO1c0qBcjlTzUwt-VwYpnqWqcjs_EB0mfj-7TQZjq6SeaXy7zxe9V41wvPTEae99c-XvTYGsu-FnW8Zokr\nNirnia Kitchen | /projects | Durable finishes for daily living | https://lh3.googleusercontent.com/aida-public/AB6AXuAXDQ_rvXFRX6iFD5YGI_BlwWikwPHdgnJLibeXXGNPbXghGzpT95EtxeivjbE9eVEkTemT2JEFbcxrNMsS55aIL6wkKpOZuyPnL1kw14_zk_LAD0FaW-qjHSgVg2DH-XRzB2pSSfSF8sp5hq8BFoz_Sr4ys_7q8cZKvNUzlXoM7XYYDUq3_Lt5jHh2RsgJz1zPF_9QLQRer9N_iV1s2o4uPYqkGqSj_yLa4rM_kc8Ofx_STTxmo-4XvARNQK7O3gu5TB5Dgake-ezr\nAlea Pro Kitchen | /projects | Minimalism with premium edge | https://lh3.googleusercontent.com/aida-public/AB6AXuCPNIm5cPJbson0g9W6gMB5ofAU2OSZv3zMLIuaK0IrCUDTC4kWM0nD2CtyiCxrUTFfL0oeV06CVbPv9crm7NykdA90Tmy-dZKP1G45EYqiqTUWqjBjRnZFaGKXcZNUKn1kLbFELJoNVe9_dGQCTVSZbppuXvT1B_qstlWEoSrJFXR_kzkYN86b5TJl84a5PzKn5UBpdlyqEKIDV1ezN-N8SrqIhkaDHN4UDrJmEimxpA165oGIxx0KlF8Z3bv4iX1E65pT96s95NPZ\nModern Living Room | /projects | Soft color, modern geometry | https://lh3.googleusercontent.com/aida-public/AB6AXuCUeHJ3u6aytgTsWkjxHTv3zSVreRBKLbDccEeETf5SZE7We0v36RyFuiJkXg1h-Yz41BCkeu58sGzNYthMVLTw_PVOgi2omwI5y2XZmu8ExlMrs94XfbepXjbFp87ZBwecj5WbZuFHjxtSY4aTGYL1nLxk_FXBys-YJu_Hgn0EcraRH8jkMW-KOouHfQSAJ4BQVHXB0gM5W0EhsGA8vgQ_teGbK89iqb26Mzbotx0w3BP-D66kYM1Iq2wPd5skTnQanLqLq9XzX2jp\nArtex Kitchen | /projects | Texture-forward but clean transitions | https://lh3.googleusercontent.com/aida-public/AB6AXuBX152W_8wl-d-mLoT3M0BSbWv9d7xnzLj9S0xiFJlxG9L6h7X2RdrGK_kPYvMWPKde9SHk70m2-BIOkCQzxEjK-I0uC2DOVryFi_uImnVx54MVfrX768FGaEng9vxPN70Rd7qALiKReGMjP0925iFT8pf9Z3mUDKDTI9sQXYw44RAsi2p7S9BmE1s6oDRkbCYUw4UwM4wmT35C738L6wQiXq4av-HMyv5jXMZJpoPu7J4zbO5fM-4G_m43REMLuYoTd3Ewe3DZKNJQ",
      group: "Portfolio",
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
