(function (global) {
    "use strict"
    function currentTime() {
        return global.$time
    }
    
    function $default_access(target, key) {
        var h = target["Set" + key]
        if (typeof h == 'function') return h.bind(target)
    }

    function animationDriver() {        
        var alive = true
        var running = false
        var animations = []
        
        class Anim {
            constructor(target,meta,anim) {
                var $access = meta.$access || $default_access
                var tracks = this.tracks = []
                for (var k in anim) {
                    var fn = anim[k]                
                    var h = $access(target,k)

                    if (typeof h == 'function') {
                        tracks.push([fn,h])
                    } else {
                        console.error(`No such track{${k}}`)
                    }
                }
                this.duration = meta.duration || 0.25
                this.loop = meta.loop || 1
                this.started = currentTime()
                this.tracks = tracks
                this.added = false
                this.warm = meta.warm
            }
            tick(t) {
                var alpha = (t - this.started) / this.duration
                var lap = Math.floor(alpha)
                var shouldQuit = (this.loop != 0 && lap >= this.loop)
                if (shouldQuit) {
                    alpha = 1
                } else {
                    alpha -= lap
                }
                this.tracks.forEach(track => {
                    let fn = track[0]
                    let h = track[1]
                    let value = fn(alpha)
                    if (value != undefined) {
                        h.call(null,value)
                    }
                })
                if (shouldQuit) {
                    this.remove()
                }
            }
            add() {
                if (this.added) return
                this.added = true
                animations.push(this)

                if (this.warm) {
                    this.tick(0)
                }
            }
            remove() {
                if (!this.added) return
                this.added = false
                animations.splice(animations.indexOf(this), 1)
                if (animations.length == 0) {
                    stop()
                }
            }
        }
        function applyAnim(target, meta, anim) {          
            let I = new Anim(target,meta,anim)      
            
            if (!running) {
                run()
            }
            I.add()
            return I.remove
        }

        function loop() {
            if (!running) return
            var t = currentTime()
            animations.forEach(anim => anim.tick(t))
            process.nextTick(loop)
        }

        function run() {
            if (running || !alive) return
            running = true
            loop()
        }

        function stop() {
            running = false
        }

        return {
            apply: applyAnim,
            destroy: _ => {
                alive = false
                animations.length = 0
                stop()
            },
            is_alive: _ => alive
        }
    }

    module.exports = animationDriver
})(this)