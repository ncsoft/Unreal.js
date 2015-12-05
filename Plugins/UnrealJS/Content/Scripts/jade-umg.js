var _ = require('lodash');
var fs = require('fs');
var lex = require('jade-lexer');
var stripComments = require('jade-strip-comments');
var parse = require('jade-parser');
var load = require('jade-load');
//var filters = require('jade-filters');
var link = require('jade-linker');


module.exports = function (UMG,file) {
    var path = {
        join : function () {
            return Array.prototype.join.call(arguments,'/')
        },
        dirname : function (x) {
            var arr = x.split('/')
            arr.length = arr.length - 1
            return arr.join('/')
        },
        basename : function (x) {
            var arr = x.split('/')
            var y = arr[arr.length-1].split('.')
            if (y.length>1) {
                y.length = y.length - 1
            }
            return y.join('.')
        }
    }
    function test(str,options) {
        var debug_sources = {};
        debug_sources[options.filename] = str;
        var dependencies = [];
        try {
            var ast = load.string(str, options.filename, {
            lex: lex,
            parse: function (tokens, filename) {
                tokens = stripComments(tokens, { filename: filename });
                return parse(tokens, filename);
            },
            resolve: function (filename, source) {
                filename = filename.trim();
                if (filename[0] !== '/' && !source)
                throw new Error('the "filename" option is required to use includes and extends with "relative" paths');

                if (filename[0] === '/' && !options.basedir)
                throw new Error('the "basedir" option is required to use includes and extends with "absolute" paths');

                filename = path.join(filename[0] === '/' ? options.basedir : path.dirname(source), filename);

                if (path.basename(filename).indexOf('.') === -1) filename += '.jade';

                return filename;
            },
            read: function (filename) {
                dependencies.push(filename);
                var str = fs.readFileSync(filename, 'utf8');
                debug_sources[filename] = str;
                return str;
            }
            });
            ast = link(ast);
            //ast = filters.handleFilters(ast, exports.filters);
            return ast
        } catch (err) {
            console.log("ERROR!",String(err))
            if (err.code && typeof err.code === 'string' && err.code.substr(0, 4) === 'JADE') {
            runtime.rethrow(
                new Error(err.msg),
                err.filename,
                err.line,
                options.filename === err.filename ? str : (options.compileDebug ? debug_sources[err.filename] : undefined)
            );
            }
            throw err;
        }
    }

    var filenames = []

    function umg_jade(ast) {

        function text(ast) {
            if (ast.val.trim().length == 0) return;

            return UMG.text({},ast.val)
        }
        function tag(ast) {
            var attrs = {}
            ast.attrs.forEach(function(attr){
                var val
                if (attr.escaped) {
                    val = eval(attr.val);
                } else {
                    val = eval(attr.val);
                }
                if (attrs[attr.name]) {
                    if (_.isArray(attrs[attr.name])) {
                        attrs[attr.name].push(val)
                    } else {
                        attrs[attr.name] = [attrs[attr.name],val]
                    }
                } else {
                    attrs[attr.name] = val
                }
            })
            var children = [];
            if (ast.name != 'text') {
                children = block(ast.block);
            } else {
                children = [ast.block.nodes[0].val];
            }
            children = _.compact(children)
            var args;
            if (UMG[ast.name]) {
                args = [attrs];
                args = args.concat(children);

                return UMG[ast.name].apply(UMG,args)
            } else{
                args = [ast.name,attrs];
                args = args.concat(children);
                return UMG.apply(UMG,args);
            }
        }
        function block(ast) {
            if (ast.filename) {
                filenames.push(ast.filename)
            }
            return _.compact(ast.nodes.map(function (node) {
                if (node.type == 'Tag') {
                    return tag(node);
                }
                else if (node.type == 'Text')
                {
                    return text(node)
                }
                else if (node.type == 'Block')
                {
                    return block(node)[0]
                }
            }))
        }

        return block(ast);
    }

    var ast = test(fs.readFileSync(file,'utf8'),{filename:file})
    var design = umg_jade(ast)[0];
    design.$files = _.unique(filenames)
    return design;
}
