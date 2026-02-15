import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./ServicesPageBody.module.css";
import BadgeRow from "../components/BadgeRow";
import CardGrid from "../components/CardGrid";
import ConstructionHero from "../components/ConstructionHero";
import FaqAccordion from "../components/FaqAccordion";
import QuoteStrip from "../components/QuoteStrip";
import SectionHeader from "../components/SectionHeader";
import SectionShell from "../components/SectionShell";
import ServiceCard from "../components/ServiceCard";
import PageChrome from "../components/PageChrome";
import type { LinkValue } from "../components/link";
import { parseTitleBodyLines, splitLines } from "../components/text";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

type ServiceListItem = {
  title: string;
  summary: string;
  href?: string;
};

function parsePipedLine(line: string): string[] {
  return line
    .split("|")
    .map((part) => part.trim())
    .filter((part) => part.length);
}

function parseServiceItems(value: string): ServiceListItem[] {
  return splitLines(value)
    .map((line) => {
      const parts = parsePipedLine(line);
      const title = parts[0] ?? "";

      if (parts.length === 1) {
        return { title, summary: "" };
      }

      if (parts.length === 2) {
        return { title, summary: parts[1] ?? "" };
      }

      return {
        title,
        summary: parts.slice(1, -1).join(" | ").trim(),
        href: parts.at(-1),
      };
    })
    .filter((item) => item.title.length);
}

export type ServicesPageBodyProps = {
  navBrand?: string;
  navBrandLink?: LinkValue;
  navLinks?: string;
  navCtaLabel?: string;
  navCtaLink?: LinkValue;

  footerHeadline?: string;
  footerText?: string;
  footerServicesTitle?: string;
  footerServices?: string;
  footerCompanyTitle?: string;
  footerCompany?: string;
  footerConnectTitle?: string;
  footerConnect?: string;
  footerCopy?: string;

  heroEyebrow: string;
  heroHeadline: string;
  heroBody: string;
  heroPrimaryLabel: string;
  heroPrimaryLink?: LinkValue;
  heroSecondaryLabel?: string;
  heroSecondaryLink?: LinkValue;
  heroBackgroundImage?: ImageValue;
  heroLayoutVariant: string;
  heroShowOverlay: boolean;

  trustBadges: string;

  servicesHeading: string;
  servicesBody?: string;
  servicesItems: string;
  servicesCtaLabel: string;

  faqHeading: string;
  faqBody?: string;
  faqItems: string;

  quoteHeadline: string;
  quoteDetail: string;
  quotePhoneLabel: string;
  quotePhoneNumber: string;
  quoteCtaLabel: string;
  quoteCtaLink?: LinkValue;
  quoteTone: string;
};

export default function ServicesPageBody({
  navBrand,
  navBrandLink,
  navLinks,
  navCtaLabel,
  navCtaLink,
  footerHeadline,
  footerText,
  footerServicesTitle,
  footerServices,
  footerCompanyTitle,
  footerCompany,
  footerConnectTitle,
  footerConnect,
  footerCopy,
  heroEyebrow,
  heroHeadline,
  heroBody,
  heroPrimaryLabel,
  heroPrimaryLink,
  heroSecondaryLabel,
  heroSecondaryLink,
  heroBackgroundImage,
  heroLayoutVariant,
  heroShowOverlay,
  trustBadges,
  servicesHeading,
  servicesBody,
  servicesItems,
  servicesCtaLabel,
  faqHeading,
  faqBody,
  faqItems,
  quoteHeadline,
  quoteDetail,
  quotePhoneLabel,
  quotePhoneNumber,
  quoteCtaLabel,
  quoteCtaLink,
  quoteTone,
}: ServicesPageBodyProps) {
  const services = parseServiceItems(servicesItems);
  const faqs = parseTitleBodyLines(faqItems);

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
      <SectionShell background="Paper" padding="Tight" maxWidth="Full">
        <ConstructionHero
          eyebrow={heroEyebrow}
          headline={heroHeadline}
          headlineTag="H1"
          body={heroBody}
          primaryLabel={heroPrimaryLabel}
          primaryLink={heroPrimaryLink}
          secondaryLabel={heroSecondaryLabel}
          secondaryLink={heroSecondaryLink}
          backgroundImage={heroBackgroundImage}
          layoutVariant={heroLayoutVariant}
          showOverlay={heroShowOverlay}
        />
      </SectionShell>

      <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
        <BadgeRow badges={trustBadges} align="Left" variant="Filled" size="Small" />
      </SectionShell>

      {services.length ? (
        <SectionShell background="Surface" padding="Normal" maxWidth="Wide">
          <div className={styles.stack}>
            <SectionHeader eyebrow={undefined} heading={servicesHeading} body={servicesBody} align="Left" size="Large" showRule={false} />

            <CardGrid columns="Auto" gap="Normal">
              {services.map((service, index) => (
                <ServiceCard
                  key={`${service.title}-${service.href ?? index}`}
                  title={service.title}
                  summary={service.summary}
                  bulletList=""
                  ctaLabel={servicesCtaLabel}
                  ctaLink={service.href ? ({ href: service.href } as LinkValue) : undefined}
                  isFeatured={index === 0}
                  tone="Light"
                />
              ))}
            </CardGrid>
          </div>
        </SectionShell>
      ) : null}

      <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
        <QuoteStrip
          headline={quoteHeadline}
          detail={quoteDetail}
          phoneLabel={quotePhoneLabel}
          phoneNumber={quotePhoneNumber}
          ctaLabel={quoteCtaLabel}
          ctaLink={quoteCtaLink}
          tone={quoteTone}
        />
      </SectionShell>

      {faqs.length ? (
        <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
          <div className={styles.stack}>
            <SectionHeader eyebrow={undefined} heading={faqHeading} body={faqBody} align="Left" size="Large" showRule={false} />

            <div className={styles.faqGrid}>
              {faqs.map((item, index) => (
                <FaqAccordion
                  key={`${item.title}-${index}`}
                  question={item.title}
                  answer={item.body ?? ""}
                  initiallyOpen={index === 0}
                />
              ))}
            </div>
          </div>
        </SectionShell>
      ) : null}
    </PageChrome>
  );
}
