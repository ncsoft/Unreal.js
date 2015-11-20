'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var walk = require('jade-walk');
var lex = require('jade-lexer');
var parse = require('jade-parser');
var load = require('../');

var filename = __dirname + '/foo.jade';
var ast = load.file(filename, {
  lex: lex,
  parse: parse
});

ast = walk(ast, function (node) {
  if (node.filename) node.filename = '<dirname>/' + path.basename(node.filename);
  if (node.fullPath) node.fullPath = '<dirname>/' + path.basename(node.fullPath);
}, {includeDependencies: true});

var expected = JSON.parse(fs.readFileSync(__dirname + '/expected.json', 'utf8'));
fs.writeFileSync(__dirname + '/output.json', JSON.stringify(ast, null, '  '));

assert.deepEqual(expected, ast);
console.log('tests passed');
