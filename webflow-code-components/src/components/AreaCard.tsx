import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./AreaCard.module.css";
import { normalizeLink, type LinkValue } from "./link";
import { splitLines } from "./text";

const styles = css as unknown as Record<string, string>;

export type AreaCardProps = {
  city: string;
  regionLine: string;
  highlights: string;
  ctaLabel: string;
  ctaLink?: LinkValue;
  image?: PropValues[PropType.Image];
  tone: string;
  featured: boolean;
};

export default function AreaCard({ city, regionLine, highlights, ctaLabel, ctaLink, image, tone, featured }: AreaCardProps) {
  const cta = normalizeLink(ctaLink);
  const items = splitLines(highlights);

  return (
    <article
      className={[
        styles.card,
        tone === "Dark" ? styles.dark : styles.light,
        featured ? styles.featured : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {image?.src ? <img className={styles.image} src={image.src} alt={image.alt || `${city} service area`} /> : null}

      <div className={styles.content}>
        <h3 className={styles.city}>{city}</h3>
        <p className={styles.region}>{regionLine}</p>

        {items.length ? (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        <a className={styles.cta} href={cta.href} target={cta.target} rel={cta.rel}>
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
