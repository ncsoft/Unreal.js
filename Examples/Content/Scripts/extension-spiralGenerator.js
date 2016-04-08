function main() {
	const jade_file = 'views/helloSpiralGenerator.jade'	
	const mesh = StaticMesh.Load('/Engine/BasicShapes/Sphere')
	const mtrl = Material.Load('/Game/Color.Color')
	const tags = ["PCG"]

	let UMG = require('UMG')
	let jade = require('jade-umg')(UMG, jade_file)
	 
	function purge(world) {
		let prev_actors = world.GetAllActorsOfClassAndTags(StaticMeshActor, tags).OutActors
		prev_actors.forEach((actor) => world.EditorDestroyActor(actor))
	} 
 
	function generate_spiral(world, opts) {
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

	function controller(scope) {
		scope.test = function () {
			let world = Root.GetEngine().GetEditorWorld()
			generate_spiral(world, scope)
			Root.GetEngine().RedrawAllViewports(true)
		}
		scope.properties = [
			{
				key : "N",
				min : 1,
				max : 300,
				value : 100
			},
			{
				key : "num_spirals",
				min : 1,
				max : 10,
				value : 3
			}, 
			{
				key: "radius",
				min: 10,
				max: 1000,
				value: 320
			},
			{
				key: "height",
				min: 10,
				max: 2000,
				value: 1000
			}
		]
		scope.properties.forEach((prop) => {
			prop.u = (prop.value - prop.min) / (prop.max - prop.min)
			prop.update = (u) => { 
				prop.value = Math.floor( u * (prop.max - prop.min) + prop.min )
				scope[prop.key] = prop.value
			}
			prop.update(prop.u) 
		})
		scope.clear = () => {
			let world = Root.GetEngine().GetEditorWorld()
			purge(world)
			Root.GetEngine().RedrawAllViewports(true)
		}
		
		scope.val = '<root scope value>';
	}
    
    let maker = require('editor-maker')

    let opts = {
        DisplayName: "SpiralGenerator",
        TabId: "SpiralGenerator@"
    }

    let tab = maker.tab(opts, (context) => UMG.app(jade, controller))
    tab.Commit()
    global.refresh && global.refresh()
    global.refresh = function () {
        tab.Refresh()
    }
    return function () {
        tab.Discard()
    }
}

module.exports = function () {
    let bye
    process.nextTick(_ => {
        bye = main()            
    })
    
    return function() {
        bye()
    }
}
