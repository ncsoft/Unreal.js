/// <reference path="typings/ue.d.ts" />
"use strict"

const I = require('instantiator')
const _ = require('lodash')
const UMG = require('UMG')

function packageRegistryService() {
    const repositoryUrl = 'https://raw.githubusercontent.com/ncsoft/Unreal.js-packages/master/repository.json'
    const svnPath = `${Context.GetDir('Engine')}/Binaries/ThirdParty/svn/${JavascriptProcess.GetString('BinariesSubdirectory')}/svn`

    const request = require('request')
    let workDir = Context.GetDir('GameContent')+'/Scripts/Downloaded'

    function makeDir() {
        JavascriptLibrary.MakeDirectory(workDir,false)
        return Promise.resolve()
    }

    function packageDetail(p) {
        let {name,details} = p
        let split = details.lastIndexOf('/')
        let packageDir = workDir + details.substr(split)

        function install() {
            return makeDir()
                .then(_ => new Promise(resolve => {
                    let p = JavascriptProcess.Create(
                        svnPath,
                        `co ${details}`,
                        false,
                        false,
                        false,0,workDir)
                    function tick() {
                        if (!p.IsRunning()) {
                            resolve()
                            return
                        }
                        process.nextTick(tick)
                    }
                    tick()
                })
            )
        }

        function remove() {
            return new Promise((resolve,reject) => {
                if (JavascriptLibrary.DeleteDirectory(packageDir,true,true)) {
                    resolve()
                } else {
                    reject(new Error('delete failed'))
                }
            })
        }
        return {
            packageDir : packageDir,
            details : details,
            name : name,
            installed : JavascriptLibrary.DirectoryExists(packageDir),
            install : install,
            remove : remove
        }
    }

    function fetchPackages() {
        return request("GET",repositoryUrl)
            .then(repository => repository.packages.map(packageDetail))
    }

    return {
        fetch: fetchPackages
    }
}

function makeContext(opts) {
    let selectedItem

    function makeCommands() {
        let context = JavascriptMenuLibrary.NewBindingContext(opts.Id + extensionId,'Test menu','','EditorStyle');
        let commands = new JavascriptUICommands

        let hasPendingExecution

        function init() {
            commands.BindingContext = context
            commands.Commands = opts.Commands
            commands.Initialize()
        }

        commands.OnExecuteAction = (what) => {
            hasPendingExecution = true
            selectedItem.actions[what]()
                .then(_ => console.log(`${what} completed`))
                .catch(e => console.error(String(e)))
                .then(_ => hasPendingExecution = false)
        }

        commands.OnCanExecuteAction = (what) => {
            return !hasPendingExecution && selectedItem && !!selectedItem.actions[what]
        }

        function uninit() {
            commands.Uninitialize()
            context.Destroy()
        }

        init()

        commands.destroy = uninit

        return commands
    }

    let commands = makeCommands()
    let commandList = JavascriptMenuLibrary.CreateUICommandList()
    commands.Bind(commandList)

    return {
        commands : commands,
        commandList : commandList,
        setCurrent : what => selectedItem = what,
        destroy : _ => {
            commands.destroy()
        },
        contextMenu : () => I(
            UMG(JavascriptMultiBox,{
                CommandList : commandList,
                OnHook : __ => {
                    JavascriptMenuLibrary.CreateMenuBuilder(commandList,true,builder => {
                        opts.Commands.forEach((v,k) => {
                            builder.AddToolBarButton(commands.CommandInfos[k])
                        })
                        JavascriptMultiBox.Bind(builder)
                    })
                }
            })
        )
    }
}

const githubUrl = 'https://api.github.com/repos/ncsoft/Unreal.js'
const homepageUrl = "https://github.com/ncsoft/Unreal.js"

let extensionId = global.$extensionUnreal = (global.$extensionUnreal || 0) + 1

