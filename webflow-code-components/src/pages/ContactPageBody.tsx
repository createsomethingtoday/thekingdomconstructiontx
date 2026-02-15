import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./ContactPageBody.module.css";
import type { ReactNode } from "react";
import ConstructionHero from "../components/ConstructionHero";
import QuoteStrip from "../components/QuoteStrip";
import SectionHeader from "../components/SectionHeader";
import SectionShell from "../components/SectionShell";
import PageChrome from "../components/PageChrome";
import type { LinkValue } from "../components/link";
import { parseTitleBodyLines } from "../components/text";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

export type ContactPageBodyProps = {
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

  contactEyebrow?: string;
  contactHeading: string;
  contactBody?: string;
  contactDetails: string;

  form?: ReactNode;

  quoteHeadline: string;
  quoteDetail: string;
  quotePhoneLabel: string;
  quotePhoneNumber: string;
  quoteCtaLabel: string;
  quoteCtaLink?: LinkValue;
  quoteTone: string;
};

export default function ContactPageBody({
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
  contactEyebrow,
  contactHeading,
  contactBody,
  contactDetails,
  form,
  quoteHeadline,
  quoteDetail,
  quotePhoneLabel,
  quotePhoneNumber,
  quoteCtaLabel,
  quoteCtaLink,
  quoteTone,
}: ContactPageBodyProps) {
  const items = parseTitleBodyLines(contactDetails);

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
        <div className={styles.grid}>
          <div>
            <SectionHeader
              eyebrow={contactEyebrow}
              heading={contactHeading}
              body={contactBody}
              align="Left"
              size="Large"
              showRule={true}
            />

            {items.length ? (
              <div className={styles.details}>
                {items.map((item, index) => (
                  <div className={styles.item} key={`${item.title}-${index}`}>
                    <p className={styles.label}>{item.title}</p>
                    {item.body ? <p className={styles.value}>{item.body}</p> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.slot}>{form}</div>
        </div>
      </SectionShell>

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
