import type { PropType, PropValues } from "@webflow/data-types";
import * as css from "./BlogCard.module.css";
import { normalizeLink, type LinkValue } from "./link";

const styles = css as unknown as Record<string, string>;

export type BlogCardProps = {
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  image?: PropValues[PropType.Image];
  ctaLabel: string;
  ctaLink?: LinkValue;
};

export default function BlogCard({ title, date, excerpt, category, image, ctaLabel, ctaLink }: BlogCardProps) {
  const cta = normalizeLink(ctaLink);

  return (
    <article className={styles.card}>
      {image?.src ? <img className={styles.image} src={image.src} alt={image.alt || title} /> : <div className={styles.imagePlaceholder} />}

      <div className={styles.content}>
        <div className={styles.meta}>
          {category?.trim() ? <span className={styles.category}>{category}</span> : null}
          <span className={styles.date}>{date}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>

        <a className={styles.cta} href={cta.href} target={cta.target} rel={cta.rel}>
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
