import { useEffect, useRef } from "react";
import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./HomePageBodyV2.module.css";
import { splitLines } from "../components/text";
import { normalizeLinkWithFallback, type LinkValue } from "../components/link";
import PageChrome from "../components/PageChrome";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

type ServiceCard = {
  title: string;
  body: string;
  cta: string;
  href: string;
};

type ProcessStep = {
  step: string;
  headline: string;
  body: string;
};

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  summary: string;
  href: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

function parseServiceCards(value: string): ServiceCard[] {
  return splitLines(value)
    .map((line) => {
      const [titleRaw, bodyRaw, ctaRaw, hrefRaw] = line.split("|");
      const title = titleRaw?.trim();
      const body = bodyRaw?.trim();
      const cta = ctaRaw?.trim();
      const href = hrefRaw?.trim();

      if (!title || !body) {
        return null;
      }

      return {
        title,
        body,
        cta: cta.length > 0 ? cta : "See Service",
        href: href.length > 0 ? href : "/services",
      };
    })
    .filter((item): item is ServiceCard => item !== null);
}

function parseProcessItems(value: string): ProcessStep[] {
  return splitLines(value)
    .map((line) => {
      const [stepRaw, headlineRaw, bodyRaw] = line.split("|");
      const step = stepRaw?.trim();
      const headline = headlineRaw?.trim();
      const body = bodyRaw?.trim();

      if (!step || !headline || !body) {
        return null;
      }

      return {
        step,
        headline,
        body,
      };
    })
    .filter((item): item is ProcessStep => item !== null);
}

function parsePortfolioItems(value: string): PortfolioItem[] {
  return splitLines(value)
    .map((line) => {
      const [titleRaw, categoryRaw, imageRaw, summaryRaw, hrefRaw] = line.split("|");
      const title = titleRaw?.trim();
      const category = categoryRaw?.trim();
      const image = imageRaw?.trim();
      const summary = summaryRaw?.trim();
      const href = hrefRaw?.trim();

      if (!title || !category || !image || !summary) {
        return null;
      }

      return {
        title,
        category,
        image,
        summary,
        href: href.length > 0 ? href : "/projects",
      };
    })
    .filter((item): item is PortfolioItem => item !== null);
}

function parseTestimonials(value: string): Testimonial[] {
  return splitLines(value)
    .map((line) => {
      const [quoteRaw, authorRaw, roleRaw] = line.split("|");
      const quote = quoteRaw?.trim();
      const author = authorRaw?.trim();
      const role = roleRaw?.trim();

      if (!quote || !author || !role) {
        return null;
      }

      return {
        quote,
        author,
        role,
      };
    })
    .filter((item): item is Testimonial => item !== null);
}

const FALLBACK_SERVICE_ITEMS: ServiceCard[] = [
  {
    title: "Interior Painting",
    body: "Color, texture, and light-controlled finish work with clean lines and premium wall prep.",
    cta: "Explore Interior Services",
    href: "/services",
  },
  {
    title: "Exterior Transformation",
    body: "Pressure wash, prep, and full protective systems for long-term resilience in Texas weather.",
    cta: "See Exterior Systems",
    href: "/services",
  },
  {
    title: "Cabinet Refinishing",
    body: "Resurfacing and refinishing cabinets that lift a room's tone without replacing core structure.",
    cta: "Refinishing Portfolio",
    href: "/projects",
  },
];

const FALLBACK_PROCESS_ITEMS: ProcessStep[] = [
  { step: "01", headline: "Scope", body: "We map surfaces, deadlines, and materials in one clear proposal." },
  { step: "02", headline: "Protect", body: "We protect entries, floors, and adjoining surfaces before every stroke." },
  { step: "03", headline: "Paint", body: "Systematic prep, edges, and drying windows produce durable, even coverage." },
  { step: "04", headline: "Finish", body: "You get a final walkthrough with clean-up and care notes for long life." },
];

