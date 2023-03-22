/// <reference path="typings/ue.d.ts" />
"use strict"

// Live reloadable
function makeDelegates() {
    function launchUrl(url) {
        return JavascriptProcess.LaunchURL(url)
    }
    return {
        OnExecuteAction: (what) => {
            if (what == 'About') {
                launchUrl("https://github.com/ncsoft/Unreal.js")
            } else {
                launchUrl("http://ncsoft.com")
            }
        },
        OnIsActionChecked: (what) => false,
        OnCanExecuteAction: (what) => true,
        $bye: function () {
        }
    }
}

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

const key = "$extender-demo-delegates"
function delegates() {
    return global[key]
}

global[key] = makeDelegates()

function main() {
    let style = JavascriptUMGLibrary.CreateSlateStyle('ExtenderDemo')

    function initStyle() {
        style.SetContentRoot(Root.GetDir('Game'))
        style.AddImageBrush(
            'UnrealJS.About',
            style.RootToContentDir('images/UnrealJs.png'),
            { X: 40, Y: 40 },
            { R: 1, G: 1, B: 1, A: 1 },
            'NoTile',
            'FullColor'
        )
        style.AddImageBrush(
            'UnrealJS.NC',
            style.RootToContentDir('images/NC.png'),
            { X: 40, Y: 40 },
            { R: 1, G: 1, B: 1, A: 1 },
            'NoTile',
            'FullColor'
        )
        style.Register()

        return function () {
            style.Unregister()
        }
    }

    let byeStyle = initStyle()

    let commands

    function initCommands() {
        let context = JavascriptMenuLibrary.NewBindingContext('UnrealJS', 'Test menu', '', 'ExtenderDemo');
        commands = new JavascriptUICommands
        commands.BindingContext = context
        commands.Commands = [
            {
                Id: 'About',
                FriendlyName: 'Unreal.js',
                Description: 'Learn about unreal.js',
                ActionType: 'Button',
                IconStyleName: 'UnrealJS.About'
            },
            {
                Id: 'NCsoft',
                FriendlyName: 'Visit NCsoft',
                Description: 'Learn about NCsoft',
                ActionType: 'Button',
                IconStyleName: 'UnrealJS.NC'
            },
        ]

        commands.OnExecuteAction = (what) => delegates().OnExecuteAction(what)
        commands.OnIsActionChecked = (what) => delegates().OnIsActionChecked(what)
        commands.OnCanExecuteAction = (what) => delegates().OnCanExecuteAction(what)

        commands.Initialize()

        return function () {
            commands.Uninitialize()
            context.Destroy()
        }
    }

    let byeCommands = initCommands()

    let list = JavascriptMenuLibrary.CreateUICommandList()
    commands.Bind(list)

    let toolbarExtender = new JavascriptExtender
    toolbarExtender.AddToolBarExtension('Content', 'After', list, make(commands.CommandInfos[0]))

    let menuExtender = new JavascriptExtender
    menuExtender.AddMenubarExtension('Help', 'After', list, make({
        pullDown: 'Unreal.js',
        tooltip: 'Unreal.js',
        menu: [
            {
                section: 'Unreal.js',
                inner: commands.CommandInfos[0]
            },
            {
                section: 'NCsoft',
                inner: commands.CommandInfos[1]
            }
        ]
    }))

    // register extenders
    function registerExtenders() {
        let toolbarManager = JavascriptEditorLibrary.GetToolBarExtensibilityManager('LevelEditor')
        let menuManager = JavascriptEditorLibrary.GetMenuExtensibilityManager('LevelEditor')
        toolbarManager.AddExtender(toolbarExtender)
        menuManager.AddExtender(menuExtender)

        return function () {
            toolbarManager.RemoveExtender(toolbarExtender)
            menuManager.RemoveExtender(menuExtender)
        }
    }

    let byeExtenders = registerExtenders()

    // clean up code
    return function () {
        byeExtenders()
        byeCommands()
        byeStyle()
    }
}

// For graceful shutdown
if (!global.$ext) {
    global.$ext = true
    let old = global["$exit"]
    let bye = main()
    global["$exit"] = function () {
        bye()
        old()
    }
}

module.exports = function () {
    return function () {
        let {$bye} = delegates()
        $bye && $bye()
    }
}