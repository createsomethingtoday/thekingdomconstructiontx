import * as css from "./SectionShell.module.css";
import type { ReactNode } from "react";

const styles = css as unknown as Record<string, string>;

export type SectionShellProps = {
  sectionId?: string;
  background: string;
  padding: string;
  maxWidth: string;
  children?: ReactNode;
};

export default function SectionShell({ sectionId, background, padding, maxWidth, children }: SectionShellProps) {
  return (
    <section
      id={sectionId || undefined}
      className={[
        styles.section,
        background === "Surface" ? styles.surface : "",
        background === "Brand" ? styles.brand : "",
        background === "Brand Deep" ? styles.brandDeep : "",
        background === "Paper" ? styles.paper : "",
        padding === "Tight" ? styles.padTight : padding === "Spacious" ? styles.padSpacious : styles.padNormal,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          styles.inner,
          maxWidth === "Narrow" ? styles.narrow : "",
          maxWidth === "Wide" ? styles.wide : "",
          maxWidth === "Full" ? styles.full : styles.standard,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
