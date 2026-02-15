# Webflow Decision: Code Components vs Webflow Cloud

## Direct Answer

- If the requirement is editable on-page blocks in Webflow Designer, use **Code Components**.
- If the requirement is hosted app logic, integrations, auth, or client portal workflows, use **Webflow Cloud**.
- Enterprise teams normally combine both.

## Can Webflow Cloud Surface Editable Props?

- **Yes, when the UI is implemented as code components** (prop definitions are surfaced in Designer).
- **No, not automatically for arbitrary app UI routes** deployed on Cloud. A Cloud app page is a web app route, not a Designer component property panel.

## Recommended Architecture for Kingdom Construction

1. `Code components` for hero, service cards, review cards, FAQ, and CTA strips.
2. `CMS + MCP automation` for content ops, QA gates, and publish controls.
3. `Webflow Cloud app` for advanced workflows (quote intake orchestration, client status dashboard, integration endpoints).

## Work Completed in This Workspace

- Code component library scaffold:
  `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/webflow-code-components`
- Cloud app scaffold (Next.js, mounted path `/client`):
  `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/kingdom-cloud-client`

## What To Compare in the Hypothesis Test

1. Time to first editable block in Designer.
2. Time to five reusable blocks that pass QA.
3. Number of rework passes after design token/copy updates.
4. Ease of non-technical editor updates.
