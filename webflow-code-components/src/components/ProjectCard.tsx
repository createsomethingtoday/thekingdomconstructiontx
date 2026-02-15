import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./ProjectCard.module.css";
import { normalizeLink, type LinkValue } from "./link";
import { splitLines } from "./text";

const styles = css as unknown as Record<string, string>;

export type ProjectCardProps = {
  title: string;
  location: string;
  summary: string;
  image?: PropValues[PropType.Image];
  tags: string;
  ctaLabel: string;
  ctaLink?: LinkValue;
};

export default function ProjectCard({ title, location, summary, image, tags, ctaLabel, ctaLink }: ProjectCardProps) {
  const items = splitLines(tags);
  const cta = normalizeLink(ctaLink);

  return (
    <article className={styles.card}>
      {image?.src ? <img className={styles.image} src={image.src} alt={image.alt || title} /> : <div className={styles.imagePlaceholder} />}

      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.location}>{location}</p>
        </div>

        <p className={styles.summary}>{summary}</p>

        {items.length ? (
          <div className={styles.tags}>
            {items.map((tag) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <a className={styles.cta} href={cta.href} target={cta.target} rel={cta.rel}>
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
