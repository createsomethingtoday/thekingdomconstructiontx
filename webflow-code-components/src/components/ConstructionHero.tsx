import * as css from "./ConstructionHero.module.css";
import type { PropType, PropValues } from "@webflow/data-types";
import { normalizeLinkWithFallback, type LinkValue } from "./link";

const styles = css as unknown as Record<string, string>;

export type ConstructionHeroProps = {
  eyebrow: string;
  headline: string;
  headlineTag: string;
  body: string;
  primaryLabel: string;
  primaryLink?: LinkValue;
  secondaryLabel?: string;
  secondaryLink?: LinkValue;
  backgroundImage?: PropValues[PropType.Image];
  layoutVariant: string;
  showOverlay: boolean;
};

export default function ConstructionHero({
  eyebrow,
  headline,
  headlineTag,
  body,
  primaryLabel,
  primaryLink,
  secondaryLabel,
  secondaryLink,
  backgroundImage,
  layoutVariant,
  showOverlay,
}: ConstructionHeroProps) {
  const primary = normalizeLinkWithFallback(primaryLink, "/contact");
  const secondary = normalizeLinkWithFallback(secondaryLink, "/services");
  const HeadlineTag = headlineTag === "H1" ? "h1" : "h2";

  return (
    <section
      className={[
        styles.hero,
        layoutVariant === "Framed" ? styles.framed : styles.fullBleed,
        showOverlay ? styles.withOverlay : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {backgroundImage?.src && (
        <img
          className={styles.backgroundImage}
          src={backgroundImage.src}
          alt={backgroundImage.alt || "Construction project background"}
        />
      )}

      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <HeadlineTag className={styles.headline}>{headline}</HeadlineTag>
        <p className={styles.body}>{body}</p>

        <div className={styles.actions}>
          <a
            className={styles.primaryButton}
            href={primary.href}
            target={primary.target}
            rel={primary.rel}
            aria-label={`Primary action: ${primaryLabel}`}
          >
            {primaryLabel}
          </a>

          {secondaryLabel?.trim() && secondary.href !== "#" ? (
            <a
              className={styles.secondaryButton}
              href={secondary.href}
              target={secondary.target}
              rel={secondary.rel}
              aria-label={`Secondary action: ${secondaryLabel}`}
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
