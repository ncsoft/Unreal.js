/// <reference path="typings/ue.d.ts">/>
let _ = require('lodash')
let compile = x => require('uclass')()(global,x)

// builder helper (for better js-ish code)
function make(what) {
    if (what instanceof JavascriptUICommandInfo) {
        return function (builder) {
            builder.AddToolBarButton(what)
        }
    } else if (what instanceof Array) {
        let arr = what.map(make)
        return function (builder) {
            arr.forEach(fn => fn(builder))
        }
    } else if (what.section) {
        let fn = make(what.inner)
        return function (builder) {
            builder.BeginSection(what.section)
            fn(builder)
            builder.EndSection()
        }
    } else if (what.pullDown) {
        let {tooltip, menu} = what
        let fn = make(menu)
        return function (builder) {
            builder.AddPullDownMenu(what.pullDown, tooltip, fn)
        }
    }
}

let {defer,flush} = require('./demos/lib/defer')()

function create_context(...args) {    
    let context = JavascriptMenuLibrary.NewBindingContext(...args);
    defer(_ => context.Destroy())
    return context
}

function create_commands(context,opts) {
    let commands = new JavascriptUICommands
    let list = opts.Commands || []
    commands.BindingContext = context
    commands.Commands = list
    
    function link(key) {
        return what => {
            let y = _.find(list,x=>x.Id == what)
            return y && y[key] ? y[key]() : true
        }
    }

    commands.OnExecuteAction = link('OnExecute')
    commands.OnIsActionChecked = link('OnIsActionChecked')
    commands.OnCanExecuteAction = link('OnCanExecuteAction')

    commands.Initialize()
    defer(_ => commands.Uninitialize())
    return commands
}

function uicommandlist(commands) {
    let list = JavascriptMenuLibrary.CreateUICommandList()
    commands.Bind(list)
    return list
}

function new_commands(opts) {        
    let {context, contextDesc, parentContext, styleset} = opts
    let source = JSON.stringify([context, contextDesc, parentContext, styleset, opts.commands])
    let ctx = create_context(context, contextDesc || '', parentContext || '', styleset)    
    let commands = create_commands(ctx,{ 
        Commands : _.map(opts.commands,(v,k) => (
            {
                Id: k,
                FriendlyName: v.friendlyName,
                Description: v.description,
                ActionType: v.actionType,
                OnExecute: v.onExecute,
                OnIsActionChecked: v.isChecked,
                OnCanExecuteAction: v.canExecute
            }
        ))
    })
    commands.list = uicommandlist(commands)
    commands.source = {
        commands: source
    }
    return commands
}

function new_extensions(commands,opts) {
    _.forEach(opts.extenders || [],extension => {
        let extender = new JavascriptExtender
        let {target,type,hook,position,command} = extension
        let extensibilityManager
        if (type == 'toolbar') {
            let commandInfo = commands.CommandInfos[_.keys(opts.commands).indexOf(command)]            
            extender.AddToolBarExtension(hook || 'Content', position || 'After', commands.list, make(commandInfo))
            extensibilityManager = JavascriptEditorLibrary.GetToolBarExtensibilityManager(target || 'LevelEditor')
        } else {
            console.error('Unsupported type', type)
            return
        }            
        extensibilityManager.AddExtender(extender)    
        defer(_ => extensibilityManager.RemoveExtender(extender))
    })
}

function maybe_create_group(path) {
    let groups = global.$groups = global.$groups || {}
    if (!groups[path]) {
        let cur = JavascriptEditorLibrary
        path.split('.').forEach((v,k) => {
            console.log(cur,k)
            let x = cur.GetGroup && cur.GetGroup(v)
            if (!x) {
                x = cur.AddGroup(v)
            }
            cur = x
        })
        groups[path] = cur
    }
    return groups[path]
}

function demoTab() {
    function tabMain() {
        let UMG = require('UMG')

        let e
        function generate() {
            e.SetText(Math.random())
        }
        let fpsMonitor = UMG.text({
            $link:elem => {
                let alive = true
                let last = 0
                let ema = 0
                function loop() {
                    if (!alive) return
                    let cur = new Date() | 0
                    if (last) {
                        let elapsed = cur-last
                        ema = ema * 0.99 + elapsed * 0.01
                        let fps = 1000 / (elapsed+1e-9)
                        elem.SetText(fps.toFixed(1) + ' fps')
                    }
                    last = cur                    
                    process.nextTick(loop)
                }
                elem.$bye = function () {
                    alive = false
                }
                loop()
            },
            $unlinke:elem => {
                elem.$bye()
            }
        })
        class TestParams extends JavascriptObject {
            ctor() {
                this.Neurons = [10,7,5,5];
            }
            properties() {
                this.Neurons/*EditAnywhere+Category:Special+int[]*/;
            }
        }
        let TestParams_C = compile(TestParams)
        let obj = new TestParams_C()
        let update
        let design = UMG.div({},
            fpsMonitor,
            UMG(PropertyEditor,{
                $link:elem => {
                    elem.SetObject(obj)
                },
                OnChange:prop => {
                    update()
                }
            }),
            UMG.div({
                $link:elem => {
                    elem.alive = true
                    let session = 0

                    function run() {
                        let thisSession = ++session
                        require('./demos/deeplearning-demo')(
                            elem,
                            _ => thisSession == session && elem.alive,
                            obj.Neurons
                        )
                    }
                    
                    run()
                    update = run                    
                }, 
                $unlink:elem => {
                    elem.alive = false
                }
            })
        )

        let instantiator = require('instantiator')
        return instantiator(design)
    }

    let maker = require('editor-maker')
    maker.tabSpawner({
        DisplayName: 'Some editor',
        TabId: 'SomeEditor',
        Group: maybe_create_group('Root.A2')
    }, tabMain)
}

function new_styleset(opts) {
    let {styleset,root,brushes} = opts
    let style = JavascriptUMGLibrary.CreateSlateStyle(styleset)

    style.SetContentRoot(root || Root.GetDir('GameContent'))
    _.each(brushes,(v,k) => {
        let {path, size, tint} = v
        style.AddImageBrush(
            k,
            style.RootToContentDir(path),
            size || { X: 40, Y: 40 },
            tint || { R: 1, G: 1, B: 1, A: 1 },
            'NoTile',
            'FullColor'
        )
    })    
    style.Register()
    defer(_ => style.Unregister())
    return style
}

function demoToolbar() {
    new_styleset({
        styleset: 'UnrealJSDemo',
        root: Root.GetDir('EnginePlugins'),
        brushes: {
            'UnrealJSDemo.Test': {
                path: 'Marketplace/UnrealJS/Resources/Icon128.png'
            }
        }
    })

    let opts = {
        context: 'UnrealJSDemo',
        contextDesc: 'Demo of unreal js extension',
        styleset: 'UnrealJSDemo',
        commands: {
            Test: {
                friendlyName: 'Test7',
                description: 'demo',
                actionType: 'Button',
                onExecute: _ => {
                    console.log('Hello test!')
                }
            }
        },
        extenders: [
            {
                type: 'toolbar',
                hook: 'Content',
                command: 'Test'
            }
        ]
    }

    global['$demoToolbar'] = opts

    let commands = new_commands(opts) 
    new_extensions(commands,opts)
}

function main() {
    demoToolbar()
    demoTab()
}

module.exports = () => {
    main()   
    
    return flush
}