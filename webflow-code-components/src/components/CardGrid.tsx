import type { ReactNode } from "react";
import * as css from "./CardGrid.module.css";

const styles = css as unknown as Record<string, string>;

export type CardGridProps = {
  columns: string;
  gap: string;
  children?: ReactNode;
};

export default function CardGrid({ columns, gap, children }: CardGridProps) {
  return (
    <div
      className={[
        styles.grid,
        columns === "Auto" ? styles.auto : "",
        columns === "2" ? styles.cols2 : "",
        columns === "3" ? styles.cols3 : "",
        columns === "4" ? styles.cols4 : "",
        gap === "Compact" ? styles.gapCompact : gap === "Spacious" ? styles.gapSpacious : styles.gapNormal,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
