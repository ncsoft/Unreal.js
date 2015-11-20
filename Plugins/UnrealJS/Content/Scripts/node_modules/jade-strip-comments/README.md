# jade-strip-comments

Strips comments from Jade token stream

[![Build Status](https://img.shields.io/travis/jadejs/jade-strip-comments/master.svg)](https://travis-ci.org/jadejs/jade-strip-comments)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-strip-comments.svg)](https://gemnasium.com/jadejs/jade-strip-comments)
[![NPM version](https://img.shields.io/npm/v/jade-strip-comments.svg)](https://www.npmjs.org/package/jade-strip-comments)

## Installation

    npm install jade-strip-comments

## Usage

```js
var lex = require('jade-strip-comments');
var stripComments = require('jade-strip-comments');

var tokens = lex('//- unbuffered\n// buffered');
// [ { type: 'comment', line: 1, val: ' unbuffered', buffer: false },
//   { type: 'newline', line: 2 },
//   { type: 'comment', line: 2, val: ' buffered', buffer: true },
//   { type: 'eos', line: 2 } ]

// Only strip unbuffered comments (default)
stripComments(tokens, { filename: 'jade' });
// [ { type: 'newline', line: 2 },
//   { type: 'comment', line: 2, val: ' buffered', buffer: true },
//   { type: 'eos', line: 2 } ]

// Only strip buffered comments (when you want to play a joke on your coworkers)
stripComments(tokens, { filename: 'jade', stripUnbuffered: false, stripBuffered: true });
// [ { type: 'comment', line: 1, val: ' unbuffered', buffer: false },
//   { type: 'newline', line: 2 },
//   { type: 'eos', line: 2 } ]

// Strip both (if you want Jade VERY clean)
stripComments(tokens, { filename: 'jade', stripBuffered: true });
// [ { type: 'newline', line: 2 },
//   { type: 'eos', line: 2 } ]
```

## License

MIT
