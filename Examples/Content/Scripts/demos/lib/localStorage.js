function pathForLocalStorageKey(key) {
    return Context.GetDir('GameSaved')+`localStorage-${key}.json`
}

let localStorage = {
    get: key => {
        let path = pathForLocalStorageKey(key)
        try {            
            const jsonString = Context.ReadStringFromFile(path)
            if (jsonString) {
                return JSON.parse(jsonString)
            }
            return null
        } catch (e) {
            console.log(e.stack)
            return
        }
    },
    set: (key,value) => {
        let path = pathForLocalStorageKey(key)
        Context.WriteStringToFile(path,JSON.stringify(value))
    }
}

module.exports = localStorage