function main() {
	let UMG = require('UMG')
	let instantiator = require('instantiator')
	
	let schema = {
		"title": "SpiralMetaData",
		"type": "object",
		"properties": {
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
			}
		},
		"required" : [ "N", "height", "num_spirals", "radius" ]
	}
	
	let _ = require('lodash')
	
	function create_meta(schema) {
		let section = schema.title
		let typedict = {
			integer: 'int'
		}
		let lines = _.map(schema.properties,(v,k) => {
			return `this.${k}/*Category:${section}+EditAnywhere+${typedict[v.type] || v.type}*/;`
		})
		let code = `
(function () {
	class ${section} {
		properties() {
			${lines.join('\n')}		
		}
	}
	return ${section}
})()
`
		return require('uclass')()(global,eval(code))
	}
	let meta = create_meta(schema)
		
	function generate_spiral(world, opts) {
		const mesh = StaticMesh.Load('/Engine/BasicShapes/Sphere')
		const mtrl = Material.Load('/Game/Color.Color')
		const tags = ["PCG"]

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
	
	let design = UMG.div({
		$link: elem => {
			console.log("OPEN")
		},
		$unlink:_ => {
			console.log("DESTROY")
		}
	},
		UMG(PropertyEditor,{$link:elem => {
			elem.SetObject(data)
		}}),
		UMG(Button,{OnClicked:generate},UMG.text({},"Generate")),
		UMG(Button,{OnClicked:clear},UMG.text({},"Purge"))
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
