(function (global) {
    "use strict"
    
    function main() {
        let actor = new TextRenderActor(GWorld,{X:100,Z:100},{Yaw:180})    
        actor.TextRender.SetHorizontalAlignment('EHTA_Center') 
        actor.TextRender.SetText('Hello World')                    
        
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
        require('bootstrap')('helloWorld')    
    }
})(this)
