(function () {
  "use strict";

  var _ = require('lodash');

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
      addRule : function (regex, token) {
        rules.push([regex,token]);
      },
      write : function (str) {
        for (var k in str) {
          var ch = str[k];
          var rule = prev_rule;
          if (rule) {
            if (rule[0].test(buf+ch)) {
              buf += ch;
            } else {
              cb(buf,{type:prev_rule[1]});
              buf = ch;
              prev_rule = test(buf);
            }
          } else {
            buf += ch;
            prev_rule = test(buf);
          }
        }
      },
      end : function () {
        var rule = test(buf);
        if (rule) cb(buf,{type:rule[1]});
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
  var lexer = tk(function(src,token){
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

  function make_fn(name,str) {
     var source = "function " + name + "() { try { " + str + " } catch (e) { return '' } }; " + name + ";";
    return eval(source);
  }

  function beautify(k) {
    return k.split('-').map(function(x){
      return x.charAt(0).toUpperCase() + x.slice(1);
    }).join('');
  }

  function conv(obj) {
    var out = {};
    for (var k in obj) {
      var v = obj[k];
      var index = k.indexOf('.');
      if (index>=0) {
        var lhs = k.substr(0,index);
        var rhs = k.substr(index+1);
        var tmp = {}
        tmp[rhs] = v;
        k = lhs;
        v = tmp;
      }
      k = beautify(k);
      if (_.isObject(v) && !_.isFunction(v) && _.keys(v).length > 0) {
        out[k] = out[k] || {};
        _.extend(out[k],conv(v));
      } else {
        out[k] = v;
      }
    }
    return out;
  }

  function set_attr(instance,k,attr) {
    function inner(k) {
      var setter = instance["Set"+k]
      if (setter != undefined) {
        setter.call(instance,attr)
        return true
      } else if (instance[k] != undefined) {
        instance[k] = attr;
        return true
      } else {
        return false
      }
    }

    inner(k) || inner("b"+k)
  }

  function interpolate(k,v) {
    return make_fn(k,wrap(v));
  }

  function make_binding(attrs) {
    var out = {}
    var funcs = []
    function add(dest,k,fn) {
      funcs.push( function (scope) {
        dest[k] = fn.call(scope);
      })
    }
    function visit(o,dest) {
      for (var k in o) {
        var v = o[k]
        if (_.isString(v)) {
          var fn = interpolate(k,v);
          add(dest,k,fn);
        } else if (_.isObject(v)) {
          out[k] = {}
          visit(o[k],dest[k])
        }
      }
    }

    visit(attrs,out)

    return function (instance,scope) {
      funcs.forEach(function (f) {f(scope)});
      set_attrs(instance,out);
    }
  }

  function make_fnbinding(attrs) {
    var out = {}
    var funcs = []
    var has_init = false
    function add(dest,k,fn) {
      funcs.push( function (scope) {
        var F = function() {
          var ret = fn.apply(scope,arguments);
          if (!F.no_apply) {
            scope.$apply();
          }
          return ret;
        };
        dest[k] = F;
      })
    }

    function visit(o,dest) {
      for (var k in o) {
        var v = o[k]
        if (_.isString(v)) {
          var fn = interpolate(k,v);
          add(dest,k,fn);
        }
      }
    }

    visit(attrs,out)

    return function (instance,scope) {
      funcs.forEach(function (f) {f(scope)});
      if (out.Init) {
        if (!has_init) {
          out.no_apply = true
          out.Init()
          out.no_apply = false
          has_init = true
        } else {
          delete out.Init
        }
      }
      set_attrs(instance,out);
    }
  }

  function set_attrs(instance,attrs,scope) {
    var bindings = []
    for (var k in attrs) {
      if (k == 'Binding') {
        if (_.isObject(scope)) {
          var v = attrs[k];
          var fn = make_binding(v);
          bindings.push(fn);
        } else {
          console.error('Binding requires scope')
        }
      } else if (k == 'Fn') {
        if (_.isObject(scope)) {
          var v = attrs[k];
          var fn = make_fnbinding(v);
          bindings.push(fn);
        } else {
          console.error('Binding requires scope')
        }
      } else {
        bindings.concat(set_attr(instance,k,attrs[k]));
      }
    }
    return bindings;
  }

  var next_id = 0

  function instantiate(design,scope) {
    if (!design || !design.type) {
      throw 'failed to instantiate no design!'
    }

    scope = scope || function () { return {} }
    var bindings = [];
    var custom_bindings = [];
    var instance = new design.type();
    if (!instance) {
       throw 'failed to instantiate' + design.type
    }

    function update() {
      var scope_instance = scope
      function kick(fn) {
        fn(instance,scope_instance);
      };
      bindings.forEach(kick);
      custom_bindings.forEach(kick);
      instance.children.forEach(function (child) {
        child.instance.update();
        if (child.bindings) {
          child.bindings.forEach( function (fn) {
            fn(child.slot,scope_instance);
          });
        }
      });
    };

    instance.id = next_id++
    instance.class = design.class || []

    instance.add_binding = function (binding) {
      custom_bindings.push(binding);
    };

    instance.sync = function () {
      JavascriptWidget.CallSynchronizeProperties(instance)
      instance.children.forEach(function (child) {
        child.instance.sync();
        JavascriptWidget.CallSynchronizeProperties(child.slot);
      });
    };

    instance.type = design.type;
    instance.set_attrs = function (attrs) {
      set_attrs(instance,attrs,scope);
    }

    instance.update = update;
    instance.find = function (id) {
      if (design.id == id) return instance

      var o = instance.ids[id];
      if (o != undefined) return o;

      for (var k in instance.children) {
        var o = instance.children[k].instance.find(id);
        if (o != undefined) return o;
      }
    }
    instance.ids = {}
    instance.children = []

    var attrs = design.attrs || {}

    bindings = set_attrs(instance,attrs,scope)

    var children = design.children || []

    function add_child(child,scope,no_directop) {
      var c = instantiate(child,scope);
      var slot, child_bindings;
      if (!no_directop) {
        slot = instance.AddChild(c);
        if (slot) {
          child_bindings = set_attrs(slot,child.slot || {},scope);
          c.set_slot_attrs = function (attrs) {
            set_attrs(slot,attrs)
          }
        } else {
          console.error("No slot to add")
        }
      }

      if (child.id != undefined) {
        instance.ids[child.id] = c;
      }

      if (instance.cached_extended_styles) {
        c.set_styles(instance.cached_extended_styles);
      }

      instance.children.push({instance:c,slot:slot,bindings:child_bindings,template:child});
      return c;
    }

    function remove_child(child_instance,no_directop) {
      var child = _.find(instance.children,function (child) {
        return child.instance == child_instance;
      });
      if (child) {
        if (child.id != undefined) {
          delete instance.ids[child.id]
        }
        instance.children.splice(instance.children.indexOf(child),1)
      } else {
        console.error('couldnot find child')
      }
      if (!no_directop) {
       child_instance.RemoveFromParent();
      }
    }

    instance.add_child = add_child;
    instance.remove_child = remove_child;

    children.forEach( function (child) {
      add_child(child,scope);
    });

    function update_styles(styles) {
      var matched_styles = _.filter(styles,function (style) {
        return (!style.type || style.type == design.type) && (!style.id || style.id == design.id) && (!style.class || _.all(style.class || [],function (k) { return _.contains(design.class || [],k)}));
      }).map(function(style){
        style = _.clone(style);
        if (style.weight == undefined) {
          var base = 0;
          if (style.id) { base = 3; }
          else if (style.class) { base = 2; }
          style.weight = base;
        }
        return style;
      });

      var computed = {}
      var has_computed = false
      var extended = _.filter(styles,function (style) {
        return !style.hard
      });

      function deepExtend(out,src) {
        for (var k in src) {
          var v = src[k]
          if (out[k] == undefined) {
            out[k] = v
          } else {
            if (_.isObject(v)) {
              if (out[k]) {
                deepExtend(out[k],v)
              }
            } else {
              out[k] = v
            }
          }
        }
      }

      _.sortBy(matched_styles,'weight').forEach( function(style) {
        // console.log(style.weight,JSON.stringify(style))
        deepExtend(computed,style.attrs)
        if (style.children) {
          extended = extended.concat(style.children.map(function(child_style){
            child_style = _.clone(child_style)
            child_style.weight = style.weight + 10
            return child_style
          }))
        }
        has_computed = true
      })

      if (has_computed) {
        var slot = computed.Slot;
        instance.set_attrs(computed);
        if (slot && instance.set_slot_attrs) {
          instance.set_slot_attrs(slot);
        }
      }

      instance.cached_extended_styles = extended

      instance.enumerate_children(function (child) {
          child.set_styles(extended);
      })
    }

    instance.enumerate_children = function (fn) {
      if (_.isArray(instance.children)) {
        instance.children.forEach(function (child) {
          fn(child.instance);
        });
      }
    }

    instance.set_styles = update_styles;

    if (design.$link != undefined) {
      design.$link(instance,scope,attrs || {});
    }

    update();

    return instance;
  }

  instantiate.interpolate = interpolate;
  instantiate.conv = conv;
  instantiate.make_fnbinding = make_fnbinding;
  instantiate.make_binding = make_binding;

  module.exports = instantiate;
}());
