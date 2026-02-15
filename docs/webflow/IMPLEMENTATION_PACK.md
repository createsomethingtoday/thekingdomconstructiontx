# Webflow Implementation Pack (Archipro)

## What Was Created
1. Redirect map:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/seo/redirects_301_archipro.csv`

2. CMS schema model:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/configs/webflow_cms_model.json`

3. MCP QA gate workflow:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/docs/automation/WEBFLOW_MCP_QA_GATE.md`

4. QA rule config:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/configs/qa_gate_rules.json`

5. MCP execution checklist:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/docs/webflow/MCP_EXECUTION_CHECKLIST.md`

6. Seed service areas:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/content/dfw_service_areas_seed.csv`

7. Redirect validator script:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/scripts/validate_redirects.sh`

8. Live Webflow inventory snapshot:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/reports/webflow_live_inventory_2026-02-14.json`

9. Live execution report:
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/reports/webflow_live_execution_2026-02-14.md`

## How to Use
1. Implement URL redirects from the CSV inside Webflow hosting settings.
2. Create/repurpose CMS collections using `webflow_cms_model.json` as your field contract.
3. Enforce QA conditions from `qa_gate_rules.json` before publish.
4. Run `scripts/validate_redirects.sh` after redirect edits.
5. Use `MCP_EXECUTION_CHECKLIST.md` as the operational runbook once Webflow MCP is connected.

## Enforcement Priority
1. URL/canonical integrity.
2. Metadata uniqueness.
3. Schema completeness.
4. Image alt compliance.
5. Internal link integrity.

## Next Build Actions
1. Build Arlington-first service pages and area pages.
2. Connect quote/booking CTA routes on all templates.
3. Replace all placeholder imagery with branded project media.
