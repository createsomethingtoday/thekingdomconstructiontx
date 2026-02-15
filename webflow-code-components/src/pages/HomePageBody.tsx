import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./HomePageBody.module.css";
import { splitLines } from "../components/text";
import { normalizeLinkWithFallback, type LinkValue } from "../components/link";
import PageChrome from "../components/PageChrome";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

type MetricItem = {
  value: string;
  label: string;
};

type GalleryItem = {
  title: string;
  href: string;
  summary: string;
  image: string;
};

function parseMetricLines(value: string): MetricItem[] {
  return splitLines(value)
    .map((line) => {
      const [valueRaw, labelRaw] = line.split("|");
      const value = (valueRaw ?? "").trim();
      const label = (labelRaw ?? "").trim();

      if (!value || !label) {
        return null;
      }

      return { value, label };
    })
    .filter((item): item is MetricItem => item !== null);
}

function parseGalleryItems(value: string): GalleryItem[] {
  return splitLines(value)
    .map((line) => {
      const [titleRaw, hrefRaw, summaryRaw, imageRaw] = line.split("|");
      const title = (titleRaw ?? "").trim();
      const href = (hrefRaw ?? "").trim() || "/";
      const summary = (summaryRaw ?? "").trim();
      const image = (imageRaw ?? "").trim();

      if (!title || !image || !summary) {
        return null;
      }

      return {
        title,
        href,
        summary,
        image,
      };
    })
    .filter((item): item is GalleryItem => item !== null);
}

