import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./ProjectsPageBody.module.css";
import CardGrid from "../components/CardGrid";
import ConstructionHero from "../components/ConstructionHero";
import ProjectCard from "../components/ProjectCard";
import QuoteStrip from "../components/QuoteStrip";
import SectionHeader from "../components/SectionHeader";
import SectionShell from "../components/SectionShell";
import PageChrome from "../components/PageChrome";
import type { LinkValue } from "../components/link";
import { splitLines } from "../components/text";

const styles = css as unknown as Record<string, string>;

type ImageValue = PropValues[PropType.Image];

type ProjectListItem = {
  title: string;
  location: string;
  summary: string;
  href?: string;
};

function parsePipedLine(line: string): string[] {
  return line
    .split("|")
    .map((part) => part.trim())
    .filter((part) => part.length);
}

function parseProjectItems(value: string): ProjectListItem[] {
  return splitLines(value)
    .map((line) => {
      const parts = parsePipedLine(line);
      const title = parts[0] ?? "";

      if (parts.length === 1) {
        return { title, location: "", summary: "" };
      }

      if (parts.length === 2) {
        return { title, location: parts[1] ?? "", summary: "" };
      }

      if (parts.length === 3) {
        return { title, location: parts[1] ?? "", summary: parts[2] ?? "" };
      }

      return {
        title,
        location: parts[1] ?? "",
        summary: parts.slice(2, -1).join(" | ").trim(),
        href: parts.at(-1),
      };
    })
    .filter((item) => item.title.length);
}

export type ProjectsPageBodyProps = {
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

  projectsEyebrow?: string;
  projectsHeading: string;
  projectsBody?: string;
  projectsItems: string;
  projectsCtaLabel: string;

  quoteHeadline: string;
  quoteDetail: string;
  quotePhoneLabel: string;
  quotePhoneNumber: string;
  quoteCtaLabel: string;
  quoteCtaLink?: LinkValue;
  quoteTone: string;
};

export default function ProjectsPageBody({
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
  projectsEyebrow,
  projectsHeading,
  projectsBody,
  projectsItems,
  projectsCtaLabel,
  quoteHeadline,
  quoteDetail,
  quotePhoneLabel,
  quotePhoneNumber,
  quoteCtaLabel,
  quoteCtaLink,
  quoteTone,
}: ProjectsPageBodyProps) {
  const projects = parseProjectItems(projectsItems);

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

      {projects.length ? (
        <SectionShell background="Paper" padding="Normal" maxWidth="Wide">
          <div className={styles.stack}>
            <SectionHeader
              eyebrow={projectsEyebrow}
              heading={projectsHeading}
              body={projectsBody}
              align="Left"
              size="Large"
              showRule={false}
            />

            <CardGrid columns="Auto" gap="Normal">
              {projects.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${project.href ?? index}`}
                  title={project.title}
                  location={project.location}
                  summary={project.summary}
                  tags=""
                  ctaLabel={projectsCtaLabel}
                  ctaLink={project.href ? ({ href: project.href } as LinkValue) : undefined}
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
