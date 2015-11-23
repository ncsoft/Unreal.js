(function () {
    "use strict"

    module.exports = function (widget, container, data) {
        require('animframe_polyfill')
        var Actuator = require('actuator')(container, data)
        var LocalStorageManager = require('local_storage_manager')
        var KeyboardInputManager = require('keyboard_input_manager')(widget, container)
        var GameManager = require('game_manager')

        var game = new GameManager(data.Size, KeyboardInputManager, Actuator, LocalStorageManager)

        return function () {
            game.destroy()
        }
    }
})()
