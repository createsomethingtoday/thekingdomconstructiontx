# Component Library Map

This is the recommended assembly pattern for pages using the code component library.

## Page-Level Option

If you prefer managing a *single* component per page, use the `Pages` library:

- `Home Page Body`
- `Services Page Body`
- `About Page Body`
- `Projects Page Body`
- `Reviews Page Body`
- `Blog Page Body`
- `Service Areas Page Body`
- `Contact Page Body` (includes a Form slot)
- `Book Page Body` (includes an Embed slot)

These are intended to be dropped between the site's existing Navigation and Footer components.

## Layout Composition

- Use `Section Shell` as the outer wrapper for each page section.
- Use `Section Header` to introduce each section.
- Use `Card Grid` to lay out repeated cards.
- Use `Divider` for spacing and section separation.

## Core Content Components

- `Construction Hero`: top-of-page hero with background image and CTAs.
- `Service Card`: use inside a CMS Collection List for services.
- `Area Card`: use inside a CMS Collection List for service areas.
- `Project Card`: use inside a CMS Collection List for projects.
- `Blog Card`: use inside a CMS Collection List for posts.
- `Review Card`: use inside a CMS Collection List for reviews.
- `FAQ Accordion`: use inside a CMS Collection List for FAQs.

## Trust + Conversion

- `Quote Strip`: primary conversion band (phone + booking).
- `Click To Call`: compact CTA for headers/sidebars.
- `Button Link`: reusable CTA button.
- `Badge Row`: quick trust signals.
- `Proof Metrics`: quantified proof (3 metrics).
- `Guarantee Block`: de-risk section.

## SEO/AEO Display Blocks

- `Breadcrumbs`: simple crumb trail for detail pages.
- `Tag Row`: entity/service tags.
- `Answer Block`: Q&A highlight block.

## Page Blueprints

### Home (`/`)

1. `Section Shell` (Background: Brand)
2. `Construction Hero`
3. `Section Shell` (Paper)
4. `Section Header` + `Badge Row`
5. `Card Grid` (auto)
   - 3-6x `Service Card`
6. `Section Shell` (Surface)
7. `Proof Metrics`
8. `Section Shell` (Paper)
9. `Section Header` + `Card Grid`
   - 3x `Project Card`
10. `Quote Strip`
11. `Section Header` + `Card Grid`
   - 3x `Review Card`

### Services index (`/services`)

- `Section Header` + `Card Grid`
  - `Service Card` in Collection List

### Service detail (`/services/{slug}`)

- `Breadcrumbs`
- `Section Header`
- `Tag Row`
- `Process Steps`
- `FAQ Accordion` in Collection List
- `Quote Strip`

### Service areas (`/service-areas`)

- `Section Header` + `Card Grid`
  - `Area Card` in Collection List

### Reviews (`/reviews`)

- `Section Header` + `Card Grid`
  - `Review Card` in Collection List

### Blog (`/blog`)

- `Section Header` + `Card Grid`
  - `Blog Card` in Collection List
