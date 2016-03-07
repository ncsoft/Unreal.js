(function (global) {
    "use strict";

    let _ = require('lodash')
    let inputBinding = require('input-binding')

    module.exports = function () {
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
            
            key = {
                '1': 'One',                
                '2': 'Two',                
                '3': 'Three',                
                '4': 'Four',                
                '5': 'Five',                
                '6': 'Six',                
                '7': 'Seven',                
                '8': 'Eight',                
                '9': 'Nine',                
                '0': 'Zero',
                'NumPad1': 'NumPadOne',   
                'NumPad2': 'NumPadTwo',   
                'NumPad3': 'NumPadThree',   
                'NumPad4': 'NumPadFour',   
                'NumPad5': 'NumPadFive',   
                'NumPad6': 'NumPadSix',   
                'NumPad7': 'NumPadSeven',   
                'NumPad8': 'NumPadEight',   
                'NumPad9': 'NumPadNine',   
                'NumPad0': 'NumPadZero',   
                '*': 'Multiply',   
                '+': 'Add',   
                '-': 'Subtract',   
                '/': 'Divide'
            }[key] || key;

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

        let RE_class = /\s*class\s+(\w+)(\s+\/\*([^\*]*)\*\/)?(\s+extends\s+([^\s\{]+))?/
        let RE_func = /(\w+)\s*\(([^.)]*)\)\s*(\/\*([^\*]*)\*\/)?.*/
        function register(target, template) {
            target = target || {}
            let bindings = []

            let splits = RE_class.exec(template)

            if (!splits) throw "Invalid class definition"

            let orgClassName = splits[1]
            
            // get a classname
            let className
            for (let index=0;;++index) {
                className = `${orgClassName}_C${index}`
                if (!UObject.Find(null,className)) break
            }            
            let parentClass = Object.getPrototypeOf(template.prototype).constructor
            if (parentClass == Object) {
                parentClass = null
            }
            let properties = []
            let classFlags = (splits[3] || "").split('+').map((x) => x.trim())

            function refactored(x) {
                let m = /\s*(\w+)\s*(\/\*([^\*]*)\*\/)?\s*/.exec(x)
                if (m) {
                    let arr = (m[3] || '').split('+').map((x) => x.trim())
                    let type = arr.pop()
                    let is_array = false
                    if (/\[\]$/.test(type)) {
                        is_array = true
                        type = type.substr(0, type.length - 2)
                    }
                    if (_.isFunction(target[type])) {
                        let src = String(target[type])
                        let e = /function (\w+)\(/.exec(src)
                        if (e) {
                            type = e[1]
                        }
                    }

                    if (type) {
                        return {
                            Name: m[1],
                            Type: type,
                            Decorators: arr,
                            IsArray: is_array
                        }
                    } else {
                        return null
                    }
                } else {
                    return null
                }
            }

            let proxy = {}
            _(Object.getOwnPropertyNames(template.prototype)).filter((name) => {
                let c = Object.getOwnPropertyDescriptor(template.prototype, name);
                return (c.get || c.set) == undefined;
            })
            .forEach((k) => {
                if (k == "properties") {
                    let func = String(template.prototype[k])
                    func = func.substr(func.indexOf('{')+1)
                    func = func.substr(0, func.lastIndexOf('}'))
                    func = _.compact(func.split('\n').map((l) => l.trim())).map((l) => {
                        if (l.indexOf("this.") != 0) return
                        l = l.substr(5)
                        return refactored(l)
                    })
                    properties = func
                } else if (k != 'constructor') {
                    let F = proxy[k] = template.prototype[k]

                    let s = String(F)

                    let matches = RE_func.exec(s)
                    if (!matches) throw "invalid function"

                    let functionName = matches[1]
                    s = matches[4]
                    let a = (s || '').split(/[\[\],]/).map((x) => x.trim())
                    a = _.compact(a)
                    let flags = _.filter(a, (a) => /^[\-\+]/.test(a))
                    a = _.filter(a, (a) => !/^[\-\+]/.test(a))
                    let args = ((matches[2] || '').split(',').map((x) => refactored(x.trim())))
                    F.IsUFUNCTION = false
                    if (_.every(args, (x) => !!x)) {
                        F.Signature = args
                        F.IsUFUNCTION = true
                    }

                    F.Decorators = a
                    if (a.length > 0) {
                        F.IsUFUNCTION = true
                    }
                    if (/Binding$/i.test(a[0])) {
                        F.IsUFUNCTION = true
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
                }
            })

            let thePackage = JavascriptLibrary.CreatePackage(null,'/Script/Javascript')

            let klass = null

            if (_.includes(classFlags, "Struct")) {
                klass = CreateStruct(className, {
                    Parent: parentClass,
                    Functions: proxy,
                    StructFlags: classFlags,
                    Outer: thePackage,
                    Properties: properties
                });
            }
            else {
                klass = CreateClass(className, {
                    Parent: parentClass,
                    Functions: proxy,
                    ClassFlags: classFlags,
                    Outer: thePackage,
                    Properties: properties
                });
            }

            if (target != undefined) {
                target[orgClassName] = klass;
            }

            bindings.forEach((binding) => inputBinding(klass,binding))
            return klass;
        }

        return register;
    }
}(this))
