(function (target) {
    var makeWindowTimer = require('windowTimers')
    if (Root == undefined || Root.OnTick == undefined) return

    var timerLoop = makeWindowTimer(target);

    var current_time = 0
    target.$time = 0

    var nextTicks = []

    var elapsedTime = 0
    function invoke_next(fn) {
        fn(elapsedTime)
    }

    var root = function (_elapsedTime) {
        elapsedTime = _elapsedTime

        var prev = nextTicks
        nextTicks = []
        prev.forEach(invoke_next)

        current_time += elapsedTime
        target.$time = current_time

        // non blocking
        timerLoop(true);
    }

    target.process = {
        nextTick: function (fn) {
            nextTicks.push(fn)
        }
    }

    Root.OnTick.Add(root)
})(this)
