import type { ReactNode } from "react";

import * as css from "./PageChrome.module.css";
import { normalizeLinkWithFallback, type LinkValue } from "./link";
import { parseLabelHrefLines } from "./text";

const styles = css as unknown as Record<string, string>;

type FooterLine = {
  label: string;
  href?: string;
};

type LinkLine = {
  label: string;
  href: string;
};

type PageChromeProps = {
  children: ReactNode;
  navBrand?: string;
  navBrandLink?: LinkValue;
  navLinks?: string;
  navCtaLabel?: string;
  navCtaLink?: LinkValue;

  footerHeadline?: string;
  footerText?: string;
  footerServicesTitle?: string;
  footerServices?: string;
  footerCompanyTitle?: string;
  footerCompany?: string;
  footerConnectTitle?: string;
  footerConnect?: string;
  footerCopy?: string;
};

const DEFAULT_NAV_LINKS = "Home | /\nServices | /services\nProjects | /projects\nAbout | /about\nContact | /contact";
const DEFAULT_FOOTER_SERVICES = "Services | /services\nProjects | /projects\nAbout | /about\nBook | /book\nReviews | /reviews";
const DEFAULT_FOOTER_COMPANY = "Careers | /careers\nService Areas | /service-areas\nGallery | /projects\nBlog | /blog";
const DEFAULT_FOOTER_CONNECT = "Call us | tel:8175550147\nEmail | mailto:info@thekingdomconstructiontx.com\nDMZ office | /";

function normalizeLinkList(value: string, fallbackLabel: string, fallbackHref: string): LinkLine[] {
  const items = parseLabelHrefLines(value).filter((item): item is { label: string; href?: string } => item.label.length > 0);

  if (!items.length) {
    return [{ label: fallbackLabel, href: fallbackHref }];
  }

  return items.map((item) => {
    const link = normalizeLinkWithFallback(item.href ? { href: item.href } as LinkValue : undefined, fallbackHref);
    return {
      label: item.label,
      href: link.href,
    };
  });
}

function parseFooterLinks(value?: string): FooterLine[] {
  if (!value) {
    return [];
  }

  return parseLabelHrefLines(value)
    .map((line) => ({
      label: line.label,
      href: line.href,
    }))
    .filter((item) => item.label.length > 0);
}

export default function PageChrome({
  children,
  navBrand,
  navBrandLink,
  navLinks,
  navCtaLabel,
  navCtaLink,
  footerHeadline,
  footerText,
  footerServicesTitle,
  footerServices,
  footerCompanyTitle,
  footerCompany,
  footerConnectTitle,
  footerConnect,
  footerCopy,
}: PageChromeProps) {
  const navItems = normalizeLinkList(
    navLinks ?? DEFAULT_NAV_LINKS,
    "Home",
    "/",
  );

  const brand = normalizeLinkWithFallback(navBrandLink, "/");
  const cta = normalizeLinkWithFallback(navCtaLink, "/contact");

  const footerServicesItems = parseFooterLinks(footerServices || DEFAULT_FOOTER_SERVICES);
  const footerCompanyItems = parseFooterLinks(footerCompany || DEFAULT_FOOTER_COMPANY);
  const footerConnectItems = parseFooterLinks(footerConnect || DEFAULT_FOOTER_CONNECT);

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href={brand.href} target={brand.target} rel={brand.rel} aria-label={`Go to ${navBrand || "Home"}`}>
            {navBrand || "The Kingdom Construction"}
          </a>

          <nav className={styles.nav} aria-label="Main">
            <ul className={styles.navList}>
              {navItems.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a className={styles.navLink} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className={styles.navCta} href={cta.href} target={cta.target} rel={cta.rel} aria-label="Get a free project quote">
            {navCtaLabel || "Request a Quote"}
          </a>
        </div>
      </header>

      <main className={styles.content} id="main-content">
        <div className={styles.contentInner}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <p className={styles.footerEyebrow}>{footerHeadline || "The Kingdom Construction"}</p>
            <p className={styles.footerBody}>{footerText || "Craftsmanship-led painting, cabinetry, and handyperson work across DFW."}</p>
          </div>

          <div className={styles.footerCols}>
            <div>
              <p className={styles.footerTitle}>{footerServicesTitle || "Services"}</p>
              <ul className={styles.footerList}>
                {footerServicesItems.map((item) => {
                  const link = normalizeLinkWithFallback(item.href ? ({ href: item.href } as LinkValue) : undefined, "/services");
                  return (
                    <li key={`${item.label}-${item.href}`}>
                      <a href={link.href} target={link.target} rel={link.rel}>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className={styles.footerTitle}>{footerCompanyTitle || "Company"}</p>
              <ul className={styles.footerList}>
                {footerCompanyItems.map((item) => {
                  const link = normalizeLinkWithFallback(item.href ? ({ href: item.href } as LinkValue) : undefined, "/about");
                  return (
                    <li key={`${item.label}-${item.href}`}>
                      <a href={link.href} target={link.target} rel={link.rel}>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className={styles.footerTitle}>{footerConnectTitle || "Connect"}</p>
              <ul className={styles.footerList}>
                {footerConnectItems.map((item) => {
                  const link = normalizeLinkWithFallback(item.href ? ({ href: item.href } as LinkValue) : undefined, "#");
                  return (
                    <li key={`${item.label}-${item.href}`}>
                      <a href={link.href} target={link.target} rel={link.rel}>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p className={styles.copyright}>{footerCopy || "© 2026 The Kingdom Construction. All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
}
