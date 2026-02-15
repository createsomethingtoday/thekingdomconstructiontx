import * as css from "./Breadcrumbs.module.css";
import { parseLabelHrefLines } from "./text";

const styles = css as unknown as Record<string, string>;

export type BreadcrumbsProps = {
  items: string;
  separator: string;
  tone: string;
};

export default function Breadcrumbs({ items, separator, tone }: BreadcrumbsProps) {
  const crumbs = parseLabelHrefLines(items);

  return (
    <nav className={[styles.nav, tone === "Inverted" ? styles.inverted : styles.neutral].join(" ")} aria-label="Breadcrumbs">
      <ol className={styles.list}>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li className={styles.item} key={`${crumb.label}-${index}`}>
              {crumb.href && !isLast ? (
                <a className={styles.link} href={crumb.href}>
                  {crumb.label}
                </a>
              ) : (
                <span className={styles.current} aria-current={isLast ? "page" : undefined}>
                  {crumb.label}
                </span>
              )}

              {!isLast ? (
                <span
                  className={[
                    styles.separator,
                    separator === "Slash" ? styles.slash : separator === "Dot" ? styles.dot : styles.chevron,
                  ].join(" ")}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
