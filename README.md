# thekingdomconstructiontx

A production-focused rebuild of The Kingdom Construction in Webflow, including:

- `webflow-code-components/`: reusable Webflow code components and page libraries
- `kingdom-cloud-client/`: Next.js Webflow Cloud client application

## Projects

- `webflow-code-components`: code component library with shared `PageChrome` shell
- `kingdom-cloud-client`: deployment target for Webflow Cloud

## Common Commands

```bash
# Run component type checks
cd webflow-code-components
npm run typecheck
npm run share:retry

# Validate and build cloud client
cd ../kingdom-cloud-client
npm run lint
npm run build
```

## Notes

- Components are styled for Shadow DOM safety and are designed for Webflow code component deployment.
- Repository follows enterprise-style naming and component architecture conventions for long-term maintainability.
