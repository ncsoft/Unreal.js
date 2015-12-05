module.exports = function (widget,vbox) {
  "use strict";

  var instantiate = require('instantiator')

  function test() {
    var design = {
      id : 'button',
      type : Button,
      children : [
        {
          type : TextBlock,
          attrs : {
            Text : 'Reset'
          }
        }
      ]
    }

    var widget = instantiate(design)
    vbox.AddChild(widget)
    return widget
  }

  var layout = test()
  var reset_button = Button.C(layout.find('button'))

  function KeyboardInputManager() {
    this.events = {};

    this.listen();
  }

  KeyboardInputManager.prototype.destroy = function () {
    reset_button.RemoveFromParent()
  }

  KeyboardInputManager.prototype.on = function (event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  };

  KeyboardInputManager.prototype.emit = function (event, data) {
    var callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(function (callback) {
        callback(data);
      });
    }
  };

  KeyboardInputManager.prototype.listen = function () {
    var map = {
      'W' : () => this.emit("move", 2),
      'A' : () => this.emit("move", 1),
      'S' : () => this.emit("move", 0),
      'D': () => this.emit("move", 3),
      'Up': () => this.emit("move", 2),
      'Left': () => this.emit("move", 1),
      'Down': () => this.emit("move", 0),
      'Right': () => this.emit("move", 3)
    }

    UserWidget.C(widget.proxy).OnKeyDown = (geom,keyevent) => {
      var key = KismetInputLibrary.prototype.GetKey(keyevent).KeyName

      var op = map[key]
      if (op != undefined) {
        op()
        return WidgetBlueprintLibrary.Handled()
      }
      else {
        return WidgetBlueprintLibrary.Unhandled()
      }
    }

    reset_button.OnClicked = () => this.restart();
  };

  KeyboardInputManager.prototype.restart = function (event) {
    // event.preventDefault();
    this.emit("restart");
  };

  KeyboardInputManager.prototype.keepPlaying = function (event) {
    // event.preventDefault();
    this.emit("keepPlaying");
  };

  KeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {
    // var button = document.querySelector(selector);
    // button.addEventListener("click", fn.bind(this));
    // button.addEventListener(this.eventTouchend, fn.bind(this));
  };

  return KeyboardInputManager
}
