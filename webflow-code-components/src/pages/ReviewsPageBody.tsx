import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./ReviewsPageBody.module.css";
import CardGrid from "../components/CardGrid";
import ConstructionHero from "../components/ConstructionHero";
import QuoteStrip from "../components/QuoteStrip";
import ReviewCard from "../components/ReviewCard";
import SectionHeader from "../components/SectionHeader";
import SectionShell from "../components/SectionShell";
import PageChrome from "../components/PageChrome";
import type { LinkValue } from "../components/link";
import { splitLines } from "../components/text";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

type ReviewListItem = {
  quote: string;
  customerName: string;
  cityState: string;
  projectType: string;
  rating: number;
};

function parsePipedLine(line: string): string[] {
  return line
    .split("|")
    .map((part) => part.trim())
    .filter((part) => part.length);
}

function parseReviewItems(value: string): ReviewListItem[] {
  return splitLines(value)
    .map((line) => {
      const parts = parsePipedLine(line);
      const quote = parts[0] ?? "";
      const customerName = parts[1] ?? "";
      const cityState = parts[2] ?? "";
      const projectType = parts[3] ?? "";
      const ratingRaw = parts[4] ?? "";
      const rating = Number.parseInt(ratingRaw, 10);

      return {
        quote,
        customerName,
        cityState,
        projectType,
        rating: Number.isFinite(rating) ? rating : 5,
      };
    })
    .filter((item) => item.quote.length);
}

export type ReviewsPageBodyProps = {
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

  reviewsEyebrow?: string;
  reviewsHeading: string;
  reviewsBody?: string;
  reviewsItems: string;
  reviewsShowProjectTag: boolean;

  quoteHeadline: string;
  quoteDetail: string;
  quotePhoneLabel: string;
  quotePhoneNumber: string;
  quoteCtaLabel: string;
  quoteCtaLink?: LinkValue;
  quoteTone: string;
};

export default function ReviewsPageBody({
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
  reviewsEyebrow,
  reviewsHeading,
  reviewsBody,
  reviewsItems,
  reviewsShowProjectTag,
  quoteHeadline,
  quoteDetail,
  quotePhoneLabel,
  quotePhoneNumber,
  quoteCtaLabel,
  quoteCtaLink,
  quoteTone,
}: ReviewsPageBodyProps) {
  const reviews = parseReviewItems(reviewsItems);

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

      {reviews.length ? (
        <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
          <div className={styles.stack}>
            <SectionHeader
              eyebrow={reviewsEyebrow}
              heading={reviewsHeading}
              body={reviewsBody}
              align="Left"
              size="Large"
              showRule={false}
            />

            <CardGrid columns="Auto" gap="Normal">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={`${review.customerName}-${index}`}
                  quote={review.quote}
                  customerName={review.customerName}
                  cityState={review.cityState}
                  projectType={review.projectType}
                  rating={review.rating}
                  showProjectTag={reviewsShowProjectTag}
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
