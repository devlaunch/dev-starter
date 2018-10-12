# A Workflow Guide for Lerna with Yarn Workspaces

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

When coupled together, Lerna and Yarn Workspaces can ease and optimize the management of working with multi-package repositories.

Lerna makes versioning and publishing packages to an NPM Org a painless experience by providing helpful utility commands for handling the execution of tasks across multiple packages.

Yarn Workspaces manages our dependencies. Rather than having multiple node_modules directories, it intelligently optimizes the installing of dependencies together and allows for the cross-linking of dependencies in a monorepo. Yarn Workspaces provide tools, like Lerna, the low-level primitives it needs to manage multi-package repositories.

In order to begin, let’s enable Yarn Workspaces

yarn config set workspaces-experimental true
Now we are able to illustrate these concepts by creating a dummy project

mkdir my-design-system && cd my-design-system
that we initialize

yarn init
and add Lerna as a dev dependency

yarn add lerna --dev
you’ll then want to initialize Lerna, which will create a lerna.json and a packages directory

lerna init
In order to set up Lerna with Yarn workspaces, we need to configure the lerna.json

Let’s add yarn as our npmClient and specify that we’re using yarn workspaces. For this tutorial we’ll be versioning our packages independently.

// lerna.json
{
"packages": ["packages/*"],
"version": "independent",
"npmClient": "yarn",
"useWorkspaces": true
}
At this point we should only have a root package.json. In this root package.json we need to add workspaces and private to true. This will prevent the root project from being published to NPM.

// package.json
{
"name": "my-design-system",
"private": true,
"workspaces": [
"packages/*"
]  
}
Flow for Creating a New Package
New packages need to be created under the packages directory. Let’s create a dummy form package

cd packages
Once we’re in the correct directory, we can create and cd into our new package

mkdir my-design-system-form && cd my-design-system-form
then we create a new package.json by running yarn init:

yarn init
The new name should follow our NPM Org scope ex. @my-scope-name

It’s also important to have the new package start at a version like 0.0.0 because once we do our first publish using Lerna, it’ll be published at 0.1.0 or 1.0.0.

// package.json
{
"name": "@my-scope-name/my-design-system-form",
"version" : "0.0.0",
"main" : "index.js"
}
If you have an NPM Org Account which supports private packages, you can add the following to your package.json

"publishConfig": {
"access": "private"
}
Adding a Local Sibling Dependency to a Specific Package
Now that we know the flow for creating new packages, let’s say we ended up with a structure like:

my-design-system/
packages/
my-design-system-core/
my-design-system-form/
my-design-system-button/
If we wanted to add the my-design-system-button as a dependency to our my-design-system-form and have Lerna symlink them, we can do so by cd into that package

cd my-design-system-form
and then running the following:

lerna add @my-scope-name/design-system-button --scope=@my-scope-name/my-design-system-form
This will update the package.json of @my-scope-name/my-design-system-form.

Our package.json should look like:

// package.json
{
"name": "@my-scope-name/my-design-system-form",
"version": "1.0.0",
"main": "index.js",
"dependencies": {
"@e-interactive/my-design-system-button": "^1.0.0"
}
}
Now you can reference this local dependency in index.js like

import Button from '@my-scope-name/my-design-system-button';
Adding a “common” dependency to ALL packages
Doing this is similar to the previous command. This would be for /packages/\*. It doesn’t matter if they’re local sibling dependencies or from NPM

lerna add the-dep-name
If you have common dev dependencies, it’s better to specify them in the workspace root package.json. For instance, this can be dependencies like Jest, Husky, Storybook, Eslint, Prettier, etc.

yarn add husky --dev -W
\*Adding the -W flag makes it explicit that we’re adding the dependency to the workspace root.

Removing Dependencies
If there’s a dependency that all packages use but that you want to remove, Lerna has the exec command that runs an arbitrary command in each package. With this knowledge, we can use exec to remove a dependency on all packages.

lerna exec -- yarn remove dep-name
Running Tests
Lerna provides the run command which will run an npm script in each package that contains that script.

For instance, say all of our packages follow the structure of my-design-system-form:

my-design-system-form/
**tests**/
Form.test.js
and in each package.json we have the test npm script

"name": "@my-scope-name/my-design-system-form",
"scripts": {
"test": "jest"
}
Then Lerna can execute each test script by running:

lerna run test --stream
\*The — stream flag just provides output from the child processes

Publishing to NPM
Manual

First, you need to make sure you’re logged in. You can verify that you’re logged in by doing

