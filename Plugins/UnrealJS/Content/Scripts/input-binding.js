(function () {
    "use strict"

    module.exports = function AddBinding(PC_C,binding) {
        let theClass = eval(`Input${binding.type}DelegateBinding`)
        let bindingObject = null
        if (!theClass) throw "Invalid binding type"
        
        bindingObject = JavascriptLibrary.GetDynamicBinding(PC_C,theClass)
        if (!bindingObject) {
            bindingObject = new theClass()
            JavascriptLibrary.AddDynamicBinding(PC_C,bindingObject)
        }       
        
        let key = `Input${binding.type}DelegateBindings`
        let prev = bindingObject[key]
        prev.push(binding)
        //bindingObject[key] = JSON.parse(JSON.stringify(prev))
    	bindingObject[key] = prev;
    }
})()
