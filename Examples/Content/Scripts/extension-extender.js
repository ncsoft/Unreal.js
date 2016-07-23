/// <reference path="typings/ue.d.ts" />
"use strict"

function main() {    
    let context = JavascriptMenuLibrary.NewBindingContext('MenuEx','Test menu','','EditorStyle');
    let commands = new JavascriptUICommands
    commands.BindingContext = context
    commands.Commands = [{
        Id: 'test',
        FriendlyName: 'Unreal.js',
        Description: 'world',
        ActionType: 'Button'
    }]
    commands.Initialize()

    let list = JavascriptMenuLibrary.CreateUICommandList()
    commands.Bind(list)

    commands.OnExecuteAction = (what) => {
        console.log("Unreal.js !! :)")
    }

    let toolbarExtender = new JavascriptExtender
    toolbarExtender.AddToolBarExtension('Content','After',list,builder => {
        console.log('toolbar!!')
        builder.AddToolBarButton(commands.CommandInfos[0])
    })
    let menuExtender = new JavascriptExtender
    menuExtender.AddMenubarExtension('Help','After',list,builder => {
        console.log('menubar!')
        builder.AddPullDownMenu("About Unreal.js","Example Menu Tooltip",builder => {
            builder.AddToolBarButton(commands.CommandInfos[0])
            console.log('menu!')
        })
    })
    let toolbarManager = JavascriptEditorLibrary.GetToolBarExtensibilityManager('LevelEditor')
    let menuManager = JavascriptEditorLibrary.GetMenuExtensibilityManager('LevelEditor') 
    toolbarManager.AddExtender(toolbarExtender)
    menuManager.AddExtender(menuExtender)
    return function () {
        toolbarManager.RemoveExtender(toolbarExtender)
        menuManager.RemoveExtender(menuExtender)        
        commands.Uninitialize()
        context.Destroy()
    }
}

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
}