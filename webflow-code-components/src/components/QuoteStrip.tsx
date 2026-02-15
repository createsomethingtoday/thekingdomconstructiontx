import * as css from "./QuoteStrip.module.css";
import { normalizeLinkWithFallback, type LinkValue } from "./link";

const styles = css as unknown as Record<string, string>;

export type QuoteStripProps = {
  headline: string;
  detail: string;
  phoneLabel: string;
  phoneNumber: string;
  ctaLabel: string;
  ctaLink?: LinkValue;
  tone: string;
};

function formatPhoneHref(phoneNumber: string): string {
  const digits = phoneNumber.replace(/[^\d+]/g, "");
  if (!digits) {
    return "tel:+18175550147";
  }
  return `tel:${digits}`;
}

export default function QuoteStrip({
  headline,
  detail,
  phoneLabel,
  phoneNumber,
  ctaLabel,
  ctaLink,
  tone,
}: QuoteStripProps) {
  const cta = normalizeLinkWithFallback(ctaLink, "/contact");
  const phoneHref = formatPhoneHref(phoneNumber);

  return (
    <section className={[styles.strip, tone === "Light" ? styles.light : tone === "Dark" ? styles.dark : styles.brand].join(" ")}>
      <div className={styles.copy}>
        <p className={styles.headline}>{headline}</p>
        <p className={styles.detail}>{detail}</p>
      </div>

      <div className={styles.actions}>
        <a className={styles.phone} href={phoneHref} aria-label={`Call ${phoneLabel} ${phoneNumber}`} title={`${phoneLabel}: ${phoneNumber}`}>
          <span className={styles.phoneLabel}>{phoneLabel}</span>
          <span className={styles.phoneValue}>{phoneNumber}</span>
        </a>

        <a className={styles.cta} href={cta.href} target={cta.target} rel={cta.rel}>
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
