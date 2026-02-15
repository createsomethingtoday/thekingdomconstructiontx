import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./ServiceAreasPageBody.module.css";
import AreaCard from "../components/AreaCard";
import CardGrid from "../components/CardGrid";
import ConstructionHero from "../components/ConstructionHero";
import QuoteStrip from "../components/QuoteStrip";
import SectionHeader from "../components/SectionHeader";
import SectionShell from "../components/SectionShell";
import PageChrome from "../components/PageChrome";
import type { LinkValue } from "../components/link";
import { splitLines } from "../components/text";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

type AreaListItem = {
  city: string;
  regionLine: string;
  highlights: string;
  href?: string;
};

function parsePipedLine(line: string): string[] {
  return line
    .split("|")
    .map((part) => part.trim())
    .filter((part) => part.length);
}

function parseAreas(value: string): AreaListItem[] {
  return splitLines(value)
    .map((line) => {
      const parts = parsePipedLine(line);
      const city = parts[0] ?? "";

      if (parts.length === 1) {
        return { city, regionLine: "", highlights: "" };
      }

      if (parts.length === 2) {
        return { city, regionLine: parts[1] ?? "", highlights: "" };
      }

      if (parts.length === 3) {
        return { city, regionLine: parts[1] ?? "", highlights: parts[2] ?? "" };
      }

      return {
        city,
        regionLine: parts[1] ?? "",
        highlights: parts[2] ?? "",
        href: parts.at(-1),
      };
    })
    .filter((item) => item.city.length);
}

export type ServiceAreasPageBodyProps = {
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

  areasEyebrow?: string;
  areasHeading: string;
  areasBody?: string;
  areasItems: string;
  areasCtaLabel: string;

  quoteHeadline: string;
  quoteDetail: string;
  quotePhoneLabel: string;
  quotePhoneNumber: string;
  quoteCtaLabel: string;
  quoteCtaLink?: LinkValue;
  quoteTone: string;
};

export default function ServiceAreasPageBody({
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
  areasEyebrow,
  areasHeading,
  areasBody,
  areasItems,
  areasCtaLabel,
  quoteHeadline,
  quoteDetail,
  quotePhoneLabel,
  quotePhoneNumber,
  quoteCtaLabel,
  quoteCtaLink,
  quoteTone,
}: ServiceAreasPageBodyProps) {
  const areas = parseAreas(areasItems);

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

      {areas.length ? (
        <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
          <div className={styles.stack}>
            <SectionHeader eyebrow={areasEyebrow} heading={areasHeading} body={areasBody} align="Left" size="Large" showRule={false} />

            <CardGrid columns="Auto" gap="Normal">
              {areas.map((area, index) => (
                <AreaCard
                  key={`${area.city}-${area.href ?? index}`}
                  city={area.city}
                  regionLine={area.regionLine}
                  highlights={area.highlights}
                  ctaLabel={areasCtaLabel}
                  ctaLink={area.href ? ({ href: area.href } as LinkValue) : undefined}
                  tone="Light"
                  featured={index === 0}
                />
              ))}
            </CardGrid>
          </div>
        </SectionShell>
      ) : null}

      <SectionShell background="Surface" padding="Normal" maxWidth="Wide">
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
    </PageChrome>
  );
}
