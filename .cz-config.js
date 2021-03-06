// const getPackages = require("@commitlint/config-lerna-scopes").utils;
const shelljs = require("shelljs");

const types = [
  {
    value: "feat",
    name: "feat:     A new feature"
  },
  {
    value: "fix",
    name: "fix:      A bug fix"
  },
  {
    value: "docs",
    name: "docs:     Documentation only changes"
  },
  {
    value: "style",
    name: `style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)`
  },
  {
    value: "refactor",
    name: "refactor: A code change that neither fixes a bug nor adds a feature"
  },
  {
    value: "perf",
    name: "perf:     A code change that improves performance"
  },
  {
    value: "test",
    name: "test:     Adding missing tests"
  },
  {
    value: "chore",
    name: `chore:    Changes to the build process or auxiliary tools and libraries such as documentation generation`
  },
  {
    value: "revert",
    name: "revert:   Revert to a commit"
  }
];

const scopes = JSON.parse(
  shelljs.exec("lerna ls --all --json", { silent: true }).stdout
).map(function(scope) {
  var scopeName = scope.name.replace("@devlaunch/", "");
  return { name: scopeName };
});

module.exports = {
  types,
  scopes: [
    ...scopes,
    {
      name: "meta"
    },
    {
      name: "*"
    }
  ],
  scopeOverrides: {
    chore: [
      ...scopes,
      {
        name: "meta"
      },
      {
        name: "npm"
      }
    ]
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix", "perf", "refactor"]
};
