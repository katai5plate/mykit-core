# mykit-core

## マイキットの作り方

1. `yarn add katai5plate/core`
2. 追加 ./index.js
```js
const resources = require(`${__dirname}/resources.json`);
const scripts = require(`${__dirname}/scripts.json`);
module.exports = () => require("mykit-core")(resources, scripts);
```
3. 追加 ./resources.js
- src: resources ディレクトリ内にある対象ファイルの名前
  - 省略不可
- dir: 出力先のディレクトリ
  - 省略すると `./` が入る
- dist: 出力時のファイル名
  - 省略すると src が入る
```js
[
  { "src": "vscode.setting.json", "dir": "vscode", "dist": "setting.json" },
  { "src": "assets.d.ts", "dir": "@types", "dist": "assets.d.ts" },
  { "src": "index.ts", "dir": "src", "dist": "index.ts" }
]
```

## 試行用

```js
try {
  require("mykit-ts")();
} catch {
  require("./index")();
}
```
