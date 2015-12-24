(function (global) {
	"use strict"
	
	let has_module = false
	try { if (eval("module")) { has_module = true } } catch (e) {}
	if (has_module) {		
		let _ = require('lodash')
		let extensions = []
        let root_path = Root.GetDir('GameContent') + 'Scripts'
		
		function read_dir(dir) {
			let out = Root.ReadDirectory(dir)
			if (out.$) {				
				let items = _.filter(out.OutItems,(item) => !item.bIsDirectory && /extension[^\.]*\.js$/.test(item.Name))
				extensions = extensions.concat(items.map((item) => item.Name.substr(root_path.length+1)))
				out.OutItems.forEach((item) => {
					if (item.bIsDirectory) {
						read_dir(item.Name)
					}
				})			
			}
		} 
	
		read_dir(root_path)
		
		function spawn(what) {
			try {
				return require(what)()			
			}
			catch (e) {
				console.error(String(e))
				return function () {}
			}
			
			return function () {}	
		}
		
		function main() {
			let byes = extensions.map((what) => spawn(what))		
			return function () {
				byes.forEach((bye)=>bye())
			}
		}
		
		module.exports = () => {
			try {
				let cleanup = main()
				return () => cleanup()
			} catch (e) {
				console.error(String(e))
				return () => {}
			}			
		}
	} else {
		Context.WriteDTS(Context.Paths[0] + 'typings/ue.d.ts')
		Context.WriteAliases(Context.Paths[0] + 'aliases.js')
	
		Context.RunFile('aliases.js')
		Context.RunFile('polyfill/unrealengine.js')
		Context.RunFile('polyfill/timers.js')
		
		require('devrequire')('editor')
	}	
})(this)
