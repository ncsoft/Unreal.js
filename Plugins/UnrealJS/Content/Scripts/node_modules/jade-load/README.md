# jade-load

The jade loader is responsible for loading the depenendencies of a given jade file.  It adds `fullPath` and `str` properties to every `Include` and `Extends` node.  It also adds an `ast` property to any `Include` nodes that are loading jade and any `Extends` nodes.  It then recursively loads the dependencies of any of those included files.

[![Build Status](https://img.shields.io/travis/jadejs/jade-load/master.svg)](https://travis-ci.org/jadejs/jade-load)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-load.svg)](https://gemnasium.com/jadejs/jade-load)
[![NPM version](https://img.shields.io/npm/v/jade-load.svg)](https://www.npmjs.org/package/jade-load)

## Installation

    npm install jade-load

## Usage

```js
var fs = require('fs');
var lex = require('jade-lexer');
var parse = require('jade-parser');
var load = require('jade-load');

// you can do everything very manually

var str = fs.readFileSync('bar.jade', 'utf8');
var ast = load(parse(lex(str, 'bar.jade'), 'bar.jade'), {
  lex: lex,
  parse: parse
});

// or you can do all that in just two steps

var str = fs.readFileSync('bar.jade', 'utf8');
var ast = load.string(str, 'bar.jade', {
  lex: lex,
  parse: parse
});

// or you can do all that in only one step

var ast = load.file('bar.jade', {
  lex: lex,
  parse: parse
});
```

## License

  MIT
