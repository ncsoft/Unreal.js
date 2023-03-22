"use strict"

let _ = require('lodash')

function readJson(path) {
    let json = Root.ReadStringFromFile(path)
    if (json) {
        try {
            return eval(`(function () { return ${json} })()`)
        }
        catch (e) {
            console.error(String(e))
        }
    } 
    return
}

function writeJson(path,json) {
    try {
        Root.WriteStringToFile(path, JSON.stringify(json,'',4));
    }
    catch(e) {
        console.error(e, e.stack);
    }
}

function getSubDirectory(dir) {
    return Root.ReadDirectory(dir).OutItems
}

function makeLogic(json2u, E) {
    class SourceItem extends UObject {
        ctor() {
            this.children = []
            this.expanded = false
            this.is_file = false;
            this.parent = this.GetOuter();
        }

        properties() {
            this.path/*string*/
        }

        rename() {

        }

        copy(other) {
            this.expanded = other.expanded
            this.is_schema = other.is_schema
            this.path = other.path
            this.parent = other.parent
            this.data = other.data
            this.json = other.json
            this.renaming = other.renaming
            this.is_file = other.is_file
            this.is_json = other.is_json
            this.children = other.children.map(child => {
                child.parent = this
                return child
            })
        }

        markDirty() {
            this.parent.write()
        }
        
        write() {
            writeJson(this.path, this.json)
        }

        expand() {
            if (this.expanded) return Promise.resolve()
            
            if (this.expanding) return this.expanding
            
            let P = this.expanding = this._expand()
            return this.expanding.then(result => {            
                this.expanded = true            
                this.expanding = null
                return Promise.resolve(result)
            }).catch(e => console.error(e,e.stack))
        }
        

        _expand() {           
            let update = (array) => {
                array.forEach(item => item.parent = this)
                this.children = (this.children || []).concat(array)
                return this    
            }
             
            if (this.is_json) {
                return Promise.resolve(this)
            } 
            else if (this.is_file) {
                return new Promise((resolve, reject) => {
                    resolve(readJson(this.path));
                }).then(json => {
                    this.json = json;
                    if (this.path.indexOf('.schema.json') >= 0) {
                        this.is_schema = true
                        let schema = json
                        this.parent.schema = json                        
                        this.parent.meta = json2u.create(this.path,schema, {meta:(schema,k,org) => org})
                        JavascriptEditorLibrary.BroadcastHotReload()  
                        return Promise.resolve(this)
                    }
                    let array = _.map(json,(v,k) => {
                        let item = new SourceItem_C(this)
                        item.path = k
                        item.data = v
                        item.parent = this
                        item.is_json = true
                        return item
                    });
                    return Promise.resolve(update(_.sortBy(array,o => o.path)))
                })
            } 
            else {       
                return new Promise((resolve, reject) => {
                    let dirs = getSubDirectory(this.path);
                    return resolve(dirs);
                })
                .then(dirs => {                    
                    let array = dirs.map(path => {
                        let item = new SourceItem_C(this)
                        item.path = path.Name
                        item.is_file = !path.bIsDirectory
                        return item
                    })
                    return Promise.resolve(update(array))
                })
            }
        }


        setup() {
            this.children.forEach(c => {
                (c.children || []).forEach(obj => {
                    let path = obj.path;
                    if (path.indexOf('.schema.json') >= 0) {
                        let data = readJson(path);
                        if (data) {
                            c.meta_schema = data;
                        }
                    }
                })
            })            
        }

        updateSelf() {
            if (this.parent) {
                this.parent.children = this.parent.children.map(child => {
                    if (child.path == this.path) {
                        let item = new SourceItem_C(this.GetOuter())
                        item.copy(this)
                        E.emit('switch',[this,item])
                        return item
                    } else {
                        return child
                    }
                })
            }            
        }

        toUObject() {
            let meta = this.get_meta()
            return meta ? json2u.toUObject(meta,this) : null
        }

        get_meta() {
            return this.parent && this.parent.parent ? this.parent.parent.meta : null
        }        
    }

    let SourceItem_C = require('uclass')()(global,SourceItem)

    return SourceItem_C;
}

module.exports = makeLogic;