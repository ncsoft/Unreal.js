'use strict';

var fs = require('fs');
var assert = require('assert');
var lex = require('../');

var dir = __dirname + '/cases/';
fs.readdirSync(dir).forEach(function (testCase) {
  if (/\.jade$/.test(testCase)) {
    var expected = fs.readFileSync(dir + testCase.replace(/\.jade$/, '.expected.json'), 'utf8')
                     .split(/\n/).map(JSON.parse);
    var result = lex(fs.readFileSync(dir + testCase, 'utf8'), __dirname + '/cases/' + testCase);
    try {
      assert.deepEqual(expected, result);
    } catch (ex) {
      console.log('Updating ' + testCase);
      fs.writeFileSync(dir + testCase.replace(/\.jade$/, '.expected.json'),
                       result.map(JSON.stringify).join('\n'));
    }
  }
});
