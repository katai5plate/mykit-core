# mykit-core

- example: https://github.com/katai5plate/mykit-ts

## How to make

1. `yarn init && yarn add katai5plate/core`
2. Add ./index.js
```js
const resources = require(`${__dirname}/resources.json`);
const scripts = require(`${__dirname}/scripts.json`);
module.exports = () => require("mykit-core")(resources, scripts);
```
3. Add resources to ./resources
4. Add ./resources.json
- src: The name of the target file in the resources directory
  - require.
- dir: Output destination directory name
  - optional. default: "" (Root)
- dist: Output file name
  - optional. default: src
```js
[
  { "src": "vscode.setting.json", "dir": "vscode", "dist": "setting.json" },
  { "src": "index.html" }
]
```
5. Add ./scripts.json
- `mykit-install` is require. The packages necessary for environment construction.
```js
{
  "hello": "node -e \"console.log('Hello, World!')\"",
  "mykit-install": "yarn add -D lodash"
}
```
6. Write README.md and upload to GitHub or npm.

## exp

```js
try {
  require("mykit-ts")();
} catch {
  require("./index")();
}
```
