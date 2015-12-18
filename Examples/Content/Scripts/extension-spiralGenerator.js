(function (global) {
	"use strict"

	const jade_file = 'views/helloSpiralGenerator.jade'
	const radius = 500
	const height = 500 * 5
	const num_spirals = 5
	const mesh = StaticMesh.Load('/Engine/BasicShapes/Sphere')
	const tags = ["PCG"]

	let UMG = require('UMG')
	let jade = require('jade-umg')(UMG, jade_file)

	function controller(scope) {
		scope.N = 100
		scope.test = function () {
			let world = Root.GetEngine().GetEditorWorld()
			let prev_actors = world.GetAllActorsOfClassAndTags(StaticMeshActor, tags).OutActors
			prev_actors.forEach((actor) => world.EditorDestroyActor(actor))
			for (let i = 0; i < scope.N; ++i) {
				let v = i / scope.N
				let u = v * num_spirals * 2 * Math.PI
				let t = {
					Translation: {
						X: Math.sin(u) * radius,
						Y: Math.cos(u) * radius,
						Z: v * height
					}
				}
				let sma = StaticMeshActor.C(world.BeginSpawningActorFromClass(StaticMeshActor, t, true))
				sma.StaticMeshComponent.StaticMesh = mesh
				sma.StaticMeshComponent.ReregisterComponent()
				sma.FinishSpawningActor(t)
				sma.Tags = tags
			}
			Root.GetEngine().RedrawAllViewports(true)
		}
		scope.val = '<root scope value>';
	}

	module.exports = function () {
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
})(this)