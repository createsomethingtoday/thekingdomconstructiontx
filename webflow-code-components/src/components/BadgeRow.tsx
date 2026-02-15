import * as css from "./BadgeRow.module.css";
import { splitLines } from "./text";

const styles = css as unknown as Record<string, string>;

export type BadgeRowProps = {
  badges: string;
  align: string;
  variant: string;
  size: string;
};

export default function BadgeRow({ badges, align, variant, size }: BadgeRowProps) {
  const items = splitLines(badges);

  return (
    <div
      className={[
        styles.row,
        align === "Center" ? styles.center : styles.left,
        variant === "Filled" ? styles.filled : styles.outline,
        size === "Small" ? styles.small : styles.medium,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((label) => (
        <span className={styles.badge} key={label}>
          {label}
        </span>
      ))}
    </div>
  );
}