const FALLBACK_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Modern Living Room",
    category: "Interior Painting",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXDQ_rvXFRX6iFD5YGI_BlwWikwPHdgnJLibeXXGNPbXghGzpT95EtxeivjbE9eVEkTemT2JEFbcxrNMsS55aIL6wkKpOZuyPnL1kw14_zk_LAD0FaW-qjHSgVg2DH-XRzB2pSSfSF8sp5hq8BFoz_Sr4ys_7q8cZKvNUzlXoM7XYYDUq3_Lt5jHh2RsgJz1zPF_9QLQRer9N_iV1s2o4uPYqkGqSj_yLa4rM_kc8Ofx_STTxmo-4XvARNQK7O3gu5TB5Dgake-ezr",
    summary: "Layered neutrals and soft gradients for a calm, modern living space.",
    href: "/projects",
  },
  {
    title: "Nirnia Kitchen",
    category: "Cabinet Refinishing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXDQ_rvXFRX6iFD5YGI_BlwWikwPHdgnJLibeXXGNPbXghGzpT95EtxeivjbE9eVEkTemT2JEFbcxrNMsS55aIL6wkKpOZuyPnL1kw14_zk_LAD0FaW-qjHSgVg2DH-XRzB2pSSfSF8sp5hq8BFoz_Sr4ys_7q8cZKvNUzlXoM7XYYDUq3_Lt5jHh2RsgJz1zPF_9QLQRer9N_iV1s2o4uPYqkGqSj_yLa4rM_kc8Ofx_STTxmo-4XvARNQK7O3gu5TB5Dgake-ezr",
    summary: "Softly graded cabinetry transitions, refined edges, durable finish profile.",
    href: "/projects",
  },
  {
    title: "Alea Pro Kitchen",
    category: "Interior Painting",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPNIm5cPJbson0g9W6gMB5ofAU2OSZv3zMLIuaK0IrCUDTC4kWM0nD2CtyiCxrUTFfL0oeV06CVbPv9crm7NykdA90Tmy-dZKP1G45EYqiqTUWqjBjRnZFaGKXcZNUKn1kLbFELJoNVe9_dGQCTVSZbppuXvT1B_qstlWEoSrJFXR_kzkYN86b5TJl84a5PzKn5UBpdlyqEKIDV1ezN-N8SrqIhkaDHN4UDrJmEimxpA165oGIxx0KlF8Z3bv4iX1E65pT96s95NPZ",
    summary: "Linear contrast, clear surfaces, and restrained accents for high-end utility.",
    href: "/projects",
  },
];

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { quote: "Every edge was flawless, and their prep was cleaner than expected. We felt confident from day one.", author: "M. Reynolds", role: "Interior Upgrade Client" },
  { quote: "The team was disciplined, responsive, and transparent at every check-in. Work looks finished.", author: "A. Chen", role: "Kitchen Refacing Client" },
  { quote: "Fast turnaround, no mess, and excellent color consistency across all surfaces.", author: "D. Patel", role: "Exterior Project Client" },
];

export type HomePageBodyV2Props = {
  navBrand?: string;
  navLinks?: string;
  navCtaLabel?: string;
  navCtaLink?: LinkValue;
  navBrandLink?: LinkValue;

  heroImage?: ImageValue;
  heroImageAlt: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroBody: string;
  heroPrimaryLabel: string;
  heroPrimaryLink?: LinkValue;
  heroSecondaryLabel: string;
  heroSecondaryLink?: LinkValue;

  servicesHeadline: string;
  servicesIntro: string;
  serviceCards: string;

  processHeadline: string;
  processIntro: string;
  processItems: string;

  portfolioHeadline: string;
  portfolioIntro: string;
  portfolioItems: string;

  testimonialHeadline: string;
  testimonialIntro: string;
  testimonialItems: string;

  quoteHeadline: string;
  quoteBody: string;
  quotePrimaryLabel: string;
  quotePrimaryLink?: LinkValue;
  quotePhone: string;
  quoteEmail: string;

  footerHeadline?: string;
  footerText?: string;
  footerServicesTitle?: string;
  footerServices?: string;
  footerCompanyTitle?: string;
  footerCompany?: string;
  footerConnectTitle?: string;
  footerConnect?: string;
  footerCopy?: string;
};

