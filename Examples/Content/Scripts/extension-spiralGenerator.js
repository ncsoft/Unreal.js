const tags = ["PCG"]
	
function purge(world) {
    let prev_actors = world.GetAllActorsOfClassAndTags(StaticMeshActor, tags).OutActors  
    prev_actors.forEach((actor) => world.EditorDestroyActor(actor))  
}
    
function generate_spiral(world, opts) {
    const mesh = opts.mesh
    const mtrl = opts.mtrl
    
    let N = opts.N || 10
    let num_spirals = opts.num_spirals || 5
    let radius = opts.radius || 200
    let height = opts.height || 200 * 5
    purge(world)		
    for (let i = 0; i < N; ++i) {
        let v = i / N
        let u = v * num_spirals * 2 * Math.PI
        let t = {
            Translation: {
                X: Math.sin(u) * radius,
                Y: Math.cos(u) * radius,
                Z: v * height
            }
        }
        let color = {
            R: t.Translation.X * 2 + 1,
            G: t.Translation.Y * 2 + 1,
            B: v, 
            A: 1
        } 
        let mi = world.CreateDynamicMaterialInstance(mtrl)
        mi.SetVectorParameterValue('color', color)
        let sma = StaticMeshActor.C(world.BeginSpawningActorFromClass(StaticMeshActor, t, true))
        sma.StaticMeshComponent.StaticMesh = mesh			
        sma.StaticMeshComponent.SetMaterial(0, mi)
        sma.StaticMeshComponent.ReregisterComponent()
        sma.FinishSpawningActor(t)
        sma.Tags = tags
    }
}

function get_engine() {
    return Root.GetEngine()
}

function get_world() {
    return get_engine().GetEditorWorld()
}

function redraw() {
    get_engine().RedrawAllViewports(true)
}
    
function generate(data) {
    generate_spiral(get_world(), data)
    redraw()
}

function clear() {
    purge(get_world())
    redraw()
}    

function main() {
    let UMG = require('UMG')
	let instantiator = require('instantiator')
	
	let schema = {
		"title": "SpiralMetaData",
		"type": "object",
		"properties": {
            "mesh" : {
                "type" : "StaticMesh",
            },
            "mtrl" : {
                "type" : "Material",
            },
			"N" : {
				"type" : "integer",
			},
			"height" : {
				"type" : "float",
			},
			"num_spirals" : {
				"type" : "integer",
			},
			"radius" : {
				"type" : "float"
			},
            "test2" : {
                "type" : "array",
                "items" : {
                    "type" : "float"
                }  
            },
            "test" : {
                "type" : "array",
                "items" : {
                    "title": "TestStruct",
                    "type": "object",
                    "struct": "true",
                    "properties": {
                        "A": {
                            "type" : "integer"                            
                        },
                        "B": {
                            "type" : "string"                            
                        }
                    }   
                }                
            }
		},
		"required" : [ "N", "height", "num_spirals", "radius" ]
	}
	
    let json2u = require('./json2u')()	
	let meta = json2u.create('spiral',schema)
    
    let previewWorld
    let data = new meta()
    data.num_spirals = 10;
    data.radius = 320; 
    data.N = 100;
    data.height = 1000
    data.mesh = StaticMesh.Load('/Engine/BasicShapes/Sphere')
    data.mtrl = Material.Load('/Game/Color.Color')
    
    let GEngine = Root.GetEngine()    
    const buttonTextStyle = {
        Font : {
            FontObject : GEngine.SmallFont,
            Size : 10
        },
        ColorAndOpacity : {
            SpecifiedColor:{R:0,G:0,B:0,A:1}
        }
    }
    let spin    
    let viewport
    function preview() {
        purge(previewWorld)
        generate_spiral(previewWorld, data)
        viewport.Redraw()
    }
    function tick() {
        if (--spin > 0) {
            process.nextTick(tick)
        } else {
            spin = null
            preview()
        }
    }
    function touch() {
        if (!spin) {
            process.nextTick(tick)
        }
        spin = 10        
    }
	let design = UMG.div({},
        UMG(JavascriptEditorViewport,
        {
            $link:elem => {
                viewport = JavascriptEditorViewport.C(elem)
                process.nextTick(__ => {                    
                    previewWorld = viewport.GetViewportWorld()
                    generate_spiral(previewWorld, data)                      
                })                
            },            
        },
            UMG.text(
                {
                    Font : {
                        FontObject : GEngine.SmallFont,
                        Size : 7
                    },
                },
                "SPIRAL GENERATOR PREVIEW"
            )
        ),
        UMG.span({},
            UMG(Button,
                {
                    OnClicked:_ => generate(data),
                    ToolTipText:'Generate spirals on editor world'
                },
                UMG.text(buttonTextStyle,"Generate!!")
            ),
            UMG(Button,
                {
                    OnClicked:clear,
                    ToolTipText:'Purge last created spirals'
                },
                UMG.text(buttonTextStyle,"Purge")
            )
        ),
		UMG(PropertyEditor,
        {            
            OnChange: _ => {
                touch()
            },
            $link:elem => {
			    elem.SetObject(data)
		    }
        })        		
	)
	return instantiator(design)
}

module.exports = function () {
	let maker = require('editor-maker')

	let opts = {
		DisplayName: "SpiralGenerator",
		TabId: "SpiralGenerator@"
	}
    
	maker.tabSpawner(opts,main);
	
	return _ => {}
}
