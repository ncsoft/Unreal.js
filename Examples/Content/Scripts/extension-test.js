/// <reference path="typings/ue.d.ts" />
"use strict"

const async_task_timeout_in_seconds = 10

let _ = require('lodash')
let root_path = Root.GetDir('GameContent') + 'Scripts/tests'

// sync run with timer support 
function run_sync(P,timeout) {
    let alive = true
    P().then(_ => {
        alive = false
    })

    function pump() {
        let delegate = Root.OnTick.toJSON()
        let prev = Date.now()
        let deadline = $time + async_task_timeout_in_seconds
        while (alive) {
            let cur = Date.now()
            let elapsed = cur - prev
            delegate(elapsed / 1000.0)
            prev = cur
            
            if ($time > deadline) {
                return false
            }
        }

        return true
    }

    return pump()
}

function load(file) {
    let tests = {}
    let pending = []
    let scope = null

    let instances = []

    function describe(name, opts, body) {
        if (!body) {
            body = opts
            opts = {}
        }
        let prev = scope
        scope = {
            name: name,
            full: prev ? [prev.full, name].join('.') : name,
            parent: prev,
            open: 0
        }
        body.call(scope)
        scope = prev

        if (!prev) {
            // FJavascriptAutomatedTest (V8/Public/JavascriptTestLibrary.h)
            let running 
            let delegate = Root.OnTick.toJSON()
            let prev, deadline
            function start() {
                prev = Date.now()
                deadline = $time + async_task_timeout_in_seconds
            }

            function poll() {
                let cur = Date.now()
                let elapsed = cur - prev
                delegate(elapsed / 1000.0)
                prev = cur

                return ($time < deadline) 
            }            
                   
            let recipe = _.extend({
                Name: name.replace(/[ \t]/g, '_'),
                bComplexTask: false,
                TestFlags: 0x02000000 | 0x00000001 | 0x00000002,   
                RequiredDeviceNum: 1,
                TestFunctionNames: pending.slice(),
                Function: function (params) {
                    let {TestFunctionName, Tester} = params
                    if (!running) {
                        start()
                        Tester.SetContinue(true)
                        running = tests[TestFunctionName](Tester).then(_ => {
                            Tester.SetContinue(false)
                            running = false
                        }).catch(_ => {
                            Tester.SetContinue(false)
                            running = false
                        })
                    } else {
                        if (poll()) {
                            Tester.SetContinue(true)
                        } else {
                            Tester.AddError("Async time out")
                            running = false
                        }
                    }                    
                }  
            },opts)

            pending.length = 0

            let instance = JavascriptTestLibrary.Create(recipe)
            instances.push(instance)
        }
    }

    function run(scope, body, Tester) {
        function this_scope() {
            function open() {
                if (scope.open++ == 0) {
                    if (scope.before) {
                        return scope.before()
                    }
                }
                return Promise.resolve()
            }
            function close() {
                if (--scope.open == 0) {
                    if (scope.after) {
                        return scope.after()
                    }
                }
                return Promise.resolve()
            }
            function pause() {
                return new Promise(resolve => process.nextTick(resolve))
            }
            return open()
                .then(body)
                .catch(e => {
                    Tester.AddError(String(e))
                })
                .then(pause)
                .then(close)
        }
        if (scope.parent) {
            return run(scope.parent, this_scope, Tester)
        } else {
            return this_scope()
        }
    }

    function func_to_promise(body) {
        let async = false
        String(body).replace(/.*function.*\(([^\)]*)\)/, function (a, b) {
            async = (b.replace(/\t /g, '').length > 0)
        })
        let org = body
        if (async) {
            return function p_body() {
                return new Promise(resolve => {
                    org(resolve)
                })
            }
        } else {
            return function p_body() {
                return new Promise(resolve => {
                    org()
                    resolve()
                })
            }
        }
    }    

    function it(name, body) {
        let bound = scope
        body = func_to_promise(body)
        let key = [scope.full, name].join('.')
        let [a, ...b] = key.split('.')
        key = b.join('.')
        pending.push(key)
        tests[key] = function (Tester) {
            return run(bound, body, Tester)
        }
    }

    function before(body) {
        scope.before = func_to_promise(body)
    }

    function after(body) {
        scope.after = func_to_promise(body)
    }
    eval("(function () { " + Root.ReadStringFromFile(root_path + '/' + file) + "})()")

    return function () {
        instances.forEach(instance => instance.Destroy())
    }
}

function shot() {
    let test_files = []

    function read_dir(dir) {
        let out = Root.ReadDirectory(dir)
        if (out.$) {
            let items = _.filter(out.OutItems, (item) => !item.bIsDirectory && /^((?!node_modules).)*$/.test(item.Name) && /[\^\/]test\-[^\.]*\.js$/.test(item.Name))
            test_files = test_files.concat(items.map((item) => item.Name.substr(root_path.length + 1)))
            out.OutItems.forEach((item) => {
                if (item.bIsDirectory) {
                    read_dir(item.Name)
                }
            })
        }
    }

    read_dir(root_path)
    let byes = test_files.map(load)

    return function () {
        byes.forEach(fn => fn())
    }
}

module.exports = function () {
    let bye = shot()

    function refresh() {
        bye && bye()
        bye = shot()    
    }    

    let w = new DirectoryWatcher()
    w.OnChanged.Add(refresh)
    w.Watch(root_path)
    return function () {
        w.Unwatch()
        bye && bye()
    } 
} 