# Linting And Formating

Linting provides an extra measure of code quality by analyzing code and highlighting potential errors. It can also ensure consistency across projects with multiple developers. Using a create-react-app project, we’ll learn how to get started with ESlint and configure it to use popular style guides. First, let’s make sure we understand what we’ll be working with…

## ESlint

Eslint has become the de-facto linting tool for JavaScript. It’s easy to set up, completely customizable, and has a strong ecosystem of plugins and extensions.

## Airbnb JavaScript Styleguides

Airbnb has open sourced its internal guide of JavaScript best practices that can be enforced using ESlint. This styleguide includes rules for React and it’s become so widely used that ESlint provides an option to enable it by default, as we’ll see shortly.

## Prettier

Prettier is another open source library of opinionated linting rules, much like Airbnb’s. While Airbnb’s style guide is concerned with code quality and potential run time errors, however, Prettier takes care of more aesthetic code style decisions like indentation, new lines, and when to use semicolons. While this may seem overly nit-picky at first, it’s actually liberating because it alleviates the need to make a lot of trivial decisions, allowing developers to devote that energy to the functionality of their code and not how it looks. It also guarantees consistency across entire projects.

## ESlint and Airbnb Javascript Style Guide

Use yarn to install ESlint. Run the following command from your project root directory:

`$ yarn add eslint --dev`

You should see ESlint appear in the dev dependencies section of your package.json file.

With ESlint installed, we can use the handy init command to set up the inital ESlint configuration for our project.

Since ESlint is installed locally and not in our $PATH, we’ll need run it from our node modules directory (Don’t worry, we’ll make this look nicer in just a minute)

`./node_modules/.bin/eslint --init`

This command will launch a walk-through that will set up your ESlint configuration automatically by asking a few questions?

## Fix ESlint errors

Right away, ESLint tells us that there are 37 problems along with a description and some info about where to find them.

### Ignoring Files

One of the files ESlint is warning us about is registerServiceWorker.js, which comes with create-react-app and we probably won’t be messing with. In some cases, like this one, we’ll want to tell ESlint to ignore certain files completely. To do so, we’ll need to create a file named `.eslintignore` in the root directory, add src/registerServiceWorker.js to the first line and save.

Note: Ignoring files is a brute-force solution to linting errors and, if abused, defeats the purpose of using a linter. Make sure that if you ignore files, you have a good reason. There’s no need to add node_modules to your ignore file because ESlint is smart enough to ignore it by default.

### Configuring Rules

Next we can see that each of our files is getting that react/jsx-filename-extension error. A quick search tells us that this is because files that contain React’s JSX syntax should have a .jsx file extension. The easiest way to fix this would be to just change our file extensions but I don’t like that idea and Dan Abramov doesn’t either so I’d rather tell my linter that I want to use .js file extensions. No problem!

To fix this I’m just going to add a rules section to my .eslintrc.json file, and specify that I want to use ".js"

```json
{
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }]
  }
}
```
