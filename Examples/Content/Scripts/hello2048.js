/// <reference path="typings/ue.d.ts">/>
(function (global) {
    "use strict"

    try {
        let main = require('2048')
        module.exports = () => {
            let cleanup = null
            process.nextTick(() => {
                cleanup = main()
            });
            return () => cleanup()
        }
    }
    catch (e) {
        require('bootstrap')('hello2048')
    }
})(this)