export default function HomePageBodyV2({
  navBrand,
  navLinks,
  navCtaLabel,
  navCtaLink,
  navBrandLink,
  heroImage,
  heroImageAlt,
  heroEyebrow,
  heroHeadline,
  heroBody,
  heroPrimaryLabel,
  heroPrimaryLink,
  heroSecondaryLabel,
  heroSecondaryLink,
  servicesHeadline,
  servicesIntro,
  serviceCards,
  processHeadline,
  processIntro,
  processItems,
  portfolioHeadline,
  portfolioIntro,
  portfolioItems,
  testimonialHeadline,
  testimonialIntro,
  testimonialItems,
  quoteHeadline,
  quoteBody,
  quotePrimaryLabel,
  quotePrimaryLink,
  quotePhone,
  quoteEmail,
  footerHeadline,
  footerText,
  footerServicesTitle,
  footerServices,
  footerCompanyTitle,
  footerCompany,
  footerConnectTitle,
  footerConnect,
  footerCopy,
}: HomePageBodyV2Props) {
  const heroPrimary = normalizeLinkWithFallback(heroPrimaryLink, "/projects");
  const heroSecondary = normalizeLinkWithFallback(heroSecondaryLink, "/contact");
  const quotePrimary = normalizeLinkWithFallback(quotePrimaryLink, "/contact");
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = parseServiceCards(serviceCards);
  const process = parseProcessItems(processItems);
  const portfolio = parsePortfolioItems(portfolioItems);
  const testimonials = parseTestimonials(testimonialItems);

  const fallbackItems = services.length ? services : FALLBACK_SERVICE_ITEMS;
  const fallbackProcess = process.length ? process : FALLBACK_PROCESS_ITEMS;
  const fallbackPortfolio = portfolio.length ? portfolio : FALLBACK_PORTFOLIO_ITEMS;
  const fallbackTestimonials = testimonials.length ? testimonials : FALLBACK_TESTIMONIALS;
  const quotePhoneHref = quotePhone.startsWith("tel:") ? quotePhone : `tel:${quotePhone}`;
  const quoteEmailHref = quoteEmail.startsWith("mailto:") ? quoteEmail : `mailto:${quoteEmail}`;

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const root = sectionRef.current;
    if (!root) {
      return;
    }

    const nodes = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    let raf = 0;
    const updateProgress = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, window.scrollY / max));
      root.style.setProperty("--home-v2-scroll-progress", progress.toString());
      raf = 0;
    };

    const scheduleUpdate = () => {
      if (!raf) {
        raf = window.requestAnimationFrame(updateProgress);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }

      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <PageChrome
      navBrand={navBrand}
      navBrandLink={navBrandLink}
      navLinks={navLinks}
      navCtaLabel={navCtaLabel}
      navCtaLink={navCtaLink}
      footerHeadline={footerHeadline}
      footerText={footerText}
      footerServicesTitle={footerServicesTitle}
      footerServices={footerServices}
      footerCompanyTitle={footerCompanyTitle}
      footerCompany={footerCompany}
      footerConnectTitle={footerConnectTitle}
      footerConnect={footerConnect}
      footerCopy={footerCopy}
    >
      <div className={styles.page} ref={sectionRef}>
        <div className={styles.scrollTrack} aria-hidden="true">
          <span className={styles.scrollFill} />
        </div>

        <section className={styles.hero} data-reveal>
          <div className={styles.heroMedia}>
            {heroImage?.src ? <img src={heroImage.src} alt={heroImageAlt} /> : null}
            <div className={styles.heroScrim} />
          </div>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>{heroEyebrow}</p>
            <h1 className={styles.headline}>{heroHeadline}</h1>
            <p className={styles.heroBody}>{heroBody}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href={heroPrimary.href} target={heroPrimary.target} rel={heroPrimary.rel}>
                {heroPrimaryLabel}
              </a>
              <a className={styles.secondaryCta} href={heroSecondary.href} target={heroSecondary.target} rel={heroSecondary.rel}>
                {heroSecondaryLabel}
              </a>
            </div>
          </div>
        </section>

        <section className={styles.scene} data-reveal>
          <p className={styles.kicker}>What We Build</p>
          <h2 className={styles.sectionTitle}>{servicesHeadline}</h2>
          <p className={styles.sectionBody}>{servicesIntro}</p>

          <div className={styles.services}>
            {fallbackItems.map((service) => {
              const link = normalizeLinkWithFallback(
                service.href ? ({ href: service.href } as LinkValue) : undefined,
                "/services",
              );
              return (
                <article className={styles.serviceCard} key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <a href={link.href} target={link.target} rel={link.rel}>
                    {service.cta}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.scene} data-reveal>
          <p className={styles.kicker}>Our Process</p>
          <h2 className={styles.sectionTitle}>{processHeadline}</h2>
          <p className={styles.sectionBody}>{processIntro}</p>

          <ol className={styles.process}>
            {fallbackProcess.map((step) => (
              <li className={styles.processItem} key={step.step}>
                <span className={styles.processIndex} aria-hidden="true">
                  {step.step}
                </span>
                <div>
                  <h3>{step.headline}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.scene} data-reveal>
          <p className={styles.kicker}>Selected Work</p>
          <h2 className={styles.sectionTitle}>{portfolioHeadline}</h2>
          <p className={styles.sectionBody}>{portfolioIntro}</p>

          <div className={styles.gallery}>
            {fallbackPortfolio.map((project) => {
              const link = normalizeLinkWithFallback(
                project.href ? ({ href: project.href } as LinkValue) : undefined,
                "/projects",
              );
              return (
                <a className={styles.projectCard} key={`${project.title}-${project.category}`} href={link.href} target={link.target} rel={link.rel}>
                  <img src={project.image} alt={`${project.title} ${project.category}`} />
                  <div className={styles.projectCardCopy}>
                    <p className={styles.projectMeta}>{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className={styles.scene} data-reveal>
          <p className={styles.kicker}>Testimonials</p>
          <h2 className={styles.sectionTitle}>{testimonialHeadline}</h2>
          <p className={styles.sectionBody}>{testimonialIntro}</p>

          <div className={styles.testimonials}>
            {fallbackTestimonials.map((item) => (
              <blockquote key={item.author} className={styles.testimonial}>
                <p>{item.quote}</p>
                <cite>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className={styles.quote} data-reveal>
          <div className={styles.quoteInner}>
            <p className={styles.eyebrow}>{heroEyebrow}</p>
            <h2 className={styles.quoteHeading}>{quoteHeadline}</h2>
            <p>{quoteBody}</p>
            <a className={styles.quoteCta} href={quotePrimary.href} target={quotePrimary.target} rel={quotePrimary.rel}>
              {quotePrimaryLabel}
            </a>
            <div className={styles.contact}>
              <a href={quotePhoneHref}>Call {quotePhone}</a>
              <a href={quoteEmailHref}>Email {quoteEmail}</a>
            </div>
          </div>
        </section>
      </div>
    </PageChrome>
  );
}
