function main() {
	const mesh = StaticMesh.Load('/Engine/BasicShapes/Sphere')
	const mtrl = Material.Load('/Game/Color.Color')
	const tags = ["PCG"]

	let UMG = require('UMG')
	let instantiator = require('instantiator')
	 
	function purge(world) {
		let prev_actors = world.GetAllActorsOfClassAndTags(StaticMeshActor, tags).OutActors
		prev_actors.forEach((actor) => world.EditorDestroyActor(actor))
	}
	
	class SpiralMeta {
		properties() {
			this.N/*Category:Spiral+EditAnywhere+int*/;
			this.height/*Category:Spiral+EditAnywhere+float*/;
			this.num_spirals/*Category:Spiral+EditAnywhere+int*/;
			this.radius/*Category:Spiral+EditAnywhere+float*/;
		}
	} 
	let meta = require('uclass')()(global,SpiralMeta)
 
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
	
	let maker = require('editor-maker')

	let opts = {
		DisplayName: "SpiralGenerator",
		TabId: "SpiralGenerator@"
	}
	
	let data = new meta()
	data.num_spirals = 10;
	data.radius = 320; 
	data.N = 100;
	data.height = 1000
	
	function generate() {
		let world = Root.GetEngine().GetEditorWorld()
		generate_spiral(world, data)
		Root.GetEngine().RedrawAllViewports(true)
	}
	
	function clear() {
		let world = Root.GetEngine().GetEditorWorld()
		purge(world)
		Root.GetEngine().RedrawAllViewports(true)
	}    

	let tab = maker.tab(opts, (context) => {
		let design = UMG.div({},
			UMG(PropertyEditor,{$link:elem => {
				elem.SetObject(data)
				console.log(elem,data)
			}}),
			UMG(Button,{OnClicked:generate},UMG.text({},"Generate")),
			UMG(Button,{OnClicked:clear},UMG.text({},"Purge"))
		)
		return instantiator(design)
	})
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
