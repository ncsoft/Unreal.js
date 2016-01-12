(function (global) {
    "use strict"

    function main() {
        let actor = new TextRenderActor(GWorld,{X:100,Z:100},{Yaw:180})
        actor.TextRender.SetHorizontalAlignment('EHTA_Center')
        actor.TextRender.SetText('Hello Rest')

        let fetch = require('fetch');
        fetch('https://api.github.com/repos/ncsoft/Unreal.js')
            .then((res) => res.json())
            .then((json) => {
                actor.TextRender.SetText(JSON.stringify(json, null, 2))
            }).catch((error) => {
                actor.TextRender.SetText(error)
            })

        return function () {
            actor.DestroyActor()
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
        require('bootstrap')('helloRest')
    }
})(this)
