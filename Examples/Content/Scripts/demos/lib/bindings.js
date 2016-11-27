function dynamic_binding_context() {
    let bindings = {}

    bindings = new Proxy({},{
        set:(target,key,value) => {
            let list = (target[key] || [])
            list.push(value)
            target[key] = list
            return value
        }
    })

    let context = {}
    context = new Proxy(context,{
        set:(target,key,value) => {
            (bindings[key] || []).forEach(fn => fn(value))
            return value
        }
    })

    return {
        bindings:bindings,
        context:context
    } 
} 

module.exports = dynamic_binding_context