'use strict';

var assert = require('assert');
var characterParser = require('character-parser');

module.exports = lex;
module.exports.Lexer = Lexer;
function lex(str, filename) {
  var lexer = new Lexer(str, filename);
  return JSON.parse(JSON.stringify(lexer.getTokens()));
}

/**
 * Initialize `Lexer` with the given `str`.
 *
 * @param {String} str
 * @param {String} filename
 * @api private
 */

function Lexer(str, filename, options) {
  options = options || {};
  //Strip any UTF-8 BOM off of the start of `str`, if it exists.
  str = str.replace(/^\uFEFF/, '');
  this.input = str.replace(/\r\n|\r/g, '\n');
  this.filename = filename;
  this.interpolated = options.interpolated || false;
  this.lastIndents = 0;
  this.lineno = options.startingLine || 1;
  this.indentStack = [];
  this.indentRe = null;
  this.pipeless = false;

  this.tokens = [];
  this.ended = false;
};

/**
 * Lexer prototype.
 */

Lexer.prototype = {

  constructor: Lexer,

  error: function (message, code) {
    var err = new Error(message + ' on line ' + this.lineno + ' of ' + (this.filename || 'jade'));
    err.code = 'JADE:' + code;
    err.msg = message;
    err.line = this.lineno;
    err.filename = this.filename;
    throw err;
  },

  assert: function (value, message) {
    if (!value) this.error(message, 'ASSERT_FAILED');
  },

  assertExpression: function (exp) {
    //this verifies that a JavaScript expression is valid
    try {
      Function('', 'return (' + exp + ')');
    } catch (ex) {
      this.error('Syntax Error', 'SYNTAX_ERROR');
    }
  },

  assertNestingCorrect: function (exp) {
    //this verifies that code is properly nested, but allows
    //invalid JavaScript such as the contents of `attributes`
    var res = characterParser(exp)
    if (res.isNesting()) {
      this.error('Nesting must match on expression `' + exp + '`', 'INCORRECT_NESTING')
    }
  },

  /**
   * Construct a token with the given `type` and `val`.
   *
   * @param {String} type
   * @param {String} val
   * @return {Object}
   * @api private
   */

  tok: function(type, val){
    return val === undefined ?
      {type: type, line: this.lineno} :
      {type: type, line: this.lineno, val: val};
  },

  /**
   * Consume the given `len` of input.
   *
   * @param {Number} len
   * @api private
   */

  consume: function(len){
    this.input = this.input.substr(len);
  },

  /**
   * Scan for `type` with the given `regexp`.
   *
   * @param {String} type
   * @param {RegExp} regexp
   * @return {Object}
   * @api private
   */

  scan: function(regexp, type){
    var captures;
    if (captures = regexp.exec(this.input)) {
      this.consume(captures[0].length);
      return this.tok(type, captures[1]);
    }
  },

  /**
   * Return the indexOf `(` or `{` or `[` / `)` or `}` or `]` delimiters.
   *
   * @return {Number}
   * @api private
   */

  bracketExpression: function(skip){
    skip = skip || 0;
    var start = this.input[skip];
    assert(start === '(' || start === '{' || start === '[',
           'The start character should be "(", "{" or "["');
    var end = ({'(': ')', '{': '}', '[': ']'})[start];
    var range;
    try {
      range = characterParser.parseMax(this.input, {start: skip + 1});
    } catch (ex) {
      this.error(ex.message, 'BRACKET_MISMATCH');
    }
    this.assert(this.input[range.end] === end,
           'start character "' + start + '" should match end character "' + this.input[range.end] + '"');
    return range;
  },

  /**
   * end-of-source.
   */

  eos: function() {
    if (this.input.length) return;
    for (var i = 0; i < this.indentStack.length; i++) {
      this.tokens.push(this.tok('outdent'));
    }
    this.tokens.push(this.tok('eos'));
    this.ended = true;
    return true;
  },

  /**
   * Blank line.
   */

  blank: function() {
    var captures;
    if (captures = /^\n *\n/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      ++this.lineno;
      if (this.pipeless) this.tokens.push(this.tok('text', ''));
      return true;
    }
  },

  /**
   * Comment.
   */

  comment: function() {
    var captures;
    if (captures = /^\/\/(-)?([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('comment', captures[2]);
      tok.buffer = '-' != captures[1];
      this.pipeless = true;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Interpolated tag.
   */

  interpolation: function() {
    if (/^#\{/.test(this.input)) {
      var match = this.bracketExpression(1);
      this.consume(match.end + 1);
      this.tokens.push(this.tok('interpolation', match.src));
      return true;
    }
  },

  /**
   * Tag.
   */

  tag: function() {
    var captures;
    if (captures = /^(\w(?:[-:\w]*\w)?)(\/?)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok, name = captures[1];
      tok = this.tok('tag', name);
      tok.selfClosing = !!captures[2];
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Filter.
   */

  filter: function() {
    var tok = this.scan(/^:([\w\-]+)/, 'filter');
    if (tok) {
      this.pipeless = true;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Doctype.
   */

  doctype: function() {
    if (this.scan(/^!!! *([^\n]+)?/, 'doctype')) {
      this.error('`!!!` is deprecated, you must now use `doctype`', 'OLD_DOCTYPE');
    }
    var node = this.scan(/^(?:doctype) *([^\n]+)?/, 'doctype');
    if (node && node.val && node.val.trim() === '5') {
      this.error('`doctype 5` is deprecated, you must now use `doctype html`', 'OLD_DOCTYPE');
    }
    if (node) {
      this.tokens.push(node);
      return true;
    }
  },

  /**
   * Id.
   */

  id: function() {
    var tok = this.scan(/^#([\w-]+)/, 'id');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Class.
   */

  className: function() {
    var tok = this.scan(/^\.([\w-]+)/, 'class');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Text.
   */
  endInterpolation: function () {
    if (this.interpolated && this.input[0] === ']') {
      this.input = this.input.substr(1);
      this.ended = true;
      return true;
    }
  },
  addText: function (value, prefix) {
    if (value + prefix === '') return;
    prefix = prefix || '';
    var indexOfEnd = this.interpolated ? value.indexOf(']') : -1;
    var indexOfStart = value.indexOf('#[');
    var indexOfEscaped = value.indexOf('\\#[');

    if (indexOfEnd === -1) indexOfEnd = Infinity;
    if (indexOfStart === -1) indexOfStart = Infinity;
    if (indexOfEscaped === -1) indexOfEscaped = Infinity;

    if (indexOfEscaped !== Infinity && indexOfEscaped < indexOfEnd && indexOfEscaped < indexOfStart) {
      prefix = prefix + value.substr(0, value.indexOf('\\#[')) + '#[';
      return this.addText(value.substr(value.indexOf('\\#[') + 3), prefix);
    }
    if (indexOfStart !== Infinity && indexOfStart < indexOfEnd && indexOfStart < indexOfEscaped) {
      this.tokens.push(this.tok('text', prefix + value.substr(0, indexOfStart)));
      this.tokens.push(this.tok('start-jade-interpolation'));
      var child = new this.constructor(value.substr(indexOfStart + 2), this.filename, {
        interpolated: true,
        startingLine: this.lineno
      });
      var interpolated = child.getTokens();
      for (var i = 0; i < interpolated.length; i++) {
        this.tokens.push(interpolated[i]);
        if (interpolated[i].type === 'eos') {
          this.error('End of line was reached with no closing bracket for interpolation.', 'NO_END_BRACKET');
        }
      }
      this.tokens.push(this.tok('end-jade-interpolation'));
      this.addText(child.input);
      return;
    }
    if (indexOfEnd !== Infinity && indexOfEnd < indexOfStart && indexOfEnd < indexOfEscaped) {
      if (prefix + value.substr(0, value.indexOf(']'))) {
        this.tokens.push(this.tok('text', prefix + value.substr(0, value.indexOf(']'))));
      }
      this.ended = true;
      this.input = value.substr(value.indexOf(']') + 1) + this.input;
      return;
    }

    this.tokens.push(this.tok('text', prefix + value));
  },

  text: function() {
    var tok = this.scan(/^(?:\| ?| )([^\n]+)/, 'text') ||
      this.scan(/^\|?( )/, 'text');
    if (tok) {
      this.addText(tok.val);
      return true;
    }
  },

  textHtml: function () {
    var tok = this.scan(/^(<[^\n]*)/, 'text-html');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  textFail: function () {
    var tok;
    if (tok = this.scan(/^([^\.\n][^\n]+)/, 'text')) {
      console.warn('Warning: missing space before text for line ' + this.lineno +
          ' of jade file "' + this.filename + '"');
      this.addText(tok.val);
      return true;
    }
  },

  /**
   * Dot.
   */

  dot: function() {
    var tok;
    if (tok = this.scan(/^\./, 'dot')) {
      this.pipeless = true;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Extends.
   */

  "extends": function() {
    var tok = this.scan(/^extends? +([^\n]+)/, 'extends');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Block prepend.
   */

  prepend: function() {
    var captures;
    if (captures = /^prepend +([^\n]+)/.exec(this.input)) {
      var mode = 'prepend'
        , name = captures[1].trim()
        , tok = this.tok('block', name);
      if (!name) return;
      this.consume(captures[0].length);
      tok.mode = mode;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Block append.
   */

  append: function() {
    var captures;
    if (captures = /^append +([^\n]+)/.exec(this.input)) {
      var mode = 'append'
        , name = captures[1].trim()
        , tok = this.tok('block', name);
      if (!name) return;
      this.consume(captures[0].length);
      tok.mode = mode;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Block.
   */

  block: function() {
    var captures;
    if (captures = /^block\b *(?:(prepend|append) +)?([^\n]+)/.exec(this.input)) {
      var mode = captures[1] || 'replace'
        , name = captures[2].trim()
        , tok = this.tok('block', name);
      if (!name) return;
      this.consume(captures[0].length);

      tok.mode = mode;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Mixin Block.
   */

  mixinBlock: function() {
    var captures;
    if (captures = /^block[ \t]*(\n|$)/.exec(this.input)) {
      this.consume(captures[0].length - captures[1].length);
      this.tokens.push(this.tok('mixin-block'));
      return true;
    }
  },

  /**
   * Yield.
   */

  'yield': function() {
    var tok = this.scan(/^yield */, 'yield');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Include.
   */

  include: function() {
    var tok = this.scan(/^include +([^\n]+)/, 'include');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Include with filter
   */

  includeFiltered: function() {
    var captures;
    if (captures = /^include:([\w\-]+)([\( ])/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      var filter = captures[1];
      var attrs = captures[2] === '(' ? this.attrs() : null;
      if (!(captures[2] === ' ' || this.input[0] === ' ')) {
        this.error('expected space after include:filter but got ' + JSON.stringify(this.input[0]), 'NO_FILTER_SPACE');
      }
      captures = /^ *([^\n]+)/.exec(this.input);
      if (!captures || captures[1].trim() === '') {
        this.error('missing path for include:filter', 'NO_INCLUDE_PATH');
      }
      this.consume(captures[0].length);
      var path = captures[1];
      var tok = this.tok('include', path);
      tok.filter = filter;
      tok.attrs = attrs;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Case.
   */

  "case": function() {
    var tok = this.scan(/^case +([^\n]+)/, 'case');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * When.
   */

  when: function() {
    var tok = this.scan(/^when +([^:\n]+)/, 'when');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Default.
   */

  "default": function() {
    var tok = this.scan(/^default */, 'default');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Call mixin.
   */

  call: function(){

    var tok, captures;
    if (captures = /^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)) {
      // try to consume simple or interpolated call
      if (captures[3]) {
        // simple call
        this.consume(captures[0].length);
        tok = this.tok('call', captures[3]);
      } else {
        // interpolated call
        var match = this.bracketExpression(2 + captures[1].length);
        this.consume(match.end + 1);
        this.assertExpression(match.src);
        tok = this.tok('call', '#{'+match.src+'}');
      }

      // Check for args (not attributes)
      if (captures = /^ *\(/.exec(this.input)) {
        var range = this.bracketExpression(captures[0].length - 1);
        if (!/^\s*[-\w]+ *=/.test(range.src)) { // not attributes
          this.consume(range.end + 1);
          tok.args = range.src;
        }
        if (tok.args) {
          this.assertExpression('[' + tok.args + ']');
        }
      }
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Mixin.
   */

  mixin: function(){
    var captures;
    if (captures = /^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('mixin', captures[1]);
      tok.args = captures[2] || null;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Conditional.
   */

  conditional: function() {
    var captures;
    if (captures = /^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var type = captures[1]
      var js = captures[2];
      var isIf = false;
      var isElse = false;

      switch (type) {
        case 'if':
          this.assertExpression(js)
          js = 'if (' + js + ')';
          isIf = true;
          break;
        case 'unless':
          this.assertExpression(js)
          js = 'if (!(' + js + '))';
          isIf = true;
          break;
        case 'else if':
          this.assertExpression(js)
          js = 'else if (' + js + ')';
          isIf = true;
          isElse = true;
          break;
        case 'else':
          if (js && js.trim()) {
            this.error('`else` cannot have a condition, perhaps you meant `else if`', 'ELSE_CONDITION');
          }
          js = 'else';
          isElse = true;
          break;
      }
      var tok = this.tok('code', js);
      tok.isElse = isElse;
      tok.isIf = isIf;
      tok.requiresBlock = true;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * While.
   */

  "while": function() {
    var captures;
    if (captures = /^while +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      this.assertExpression(captures[1])
      var tok = this.tok('code', 'while (' + captures[1] + ')');
      tok.requiresBlock = true;
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Each.
   */

  each: function() {
    var captures;
    if (captures = /^(?:- *)?(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('each', captures[1]);
      tok.key = captures[2];
      this.assertExpression(captures[3])
      tok.code = captures[3];
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Code.
   */

  code: function() {
    var captures;
    if (captures = /^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var flags = captures[1];
      captures[1] = captures[2];
      var tok = this.tok('code', captures[1]);
      tok.escape = flags.charAt(0) === '=';
      tok.buffer = flags.charAt(0) === '=' || flags.charAt(1) === '=';
      if (tok.buffer) this.assertExpression(captures[1]);
      this.tokens.push(tok);
      return true;
    }
  },

  /**
   * Block code.
   */
  blockCode: function() {
    var captures;
    if (captures = /^-\n/.exec(this.input)) {
      this.consume(1);
      this.tokens.push(this.tok('blockcode'));
      this.pipeless = true;
      return true;
    }
  },

  /**
   * Attributes.
   */

  attrs: function(push) {
    if ('(' == this.input.charAt(0)) {
      var index = this.bracketExpression().end
        , str = this.input.substr(1, index-1)
        , tok = this.tok('attrs');

      this.assertNestingCorrect(str);

      var quote = '';
      var self = this;
      var interpolate = function (attr) {
        return attr.replace(/(\\)?#\{(.+)/g, function(_, escape, expr){
          if (escape) return _;
          var range = characterParser.parseMax(expr);
          if (expr[range.end] !== '}') return _.substr(0, 2) + interpolate(_.substr(2));
          self.assertExpression(range.src)
          return quote + " + (" + range.src + ") + " + quote + interpolate(expr.substr(range.end + 1));
        });
      }

      this.consume(index + 1);
      tok.attrs = [];

      var escapedAttr = true
      var key = '';
      var val = '';
      var interpolatable = '';
      var state = characterParser.defaultState();
      var loc = 'key';
      var isEndOfAttribute = function (i) {
        if (key.trim() === '') return false;
        if (i === str.length) return true;
        if (loc === 'key') {
          if (str[i] === ' ' || str[i] === '\n') {
            for (var x = i; x < str.length; x++) {
              if (str[x] != ' ' && str[x] != '\n') {
                if (str[x] === '=' || str[x] === '!' || str[x] === ',') return false;
                else return true;
              }
            }
          }
          return str[i] === ','
        } else if (loc === 'value' && !state.isNesting()) {
          try {
            self.assertExpression(val);
            if (str[i] === ' ' || str[i] === '\n') {
              for (var x = i; x < str.length; x++) {
                if (str[x] != ' ' && str[x] != '\n') {
                  if (characterParser.isPunctuator(str[x]) && str[x] != '"' && str[x] != "'") return false;
                  else return true;
                }
              }
            }
            return str[i] === ',';
          } catch (ex) {
            return false;
          }
        }
      }

      this.lineno += str.split("\n").length - 1;

      for (var i = 0; i <= str.length; i++) {
        if (isEndOfAttribute(i)) {
          val = val.trim();
          if (val) this.assertExpression(val)
          key = key.trim();
          key = key.replace(/^['"]|['"]$/g, '');
          tok.attrs.push({
            name: key,
            val: '' == val ? true : val,
            escaped: escapedAttr
          });
          key = val = '';
          loc = 'key';
          escapedAttr = false;
        } else {
          switch (loc) {
            case 'key-char':
              if (str[i] === quote) {
                loc = 'key';
                if (i + 1 < str.length && [' ', ',', '!', '=', '\n'].indexOf(str[i + 1]) === -1)
                  this.error('Unexpected character ' + str[i + 1] + ' expected ` `, `\\n`, `,`, `!` or `=`', 'INVALID_KEY_CHARACTER');
              } else {
                key += str[i];
              }
              break;
            case 'key':
              if (key === '' && (str[i] === '"' || str[i] === "'")) {
                loc = 'key-char';
                quote = str[i];
              } else if (str[i] === '!' || str[i] === '=') {
                escapedAttr = str[i] !== '!';
                if (str[i] === '!') i++;
                if (str[i] !== '=') this.error('Unexpected character ' + str[i] + ' expected `=`', 'INVALID_KEY_CHARACTER');
                loc = 'value';
                state = characterParser.defaultState();
              } else {
                key += str[i]
              }
              break;
            case 'value':
              state = characterParser.parseChar(str[i], state);
              if (state.isString()) {
                loc = 'string';
                quote = str[i];
                interpolatable = str[i];
              } else {
                val += str[i];
              }
              break;
            case 'string':
              state = characterParser.parseChar(str[i], state);
              interpolatable += str[i];
              if (!state.isString()) {
                loc = 'value';
                val += interpolate(interpolatable);
              }
              break;
          }
        }
      }

      if ('/' == this.input.charAt(0)) {
        this.consume(1);
        tok.selfClosing = true;
      }
      if (push) {
        this.tokens.push(tok);
        return true;
      }
      return tok;
    }
  },

  /**
   * &attributes block
   */
  attributesBlock: function () {
    var captures;
    if (/^&attributes\b/.test(this.input)) {
      this.consume(11);
      var args = this.bracketExpression();
      this.consume(args.end + 1);
      this.tokens.push(this.tok('&attributes', args.src));
      return true;
    }
  },

  /**
   * Indent | Outdent | Newline.
   */

  indent: function() {
    var captures, re;

    // established regexp
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    // determine regexp
    } else {
      // tabs
      re = /^\n(\t*) */;
      captures = re.exec(this.input);

      // spaces
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }

      // established
      if (captures && captures[1].length) this.indentRe = re;
    }

    if (captures) {
      var tok
        , indents = captures[1].length;

      ++this.lineno;
      this.consume(indents + 1);

      if (' ' == this.input[0] || '\t' == this.input[0]) {
        this.error('Invalid indentation, you can use tabs or spaces but not both', 'INVALID_INDENTATION');
      }

      // blank line
      if ('\n' == this.input[0]) {
        this.pipeless = false;
        return this.tok('newline');
      }

      // outdent
      if (this.indentStack.length && indents < this.indentStack[0]) {
        while (this.indentStack.length && this.indentStack[0] > indents) {
          this.tokens.push(this.tok('outdent'));
          this.indentStack.shift();
        }
      // indent
      } else if (indents && indents != this.indentStack[0]) {
        this.indentStack.unshift(indents);
        this.tokens.push(this.tok('indent', indents));
      // newline
      } else {
        this.tokens.push(this.tok('newline'));
      }

      this.pipeless = false;
      return true;
    }
  },

  /**
   * Pipe-less text consumed only when
   * pipeless is true;
   */

  pipelessText: function() {
    if (!this.pipeless) return;
    var captures, re;

    // established regexp
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    // determine regexp
    } else {
      // tabs
      re = /^\n(\t*) */;
      captures = re.exec(this.input);

      // spaces
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }

      // established
      if (captures && captures[1].length) this.indentRe = re;
    }


    var indents = captures && captures[1].length;
    if (indents && (this.indentStack.length === 0 || indents > this.indentStack[0])) {
      this.tokens.push(this.tok('start-pipeless-text'));
      var indent = captures[1];
      var tokens = [];
      var isMatch;
      do {
        // text has `\n` as a prefix
        var i = this.input.substr(1).indexOf('\n');
        if (-1 == i) i = this.input.length - 1;
        var str = this.input.substr(1, i);
        isMatch = str.substr(0, indent.length) === indent || !str.trim();
        if (isMatch) {
          // consume test along with `\n` prefix if match
          this.consume(str.length + 1);
          tokens.push(str.substr(indent.length));
        }
      } while(this.input.length && isMatch);
      while (this.input.length === 0 && tokens[tokens.length - 1] === '') tokens.pop();
      tokens.forEach(function (token, i) {
        this.lineno++;
        if (i !== 0) this.tokens.push(this.tok('newline'));
        this.addText(token);
      }.bind(this));
      this.tokens.push(this.tok('end-pipeless-text'));
      return true;
    }
  },

  /**
   * ':'
   */

  colon: function() {
    var tok = this.scan(/^: +/, ':');
    if (tok) {
      this.tokens.push(tok);
      return true;
    }
  },

  fail: function () {
    this.error('unexpected text ' + this.input.substr(0, 5), 'UNEXPECTED_TEXT');
  },

  /**
   * Move to the next token
   *
   * @api private
   */

  advance: function() {
    return this.blank()
      || this.eos()
      || this.endInterpolation()
      || this.pipelessText()
      || this.yield()
      || this.doctype()
      || this.interpolation()
      || this["case"]()
      || this.when()
      || this["default"]()
      || this["extends"]()
      || this.append()
      || this.prepend()
      || this.block()
      || this.mixinBlock()
      || this.include()
      || this.includeFiltered()
      || this.mixin()
      || this.call()
      || this.conditional()
      || this.each()
      || this["while"]()
      || this.tag()
      || this.filter()
      || this.blockCode()
      || this.code()
      || this.id()
      || this.className()
      || this.attrs(true)
      || this.attributesBlock()
      || this.indent()
      || this.text()
      || this.textHtml()
      || this.comment()
      || this.colon()
      || this.dot()
      || this.textFail()
      || this.fail();
  },

  /**
   * Return an array of tokens for the current file
   *
   * @returns {Array.<Token>}
   * @api public
   */
  getTokens: function () {
    while (!this.ended) {
      this.advance();
    }
    return this.tokens;
  }
};
