'use strict';

var assert = require('assert');
var walk = require('jade-walk');

module.exports = link;
function link(ast) {
  assert(ast.type === 'Block', 'The top level element should always be a block');
  var extendsNode = null;
  if (ast.nodes[0].type === 'Extends') {
    extendsNode = ast.nodes.shift();
  }
  ast = applyIncludes(ast);
  ast.declaredBlocks = findDeclaredBlocks(ast);
  if (extendsNode) {
    var mixins = [];
    var expectedBlocks = [];
    for (var i = 0; i < ast.nodes.length; i++) {
      if (ast.nodes[i].type === 'NamedBlock') {
        expectedBlocks.push(ast.nodes[i].name);
      } else if (ast.nodes[i].type === 'Mixin' && ast.nodes[i].call === false) {
        mixins.push(ast.nodes[i]);
      } else {
        throw new Error('Only named blocks and mixins can appear at the top level of an extending template');
      }
    }
    var parent = link(extendsNode.file.ast);
    extend(parent.declaredBlocks, ast);
    walk(parent, function (node) {
      if (node.type === 'NamedBlock') {
        expectedBlocks = expectedBlocks.filter(function (name) {
          return name !== node.name;
        });
      }
    });
    if (expectedBlocks.length !== 0) {
      //throw new Error('Unexpected blocks');
      expectedBlocks.forEach(function (expectedBlock) {
        console.warn('Warning: Unexpected block ' + expectedBlock.name + ' on line ' + expectedBlock.line + ' + of ' + expectedBlock.filename + '. This warning will be an error in v2.0.0');
      });
    }
    Object.keys(ast.declaredBlocks).forEach(function (name) {
      parent.declaredBlocks[name] = ast.declaredBlocks[name];
    });
    parent.nodes = mixins.concat(parent.nodes);
    return parent;
  }
  return ast;
}

function findDeclaredBlocks(ast) {
  var definitions = {};
  var stack = [];
  walk(ast, function before(node) {
    if (node.type === 'NamedBlock' && node.mode === 'replace') {
      stack.push(node.name);
      definitions[node.name] = node;
    }
  }, function after(node) {
    if (node.type === 'NamedBlock' && node.mode === 'replace') {
      stack.pop();
    }
  });
  return definitions;
}
function extend(parentBlocks, ast) {
  var stack = {};
  walk(ast, function before(node) {
    if (node.type === 'NamedBlock') {
      if (stack[node.name] === node.name) {
        return node.ignore = true;
      }
      stack[node.name] = node.name;
      var parentBlock = parentBlocks[node.name];
      if (parentBlock) {
        if (parentBlock.parent) parentBlock = parentBlock.parent;
        node.parent = parentBlock;
        switch (node.mode) {
          case 'append':
            parentBlock.nodes = parentBlock.nodes.concat(node.nodes);
            break;
          case 'prepend':
            parentBlock.nodes = node.nodes.concat(parentBlock.nodes);
            break;
          case 'replace':
            parentBlock.nodes = node.nodes;
            break;
        }
      }
    }
  }, function after(node) {
    if (node.type === 'NamedBlock' && !node.ignore) {
      delete stack[node.name];
    }
  });
}
function applyIncludes(ast, child) {
  return walk(ast, function before(node) {

  }, function after(node, replace) {
    if (node.type === 'Include') {
      if (node.filter) {
        replace({
          type: 'Filter',
          name: node.filter,
          block: {type: 'Block', nodes: [ {type: 'Text', val: node.file.str.replace(/\r/g, '')} ] },
          attrs: node.attrs,
          filename: node.fullPath
        });
      } else if (/\.jade$/.test(node.file.fullPath)) {
        replace(applyYield(link(node.file.ast), node.block));
      } else {
        replace({type: 'Text', val: node.file.str.replace(/\r/g, '')});
      }
    }
  });
}
function applyYield(ast, block) {
  if (!block || !block.nodes.length) return ast;
  var replaced = false;
  ast = walk(ast, null, function (node, replace) {
    if (node.type === 'Block' && node.yield === true) {
      replaced = true;
      node.nodes.push(block);
    }
  });
  function defaultYieldLocation(node) {
    var res = node;
    for (var i = 0; i < node.nodes.length; i++) {
      if (node.nodes[i].textOnly) continue;
      if (node.nodes[i].type === 'Block') {
        res = defaultYieldLocation(node.nodes[i]);
      } else if (node.nodes[i].block && node.nodes[i].block.nodes.length) {
        res = defaultYieldLocation(node.nodes[i].block);
      }
    }
    return res;
  }
  if (!replaced) {
    // todo: probably should deprecate this with a warning
    defaultYieldLocation(ast).nodes.push(block);
  }
  return ast;
}
