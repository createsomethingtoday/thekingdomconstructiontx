import * as css from "./GuaranteeBlock.module.css";
import { normalizeLinkWithFallback, type LinkValue } from "./link";
import { splitLines } from "./text";

const styles = css as unknown as Record<string, string>;

export type GuaranteeBlockProps = {
  badge: string;
  heading: string;
  body: string;
  bulletList: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  tone: string;
};

export default function GuaranteeBlock({ badge, heading, body, bulletList, ctaLabel, ctaLink, tone }: GuaranteeBlockProps) {
  const bullets = splitLines(bulletList);
  const cta = normalizeLinkWithFallback(ctaLink, "/contact");

  return (
    <section className={[styles.block, tone === "Brand" ? styles.brand : styles.light].join(" ")}>
      <header className={styles.header}>
        <span className={styles.badge}>{badge}</span>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.body}>{body}</p>
      </header>

      {bullets.length ? (
        <ul className={styles.bullets}>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {ctaLabel?.trim() && cta.href !== "#" ? (
        <a className={styles.cta} href={cta.href} target={cta.target} rel={cta.rel}>
          {ctaLabel}
        </a>
      ) : null}
    </section>
  );
}
