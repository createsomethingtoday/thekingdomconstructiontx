import * as css from "./SectionHeader.module.css";

const styles = css as unknown as Record<string, string>;

export type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align: string;
  size: string;
  showRule: boolean;
};

export default function SectionHeader({ eyebrow, heading, body, align, size, showRule }: SectionHeaderProps) {
  const isCenter = align === "Center";

  return (
    <header
      className={[
        styles.header,
        isCenter ? styles.center : styles.left,
        size === "Large" ? styles.large : styles.medium,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow?.trim() ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.heading}>{heading}</h2>
      {showRule ? <div className={styles.rule} aria-hidden="true" /> : null}
      {body?.trim() ? <p className={styles.body}>{body}</p> : null}
    </header>
  );
}
