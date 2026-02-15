# Kingdom Construction Webflow Plan (Clean Build, Component-First, MCP-Driven)

## Decision Update (2026-02-14)
- We are no longer optimizing for template retrofitting speed.
- We are optimizing for clean architecture, production reliability, and long-term AI-native operations.
- Build strategy is now:
1. clean page shells on canonical routes,
2. reusable Webflow component library,
3. CMS + component-prop content contracts,
4. MCP automation for content, QA, and publish controls.

## Viability and Production Quality Assessment (Perplexity-Informed)

### Verdict
- This approach is viable for production if we enforce strict operational guardrails.
- Primary guardrails:
1. single-writer Designer session,
2. automated QA gates before publish,
3. human approval on final publish.

### Why This Is Viable
1. Webflow MCP is designed for both Data API and Designer automation, which matches our split between content ops and visual build ops.
2. Webflow components, component properties, libraries, and variables support a design-system-driven architecture and repeatable page assembly.
3. Perplexity Deep Research is useful as a research copilot for competitive analysis, schema recommendations, and copy validation workflow.

### Known Constraints We Plan Around
1. Webflow MCP does not expose every endpoint and has localization limitations; we will avoid flows that depend on unsupported endpoints.
2. Designer operations are stateful and should not be edited concurrently by multiple agents.
3. Perplexity outputs are strong for synthesis but must be treated as research input, not auto-truth for production publishing.

## Target Architecture

## 1) Route Model (Canonical)
- `/`
- `/services`
- `/services/{service-slug}`
- `/service-areas`
- `/service-areas/{city-state-slug}`
- `/projects`
- `/projects/{project-slug}`
- `/blog`
- `/blog/{post-slug}`
- `/reviews`
- `/reviews/{review-slug}`
- `/contact`
- `/book`

## 2) Component Library Model (Design System First)
- Components will be created from the local design system and reused across all static and CMS templates.
- Component groups:
1. `Layout`: `Header`, `Footer`, `SectionShell`, `Grid`, `Container`.
2. `Conversion`: `PrimaryCTA`, `SecondaryCTA`, `QuoteStrip`, `ClickToCall`.
3. `Content`: `Hero`, `ServiceCard`, `AreaCard`, `ReviewCard`, `FAQItem`, `ProcessSteps`, `Breadcrumbs`.
4. `Trust`: `Badges`, `GuaranteeBlock`, `ProofMetrics`.
5. `SEO/AEO`: `AnswerBlock`, `SchemaHintBlock`, `EntityTagRow`.

## 3) Design System Integration
- Source of truth remains the local design system for:
1. color tokens,
2. typography scale,
3. spacing scale,
4. radius/shadow/elevation rules,
5. component states and interaction patterns.
- Webflow implementation:
1. variable collections for tokens,
2. style classes mapped to token usage,
3. component properties for text/media/links,
4. no ad-hoc one-off styling on production pages.

## Content and Prop Contracts (SEO/AEO Included)

## 1) Component Prop Strategy
- Every reusable component receives explicit content props.
- Required prop classes:
1. `display`: heading, subheading, body, CTA label.
2. `destination`: internal route, external URL, phone/mail actions.
3. `seo_aeo`: answer-ready copy, entity hints, optional schema key-value payload.
4. `media`: asset IDs, alt text, fallback behavior.

## 2) Page-Level SEO Contract
- For each indexable URL:
1. unique title,
2. unique meta description,
3. canonical path,
4. OG title and OG description,
5. index/follow flags.

## 3) Structured Data Contract
- Required structured data by template type:
1. `LocalBusiness` on home/contact.
2. `Service` on service detail.
3. `FAQPage` where FAQ blocks exist.
4. `BreadcrumbList` on detail pages.

## CMS Contract (Reuse Existing Work)
- Keep and continue using current collections:
1. `services`
2. `service_areas`
3. `reviews`
4. `faqs`
5. `projects`
6. `blog_posts`
- Continue state workflow:
- `draft -> qa_passed -> approved -> published`

## Build Plan (Execution Order)

## Phase 1: Clean Shell Pages
1. Build page shells only on canonical root routes.
2. Add global header/footer and conversion CTA skeletons.
3. Remove dependency on legacy foldered route variants.

