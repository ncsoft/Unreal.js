# jade-walk

Walk and transform a jade AST

[![Build Status](https://img.shields.io/travis/jadejs/jade-walk/master.svg)](https://travis-ci.org/jadejs/jade-walk)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-walk.svg)](https://gemnasium.com/jadejs/jade-walk)
[![NPM version](https://img.shields.io/npm/v/jade-walk.svg)](https://www.npmjs.org/package/jade-walk)

## Installation

    npm install jade-walk

## Usage


```js
var lex = require('jade-lexer');
var parse = require('jade-parser');
var walk = require('jade-walk');

var ast = walk(parse(lex('.my-class foo')), function before(node, replace) {
  // called before walking the children of `node`
  // to replace the node, call `replace(newNode)`
  // return `false` to skip descending
  if (node.type === 'Text') {
    replace({ type: 'Text', val: 'bar', line: node.line });
  }
}, function after(node, replace) {
  // called after walking the children of `node`
  // to replace the node, call `replace(newNode)`
}, {includeDependencies: true});
assert.deepEqual(parse(lex('.my-class bar')), ast);
```

## License

  MIT