function main() {
    let registry = packageRegistryService()
    let {EventEmitter} = require('events')

    let font = {
        Size:10,
        FontObject:Root.GetEngine().SmallFont
    }

    const request = require('request')
    const style = new JavascriptStyleSet
    style.StyleSetName = 'EditorStyle'

    function fetchGithub() {
        return request('GET',githubUrl)
    }

    function getNumClassesExported() {
        return _.filter(_.keys(global),x=>!!global[x].StaticClass).length
    }

    function packageToObject(p,E) {
        let o = new JavascriptObject()
        o.package = p
        let details = p.details
        o.installed = p.installed

        function refreshPackages() {
            E.refreshPackages()
            return Promise.resolve()
        }

        function installPackage() {
            var note = new JavascriptNotification
            note.Text = `Installing ${details}`
            note.bFireAndForget = false
            note.bUseImage = true
            note.Image = style.GetBrush('LevelEditor.Build')
            note.Pending()
            note.Fire()

            return o.package.install()
                .then(refreshPackages)
                .then(_ => {
                    note.Success()
                    note.Fadeout()
                })
                .catch(e => {
                    note.Fail()
                    note.Fadeout()
                    console.error(String(e),e.stack)
                    throw e
                })
        }
        function removePackage() {
            return p.remove().then(refreshPackages)
        }
        o.actions = {
            install: installPackage,
            uninstall : removePackage
        }
        if (o.installed) {
            delete o.actions.install
        } else {
            delete o.actions.uninstall
        }
        return o
    }

    let contexts = makeContext({
        Id:'UnrealJS_Contexts',
        Commands:[
            {
                Id: 'debug',
                FriendlyName : 'Set as debug context',
                Description : 'Set as debug context',
                ActionType : 'Button'
            },
            {
                Id: 'undebug',
                FriendlyName : 'Reset to normal context',
                Description : 'Reset to normal context',
                ActionType : 'Button'
            }
        ]
    })

    let packages = makeContext({
        Id:'UnrealJS_Packages',
        Commands: [
            {
                Id: 'install',
                FriendlyName : 'Install this package',
                Description : 'Install this package',
                ActionType : 'Button'
            },
            {
                Id: 'uninstall',
                FriendlyName : 'Remove this package',
                Description : 'Remove this package',
                ActionType : 'Button'
            }
        ]
    })

    let throbber
    makeWindow("$window",
    {
        SizingRule:'AutoSized',
        Title:'Unreal.js'
    })(finish => {
        let E = new EventEmitter()
        E.refreshPackages = _ => E.emit('refreshPackages')
        E.refreshContexts = _ => E.emit('refreshContexts')
        let root = {}

        function contextList() {
            return UMG(JavascriptListView,{
                ItemHeight:20,
                Columns:[
                    {
                        Id: 'Name',
                        Width: 0.7
                    },
                    {
                        Id: 'Status',
                        Width: 0.3
                    }
                ],
                OnContextMenuOpening: contexts.contextMenu,
                OnGenerateRowEvent:(item,column) => I(
                    UMG.text({Font:font},column == 'Name' ?
                        item ? item.target : 'Context' :
                        item ? item.status : 'Status'
                    )
                ),
                $link:elem => {
                    elem.JavascriptContext = Context
                    elem.alive = true
                    elem.proxy = {
                        OnSelectionChanged: item => contexts.setCurrent(item)
                    }

                    let old
                    function refresh() {
                        function fetch() {
                            let out
                            {
                                out = JavascriptLibrary.GetObjectsOfClass(JavascriptContext, [], false, 0x10).Results
                                out = out.map(x => [x.GetDisplayName(),x.IsDebugContext() ? 'Debug' : ''])
                                let cur = _.flatten(out).join(',')
                                if (cur != old) {
                                    old = cur
                                    out = out.map(x => {
                                        let y = new JavascriptObject()
                                        let [a,b] = x
                                        y.target = x[0]
                                        y.status = x[1]

                                        function find() {
                                            let out = JavascriptLibrary.GetObjectsOfClass(JavascriptContext, [], false, 0x10).Results
                                            let x = _.filter(out,x => x.GetDisplayName() == y.target)
                                            if (x.length) {
                                                return Promise.resolve(x[0])
                                            } else {
                                                return Promise.reject(new Error('not found'))
                                            }
                                        }

                                        function refreshContexts() {
                                            E.refreshContexts()
                                            return Promise.resolve()
                                        }

                                        y.actions = {
                                            debug : _ => find().then(obj=>obj.SetAsDebugContext()).then(gc).then(refreshContexts),
                                            undebug : _ => find().then(obj=>obj.ResetAsDebugContext()).then(gc).then(refreshContexts),
                                        }

                                        if (y.status == 'Debug') {
                                            delete y.actions.debug
                                        } else {
                                            delete y.actions.undebug
                                        }
                                        return y
                                    })
                                } else {
                                    out = null
                                }
                            }
                            gc()
                            return out
                        }
                        let cur = fetch()
                        if (cur) {
                            root.Contexts = elem.Items = cur
                            elem.RequestListRefresh()
                        }
                    }

                    function tick() {
                        if (!elem.alive) return
                        refresh()
                        setTimeout(tick,1000)
                    }

                    elem.refresh = refresh

                    tick()
                    E.on('refreshContexts',elem.refresh)
                },
                $unlink:elem => {
                    elem.alive = false
                    E.removeListener('refreshContexts',elem.refresh)
                }
            })
        }

        function packageList(opts) {
            return UMG.div(
                {
                    Slot:opts.Slot
                },
                    UMG(JavascriptListView,{
                        ItemHeight:20,
                        OnContextMenuOpening: packages.contextMenu,
                        OnGenerateRowEvent:(item,column) => {
                            const isName = column == 'Name'
                            return I(
                                UMG.text(
                                    {
                                        Font:font,
                                        ToolTipText: isName && item ? item.package.details : ''
                                    },
                                    isName ?
                                        (item ? item.package.name : 'Package name') :
                                        (item ? item.installed ? "Installed" : "" : 'Status')
                                )
                            )
                        },
                        Columns:[
                            {
                                Id: 'Name',
                                Width: 0.7
                            },
                            {
                                Id: 'Status',
                                Width: 0.3
                            }
                        ],
                        $link:elem => {
                            elem.JavascriptContext = Context
                            elem.alive = true
                            elem.proxy = {
                                OnDoubleClick : item => item.actions.install(),
                                OnSelectionChanged: item => packages.setCurrent(item)
                            }

                            function refresh() {
                                throbber.SetVisibility('Visible')
                                registry.fetch().then(packages => {
                                    if (!elem.alive) throw new Error("interrupted")
                                    // root.Items = ... is necessary to keep these items not to be collected by GC
                                    // because JavascriptObject has a JS object attached.
                                    root.Items = elem.Items = packages.map(x => packageToObject(x,E))
                                    throbber.SetVisibility('Hidden')
                                    elem.RequestListRefresh()
                                })
                            }

                            process.nextTick(refresh)
                            elem.refresh = refresh

                            E.on('refreshPackages',elem.refresh)
                        },
                        $unlink:elem => {
                            elem.alive = false
                            E.removeListener('refreshPackages',elem.refresh)
                        }
                    }),
                    UMG(Throbber,{
                        'Slot.HorizontalAlignment':'HAlign_Center',
                        $link:elem => throbber = elem
                    })
                )
        }
        return UMG(SizeBox,{WidthOverride:400},
            UMG.div({Size:{Rule:'Fill'}},
                UMG.span({},
                    UMG.text({},"Unreal.js"),
                    UMG.text({
                        Font:font,
                        'Slot.Size.Rule':'Fill',
                        'Slot.HorizontalAlignment':'HAlign_Right',
                        'Slot.VerticalAlignment':'VAlign_Center',
                        $link:elem => {
                            elem.alive = true
                            fetchGithub().then(json => {
                                const {stargazers_count} = json
                                elem.SetText(`${stargazers_count} stars`)
                            })
                        },
                        $unlink:elem => {
                            elem.alive = false
                            contexts.destroy()
                            packages.destroy()
                        }
                    })
                ),
                UMG.text({AutoWrapText:true,Font:font,'Slot.Padding':{Left:20,Top:10}},
`Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4.

Copyright (c) 2016 NCSOFT Corporation

${getNumClassesExported()} classes exported`
                ),
                UMG(SizeBox,{HeightOverride:20}),
                UMG(SizeBox,{HeightOverride:100},
                    contextList()
                ),
                UMG(SizeBox,{HeightOverride:200},
                    packageList({Slot:{
                        HorizontalAlignment:'HAlign_Fill',
                        VerticalAlignment:'VAlign_Fill'}})
                ),

                UMG(Spacer,{'Slot.Size.Rule' : 'Fill'}),
                UMG(Button,
                    {
                        WidgetStyle: style.GetButtonStyle("Credits.Button"),
                        OnClicked: _ => {
                            JavascriptProcess.LaunchURL(homepageUrl)
                        }
                    },
                    UMG.text({Font:font},"Visit project page")
                ),
                UMG(Button,
                    {
                        WidgetStyle: style.GetButtonStyle("FlatButton.Dark"),
                        OnClicked: finish
                    },
                    UMG.text({Font:font},"Close this window!")
                )
            )
        )
    })

    return _ => 0
}

function makeWindow(key,opts) {
    const _ = require('lodash')
    const UMG = require('UMG')
    const I = require('instantiator')

    if (!global[key]) {
        let window
        let container
        let widget = I(
            UMG(JavascriptWindow,_.extend(
                {
                    $link:elem => window = elem
                },opts),
                UMG(SizeBox,{$link:elem => container = elem})
            )
        )
        widget.TakeWidget().AddWindow()

        let prev
        function add(child) {
            if (prev) {
                container.remove_child(prev)
            }
            prev = container.add_child(child(finish))
            process.nextTick(_ => window.BringToFront())
        }

        global[key] = add

        function finish() {
            if (window) {
                window.RequestDestroyWindow()
                window = null
                global[key] = null
            }
        }
    }

    return global[key]
}

module.exports = function() {
    try {
        let bye
        let alive = true
        process.nextTick(_ => {
            if (!alive) return
            bye = main()
        })
        return _ => {
            alive = false
            if (bye) bye()
        }
    } catch (e) {
        console.error(String(e),'got error')
        return _ => null
    }
}
