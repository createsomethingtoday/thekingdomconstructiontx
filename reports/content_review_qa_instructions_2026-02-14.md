# Content Review QA Instructions (By URL)

## Input Files
- URL mapping ledger: `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/reports/original_site_to_webflow_mapping_2026-02-14.csv`
- QA checklist rows: `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/reports/content_review_qa_checklist_by_url_2026-02-14.csv`

## How To Run
1. Work each row in `content_review_qa_checklist_by_url_2026-02-14.csv`.
2. For `action=redirect`, verify:
- source URL returns `301`
- destination resolves to expected `target_path`
- destination page passes listed content/SEO checks.
3. For `action=retain`, verify target page directly passes listed checks.
4. Update `status` from `pending` to one of:
- `passed`
- `failed`
- `blocked`
5. If failed/blocked, append issue notes in a parallel findings sheet keyed by `source_path`.

## Gating Rules
- No publish for any row with `failed` on:
- canonical mismatch
- non-unique title/meta
- missing required schema for template type
- broken primary CTA/form tracking

## Category Counts
- blog_detail: 68
- blog_hub: 1
- contact: 2
- gallery_legacy: 3
- home: 1
- reviews_hub: 1
- service_detail: 4
- success_utility: 1
