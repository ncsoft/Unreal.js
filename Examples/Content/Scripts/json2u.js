"use strict"

module.exports = function() {
    let _ = require('lodash')
    
    let meta_map = new Map()
    let meta_ref = {}
    
    function resolve_ref(ref) {
        return meta_ref[ref]
    }
    
    function public_create_meta(ref,schema) {
        let meta = create_meta(schema)
        meta_ref[ref] = meta
        return meta
    }
    
    function create_meta(schema) {
        let old = meta_map.get(schema)
        if (old) {
            return old
        } else {
            let cur = internal_create_meta(schema)
            if (cur) {
                meta_map.set(schema,cur)
            }
            return cur
        }
    }
	
	function internal_create_meta(schema) {
		let section = schema.title
		let typedict = {
			integer: 'int'
		}
		let lines = _.map(schema.properties,(v,k) => {
            function resolve(v) {
                if (v.$ref) {
                    return resolve(resolve_ref(v.$ref))  
                } 
                let type = typedict[v.type] || v.type
                if (type == "array") {
                    return resolve(v.items) + '[]'
                }
                if (type == "object") {
                    type = create_meta(v).name
                } 
                return type
            }
            let type = resolve(v)
			return `this.${k}/*Category:${section}+EditAnywhere+${type}*/;`
		})
		let code = `
(function () {
	class ${section} ${schema.struct ? '/* Struct */' : ''}{
		properties() {
			${lines.join('\n')}		 
		}
	}
	return ${section}
})() 
`
        return require('uclass')()(global,eval(code))
	}
    
    return {
        create : public_create_meta,
        get : resolve_ref
    }
}