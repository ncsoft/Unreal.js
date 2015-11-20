# jade-lexer

The jade lexer.  This module is responsible for taking a string and converting it into an array of tokens.

[![Build Status](https://img.shields.io/travis/jadejs/jade-lexer/master.svg)](https://travis-ci.org/jadejs/jade-lexer)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-lexer.svg)](https://gemnasium.com/jadejs/jade-lexer)
[![NPM version](https://img.shields.io/npm/v/jade-lexer.svg)](https://www.npmjs.org/package/jade-lexer)

## Installation

    npm install jade-lexer

## Usage

```js
var lex = require('jade-lexer');

console.log(JSON.stringify(lex('div(data-foo="bar")', 'my-file.jade'), null, '  '))
```

```json
[
  {
    "type": "tag",
    "line": 1,
    "val": "div",
    "selfClosing": false
  },
  {
    "type": "attrs",
    "line": 1,
    "attrs": [
      {
        "name": "data-foo",
        "val": "\"bar\"",
        "escaped": true
      }
    ]
  },
  {
    "type": "eos",
    "line": 1
  }
]
```

## License

  MIT
