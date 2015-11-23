(function () {
    "use strict"

    function $get(url,succ,fail) {
        var req = new JavascriptHttpRequest()
        req.SetVerb("GET")
        req.SetURL(url)
        req.OnComplete.Add(function(success){
            if (success) {
                try {
                    var json = JSON.parse(req.GetContentAsString())
                    succ(json)
                    return
                }
                catch (e) {
                }
            }
            if (fail) {
                fail(req.GetResponseCode())
            }
        })
        req.ProcessRequest()
    }

    let _ = require('lodash')
    let request = (verb,url,options = {}) => {
        let headers = options.headers || {}
        let data = options.data
        let res = options.res || "json"

        return new Promise((resolve,reject) => {
            let req = new JavascriptHttpRequest()
            req.SetVerb(verb)
            req.SetURL(url)
            _.each(headers,(v,k) => {
                req.SetHeader(k,v)
            })
            if (data) {
                if (typeof data == 'string') {
                    req.SetContentAsString(data)
                } else if (data instanceof ArrayBuffer) {
                    memory.bind(data)
                    req.SetContentFromMemory()
                    memory.unbind()
                } else if (data) {
                    req.SetHeader('Content-Type','application/json')
                    req.SetContentAsString(JSON.stringify(data))
                }
            }
            req.OnComplete = (successful) => {
                if (successful) {
                    if (res == "json") {
                        try {
                            resolve(JSON.parse(req.GetContentAsString()))
                        }
                        catch (e) {
                            reject(new Error("Invalid JSON"))
                        }
                    } else if (res == "string") {
                        resolve(req.GetContentAsString())
                    } else if (res == "raw") {
                        resolve(req)
                    }
                } else {
                    reject(new Error(`${req.GetStatus()}`))
                }
            }
            req.ProcessRequest()
        })
    }

    request.$get = $get // old deprecated

    module.exports = request
}())
