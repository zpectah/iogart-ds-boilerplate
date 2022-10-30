# Iogart: Design System Boilerplate for React

🚧 IN DEVELOPMENT * IN DEVELOPMENT * IN DEVELOPMENT 🚧

Iogart is created as a boilerplate for building a more complex React design system, 
or it can be used as a basic set of components and tools for React applications.
Components contain only the most essential elements and styles while providing 
wide customization options.

## Dependencies
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/), ReactDOM
- [CSS Modules](https://github.com/css-modules/css-modules) + [Stylus](https://stylus-lang.com/)
- [Lerna](https://lerna.js.org/)
- [Vite](https://vitejs.dev/) ([config](https://vitejs.dev/config/))
- [Jest](https://jestjs.io/), [Testing library](https://testing-library.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Ladle](https://ladle.dev/)

## Scripts

### Bootstrap
- `% yarn bootstrap`: Installing packages and bootstrapping modules

### Packages
- `% yarn start:packages`: Starts development for 'packages/*'
- `% yarn build:packages`: Build all packages
- `% yarn linter:packages`: Check packages with linter
- `% yarn prettier:packages`: Prettier and fix packages

### Ladle
- `% yarn start:ladle`: Starts preview server with Ladle for development and documentation
- `% yarn build:ladle`: Builds Ladle package

### Preview
- `% yarn start:preview`: Starts preview server for bundle testing
- `% yarn build:preview`: Builds preview package

## Packages

| Name | Path | Contains | Status | Description |
|------|------|----------|--------|-------------|
| components | `/packages/components` | [components, types] | -- | Root of JSX components |
| core | `/packages/core` | [constants, enums, hooks, styles, types] | -- | Common for DS |
| icons | `/packages/icons` | [svg icons] | -- | Root of SVG icons and spinners |
| utils | `/packages/utils` | [helper functions] | -- | Utility functions and helpers |

### Core
Core package provides common constants, enumerations, hooks, types and also styles.

### Utils
Utils package provides utility and helper functions.

### Components
Components package provides basic set of reusable components.
...list of components

### Icons
Icons package provides basic set of reusable icons and spinners.
...list of icons and spinners

## Preview
Preview package provides preview bundled packages for proper testing and debugging.

## How to

### 1) Start development
- A) Development with focus on results, open two separate terminal windows:
  - `% yarn start:packages` on first one to watch changes in source
  - `% yarn start:preview` on second one to open preview for bundle results
  - Maybe I will prepare `stmux` for run in one terminal window
- B) Classic development, so only one terminal would be enough
  - `% yarn start:ladle` to start Ladle development server

### 2) Install new module dependencies to packages
`% yarn lerna add <module> <flags> --scope=<package>`

This will install `<module>` only in scope of `<package>`.
