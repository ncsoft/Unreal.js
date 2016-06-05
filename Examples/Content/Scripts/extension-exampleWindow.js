/// <reference path="typings/ue.d.ts" />
"use strict"

const repositoryUrl = 'https://raw.githubusercontent.com/ncsoft/Unreal.js-packages/master/repository.json'
const githubUrl = 'https://api.github.com/repos/ncsoft/Unreal.js'
const homepageUrl = "https://github.com/ncsoft/Unreal.js"
const svnPath = `${Context.GetDir('Engine')}/Binaries/ThirdParty/svn/Win64/svn`

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
    
    function fetchGithub() {
        return request('GET',githubUrl)
    }
    
    function fetchPackages() {
        return request("GET",repositoryUrl)
    }
    
    function getNumClassesExported() {
        return _.filter(_.keys(global),x=>!!global[x].StaticClass).length
    }
    
    function installPackage(pack) {
        return JavascriptProcess.Create(
            svnPath,
            `co ${pack.details}`,
            false,
            false,
            false,0,workDir).Wait()
    }
    
    function packageToObject(p) {
        let o = new JavascriptObject()
        o.package = p
        let details = p.details
        let split = details.lastIndexOf('/')
        o.installed = false
        if (split >= 0) {
            o.installed = JavascriptLibrary.DirectoryExists(workDir + details.substr(split))
        }
        return o
    }
     
    makeWindow("$window",
    {
        SizingRule:'AutoSized',  
        Title:'Unreal.js' 
    })(finish => {
        let E = new EventEmitter()
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
                        }
                    })
                ),            
                UMG.text({AutoWrapText:true,Font:font,'Slot.Padding':{Left:20,Top:10}},
`Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4. 

Copyright (c) 2016 NCSOFT Corporation

${getNumClassesExported()} classes exported`
                ),
                UMG(SizeBox,{HeightOverride:20}),
                UMG(SizeBox,{HeightOverride:200},                
                    UMG(JavascriptListView,{
                        ItemHeight:20,
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
                                    JavascriptLibrary.MakeDirectory(workDir,false)
                                    installPackage(item.package)                                    
                                }
                            }
                            fetchPackages().then(repository => {
                                if (!elem.alive) throw new Error("interrupted")
                                elem.Items = repository.packages.map(packageToObject)
                                elem.RequestListRefresh()
                            })
                        },
                        $unlink:elem => {
                            elem.alive = false
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
