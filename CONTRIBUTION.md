# Contribution

## Development
A) Development with focus on results, open two separate terminal windows:
- `% yarn start:packages` on first one to watch changes in source
- `% yarn start:preview` on second one to open preview for bundle results
- Maybe we will prepare `stmux` for run in one terminal window

B) Classic development, so only one terminal would be enough
- `% yarn start:ladle` to start Ladle development server

## Before commit
Before every commit to git, please run these tasks:
1) `% yarn prettier:packages`
2) `% yarn linter:packages`
3) `% yarn test`
4) Fix any deficiencies detected by tests and linter
5) `% yarn build:packages`
6) Commit now

## How to, what to do when

### Install new module dependencies to packages
`% yarn lerna add <module> <flags> --scope=<package>`

This will install `<module>` only in scope of `<package>`.