/// <reference path="typings/ue.d.ts">/>
let _ = require('lodash')

let {defer,flush,reset} = require('./demos/lib/defer')()
let localStorage = require('./demos/lib/localStorage')

function main() {
    return require('./demos')(defer,reset)
} 

try {
    module.exports = () => {
        process.nextTick(() => main().catch(e => console.error(e.stack)));
        return flush
    }
}
catch (e) {
    require('bootstrap')('app')
}