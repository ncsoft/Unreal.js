(function (global) {
	"use strict";
	
	let _ = require('lodash')
    let inputBinding = require('input-binding')
	
	module.exports = function () {
		global.nextUnrealEngineClassId = global.nextUnrealEngineClassId || 0
		function fetchClassId() {
			return global.nextUnrealEngineClassId++
		}

		let mod_patterns = {
		    bCtrl: /^ctrl$/i,
		    bAlt: /^alt$/i,
		    bCmd: /^cmd$/i,
            bShift: /^shift$/i
		}

		let inputbinding_patterns = {
		    Action: (a) => ({ InputActionName: a[1], InputKeyEvent: a[2] || 'IE_Pressed' }),
		    Axis: (a) => ({ InputAxisName: a[1] }),
		    AxisKey: (a) => ({ InputAxisKey: a[1] }),
		    Key: (a) => ({ InputChord: ParseInputChord(a[1]), InputKeyEvent: a[2] || 'IE_Pressed' }),
		    Touch: (a) => ({ InputKeyEvent: a[1] || 'IE_Pressed' }),
		    VectorAxis: (a) => ({})
		}

		function ParseInputChord(string) {
		    let a = (string || '').split('+')
		    let key = a.pop()

		    let out = {
                Key : { KeyName : key }
		    }

		    a.forEach((mod) => {
		        _.each(mod_patterns,(v,k) => {
		            if (v.test(mod)) {
		                out[k] = true
		            }
		        })		        
		    })

            return out
		}
		
		function register(target, template) {
		    let bindings = []

			let splits = String(template).split(/[\s+|\r|\n]/);
			let orgClassName = splits[1]
			let className = `${orgClassName}_C${fetchClassId()}`
			let parentClassName = splits[3]
			let parentClass = eval(parentClassName) 
			 
			let proxy = {}
			_.each(Object.getOwnPropertyNames(template.prototype), (k) => {
			    proxy[k] = template.prototype[k]

			    let s = String(proxy[k])
			    let functionName = s.substr(0, s.indexOf('(')).replace(/\b/g, '')                
			    s = s.substr(s.indexOf(')')+1)
			    s = s.substr(0, s.indexOf('{'))
			    s = s.substr(s.indexOf('/*') + 2)
			    s = s.substr(0, s.indexOf('*/'))
			    let a = s.split(/[\[\],]/)
			    let flags = _.filter(a, (a) => /^[\-\+]/.test(a))
			    a = _.filter(a,(a) => !/^[\-\+]/.test(a))
			    if (/Binding$/i.test(a[0])) {
			        let prefix = a[0].substr(0, a[0].length - 7)			        
			        let pattern = inputbinding_patterns[prefix]
			        if (!pattern) throw "Invalid binding pattern"

			        let binding = {
			            type: prefix, 
			            FunctionNameToBind: functionName
			        }
			        flags.forEach((flag) => {
                        binding[flag.substr(1)] = (flag[0] == '+')
			        })
			        bindings.push(_.extend(binding, pattern(a)))			        
			    }
			})
			
			let thePackage = JavascriptLibrary.CreatePackage(null,'/Script/Javascript')
			
			let klass = CreateClass(className,{
				Parent:parentClass,
				Functions:proxy,
				Outer:thePackage
			});
			
			if (target != undefined) {
				target[orgClassName] = klass;
			}

            bindings.forEach((binding) => inputBinding(klass,binding))
			return klass;
		}		  
		
		return register;
	}
}(this))
