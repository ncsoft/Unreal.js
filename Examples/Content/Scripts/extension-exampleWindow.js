/// <reference path="typings/ue.d.ts" />
"use strict"

const repositoryUrl = 'https://raw.githubusercontent.com/ncsoft/Unreal.js-packages/master/repository.json'
const githubUrl = 'https://api.github.com/repos/ncsoft/Unreal.js'
const homepageUrl = "https://github.com/ncsoft/Unreal.js"
const svnPath = `${Context.GetDir('Engine')}/Binaries/ThirdParty/svn/Win64/svn`

let extensionId = global.$extensionUnreal = (global.$extensionUnreal || 0) + 1

function main() {
    const UMG = require('UMG')
    let {EventEmitter} = require('events')

    let font = {
        Size:10,
        FontObject:Root.GetEngine().SmallFont
    }

    const I = require('instantiator')
    const _ = require('lodash')
    const request = require('request')
    const style = new JavascriptStyleSet
    style.StyleSetName = 'EditorStyle'

    let workDir = Context.GetDir('GameContent')+'/Scripts/Downloaded'
    let selectedPackage    

    function fetchGithub() {
        return request('GET',githubUrl)
    }

    function fetchPackages() {
        return request("GET",repositoryUrl)
    }

    function getNumClassesExported() {
        return _.filter(_.keys(global),x=>!!global[x].StaticClass).length
    }

    function packageToObject(p,E) {
        let o = new JavascriptObject()
        o.package = p
        let details = p.details
        let split = details.lastIndexOf('/')
        o.installed = false

        const packageDir = workDir + details.substr(split)
        if (split >= 0) {
            o.installed = JavascriptLibrary.DirectoryExists(packageDir)
        }

        function refreshPackages() {
            E.refreshPackages()
            return Promise.resolve()
        }

        function installPackage() {
            return new Promise(resolve => {
                JavascriptLibrary.MakeDirectory(workDir,false)
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
            }).then(refreshPackages)
        }
        function removePackage() {
            return new Promise((resolve,reject) => {
                if (JavascriptLibrary.DeleteDirectory(packageDir,true,true)) {
                    resolve()
                } else {
                    reject(new Error('delete failed'))
                }
            }).then(refreshPackages)
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

    function makeCommands() {
        let context = JavascriptMenuLibrary.NewBindingContext('UnrealJS' + extensionId,'Test menu','','EditorStyle');
        let commands = new JavascriptUICommands

        let hasPendingExecution

        function init() {
            commands.BindingContext = context
            commands.Commands = [
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
            commands.Initialize()
        }

        commands.OnExecuteAction = (what) => {
            hasPendingExecution = true
            selectedPackage.actions[what]()
                .then(_ => console.log(`${what} completed`))
                .catch(e => console.error(String(e)))
                .then(_ => hasPendingExecution = false)
        }

        commands.OnCanExecuteAction = (what) => {
            return !hasPendingExecution && selectedPackage && !!selectedPackage.actions[what]
        }

        function uninit() {
            commands.Uninitialize();
            context.Destroy();
        }

        init();

        commands.destroy = uninit

        return commands
    }

    let commands = makeCommands()

    let commandList = JavascriptMenuLibrary.CreateUICommandList()
    commands.Bind(commandList)

    makeWindow("$window",
    {
        SizingRule:'AutoSized',
        Title:'Unreal.js'
    })(finish => {
        let E = new EventEmitter()
        E.refreshPackages = _ => E.emit('refreshPackages')
        let root = {}
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
                            commands.destroy()
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
                    UMG(JavascriptListView,{
                        ItemHeight:20,
                        Columns:[
                            {
                                Id: 'Name',
                                Width: 0.7
                            }
                        ],
                        OnGenerateRowEvent:item => {
                            return I(
                                UMG.text({Font:font},item ? item.target : 'Context')
                            )
                        },
                        $link:elem => {
                            elem.alive = true

                            let old
                            function refresh() {
                                function fetch() {
                                    let out
                                    {
                                        out = JavascriptLibrary.GetObjectsOfClass(JavascriptContext, [], false, 0x10).Results
                                        out = out.map(x => x.GetDisplayName())
                                        let cur = out.join(',')
                                        if (cur != old) {
                                            old = cur
                                            out = out.map(x => {
                                                let y = new JavascriptObject()
                                                y.target = x
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
                                    elem.Items = cur
                                    elem.RequestListRefresh()
                                }
                            }

                            function tick() {
                                if (!elem.alive) return
                                refresh()
                                setTimeout(tick,1000)
                            }

                            tick()
                        },
                        $unlink:elem => {
                            elem.alive = false
                        }
                    })
                ),
                UMG(SizeBox,{HeightOverride:200},
                    UMG(JavascriptListView,{
                        ItemHeight:20,
                        OnContextMenuOpening: elem => {
                            let design =
                                UMG(JavascriptMultiBox,{
                                    CommandList : commandList,
                                    OnHook : __ => {
                                        let builder = JavascriptMenuLibrary.CreateMenuBuilder(commandList,true,builder => {
                                            builder.AddToolBarButton(commands.CommandInfos[0])
                                            builder.AddToolBarButton(commands.CommandInfos[1])
                                            JavascriptMultiBox.Bind(builder)
                                        })
                                    }
                                })

                            return I(design)
                        },
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
                                OnDoubleClick : item => {                                    
                                    item.actions.install()
                                },
                                OnSelectionChanged: item => {
                                    selectedPackage = item
                                },
                            }

                            function refresh() {
                                fetchPackages().then(repository => {
                                    if (!elem.alive) throw new Error("interrupted")
                                    // root.Items = ... is necessary to keep these items not to be collected by GC
                                    // because JavascriptObject has a JS object attached.
                                    root.Items = elem.Items = repository.packages.map(x => packageToObject(x,E))
                                    elem.RequestListRefresh()
                                })
                            }

                            refresh()
                            elem.refresh = refresh

                            E.on('refreshPackages',elem.refresh)
                        },
                        $unlink:elem => {
                            elem.alive = false
                            E.removeListener('refreshPackages',elem.refresh)
                        }
                    })
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