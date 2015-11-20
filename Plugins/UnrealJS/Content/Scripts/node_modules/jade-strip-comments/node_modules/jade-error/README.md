# jade-error

Standard error objects for jade.  This module is intended for use by the lexer, parser, loader, linker, code-generator and any plugins.

[![Build Status](https://img.shields.io/travis/jadejs/jade-error/master.svg)](https://travis-ci.org/jadejs/jade-error)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-error.svg)](https://gemnasium.com/jadejs/jade-error)
[![NPM version](https://img.shields.io/npm/v/jade-error.svg)](https://www.npmjs.org/package/jade-error)

## Installation

    npm install jade-error

## Usage

```js
var err = error('MY_CODE', 'My message', {line: 3, filename: 'myfile', src: 'foo\nbar\nbaz\nbash\nbing'});
throw err;
```

## License

  MIT
