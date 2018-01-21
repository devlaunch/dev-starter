# Why a monorepo?

Juggling a multimodule project over multiple repo's is like trying to teach a newborn baby how to ride a bike.

dev-starter follows a monorepo approach, all modules are in the same repo.

This is quite taboo but let's look at the pros and cons:

## Pros

- Single lint, build, test and release process.
- Easy to coordinate changes across modules.
- Single place to report issues.
- Easier to setup a development environment.
- Tests across modules are ran together which finds bugs that touch multiple modules easier.

## Cons

- Codebase looks more intimidating.
- Repo is bigger in size.
- Can't npm install modules directly from GitHub

## Tooling

The tool of choice for managing the monorepo is a combination of 

- [Yarn workspaces](https://yarnpkg.com/en/docs/workspaces)
- [Lerna](https://lernajs.io/)

To explore commands available through lerna:
`$ yarn lernawiz`

To run lerna commands directly:
`$ yarn lerna <command>`