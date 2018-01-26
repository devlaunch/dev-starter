## Web

There are some issues with running CRA's init scripts inside the workspace, so
just go to a temporary folder anywhere and make a new project:

```bash
# go to some temporary location
cd /tmp
# make the app
create-react-app web
# get rid of node modules and yarn.lock
rm -rf web/node_modules web/yarn.lock
# move it to the workspaces
mv web ~/workspaces
cd ~/workspaces/web
```

The next step is to have CRA compile your other workspaces code if they're
imported by your app.

Install `react-app-rewired` and `react-app-rewire-yarn-workspaces` in the web project:

```bash
yarn add --dev react-app-rewired react-app-rewire-yarn-workspaces
```

Swap the `start`, `build`, and `test` scripts in `package.json` for these:

```json
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
```

And add a file called `config-overrides.js` with this:

```js
const rewireYarnWorkspaces = require("react-app-rewire-yarn-workspaces");

module.exports = function override(config, env) {
  return rewireYarnWorkspaces(config, env);
};
```
