import * as css from "./ButtonLink.module.css";
import { normalizeLink, type LinkValue } from "./link";

const styles = css as unknown as Record<string, string>;

export type ButtonLinkProps = {
  label: string;
  link?: LinkValue;
  variant: string;
  size: string;
};

export default function ButtonLink({ label, link, variant, size }: ButtonLinkProps) {
  const resolved = normalizeLink(link);

  return (
    <a
      className={[
        styles.button,
        variant === "Primary" ? styles.primary : variant === "Secondary" ? styles.secondary : styles.ghost,
        size === "Small" ? styles.small : styles.medium,
      ]
        .filter(Boolean)
        .join(" ")}
      href={resolved.href}
      target={resolved.target}
      rel={resolved.rel}
    >
      {label}
    </a>
  );
}
