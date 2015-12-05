var _ = require('lodash')

// Live reload 구현
var devrequire = function (opts) {
    var target
    if (_.isString(opts)) {
        target = opts
        opts = {}
    }
    opts = opts || {};
    var self = this;
    function default_get_change(watcher) {
        var has_changed = function (x) { return watcher.Contains(x) }
        var changed_modules = _.filter(_.values(modules), has_changed)
        return changed_modules
    }
    function default_exec() {
        self.purge_modules()
        return require(target)()
    }
    var get_change = opts.get_change || default_get_change;
    var exec = opts.exec || default_exec;
    var should_notify = opts.notify || (self.JavascriptNotification != undefined);
    var notification_message = opts.message || "Hot reload(JS)"

    var cleanup = exec()
    if (!_.isFunction(cleanup)) {
        cleanup = function () { }
    }

    /** aggregated watcher */
    var watcher = {
        list : [],
        OnChanged : {
            list : [],
            Add : function (fn) {
                this.list.push(fn)
            }
        },
        Watch : function (path) {
            var w = new DirectoryWatcher()
            var self = this;
            w.OnChanged.Add(function () {
                self.OnChanged.list.forEach(function (fn) { fn(); });
            });
            w.Watch(path);
            this.list.push(w)
        },
        Discard : function () {
            this.list.forEach(function (w) {
                w.Unwatch()
            })
        },
        Contains : function (x) {
            return _.any(this.list,function (w) {
                return w.Contains(x);
            });
        }
    };

    watcher.OnChanged.Add(function () {
        var changed_modules = get_change(watcher)
        var module_changed = changed_modules.length > 0
        if (module_changed) {
            cleanup()
            cleanup = exec()
            gc()
            if (!_.isFunction(cleanup)) {
                cleanup = function () { }
            }

            var file = _.unique(changed_modules).join(',')

            if (should_notify) {
                var note = new JavascriptNotification
                note.Text = notification_message + ": " + file
                note.bFireAndForget = true
                note.Fire()
                note.ExpireDuration = 3
                note.Success()
            }
        }
    })

    Context.Paths.forEach(function(dir){
        watcher.Watch(dir)
    });

    return function () {
        watcher.Discard()
    }
}

module.exports = devrequire
