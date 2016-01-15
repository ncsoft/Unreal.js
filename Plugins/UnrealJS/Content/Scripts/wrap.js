(function () {
"use strict"
    function Tokenizer(cb) {
      var rules = [];
      var buf = '';

      function test(buf) {
        for (var kk in rules) {
          var rule = rules[kk];
          if (rule[0].test(buf)) return rule;
        }
      }

      var prev_rule = null;
      return {
        addRule: function (regex, token) {
          rules.push([regex, token]);
        },
        write: function (str) {
          for (var k in str) {
            var ch = str[k];
            var rule = prev_rule;
            if (rule) {
              if (rule[0].test(buf + ch)) {
                buf += ch;
              } else {
                cb(buf, { type: prev_rule[1] });
                buf = ch;
                prev_rule = test(buf);
              }
            } else {
              buf += ch;
              prev_rule = test(buf);
            }
          }
        },
        end: function () {
          var rule = test(buf);
          if (rule) cb(buf, { type: rule[1] });
          prev_rule = null;
          buf = '';
        }
      }
    }

    function tk(cb) {
      var t = Tokenizer(cb);

      t.addRule(/^"([^"\n]|\\")*"?$/, 'quote');
      t.addRule(/^'([^'\n]|\\')*'?$/, 'quote');
      t.addRule(/^'[^']*$/, 'char continue');
      t.addRule(/^\($/, 'L-paren');
      t.addRule(/^\)$/, 'R-paren');
      t.addRule(/^\[$/, 'L-bracket');
      t.addRule(/^\]$/, 'R-bracket');
      t.addRule(/^\.$/, 'dot');
      t.addRule(/^\|$/, 'pipe');
      t.addRule(/^\^$/, 'carrot');
      t.addRule(/^;$/, 'semicolon');
      t.addRule(/^([-<>~!%^*\/+=?|.,:;]|\|\||&&|--|\+\+|[-+*|%\/=]=)$/, 'opeartor');
      t.addRule(/^([_A-Za-z\$]\w*)$/, 'identifier');
      t.addRule(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/, 'number');
      t.addRule(/^(\s+)$/, 'whitespace');

      return t;
    }

    var out = '';
    var sentences = []
    var last = undefined
    var lexer = tk(function (src, token) {
      if (last != 'carrot' && token.type == 'identifier' && last != 'dot') {
        out += 'this.';
      }
      if (last == 'carrot' && token.type != 'identifier') {
        out += '^';
      }
      if (token.type != 'carrot') {
        out += src;
      }
      last = token.type;
      if (token.type == 'semicolon') {
        sentences.push(out);
        out = '';
      }
    });

    function wrap(source) {
      out = '';
      sentences.length = 0;
      lexer.write(source);
      lexer.end();
      sentences.push('return ' + out);
      return sentences.join(' ');
    }
    module.exports = wrap
  })()