# Migration Punchlist: Original Site -> Webflow (2026-02-14)

## Scope and Inputs
- Original production site reviewed: `https://thekingdomconstructiontx.com/`
- Source URL inventory: `81` URLs from sitemap (`/sitemap.xml`).
- Deterministic mapping ledger: `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/reports/original_site_to_webflow_mapping_2026-02-14.csv`
- Redirect-only migration map: `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/seo/redirects_301_originalsite_generated.csv`

## Findings (Ordered by Severity)

### P1 (Fix Before Launch)
1. Brand/entity inconsistency across key pages.
- Evidence: homepage title and FAQ strings reference "Kingdom Painter's" while brand is Kingdom Construction.
- Impact: weak entity trust signal and local SEO inconsistency.
- Webflow targets:
  - Home static page (`/`)
  - FAQ content blocks on home/service templates
  - Global nav/footer brand strings

2. Blog post metadata duplication at scale.
- Evidence: sampled `/blog-*` pages share generic title and duplicate meta description.
- Impact: indexation cannibalization and poor long-tail performance.
- Webflow targets:
  - Collection `Blog Posts` (`6990904d23918b690ebb8aa3`)
  - Fields: `seo-title`, `seo-meta-description`, slug-normalized canonical route

3. Duplicate contact intent pages (`/contact` and `/contact-2-step`) both indexable.
- Impact: split authority + ambiguous conversion path.
- Webflow targets:
  - Canonical static page: `/contact`
  - Keep `/success` only as utility confirmation page and mark noindex
  - Redirect `/contact-2-step -> /contact`

4. Missing JSON-LD on key templates (home, service, blog detail).
- Impact: weak AEO/SEO extraction and rich result eligibility.
- Webflow targets:
  - Home: `LocalBusiness`
  - Services template: `Service` + `BreadcrumbList`
  - FAQ blocks: `FAQPage`
  - Blog template: `BlogPosting` + `BreadcrumbList`

### P2 (Fix During Migration QA)
5. Legacy URL architecture mismatch with target IA.
- Current examples: `/service-*`, `/blog-*`, `/gallery-*`
- Target model: `/services/{slug}`, `/blog/{slug}`, `/projects`
- Webflow targets:
  - Static pages: `/services`, `/projects`, `/blog`, `/about`, `/contact`, `/book`, `/service-areas`, `/reviews`
  - Redirect import from generated CSV

6. Gallery routes are not aligned to future IA.
- Current: `/gallery-All`, `/gallery-Exterior-Painting`, `/gallery-Interior-Painting`
- Deterministic mapping used: all -> `/projects` (medium confidence).
- Webflow targets:
  - `Projects` hub and filters/taxonomy implementation

7. Weak/low-quality metadata on conversion pages.
- Example: `/reviews` meta description is low quality.
- Webflow targets:
  - Static page `/reviews` metadata
  - Open Graph title/description parity

### P3 (Post-Launch Hardening)
8. Page payload bloat (large HTML responses on key pages).
- Observed sizes: home ~652 KB HTML, service/reviews ~540-560 KB, blog ~433 KB.
- Webflow targets:
  - Remove unused components/interactions
  - Optimize image usage and embeds
  - Audit third-party scripts

## Webflow-Mapped Execution Checklist
1. Entity/Brand Cleanup
- Replace all legacy mentions of "Kingdom Painter's" with Kingdom Construction across static and CMS templates.

2. SEO Metadata Normalization
- Enforce unique `seo-title` and `seo-meta-description` for every `Blog Posts` item.
- Confirm uniqueness checks in QA gate before publish.

3. Structured Data Rollout
- Implement reusable JSON-LD blocks on home, service, blog, and FAQ templates.

4. URL and Redirect Deployment
- Import `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/seo/redirects_301_originalsite_generated.csv`.
- Keep existing Archipro migration redirects for template routes.

5. Contact Funnel Consolidation
- Keep `/contact` canonical.
- Keep `/success` utility only (noindex).
- Redirect `/contact-2-step` to `/contact`.

6. QA Gate Before Publish
- Canonical checks, metadata uniqueness, schema presence, redirect validation, accessibility pass, lead action checks.

## Deterministic URL Mapping Summary
From `/sitemap.xml`:
- Total URLs analyzed: `81`
- Deterministic redirects: `76`
- Retained paths: `5` (`/`, `/blog`, `/reviews`, `/contact`, `/success`)

## Review Pass on In-Progress Webflow Redirect Work
- Existing Archipro redirect plan non-self rows: `23`
- Active in Webflow now: `22` planned rows + prior legacy rows
- Remaining blocked case: `/401 -> /404` (conflicts with active system page route)