export type HomePageBodyProps = {
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
  heroMiniImage?: ImageValue;
  heroMiniImageAlt: string;
  heroPanelText: string;
  heroPanelCtaLabel: string;
  heroPanelCtaLink?: LinkValue;

  featureImage?: ImageValue;
  featureImageAlt: string;
  featureBadge: string;
  featureHeadline: string;
  featureBody: string;
  featureCtaLabel: string;
  featureCtaLink?: LinkValue;

  featureSideImage?: ImageValue;
  featureSideImageAlt: string;
  featureSideEyebrow: string;
  featureSideHeadline: string;
  featureSideBody: string;
  featureSideCtaLabel: string;
  featureSideCtaLink?: LinkValue;

  metricsHeadline: string;
  metricItems: string;

  storyEyebrowA: string;
  storyEyebrowB: string;
  storyHeadline: string;
  storyBody: string;
  storyImage?: ImageValue;
  storyImageAlt: string;
  storyCtaLabel: string;
  storyCtaLink?: LinkValue;

  collectionHeadline: string;
  collectionIntro: string;
  collectionCtaLabel: string;
  collectionCtaLink?: LinkValue;
  collectionCaption: string;
  collectionItems: string;

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

export default function HomePageBody({
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
  heroMiniImage,
  heroMiniImageAlt,
  heroPanelText,
  heroPanelCtaLabel,
  heroPanelCtaLink,
  featureImage,
  featureImageAlt,
  featureBadge,
  featureHeadline,
  featureBody,
  featureCtaLabel,
  featureCtaLink,
  featureSideImage,
  featureSideImageAlt,
  featureSideEyebrow,
  featureSideHeadline,
  featureSideBody,
  featureSideCtaLabel,
  featureSideCtaLink,
  metricsHeadline,
  metricItems,
  storyEyebrowA,
  storyEyebrowB,
  storyHeadline,
  storyBody,
  storyImage,
  storyImageAlt,
  storyCtaLabel,
  storyCtaLink,
  collectionHeadline,
  collectionIntro,
  collectionCtaLabel,
  collectionCtaLink,
  collectionCaption,
  collectionItems,
  footerHeadline,
  footerText,
  footerServicesTitle,
  footerServices,
  footerCompanyTitle,
  footerCompany,
  footerConnectTitle,
  footerConnect,
  footerCopy,
}: HomePageBodyProps) {
  const heroPrimary = normalizeLinkWithFallback(heroPrimaryLink, "/contact");
  const heroSecondary = normalizeLinkWithFallback(heroSecondaryLink, "/services");
  const heroPanel = normalizeLinkWithFallback(heroPanelCtaLink, "/about");
  const navCta = normalizeLinkWithFallback(navCtaLink, "/contact");
  const featurePrimary = normalizeLinkWithFallback(featureCtaLink, "/projects");
  const featureSide = normalizeLinkWithFallback(featureSideCtaLink, "/services");
  const storyCta = normalizeLinkWithFallback(storyCtaLink, "/about");
  const collectionCta = normalizeLinkWithFallback(collectionCtaLink, "/projects");

  const metrics = parseMetricLines(metricItems);
  const galleries = parseGalleryItems(collectionItems);

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
      <div className={styles.page}>
        <section className={styles.hero}>
          {heroImage?.src ? <img className={styles.heroImage} src={heroImage.src} alt={heroImageAlt} /> : null}
          <div className={styles.heroOverlay} />

          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>{heroEyebrow}</p>
            <h1 className={styles.headline}>{heroHeadline}</h1>
            <p className={styles.intro}>{heroBody}</p>

            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href={heroPrimary.href} target={heroPrimary.target} rel={heroPrimary.rel}>
                {heroPrimaryLabel}
              </a>
              <a className={styles.secondaryCta} href={heroSecondary.href} target={heroSecondary.target} rel={heroSecondary.rel}>
                {heroSecondaryLabel}
              </a>
            </div>
          </div>

          <article className={styles.heroSide} aria-label="Featured context">
            <p className={styles.sideText}>{heroPanelText}</p>
            <a className={styles.sideButton} href={heroPanel.href} target={heroPanel.target} rel={heroPanel.rel}>
              {heroPanelCtaLabel}
            </a>
          </article>

          <div className={styles.miniCard}>
            {heroMiniImage?.src ? (
              <img className={styles.miniImage} src={heroMiniImage.src} alt={heroMiniImageAlt} />
            ) : null}
          </div>
        </section>

        <section className={styles.feature}>
          <div className={styles.featureGrid}>
            <article className={styles.mainFeature}>
              {featureImage?.src ? <img className={styles.featureImage} src={featureImage.src} alt={featureImageAlt} /> : null}
              <span className={styles.tag}>{featureBadge}</span>

              <h2 className={styles.sectionTitleLarge}>{featureHeadline}</h2>
              <p className={styles.subheading}>{featureBody}</p>
              <a className={styles.linkButton} href={featurePrimary.href} target={featurePrimary.target} rel={featurePrimary.rel}>
                {featureCtaLabel}
              </a>
            </article>

            <div className={styles.featureSide}>
              <article className={styles.secondaryFeature}>
                {featureSideImage?.src ? <img className={styles.secondaryImage} src={featureSideImage.src} alt={featureSideImageAlt} /> : null}
                <span className={styles.tag}>{featureSideEyebrow}</span>
                <h3 className={styles.cardTitle}>{featureSideHeadline}</h3>
                <p className={styles.bodyText}>{featureSideBody}</p>
                <a className={styles.linkButton} href={featureSide.href} target={featureSide.target} rel={featureSide.rel}>
                  {featureSideCtaLabel}
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.metrics}>
          <h2 className={styles.metricsTitle}>{metricsHeadline}</h2>
          <div className={styles.metricGrid}>
            {metrics.map((metric) => (
              <article className={styles.metricCard} key={`${metric.label}-${metric.value}`}>
                <p className={styles.metricValue}>{metric.value}</p>
                <p className={styles.metricLabel}>{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.storyCopy}>
            <p className={styles.meta}>
              <span>{storyEyebrowA}</span>
              <span aria-hidden="true">•</span>
              <span>{storyEyebrowB}</span>
            </p>
            <h2 className={styles.sectionTitle}>{storyHeadline}</h2>
            <p>{storyBody}</p>
            <a className={styles.primaryCta} href={storyCta.href} target={storyCta.target} rel={storyCta.rel}>
              {storyCtaLabel}
            </a>
          </div>

          <article className={styles.storyMedia}>
            {storyImage?.src ? <img src={storyImage.src} alt={storyImageAlt} /> : null}
          </article>
        </section>

        <section className={styles.collection}>
          <header className={styles.collectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>{collectionHeadline}</h2>
              <p>{collectionIntro}</p>
            </div>

            <div className={styles.collectionActions}>
              <a className={styles.linkButton} href={collectionCta.href} target={collectionCta.target} rel={collectionCta.rel}>
                {collectionCtaLabel}
              </a>
              <p>{collectionCaption}</p>
            </div>
          </header>

          <div className={styles.gallery}>
            {galleries.map((item) => (
              <a className={styles.collectionItem} href={item.href} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className={styles.collectionText}>
                  <p>{item.title}</p>
                  <span>{item.summary}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageChrome>
  );
}
