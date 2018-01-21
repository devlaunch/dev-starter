# Workflow

## setup

`yarn setup`
Will clean all node modules in each individual packages and run yarn install

## commit

git add
git status
git cz

## push

eslint
prettier fix
git add
git status
git cz
git push

## release
eslint
prettier fix
lint travis
lint markdown
lint markdown links
lerna publish --conventional-commits --changelog-preset=angular-bitbucket

- Run the equivalent of lerna updated to determine which packages need to be published.
- If necessary, increment the version key in lerna.json.
- Update the package.json of all updated packages to their new versions.
- Create a changelog
- Update all dependencies of the updated packages with the new versions, specified with a caret (^).
- Create a new git commit and tag for the new version.

## publish

Publish updated packages to npm.
lerna publish --skip-git
