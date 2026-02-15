# Webflow MCP Execution Checklist

## Prerequisite
- Connect Webflow MCP server in your MCP client per docs:
  - https://developers.webflow.com/mcp/reference/getting-started

## Phase 1: Discovery
1. Run `sites_get` to confirm site context.
2. Run `collections_get_all` and export collection IDs.
3. Run `pages_get_all` and export page IDs.
4. Run `assets_get_all` for current media inventory.

## Phase 2: CMS Setup
1. Repurpose template collections into:
- `services`
- `projects`
- `blog_posts`
2. Create missing collections:
- `service_areas`
- `faqs`
- `reviews`
3. Use `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/configs/webflow_cms_model.json` as field contract.

## Phase 3: Route/SEO Setup
1. Apply redirects from:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/seo/redirects_301_archipro.csv`
2. Update page metadata using `pages_update_metadata`.
3. Update static content answer blocks using `pages_update_static_content`.

## Phase 4: Content + Media
1. Create/update CMS items with:
- `collections_items_create_item`
- `collections_items_update_items`
2. Upload/organize assets with:
- `assets_create`
- `assets_update`
3. Enforce alt text and naming conventions before publish.

## Phase 5: QA Gate
1. Enforce rules from:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/configs/qa_gate_rules.json`
2. Follow workflow:
- `draft -> qa_passed -> approved -> published`
3. Block publishes on any QA failure.

## Phase 6: Launch Controls
1. Verify canonical URLs and redirects.
2. Verify structured data rendering on service/area/FAQ pages.
3. Validate lead conversion actions:
- quote form submit
- click-to-call
- booking CTA
