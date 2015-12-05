(function (global) {
    "use strict"

    module.exports = function (filename) {
//        Context.WriteDTS(Context.Paths[0] + 'typings/ue.d.ts')
//        Context.WriteAliases(Context.Paths[0] + 'aliases.js')

        Context.RunFile('aliases.js')
        Context.RunFile('polyfill/unrealengine.js')
        Context.RunFile('polyfill/timers.js')

        require('devrequire')(filename)
    }
})(this)
