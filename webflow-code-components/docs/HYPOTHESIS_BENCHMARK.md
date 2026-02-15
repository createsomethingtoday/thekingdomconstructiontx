# Hypothesis Benchmark: Code Components vs AI/Template Build

## Hypothesis

For this project, a focused code-component library reaches production-safe reuse faster than a template/AI-first flow.

## Test Conditions

- Same target pages and same content scope.
- Same QA gate criteria.
- Stop timer when output is editor-usable and passes checklist.

## Deliverables Required in Each Track

- One hero variant
- One service card variant
- One testimonial/review block
- One FAQ block
- One conversion CTA strip

## Metrics to Capture

1. `T1` = time to first usable component in Designer.
2. `T2` = time to complete five reusable blocks.
3. `T3` = time to first QA pass (metadata, links, accessibility, responsive).
4. `T4` = time for non-technical editor to update all five blocks.
5. `R1` = number of rework cycles after design-system adjustments.

## Scorecard Template

| Metric | Code Components | AI/Template | Winner |
|---|---:|---:|---|
| T1 |  |  |  |
| T2 |  |  |  |
| T3 |  |  |  |
| T4 |  |  |  |
| R1 |  |  |  |

## Decision Rule

Choose code-components-first if:
- T2 and T3 are lower or equal, and
- R1 is lower, and
- editor update flow remains straightforward.

Choose AI/template-first if:
- T1 and T2 are substantially lower and
- rework remains acceptable after brand-system updates.

## Current Test Assets

- Code components path:
  `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/webflow-code-components`
- Cloud app path:
  `/Users/micahjohnson/Desktop/CONSTRUCTION/thekingdomconstructiontx/kingdom-cloud-client`