## Phase 2: Design-System Component Library
1. Create variable collections and base utility styles.
2. Build core components with prop-driven content.
3. Validate responsive behavior and interaction states.

## Phase 3: CMS Template Composition
1. Build `services` template using reusable components.
2. Build `service_areas` template using reusable components.
3. Build `reviews` template and FAQ-render blocks.
4. Bind collection fields to component props.

## Phase 4: Content Migration and Enrichment
1. Keep the source-aligned service and city content already created.
2. Normalize all records to QA-required fields.
3. Enforce alt text, internal links, and answer-block formatting.

## Phase 5: SEO/AEO and QA Hardening
1. Validate unique metadata across all indexable URLs.
2. Validate schema payload rendering.
3. Validate internal link graph and CTA pathing.
4. Validate accessibility on nav, heading order, and form flow.
5. Validate performance on mobile first.

## Phase 6: Publish and Stabilize
1. Publish approved CMS items and canonical pages.
2. Submit sitemap and monitor indexation.
3. Run weekly drift checks for metadata, schema, and redirects.

## MCP Operating Model
- Designer lane:
1. single-writer execution only.
2. component and page structure updates.
- Data lane:
1. parallel-safe content updates for CMS, assets, metadata, and scripts.
- Release lane:
1. serialized publish control with explicit approvals.

## Perplexity-Backed Research Workflow

## Role of Perplexity
- Use Perplexity for:
1. local competitor SERP patterns,
2. entity/topic gap discovery,
3. FAQ framing and answer clarity review,
4. schema coverage suggestions.
- Do not use Perplexity as autonomous publisher.

## Research-to-Production Gate
1. Perplexity produces candidate recommendations.
2. MCP checks recommendation against our schema and route contracts.
3. Human approves only validated changes for publish.

## Quality SLOs
- Indexability:
1. zero orphan canonical pages,
2. zero duplicate canonical targets.
- Performance:
1. CLS <= 0.10,
2. LCP <= 3.0s target on key pages,
3. no unresolved critical accessibility failures.
- Content integrity:
1. no publish when required SEO/schema fields are missing,
2. no publish when internal-link checks fail.

## Deliverables
1. Clean canonical page shells.
2. Reusable component library mapped to local design system.
3. Prop contracts for SEO/AEO content.
4. CMS templates wired to component props.
5. QA gate automation and publish runbook.

## File Location
- `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/WEBFLOW_AI_PLAN.md`

## Execution Update (2026-02-14)

### Webflow MCP Connection
- Authorized site confirmed:
  - `The Kingdom Construction`
  - `site_id: 6990aa3e909a79ec1f320be9`
- Designer Bridge verified connected.

### Route and Page Structure Applied
- Existing static pages retained: `/`, `/services`, `/projects`, `/about-us`, `/contact`
- New static pages created:
  1. `/book`
  2. `/reviews`
  3. `/service-areas`
  4. `/blog`
- Slugs normalized from temporary `untitled*` values.

### CMS Collections Implemented
- Created collections:
  1. `services`
  2. `projects`
  3. `blog-posts`
  4. `service-areas`
  5. `faqs`
  6. `reviews`
- Added required operational fields for SEO/AEO, geography, trust content, and editorial metadata.
- Added relationships:
  1. `projects.testimonial-ref -> reviews`
  2. `faqs.service-ref -> services`
  3. `faqs.area-ref -> service-areas`
  4. `services.faq-refs -> faqs` (multi-reference)

### Content Migration Progress (Draft Seed Data)
- Source content reviewed from original domain:
  - `https://thekingdomconstructiontx.com/`
  - `https://thekingdomconstructiontx.com/service/residential-construction/`
  - `https://thekingdomconstructiontx.com/service/commercial-construction/`
- Seeded draft records:
  1. `service-areas`: 10 items (Arlington + 9 DFW cities)
  2. `services`: 4 items
  3. `reviews`: 3 draft placeholders
  4. `projects`: 2 draft items
  5. `faqs`: 4 draft items
  6. `blog-posts`: 2 draft items

