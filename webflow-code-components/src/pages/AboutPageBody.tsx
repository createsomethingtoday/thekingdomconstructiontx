import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./AboutPageBody.module.css";
import ConstructionHero from "../components/ConstructionHero";
import GuaranteeBlock from "../components/GuaranteeBlock";
import ProcessSteps from "../components/ProcessSteps";
import QuoteStrip from "../components/QuoteStrip";
import SectionHeader from "../components/SectionHeader";
import SectionShell from "../components/SectionShell";
import PageChrome from "../components/PageChrome";
import type { LinkValue } from "../components/link";
import { splitLines } from "../components/text";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

export type AboutPageBodyProps = {
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

  storyEyebrow?: string;
  storyHeading: string;
  storySubheading?: string;
  storyBody: string;

  processEyebrow?: string;
  processHeading: string;
  processBody?: string;
  processSteps: string;
  processLayout: string;
  processTone: string;
  processShowNumbers: boolean;

  guaranteeBadge: string;
  guaranteeHeading: string;
  guaranteeBody: string;
  guaranteeBullets: string;
  guaranteeCtaLabel?: string;
  guaranteeCtaLink?: LinkValue;
  guaranteeTone: string;

  quoteHeadline: string;
  quoteDetail: string;
  quotePhoneLabel: string;
  quotePhoneNumber: string;
  quoteCtaLabel: string;
  quoteCtaLink?: LinkValue;
  quoteTone: string;
};

export default function AboutPageBody({
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
  storyEyebrow,
  storyHeading,
  storySubheading,
  storyBody,
  processEyebrow,
  processHeading,
  processBody,
  processSteps,
  processLayout,
  processTone,
  processShowNumbers,
  guaranteeBadge,
  guaranteeHeading,
  guaranteeBody,
  guaranteeBullets,
  guaranteeCtaLabel,
  guaranteeCtaLink,
  guaranteeTone,
  quoteHeadline,
  quoteDetail,
  quotePhoneLabel,
  quotePhoneNumber,
  quoteCtaLabel,
  quoteCtaLink,
  quoteTone,
}: AboutPageBodyProps) {
  const paragraphs = splitLines(storyBody);

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
        <div className={styles.stack}>
          <SectionHeader
            eyebrow={storyEyebrow}
            heading={storyHeading}
            body={storySubheading}
            align="Left"
            size="Large"
            showRule={true}
          />

          {paragraphs.length ? (
            <div className={styles.prose}>
              {paragraphs.map((text, index) => (
                <p className={styles.paragraph} key={`${text}-${index}`}>
                  {text}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </SectionShell>

      <SectionShell background="Surface" padding="Normal" maxWidth="Wide">
        <div className={styles.stack}>
          <SectionHeader
            eyebrow={processEyebrow}
            heading={processHeading}
            body={processBody}
            align="Left"
            size="Large"
            showRule={false}
          />

          <ProcessSteps steps={processSteps} layout={processLayout} tone={processTone} showNumbers={processShowNumbers} />
        </div>
      </SectionShell>

      <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
        <GuaranteeBlock
          badge={guaranteeBadge}
          heading={guaranteeHeading}
          body={guaranteeBody}
          bulletList={guaranteeBullets}
          ctaLabel={guaranteeCtaLabel}
          ctaLink={guaranteeCtaLink}
          tone={guaranteeTone}
        />
      </SectionShell>

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
    </PageChrome>
  );
}
