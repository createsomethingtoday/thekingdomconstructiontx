# Install Code Components Into A Webflow Site

This repo ships 2 shared Code Components libraries:

- `The Kingdom Construction Components` (blocks, cards, utilities)
- `The Kingdom Construction Pages` (page bodies, sans nav/footer)

To use the components in a specific Webflow site (and make them visible to the MCP tools), the site must "import" each component at least once.

## 1) Install The Shared Library

In Webflow Designer:

1. Open the Libraries panel.
2. Find `The Kingdom Construction Components` and/or `The Kingdom Construction Pages`.
3. Install / enable it for the current site.

## 2) Seed Component IDs (Required For MCP Automation)

The MCP Designer tools can only insert components that already exist in the site’s component registry (i.e., have an assigned `componentId`).

Fastest approach:

1. Open the `Style guide` page.
2. Drag **one instance** of each code component onto the page (anywhere is fine).
3. Publish once (if Webflow prompts).

Recommended seed list:

- `Section Shell`
- `Section Header`
- `Card Grid`
- `Service Card`
- `Project Card`
- `Review Card`
- `FAQ Accordion`
- `Quote Strip`
- `Badge Row`
- `Proof Metrics`
- `Guarantee Block`
- `Process Steps`
- `Divider`
- `Area Card`
- `Blog Card`
- `Breadcrumbs`
- `Tag Row`
- `Answer Block`
- `Button Link`
- `Click To Call`

After seeding, the component IDs can be fetched via MCP and used to assemble pages programmatically.

### If Using The Pages Library

For page bodies (ex: `Home Page Body`, `Services Page Body`), seeding is naturally done when each page drops in its corresponding body component once.

## 3) Replace A Page With A Page Body Component

In Webflow Designer (per page):

1. Keep `Navigation` as the first element in `Body`.
2. Insert the appropriate `* Page Body` component under `Navigation`.
3. Keep `Footer` as the last element in `Body`.
4. Delete or hide any legacy sections between the page body and the footer.

Tip: if a page body includes a Slot (Contact/Book), drop the existing form/embed block inside that slot so it stays Webflow-native.
