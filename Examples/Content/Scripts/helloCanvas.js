(function (global) {
    "use strict"
    
    function GetPC() {
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }
    
    function main() {
        GetPC().DefaultMouseCursor = Symbol('Default') 
                
        class MyHUD extends HUD {
            ctor() {                
            }
            
            ReceiveDrawHUD() {
                super.ReceiveDrawHUD()
                
                let text = `Hello Canvas : ${new Date().toISOString()}`
                this.Canvas.DrawText(GEngine.SmallFont,text,{X:this.Canvas.SizeX/2,Y:this.Canvas.SizeY/2},{R:1,G:1,B:1,A:1},0,{R:0,G:0,B:0,A:1},{X:1,Y:1},true,true,true,{R:0,G:0,B:0,A:1})
            }
        }
        
        let MyHUD_C = require('uclass')()(global,MyHUD);            
        GetPC().ClientSetHUD(MyHUD_C)        
        
        return function () {                
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
        require('bootstrap')('helloCanvas')
    }
})(this)
