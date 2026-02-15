# Kingdom Construction Webflow Code Components

Reusable, prop-driven code components for The Kingdom Construction Webflow project.

## Component Set

- `Construction Hero`
- `Section Shell`
- `Section Header`
- `Card Grid`
- `Service Card`
- `Area Card`
- `Project Card`
- `Blog Card`
- `Quote Strip`
- `Button Link`
- `Click To Call`
- `Review Card`
- `FAQ Accordion`
- `Answer Block`
- `Breadcrumbs`
- `Tag Row`
- `Badge Row`
- `Proof Metrics`
- `Guarantee Block`
- `Process Steps`
- `Divider`

All component declarations live in `src/components/*.webflow.tsx` and are loaded through `webflow.json`.

## Why This Track Exists

This package is the fast test path for:
1. reusable blocks,
2. editable props in Webflow Designer,
3. maintainable long-term management through MCP/API automation.

## Quick Start

```bash
cd /Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/webflow-code-components
npm install
npx webflow auth login
npm run typecheck
npm run share
```

## Share Without Interactive Prompts

After the first successful interactive `npm run share` (which writes the library `id` into `webflow.json`):

```bash
npm run share:no-input
```

If you hit rate-limits (429), use the retry wrapper:

```bash
npm run share:retry
```

## Local Bundle Validation

After a library `id` exists:

```bash
npx webflow library bundle --public-path /
```

## Manifest Notes

- Library manifest: `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/webflow-code-components/webflow.json`
- Global style entry: `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/webflow-code-components/src/globals.webflow.ts`

## Hybrid Recommendation (Enterprise Pattern)

- Use code components for editor-facing page blocks (props + CMS binding).
- Use Webflow Cloud for app/back-end logic and client-facing app flows.
- Keep MCP/Data API automation for QA, content ops, and publish controls.

Webflow Cloud scaffold created in parallel:
`/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/kingdom-cloud-client`
