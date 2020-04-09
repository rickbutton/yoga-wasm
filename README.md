# yoga-wasm

`yoga-wasm` is a build of Facebook's [Yoga](https://github.com/facebook/yoga)
Flexbox layout engine, for JavaScript and WebAssembly.

It is a drop in replacement for the [`yoga-layout`](https://www.npmjs.com/package/yoga-layout) NPM package.

## Installation

```bash
# npm
npm install --save yoga-wasm

# yarn
yarn add yoga-wasm
```

## Usage

You should be able to use `yoga-wasm` in the same way you would normally use `yoga-layout`:

```js
import * as yoga from "yoga-wasm";

const node = yoga.Node.create();

node.setMaxWidth(100);

node.computeLayout(100, 100, yoga.DIRECTION_LTR);
```

## Prior Art

[`yoga-dom`](https://github.com/vincentriemer/yoga-dom) is another attempt to port Yoga to JS with WebAssembly. I leaned heavily on 
[viankakrisna](https://github.com/viankakrisna)'s `embind` bindings when porting the latest version of Yoga's bindings from `nbind` to `embind`.

## Contributing

Open a PR or file an issue!
