import type { PropType, PropValues } from "@webflow/data-types";

export type LinkValue = PropValues[PropType.Link];

export function normalizeLink(link?: LinkValue): {
  href: string;
  target?: LinkValue["target"];
  rel?: string;
} {
  return normalizeLinkWithFallback(link, "#");
}

export function normalizeLinkWithFallback(
  link: LinkValue | undefined,
  fallbackHref: string,
): {
  href: string;
  target?: LinkValue["target"];
  rel?: string;
} {
  const href = link?.href?.trim();

  if (!href) {
    return { href: fallbackHref };
  }

  const isExternal = /^https?:\/\//i.test(href);
  const target = link?.target ?? (isExternal ? "_blank" : undefined);
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  return { href, target, rel };
}
