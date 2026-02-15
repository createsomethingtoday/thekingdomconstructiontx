import * as css from "./ServiceCard.module.css";
import type { PropType, PropValues } from "@webflow/data-types";
import { normalizeLink, type LinkValue } from "./link";

const styles = css as unknown as Record<string, string>;

export type ServiceCardProps = {
  title: string;
  summary: string;
  bulletList: string;
  ctaLabel: string;
  ctaLink?: LinkValue;
  iconImage?: PropValues[PropType.Image];
  isFeatured: boolean;
  tone: string;
};

export default function ServiceCard({
  title,
  summary,
  bulletList,
  ctaLabel,
  ctaLink,
  iconImage,
  isFeatured,
  tone,
}: ServiceCardProps) {
  const cta = normalizeLink(ctaLink);
  const bullets = bulletList
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article
      className={[
        styles.card,
        tone === "Dark" ? styles.dark : styles.light,
        isFeatured ? styles.featured : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {iconImage?.src ? (
        <img className={styles.icon} src={iconImage.src} alt={iconImage.alt || "Service icon"} />
      ) : (
        <div className={styles.placeholderIcon} aria-hidden="true" />
      )}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>

      {bullets.length > 0 ? (
        <ul className={styles.bullets}>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <a className={styles.cta} href={cta.href} target={cta.target} rel={cta.rel}>
        {ctaLabel}
      </a>
    </article>
  );
}
