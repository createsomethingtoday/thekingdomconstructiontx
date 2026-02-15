import * as css from "./Divider.module.css";

const styles = css as unknown as Record<string, string>;

export type DividerProps = {
  style: string;
  thickness: string;
};

export default function Divider({ style, thickness }: DividerProps) {
  if (style === "Space") {
    return <div className={styles.space} aria-hidden="true" />;
  }

  return (
    <hr
      className={[
        styles.rule,
        style === "Accent" ? styles.accent : styles.line,
        thickness === "Medium" ? styles.medium : styles.hairline,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
