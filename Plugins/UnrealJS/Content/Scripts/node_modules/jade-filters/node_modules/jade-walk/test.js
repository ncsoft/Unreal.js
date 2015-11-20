'use strict';

var assert = require('assert');
var lex = require('jade-lexer');
var parse = require('jade-parser');
var walk = require('./');

var ast = walk(parse(lex('.my-class foo')), function before(node, replace) {
  // called before walking the children of `node`
  // to replace the node, call `replace(newNode)`
  // return `false` to skip descending
  if (node.type === 'Text') {
    replace({ type: 'Text', val: 'bar', line: node.line });
  }
}, function after(node, replace) {
  // called before walking the children of `node`
  // to replace the node, call `replace(newNode)`
});
assert.deepEqual(parse(lex('.my-class bar')), ast);
console.log('tests passed');
