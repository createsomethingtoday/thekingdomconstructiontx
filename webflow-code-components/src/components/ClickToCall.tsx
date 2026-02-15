import * as css from "./ClickToCall.module.css";

const styles = css as unknown as Record<string, string>;

export type ClickToCallProps = {
  label: string;
  phoneNumber: string;
  helperText?: string;
  tone: string;
  size: string;
};

function formatPhoneHref(phoneNumber: string): string {
  const digits = phoneNumber.replace(/[^\d+]/g, "");
  return digits.length ? `tel:${digits}` : "tel:+18175550147";
}

export default function ClickToCall({ label, phoneNumber, helperText, tone, size }: ClickToCallProps) {
  return (
    <a
      className={[
        styles.call,
        tone === "Accent" ? styles.accent : tone === "Inverted" ? styles.inverted : styles.neutral,
        size === "Small" ? styles.small : styles.medium,
      ]
        .filter(Boolean)
        .join(" ")}
      href={formatPhoneHref(phoneNumber)}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.number}>{phoneNumber}</span>
      {helperText?.trim() ? <span className={styles.helper}>{helperText}</span> : null}
    </a>
  );
}
