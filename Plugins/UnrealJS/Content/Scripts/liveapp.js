(function () {
    "use strict"

    function liveapp(opts) {
        opts = opts || {}
        var view = opts.view
        var root_scope = opts.scope || function () {}
        var fixup = opts.$link || function () {}

        var UMG = require('UMG')

        function main() {
            var page = new VerticalBox()

            function test(path) {
                var design = require('jade-umg')(UMG,path)
                var app = UMG.app(design,root_scope);

                fixup(app)

                var slot = page.AddChild(app)
                slot.Size = {SizeRule:'Fill',Value:1}
                var cleanup = function () {
                    app.RemoveFromParent()
                }
                cleanup.$files = design.$files
                return cleanup
            }

            function livereload(path,test) {
                var files = [path]
                var fullpath = Context.GetScriptFileFullPath(path)
                return require('devrequire')({
                    get_change : function (watcher) {
                        var full_files = files.map(function (x) { return Context.GetScriptFileFullPath(x)})
                        return full_files.filter(function (x) {return watcher.Contains(x)})
                    },
                    exec : function () {
                        var design = test()
                        files = design.$files
                        return design
                    },
                    notify : true,
                    message : "Live reload (jade)"
                })
            }

            var live_jade = livereload(view,function () {
                return test(view)
            })

            page.$destroy = live_jade

            return page
        }

        return main
    }

    module.exports = liveapp;
}())
