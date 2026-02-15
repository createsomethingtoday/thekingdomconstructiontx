import * as css from "./TagRow.module.css";
import { splitLines } from "./text";

const styles = css as unknown as Record<string, string>;

export type TagRowProps = {
  tags: string;
  tone: string;
};

export default function TagRow({ tags, tone }: TagRowProps) {
  const items = splitLines(tags);

  return (
    <div className={[styles.row, tone === "Accent" ? styles.accent : tone === "Inverted" ? styles.inverted : styles.neutral].join(" ")}>
      {items.map((tag) => (
        <span className={styles.tag} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
