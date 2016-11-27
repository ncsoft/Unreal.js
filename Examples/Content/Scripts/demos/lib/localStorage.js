function pathForLocalStorageKey(key) {
    return Context.GetDir('GameSaved')+`localStorage-${key}.json`
}

let localStorage = {
    get: key => {
        let path = pathForLocalStorageKey(key)
        try {            
            return JSON.parse(Context.ReadStringFromFile(path))
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