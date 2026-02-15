# Webflow MCP QA Gate and Publish Workflow

## Goal
Operate content updates through an AI-native, controlled workflow:
- `draft -> qa_passed -> approved -> published`

## Required Inputs per Item
1. Page/collection slug.
2. Unique SEO title + meta description.
3. Schema JSON payload (LocalBusiness/Service/FAQPage/BreadcrumbList as applicable).
4. Hero image with alt text.
5. Internal link targets for at least one service and one conversion page.

## MCP Tooling Baseline (Webflow MCP)
- `collections_get_all`
- `collections_get`
- `collections_items_get_items`
- `collections_items_create_item`
- `collections_items_update_items`
- `pages_get_all`
- `pages_get_metadata`
- `pages_update_metadata`
- `pages_update_static_content`
- `assets_get_all`
- `assets_get`
- `assets_create`
- `assets_update`

Reference: https://developers.webflow.com/mcp/reference/getting-started

## Execution Sequence
1. Resolve IDs:
- run `collections_get_all` and `pages_get_all`.
- store IDs for `services`, `projects`, `blog_posts`, `service_areas`, `faqs`, `reviews`.

2. Create or update draft content:
- run `collections_items_create_item` or `collections_items_update_items`.
- set internal state field to `draft`.

3. Upload/update media:
- run `assets_create` for new files.
- run `assets_update` to set alt text and naming convention.

4. Apply page metadata and structured blocks:
- run `pages_update_metadata` with unique title/meta/canonical.
- run `pages_update_static_content` for answer blocks + schema script container.

5. QA gate checks (must all pass):
- metadata uniqueness across all indexable URLs,
- canonical path matches target URL map,
- schema JSON parse and required types present,
- image assets have alt text and acceptable dimensions/size,
- internal links resolve to live service/contact/booking targets,
- heading hierarchy starts with one H1 and no skipped structure.

6. State transition:
- if all pass: set `qa_status = qa_passed`.
- if stakeholder signoff present: set `qa_status = approved`.
- publish only approved records/pages.

## Blocking Rules
Do not publish when any condition is true:
1. Missing or duplicate SEO title/meta.
2. Missing schema payload for service/area/FAQ pages.
3. Missing alt text for hero or in-body key images.
4. Broken internal links.
5. Slug collision with existing live URL.

## Weekly Health Checks
1. Crawl key URLs and diff title/meta/canonical against expected map.
2. Validate schema on services, service areas, and FAQ-bearing pages.
3. Verify redirects listed in `seo/redirects_301_archipro.csv`.
4. Check top conversion pages for LCP/CLS regressions.

## Rollback Policy
1. Keep previous approved CMS snapshot IDs before publish.
2. On regression, restore previous item versions and page metadata.
3. Re-run QA gate before republish.
