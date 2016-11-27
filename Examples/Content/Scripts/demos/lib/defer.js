function cleaner() {
    let deferred = []
    let valid = true

    function defer(fn) {
        if (!valid) {
            process.nextTick(fn)
        } else {
            deferred.push(fn)
        }    
    }
    function flush() {
        valid = false
        let q = deferred.slice()
        deferred.length = 0
        q.forEach(fn => fn())
    }
    function reset() {
        flush()
        valid = true
    }

    return {
        defer:defer,
        flush:flush,
        reset:reset
    }
}

module.exports = cleaner