### Important Notes
- CMS items are created as draft records for QA before publish.
- `about-us` slug was renamed to `/about` in execution pass 2.
- Dynamic blog detail path currently follows collection slug (`/blog-posts/{slug}`); if strict `/blog/{slug}` is required, we should run a collection-slug alignment pass next.

## Execution Update (2026-02-14, Pass 2)

### Component Library Progress
- Added reusable components:
  1. `Home Hero Section`
  2. `Hero Content Cluster`
  3. `Project Marquee Strip`
  4. `Contact Form Block`
- Existing global components retained:
  1. `Navigation`
  2. `Footer`

### Navigation Refactor Applied
- Updated navigation links in the `Navigation` component:
  1. Logo -> `/`
  2. About -> `/about`
  3. Blog -> `/blog`
  4. Support dropdown relabeled to `Service Areas`
  5. Dropdown item 1 -> `Service Areas` -> `/service-areas`
  6. Dropdown item 2 -> `Reviews` -> `/reviews`
  7. Primary nav CTA relabeled to `Book` -> `/book`
- Services mega-nav links were pointed to `/services`.

### Content Alignment to Original Site
- Service catalog updated from generic construction terms to original business-aligned offers:
  1. `Interior Painting`
  2. `Exterior Painting`
  3. `Kitchen and Cabinet Refinishing`
  4. `Handyman Services`
- Homepage hero copy updated to reflect painting + handyman positioning.

### Routing and Metadata Finalization
- Static route cleanup completed:
  1. `/about-us` -> `/about`
- SEO metadata updated for:
  1. Home
  2. Services
  3. About

### Remaining High-Priority Work
1. Bind CMS collection lists/details into the newly created static and collection templates (services, service-areas, blog, reviews).
2. Complete schema injection (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`) via page/component script strategy.
3. Configure final QA gate checklist before first publish batch.
4. Publish approved draft records after review.

## References Used for Viability Assessment
- Webflow MCP Getting Started:
  - https://developers.webflow.com/mcp/reference/getting-started
- Webflow MCP How It Works:
  - https://developers.webflow.com/mcp/reference/how-it-works
- Webflow MCP FAQs and known limitations:
  - https://developers.webflow.com/mcp/reference/fa-qs
- Webflow Data API Components (content/properties endpoints):
  - https://developers.webflow.com/data/reference/components/get
- Webflow Components and Variables updates:
  - https://webflow.com/updates/component-properties-in-libraries
  - https://webflow.com/updates/reusable-content-with-components
  - https://webflow.com/updates/variables
- Google Search structured data docs:
  - https://developers.google.com/search/docs/appearance/structured-data/faqpage
  - https://developers.google.com/search/docs/appearance/structured-data/local-business
- Schema.org references:
  - https://schema.org/Service
  - https://schema.org/FAQPage
  - https://schema.org/BreadcrumbList
- Perplexity research capabilities:
  - https://docs.perplexity.ai/guides/presets
  - https://www.perplexity.ai/help-center/en/articles/11332617-what-is-research-mode
- Perplexity/Deep Research quality signals:
  - https://www.perplexity.ai/hub/blog/draco
  - https://openreview.net/forum?id=3Qcl6N9Onu
  - https://arxiv.org/html/2506.14609v1

## Execution Update (2026-02-14, Parallel Track: Code Components + Cloud)

### Code Components Library Scaffolded
- Path:
  - `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/webflow-code-components`
- Implemented reusable components:
  1. `Construction Hero`
  2. `Service Card`
  3. `Quote Strip`
  4. `Review Card`
  5. `FAQ Accordion`
- Added benchmark worksheet:
  - `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/webflow-code-components/docs/HYPOTHESIS_BENCHMARK.md`

### Webflow Cloud App Scaffolded
- Path:
  - `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/kingdom-cloud-client`
- Scaffold method:
  - `webflow cloud init -f nextjs -m /client -s 6990aa3e909a79ec1f320be9`
- Added construction-oriented starter portal UI and fixed ESLint flat-config compatibility.

### Implementation Decision Note
- Code components remain the primary path for editable on-canvas content properties.
- Cloud app remains the primary path for client-facing app flows and integration logic.
- Decision memo:
  - `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/docs/webflow/CODE_COMPONENTS_VS_CLOUD_DECISION_2026-02-14.md`