npm whoami // myusername
If you’re not logged in, run the following and follow the prompts:

npm login
Once logged in you can have Lerna publish by running:

lerna publish
Lerna will prompt you to update the version numbers.

Automatic

Lerna supports the use of the Conventional Commits Standard to automate Semantic Versioning in a CI environment.

This gives developers the ability to commit messages like

git commit -m "fix: JIRA-1234 Fixed minor bug in foo"
Then in a CI environment, the packages version’s can be updated and published to NPM based on commits like the one above. This is done by configuring your CI environment to run:

lerna publish --conventional-commits --yes
If you don’t want to pass flags, add the following to your lerna.json file

"command": {
"publish": {
"conventionalCommits": true,
"yes": true
}
}
Enforcing Conventional Commits

If you want to enforce the Conventional Commits Standard, I recommend adding commitlint to the ROOT of the project

yarn add @commitlint/cli @commitlint/config-conventional husky cross-env --dev
Then create a release script in the root package.json

"scripts": {
"release": "cross-env HUSKY_BYPASS=true lerna publish"
}
This release script will be run in a CI Environment. Note, that we configured the conventional commits and “yes” flag in the lerna.json file. Since, this CI environment will be committing the Version changes, we don’t want to trigger the linting of the commit message. We do this by adding an Environment Variable named HUSKY_BYPASS which we’ll set to true by using cross-env.

We still need to add further configuration in the root package.json

"husky": {
"hooks": {
"commit-msg": "[[ -n $HUSKY_BYPASS ]] || commitlint -E HUSKY_GIT_PARAMS"
}
},
"commitlint": {
"extends": ["@commitlint/config-conventional"]
}
For husky, we add a commit-msg hook that will check the HUSKY_BYPASS Environment Variable we added above, if this is falsy then we lint the commit message by using @commitlint/config-conventional

Split Versioning and Publishing

If for whatever reason you want full control of the versioning, Lerna has the ability to split versioning and publishing into two commands.

You can manually run:

lerna version
Then follow the prompts to update the individual version numbers.

Then you can have a step that will read the latest tag (that was manually updated) to publish to NPM:

lerna publish from-git --yes
Local Development with Multiple Contributors
Anytime a new contributor does a git clone of your project or you need to pull your team’s latest changes you have to run the yarn command:

yarn
In most Lerna tutorials, it is advocated to use the lerna bootstrap command, however when yarn workspaces is enabled this is unecessary and redundant.

lerna bootstrap when you're using Yarn workspaces is literally redundant? All lerna bootstrap --npm-client yarn --use-workspaces (CLI equivalent of your lerna.json config) does is call yarn install in the root. — Issue 1308
See https://github.com/lerna/lerna/issues/1308 for more info.

Cross Project Local Development
In our example, we are building a multi-package design system. If a developer wanted to create a new component in the design system but also test it out in a local client application before it’s published, they can do so by using yarn’s link command.

To symlink a local dependency

Say we want to use our local my-design-system-core in my-client-app

We first CD into the package we want to use in another project

cd ~/path/to/my-design-system/my-design-system-core
Then we create a symlink

yarn link
You should see output like:

success Registered "@my-scope-name/my-design-system-core".
info You can now run `yarn link "@my-scope/my-design-system-core"` in the projects where you want to use this module and it will be used instead.
Now that our package is symlinked, we can go into my-client-app to use:

cd ~/path/to/my-client-app
yarn link @my-scope-name/my-design-system-core
Any changes in /packages/my-design-system-core will be reflected in my-client-app. Now a developer can easily do local development on both projects and see it reflected.

To unlink a local dependency

When the developer is finished and no longer wants to use the local package we need to unlink.

CD into the package we want to unlink

cd ~/path/to/my-design-system/my-design-system-core
Run unlink to remove the local symlink

yarn unlink
You’ll see output like:

success Unregistered "@my-scope-name/my-design-system-core".
info You can now run `yarn unlink "@my-scope-name/my-design-system-core"` in the projects where you no longer want to use this module.
Now we can cd into my-client-app to unlink

cd ~/path/to/my-client-app
yarn unlink @my-scope-name/my-design-system-core
Overall
Lerna coupled with yarn workspaces is a great combination. Lerna adds utility functionality on top of Yarn Workspaces for working with multiple packages. Yarn workspaces make it so that all dependencies can be installed together, making caching and installing faster. It allows us to easily release dependencies on NPM with a single command, automatically updates the package.json of sibling dependencies when a dependency version changes, and generally makes installing, versioning, and publishing a painless experience.
