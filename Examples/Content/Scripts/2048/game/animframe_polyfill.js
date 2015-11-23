(function (global) {
    (function () {
        var lastTime = 0;

        if (!global.window) global.window = {}

        global.window.requestAnimationFrame = function (callback) {
            var currTime = $time * 1000;
            var id = process.nextTick(function () {
                callback($time);
            });
            return id;
        };
    }());

    module.exports = {}
})(this)
