# dev-starter

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-airbnb-blue.svg)](https://github.com/phaneendra/javascript-badges/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

_Javascript application development starter with Babel ES6 / ES7 Support, Testing, CI Integration, Code Coverage, JS Airbnb Style, Commit Guidelines, Git Hooks, Security Checks, Automatic Semantic Versioning, Benchmarking, Debugging, Monitoring, Source Map Generation, Auto Reload, Linting and more cool stuff ..._

## Project Status

[![Build Status](https://travis-ci.org/phaneendra/dev-starter.svg?branch=master)](https://travis-ci.org/phaneendra/dev-starter) [![codecov](https://codecov.io/gh/phaneendra/dev-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/phaneendra/dev-starter) ![dependencies](https://david-dm.org/phaneendra/dev-starter.svg)

## Features

### Structure
* [x] Monorepo approach with [Yarn workspaces](https://yarnpkg.com/en/docs/workspaces)
* [x] Central running npm scripts from all packages with [Lerna run](https://lernajs.io/)
* [ ] Task Runner CLI via [ntl](https://github.com/ruyadorno/ntl)
* [ ] npm scripts to get quick up and running via  [runjs](https://github.com/pawelgalazka/runjs#get-started)

### Formating and Linting and Code Commits
* [x] Javascript Linting with [ESLint](https://github.com/eslint/eslint)
* [x] Javascript Code Style [Airbnb](https://github.com/airbnb/javascript)
* [x] Javascript Code formating [prettier-eslint](https://github.com/prettier/prettier-eslint)
* [x] Javascript Style Linting via [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [x] Use Standard Conventional Commit Messages via [commitizen](https://github.com/commitizen/cz-cli)
* [x] Lint Commit Messages via [commitlint](http://marionebl.github.io/commitlint)
* [ ] Lint Markdown files with [markdownlint](https://github.com/DavidAnson/markdownlint)
* [ ] Check if links in Markdown are online via [markdown-link-check](https://github.com/tcort/markdown-link-check)

### Testing 
* [ ] Code Benchmark Testing with [benchmark.js](https://github.com/bestiejs/benchmark.js)
* [ ] Vulnerability scan via [snyk](https://github.com/Snyk/snyk)
* [ ] ES6+ Testing via [babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) with [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai), [Sinon](https://github.com/sinonjs/sinon) and [sinon-chai](https://github.com/domenic/sinon-chai)
* [ ] Generate HTML Reports from tests via [mochawesome](https://github.com/adamgruber/mochawesome)
* [ ] ES6+ Code Coverage with [babel-istanbul](https://github.com/jmcriffey/babel-istanbul)
* [ ] Ready for Continuous Integration & Delivery with [travis-ci](https://travis-ci.org)

### Publishing and Release
* [x] Automatic Semantic Releasing with [Lerna publish](https://lernajs.io/)
* [x] Automatic generate Changelog with Lerna publish using [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)
* [ ] Lint .travis.yml with [travis-lint](https://github.com/pwmckenna/node-travis-lint)
* [ ] Slack & Email Notifications for Builds via [travis-ci](https://docs.travis-ci.com/user/notifications)

### Common Node js features
* [x] Node optimized ES6 / ES7 Transpilation and Source Maps with [Babel](https://github.com/babel/babel)
* [ ] ES6+ aware Code Minification based on the Babel toolchain [babel-minify](https://github.com/babel/minify)
* [x] Restart Node on Application Changes with [nodemon](https://github.com/remy/nodemon)
* [ ] Node Server Performance Monitoring with [nodejs-dashboard](https://github.com/FormidableLabs/nodejs-dashboard)

## External Services

_all used services are free to use for open source projects and quick registration via github authentication_

* [github](https://github.com/) - Modern Version Control System
* [npmjs](https://www.npmjs.com/) - Javascript Package Registry (optional: only if you want to publish to the npm registry)
* [travis-ci](https://travis-ci.org) - Continuous Integration & Delivery
* [codecov.io](https://codecov.io/) - Code Coverage
* [snyk.io](https://snyk.io) - Fix and prevent known vulnerabilities in dependencies
* [greenkeeper.io](https://greenkeeper.io) - Automated Dependency Management

In case you have to pass some secure token to Travis-CI i recommend the [travis-cli](https://github.com/travis-ci/travis.rb) tool for decryption and lots of other features. You can read more about it [here](https://docs.travis-ci.com/user/encryption-keys/). Linux / OS X Installation via `sudo gem install travis`. You can also set Token on GitHub in the Repository Settings.

## Quickstart (npm)

```bash
git clone https://github.com/phaneendra/dev-starter
cd dev-starter
npm install
```

## Quickstart (yarn)

```bash
git clone https://github.com/phaneendra/dev-starter
cd dev-starter
yarn
```

### Info

At the moment im busy working on this boilerplate and lot stuff is changing.  
When things getting more stable i will bump the version to 1.0.0 and write a detailed documentation.

### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/phaneendra/)
[![Docker](https://github.frapsoft.com/social/docker.png)](https://hub.docker.com/u/phaneendra/)
[![npm](https://github.frapsoft.com/social/npm.png)](https://www.npmjs.com/~phaneendra)
[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/phaneekr)

### License

Copyright (c) 2018 [phaneendra](https://github.com/phaneendra/)
