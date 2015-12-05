/// <reference path="typings/ue.d.ts">/>

(function (global) {
    "use strict"

    function main() {
        let actor = new TextRenderActor(GWorld,{X:100,Z:100},{Yaw:180})

        let timer = null;
        function update() {
            actor.TextRender.SetText(`Hello Timer : ${new Date().toISOString()}`)

            // just like node.js, we can use timer functions. (setTimeout, setInterval, ...)
            timer = setTimeout(update, 1000)
        }

        update()

        return function () {
            actor.DestroyActor()
            clearTimeout(timer)
        }
    }

    try {
        module.exports = () => {
            let cleanup = null
            process.nextTick(() => cleanup = main());
            return () => cleanup()
        }
    }
    catch (e) {
        require('bootstrap')('helloTimer')
    }
})(this)
