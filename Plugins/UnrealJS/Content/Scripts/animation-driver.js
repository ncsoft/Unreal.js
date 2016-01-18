(function () {
    "use strict"

    function animationDriver() {
        function currentTime() {
            return new Date().getTime() / 1000
        }

        let alive = true
        let running = false
        let animations = []
        function applyAnim(target, meta, anim) {
            let duration = meta.duration || 0.25
            let loop = meta.loop || 0
            let started = currentTime()
            let tracks = []
            for (var k in anim) {
                let fn = anim[k]
                let h = target["Set" + k]

                if (typeof h == 'function') {
                    tracks.push(t => {
                        let value = fn(t)
                        if (value != undefined) {
                            h.call(target, value)
                        }
                    })
                } else {
                    console.error(`No such track{${k}}`)
                }
            }

            let instance = t => {
                let alpha = (t - started) / duration
                let lap = Math.floor(alpha)
                let shouldQuit = (loop != 0 && lap >= loop)
                if (shouldQuit) {
                    alpha = 1
                } else {
                    alpha -= lap
                }
                tracks.forEach(track => track(alpha))
                if (shouldQuit) {
                    remove()
                }
            }
            let added = false
            function add() {
                if (added) return
                added = true
                animations.push(instance)
            }
            function remove() {
                if (!added) return
                added = false
                animations.splice(animations.indexOf(instance), 1)
                if (animations.length == 0) {
                    stop()
                }
            }
            if (!running) {
                run()
            }
            add()
            return remove
        }

        function loop() {
            if (!running) return
            let t = currentTime()
            animations.forEach(anim => anim(t))
            process.nextTick(loop)
        }

        function run() {
            if (running || !alive) return
            running = true
            loop()
        }

        function stop() {
            running = false
            alive = false
        }

        return {
            apply: applyAnim,
            destroy: _ => {
                animations.length = 0
                stop()
            }
        }
    }

    module.exports = animationDriver
})()
