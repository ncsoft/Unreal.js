/// <reference path="typings/ue.d.ts">/>

(function (global) {
    "use strict"

    function GetPC() {
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }

    let Springy = require('springy')

    // Pure ES6 class (not a UClass)
    class SpringyRenderer {
        constructor(graph) {
            this.graph = graph

            // render command to accelerate batched drawing
            this.renderCommands = []

            // clear all render commands
            let clear = () => {
                this.renderCommands = []
            }


            let layout = new Springy.Layout.ForceDirected(this.graph, 400, 400, 0.5)
            let currentBB = layout.getBoundingBox()

            let toScreen = (p) => {
                let size = currentBB.topright.subtract(currentBB.bottomleft)
                let sx = p.subtract(currentBB.bottomleft).divide(size.x).x * 200 + 200
                let sy = p.subtract(currentBB.bottomleft).divide(size.y).y * 200 + 200
                return new Springy.Vector(sx,sy)
            }

            let lower = (p) => {
                return {X:p.x,Y:p.y}
            }

            let radius = 5

            let drawEdge = (edge,p1,p2) => {
                this.renderCommands.push((canvas) => {
                    let s1 = toScreen(p1)
                    let s2 = toScreen(p2)

                    let weight = edge.data.weight || 3
                    let bias = edge.data.bias || 0

                    let direction = new Springy.Vector(s2.x - s1.x, s2.y - s1.y)
                    let normal = direction.normalise()
                    let perp = normal.normal()

                    if (graph.getEdges(edge.target,edge.source).length > 0) {
                        let offset = perp.multiply(3)

                        s1 = s1.add(offset)
                        s2 = s2.add(offset)
                    }

                    let arrow = 4

                    s1 = s1.add(normal.multiply(radius))
                    s2 = s2.add(normal.multiply(-radius))

                    let u = {x:perp.x * arrow,y:perp.y * arrow}
                    let v = {x:normal.x * arrow,y:normal.y * arrow}
                    let s3 = s2.add({x:-u.x-v.x*2,y:-u.y-v.y*2})
                    let s4 = s2.add({x:+u.x-v.x*2,y:+u.y-v.y*2})

                    function gamma(x) {
                        var y = {}
                        for (var k in x) {
                            y[k] = Math.pow(x[k] / 255.0, 2.2)
                        }
                        return y
                    }

                    function color_from_hex(hex) {
                        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
                        return result ? gamma({
                            R: parseInt(result[1], 16),
                            G: parseInt(result[2], 16),
                            B: parseInt(result[3], 16),
                            A: 255
                        }) : {R:1,G:1,B:1,A:1}
                    }

                    let color = color_from_hex(edge.data.color)

                    canvas.DrawLine(lower(s1),lower(s2),weight,color)
                    canvas.DrawLine(lower(s2),lower(s3),weight,color)
                    canvas.DrawLine(lower(s2),lower(s4),weight,color)
                })
            }

            let size = radius / Math.sqrt(2) * 2
            let font = GEngine.SmallFont

            let drawNode = (node,p) => {
                this.renderCommands.push((canvas) => {
                    let pos = lower(toScreen(p))
                    let size = canvas.ClippedTextSize(font,node.data.label,{X:1,Y:1})
                    size.X += size.Y * 0.7
                    size.Y *= 1.3
                    pos.X -= size.X/2
                    pos.Y -= size.Y/2
                    canvas.DrawTexture(null,pos,size,{},{},{A:0.2},'BLEND_Translucent')
                    canvas.DrawText(font,node.data.label,lower(toScreen(p)),{R:1,G:1,B:1,A:1},0,{R:0,G:0,B:0,A:1},{X:1,Y:1},true,true,true,{R:0,G:0,B:0,A:1})
                })
            }

            this.renderer = new Springy.Renderer(layout,clear,drawEdge,drawNode)
        }

        init() {
            this.renderer.start()
        }

        uninit() {
            this.renderer.stop()
        }

        // kick all render commands!
        draw(Canvas) {
            this.renderCommands.forEach((cmd) => cmd(Canvas))
        }
    }

    function setup_graph(graph) {
        graph.addNodes('Dennis', 'Michael', 'Jessica', 'Timothy', 'Barbara')
        graph.addNodes('Amphitryon', 'Alcmene', 'Iphicles', 'Heracles');
        graph.addEdges(
            ['Dennis', 'Michael', {color: '#00A0B0', label: 'Foo bar'}],
            ['Michael', 'Dennis', {color: '#6A4A3C'}],
            ['Michael', 'Jessica', {color: '#CC333F'}],
            ['Jessica', 'Barbara', {color: '#EB6841'}],
            ['Michael', 'Timothy', {color: '#EDC951'}],
            ['Amphitryon', 'Alcmene', {color: '#7DBE3C'}],
            ['Alcmene', 'Amphitryon', {color: '#BE7D3C'}],
            ['Amphitryon', 'Iphicles'],
            ['Amphitryon', 'Heracles'],
            ['Barbara', 'Timothy', {color: '#6A4A3C'}]
        );
    }

    function main() {
        let PC = GetPC()

        let UMG = require('UMG')

        // Javascript proxy may be garbage collected at any time.
        // Because our proxy has special member 'renderers', we should
        // keep our proxy not to be gc'ed by holding its reference into
        // global variable 'pool'.
        let pool = []

        let Springy = require('springy')
        let graph = new Springy.Graph()

        setup_graph(graph)

        // Declare our own HUD class
        class MyHUD extends HUD {
            // init
            ReceiveBeginPlay() {
                // guard this object from V8 GC
                pool.push(this)

                this.renderers = [];
                this.renderers.push(new SpringyRenderer(graph))

                super.ReceiveBeginPlay()
                this.renderers.forEach((r) => r.init && r.init())
            }

            // clean up
            ReceiveEndPlay() {
                this.renderers.forEach((r) => r.uninit && r.uninit())
                super.ReceiveEndPlay()
            }

            // Override drawing function
            ReceiveDrawHUD() {
                super.ReceiveDrawHUD()
                this.renderers.forEach((r) => r.draw(this.Canvas))
            }
        }

        let MyHUD_C = require('uclass')()(global,MyHUD)
        GetPC().ClientSetHUD(MyHUD_C)

        return function () {
            // To destroy our own HUD.
            GetPC().ClientSetHUD(HUD)

            // this sentence keeps 'capture' of pool so that 'pool' will
            // be alive during lifetime 'main'.
            pool = []
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
        require('bootstrap')('helloSpringy')
    }
})(this)
