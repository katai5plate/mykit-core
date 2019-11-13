# mykit-core

## マイキットの作り方

1. `yarn init && yarn add katai5plate/core`
2. 追加 ./index.js
```js
const resources = require(`${__dirname}/resources.json`);
const scripts = require(`${__dirname}/scripts.json`);
module.exports = () => require("mykit-core")(resources, scripts);
```
3. 追加 ./resources.json
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
4. 追加 ./scripts.json
- `mykit-install` は必ず入れ、環境構築に必要なパッケージを書き込む。
- その他追加したい npm-scripts を書き入れる。
```js
{
  "mykit-install": "yarn add -D lodash"
}
```
5. README.md を書いて GitHub か npm にアップロードする

## 試行用

```js
try {
  require("mykit-ts")();
} catch {
  require("./index")();
}
```
