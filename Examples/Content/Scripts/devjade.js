(function(){
    "use strict";

    let UMG = require('UMG');
    let devrequire = require('devrequire');

    function devjade(path,setup) {
        function test() {
            let design = require('jade-umg')(UMG,path)
            return setup(design)
        }

        function livereload(path,test) {
            let files = [path]
            let fullpath = Context.GetScriptFileFullPath(path)
            let cleanup = null

            let cleanup_devrequire = devrequire({
                get_change : function (watcher) {
                    let full_files = files.map(function (x) { return Context.GetScriptFileFullPath(x)})
                    return full_files.filter(function (x) {return watcher.Contains(x)})
                },
                exec : function () {
                    var design = test()
                    files = design.$files
                    cleanup = function() {
                        cleanup = null
                        design()
                    }
                    return cleanup
                },
                notify : true,
                message : "Live reload (jade)"
            })

            return function () {
                cleanup_devrequire()
                if (cleanup) {
                    cleanup()
                }
            }
        }

        var live_jade = livereload(path,function () {
            return test()
        })

        return live_jade
    }

    module.exports = devjade;
})()
