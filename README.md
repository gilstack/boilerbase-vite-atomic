# Boilerplate WebApp with Tanstack Start

This project is a **modern boilerplate** for web applications, pre-configured to speed up future implementations. It includes essential tools, patterns, and integrations to accelerate development and ensure code quality.

## Main Dependencies

- **React 19**: Main UI library.
- **TanStack (React Query, Router, Start)**: Data and routing management.
- **Jotai**: Global state management.
- **TailwindCSS**: Utility-first styling.
- **Lucide React**: SVG icons.
- **Zod**: Data validation.
- **Storybook**: Component documentation and visual testing.
- **Biome**: Linter, formatter, and checker.
- **Commitlint, Husky, Commitizen**: Commit message standardization.
- **TypeScript**: Static typing.
- **Vite**: Fast, modern bundler.

## Folder Structure

```
public/           # Static files (favicon, manifest, etc)
src/              # Main source code
  components/     # Reusable components
    atoms/        # Basic components (e.g., Button)
    molecules/    # Intermediate components (placeholder)
    organisms/    # Complex components (e.g., NotFound)
    templates/    # Page structures (placeholder)
  providers/      # Global providers (Jotai, React Query)
  routes/         # Application routes
  styles/         # Global styles (CSS)
  types/          # Shared TypeScript types
  utils/          # Utility functions
  router.tsx      # Router configuration
  routeTree.gen.ts# Generated route tree
biome.json        # Biome linter/formatter config
commitlint.config.js # Commitlint config
package.json      # Dependencies and scripts
pnpm-lock.yaml    # Package manager lockfile
README.md         # This file
vite.config.ts    # Vite bundler config
```

## Folders Explain

- **public/**: Images, icons, and static files.
- **src/components/**: Components organized by atomic design (atoms, molecules, organisms, templates).
- **src/providers/**: Global providers for state and data (`jotai`, `react-query`).
- **src/routes/**: Application routes, separated by context (`_app`, `_auth`, etc).
- **src/styles/**: Global and utility CSS styles.
- **src/types/**: Shared TypeScript types.
- **src/utils/**: Utility functions.

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Production build
- `pnpm lint` — Lint code
- `pnpm format` — Format code
- `pnpm storybook` — Start Storybook

## How to use

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the project in development mode:
   ```bash
   pnpm dev
   ```
3. Explore the structure and start implementing your features!

## Notes

- This project serves as a base for new applications using react and vite, already configured with best practices and modern tools.

---

> Created by Gilmar. Boilerplate ready to accelerate your web projects!
