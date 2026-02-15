import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./BlogPageBody.module.css";
import BlogCard from "../components/BlogCard";
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

type BlogListItem = {
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  href?: string;
};

function parsePipedLine(line: string): string[] {
  return line
    .split("|")
    .map((part) => part.trim())
    .filter((part) => part.length);
}

function parseBlogItems(value: string): BlogListItem[] {
  return splitLines(value)
    .map((line) => {
      const parts = parsePipedLine(line);
      const title = parts[0] ?? "";

      if (parts.length === 1) {
        return { title, date: "", excerpt: "" };
      }

      if (parts.length === 2) {
        return { title, date: parts[1] ?? "", excerpt: "" };
      }

      if (parts.length === 3) {
        return { title, date: parts[1] ?? "", excerpt: parts[2] ?? "" };
      }

      if (parts.length === 4) {
        return { title, date: parts[1] ?? "", excerpt: parts[2] ?? "", category: parts[3] ?? "" };
      }

      return {
        title,
        date: parts[1] ?? "",
        excerpt: parts[2] ?? "",
        category: parts[3] ?? "",
        href: parts.at(-1),
      };
    })
    .filter((item) => item.title.length);
}

export type BlogPageBodyProps = {
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

  blogEyebrow?: string;
  blogHeading: string;
  blogBody?: string;
  blogItems: string;
  blogCtaLabel: string;

  quoteHeadline: string;
  quoteDetail: string;
  quotePhoneLabel: string;
  quotePhoneNumber: string;
  quoteCtaLabel: string;
  quoteCtaLink?: LinkValue;
  quoteTone: string;
};

export default function BlogPageBody({
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
  blogEyebrow,
  blogHeading,
  blogBody,
  blogItems,
  blogCtaLabel,
  quoteHeadline,
  quoteDetail,
  quotePhoneLabel,
  quotePhoneNumber,
  quoteCtaLabel,
  quoteCtaLink,
  quoteTone,
}: BlogPageBodyProps) {
  const posts = parseBlogItems(blogItems);

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

      {posts.length ? (
        <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
          <div className={styles.stack}>
            <SectionHeader eyebrow={blogEyebrow} heading={blogHeading} body={blogBody} align="Left" size="Large" showRule={false} />

            <CardGrid columns="Auto" gap="Normal">
              {posts.map((post, index) => (
                <BlogCard
                  key={`${post.title}-${post.href ?? index}`}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  category={post.category}
                  ctaLabel={blogCtaLabel}
                  ctaLink={post.href ? ({ href: post.href } as LinkValue) : undefined}
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
