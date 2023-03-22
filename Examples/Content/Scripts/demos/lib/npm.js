let delay = require('./delay')
let _ = require('lodash')

async function npm(what) {
    let m = require(what)
    if (m) return m

    console.log(`trying to install node module: ${what}`)

    let paths = ['','/usr/local/bin/','/usr/bin/','c:\\Program Files (x86)\\nodejs\\', 'C:\\Program Files\\nodejs\\']

    function check(path,param) {
        console.log(path)
        let p = JavascriptProcess.Create(path, param)
        return p
    }

    function locate(map,param) {
        return _.filter(paths.map(map),p => check(p, param))
    }

    function locate_node() {
        let found = locate(dir => `${dir}node`,'-e 1')
        if (found.length == 0) throw new Error("couldn't locate node")
        return found[0]
    }

    let node = locate_node()

    function locate_npm() {
        let found = locate(dir => `${dir}npm`,'--version')
        if (found.length > 0) return found[0]

        let cmd = `-e console.log([...process.argv[0].replace(/\\\\/g,'/').split('/').slice(0,-1),'node_modules/npm/cli.js'].join('/'))`
        let p = JavascriptProcess.Create(
            node,
            cmd,
            false, true, true, 0,
            '', true)
        p.Wait()
        return p.ReadFromPipe().split('\n')[0]
    }
    let npm = locate_npm()
    console.log("npm path: ", npm)

    let cwd = Context.GetDir('GameContent')+'Scripts'
    let p = JavascriptProcess.Create(
        node,
        `"${npm}" install ${what}`,
        false, true, true, 0,
        cwd,
        true)
    function pipe() {
        let s = p.ReadFromPipe()
        console.log(s)
    }
    while (p.IsRunning()) {
        await delay(50)
        pipe()
    }
    pipe()
    return require(what)
}

module.exports = npm
