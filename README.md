# Iogart: Design System Boilerplate for React

🚧 IN DEVELOPMENT * IN DEVELOPMENT * IN DEVELOPMENT 🚧

Iogart is created as a boilerplate for building a more complex React design system, 
or it can be used as a basic set of components and tools for React applications.
Components contain only the most essential elements and styles while providing 
wide customization options.

## Dependencies
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/), ReactDOM
- [CSS Modules](https://github.com/css-modules/css-modules) + [Stylus](https://stylus-lang.com/) ([Stylus Cheatsheet](https://devhints.io/stylus))
- [Lerna](https://lerna.js.org/)
- [Vite](https://vitejs.dev/) ([config](https://vitejs.dev/config/))
- [Jest](https://jestjs.io/), [Testing library](https://testing-library.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Ladle](https://ladle.dev/)

## Scripts

### Bootstrap project
- `% yarn bootstrap`: Installing packages and bootstrapping modules

### Packages
- `% yarn linter:packages`: Check packages with linter
- `% yarn prettier:packages`: Prettier and fix packages
- `% yarn build:packages`: Build all packages
- `% yarn start:packages`: Starts development for 'packages/*'

### Ladle
- `% yarn start:ladle`: Starts preview server with Ladle for development and documentation
- `% yarn build:ladle`: Builds Ladle package

## Tests
More information about the tests can be found [here](./tests/README.md)

## Preview
More information about the preview can be found [here](./preview/README.md)

## Packages

| Name | Path | Contains | Status | Description |
|------|------|----------|--------|-------------|
| components | `/packages/components` | [components, types] | -- | Root of JSX components [...more](./packages/components/README.md) |
| core | `/packages/core` | [constants, enums, hooks, styles, types] | -- | Common for DS [...more](./packages/core/README.md) |
| icons | `/packages/icons` | [svg icons] | -- | Root of SVG icons and spinners [...more](./packages/icons/README.md) |
| utils | `/packages/utils` | [helper functions] | -- | Utility functions and helpers [...more](./packages/utils/README.md) |

## Contribution
More information about contribution can be found [here](./CONTRIBUTION.md)