(function () {
    "use strict"

    module.exports = function (vbox, data) {
        var design = require('views/hello2048_design')

        var instantiate = require('instantiator')

        var widget = instantiate(design)

        var score_attrs = widget.find('score').set_attrs
        var best_attrs = widget.find('best').set_attrs
        var message_attrs = widget.find('message').set_attrs

        score_attrs({ Text: 0 })
        best_attrs({ Text: 0 })
        message_attrs({ Text: ':)' })

        vbox.AddChild(widget)

        function Actuator() {
            this.scoreContainer = function (text) { score_attrs({ Text: text }) }
            this.bestContainer = function (text) { best_attrs({ Text: text }) }
            this.messageContainer = function (text) { message_attrs({ Text: text }) }

            this.score = 0;
        }

        var tiles = []

        var mesh = data.Block
        var color_material = Material.Load('/Game/Color.Color')

        function color_from_hex(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result ? {
                R: parseInt(result[1], 16),
                G: parseInt(result[2], 16),
                B: parseInt(result[3], 16)
            } : null
        }

        var tile_color = color_from_hex("#eee4da")
        var tile_gold_color = color_from_hex("#edc22e")

        var text_color = color_from_hex("#222222")
        var bright_text_color = color_from_hex("#f9f6f2")

        var special_colors = [
          [false, false], // 2
          [false, false], // 4
          ['#f78e48', true], // 8
          ['#fc5e2e', true], // 16
          ['#ff3333', true], // 32
          ['#ff0000', true], // 64
          [false, true], // 128
          [false, true], // 256
          [false, true], // 512
          [false, true], // 1024
          [false, true] // 2048
        ]

        function lerp_scalar(a, b, u) {
            return (b - a) * u + a
        }

        function lerp(a, b, u) {
            if (typeof a == 'object') {
                var out = {}
                for (var k in a) {
                    out[k] = lerp_scalar(a[k], b[k], u)
                }
                return out
            }
            else {
                return lerp_scalar(a, b, u)
            }
        }

        function log2(x) {
            return Math.log(x) / Math.log(2)
        }

        function gamma(x) {
            var y = {}
            for (var k in x) {
                y[k] = Math.pow(x[k] / 255.0, 2.2)
            }
            return y
        }

        function create_tile() {
            var actor = new StaticMeshActor(GWorld)
            var material = KismetMaterialLibrary.CreateDynamicMaterialInstance(GWorld, color_material)
            var smc = actor.StaticMeshComponent
            smc.SetMobile()
            smc.SetStaticMesh(mesh)
            smc.SetMaterial(0, material)

            var desired_pos = null
            var cur_pos = null
            var desired_scale = null
            var cur_scale = null
            var pos = null
            var updating = false
            var counter = 0
            var max_counter = 0.2
            var spacing = data.Spacing

            var textactor = new TextRenderActor(GWorld, { Z: 100 })
            var tile = {
                set_value: function (value) {
                    var exponent = log2(value)
                    var limit = 11
                    var gold_ratio = (exponent - 1) / (limit - 1)
                    var mixed_bg = lerp(tile_color, tile_gold_color, gold_ratio)
                    var special_color = special_colors[exponent - 1]
                    var special_bg = special_color[0]
                    var is_bright = special_color[1]
                    if (special_bg) {
                        mixed_bg = lerp(mixed_bg, color_from_hex(special_bg), 0.55)
                    }
                    var tr = textactor.TextRender;
                    tr.HorizontalAlignment = 'EHTA_Center'
                    tr.VerticalAlignment = 'EVRTA_TextCenter'
                    tr.SetTextRenderColor(is_bright ? bright_text_color : text_color)
                    tr.XScale = tr.YScale = 2
                    this.set_color(mixed_bg)
                    tr.SetText(value)
                },
                set_position: function (pos) {
                    if (cur_pos == null) {
                        cur_pos = pos
                        this.sync_position(pos)
                    }
                    else {
                        desired_pos = pos
                        this.kick()
                    }
                },
                set_scale: function (scale) {
                    if (cur_scale == null) {
                        cur_scale = scale
                        this.sync_scale(scale)
                    }
                    else {
                        desired_scale = scale
                        this.kick()
                    }
                },
                kick: function (pos) {
                    counter = $time
                    if (!updating) {
                        updating = true
                        var self = this
                        function kick() {
                            window.requestAnimationFrame(function () {
                                var alpha = Math.min(1, ($time - counter) / max_counter)

                                if (desired_pos != null) {
                                    var new_pos = lerp(cur_pos, desired_pos, alpha)
                                    self.sync_position(new_pos)
                                    cur_pos = new_pos
                                }

                                if (desired_scale != null) {
                                    var new_scale = lerp(cur_scale, desired_scale, alpha)
                                    self.sync_scale(new_scale)
                                    cur_scale = new_scale
                                }

                                if (alpha == 1) {
                                    updating = false
                                } else {
                                    kick()
                                }
                            })
                        }
                        kick()
                    }
                },
                sync_position: function (pos) {
                    if (!actor) return

                    var l = { X: 0, Y: pos.x * spacing, Z: pos.y * spacing + 100 }
                    actor.SetActorLocation(l)
                    l.X = l.X + 60
                    textactor.SetActorLocation(l)
                },
                sync_scale: function (scale) {
                    if (!actor) return

                    scale = Math.max(1e-6,scale)
                    var s3d = { X: 1, Y: scale, Z: scale }
                    actor.SetActorScale3D(s3d)
                    textactor.SetActorScale3D(s3d)
                },
                set_color: function (color) {
                    material.SetVectorParameterValue('Color', gamma(color))
                },
                destroy: function () {
                    textactor.DestroyActor()
                    actor.DestroyActor()
                    actor = null
                }
            }
            tiles.push(tile)
            return tile
        }

        function destroy_tiles() {
            for (var x in tiles) {
                var tile = tiles[x]
                tile.destroy()
            }
            tiles = []
        }

        Actuator.prototype.destroy = function () {
            destroy_tiles()
            widget.RemoveFromParent()
        }

        Actuator.prototype.actuate = function (grid, metadata) {
            var self = this;

            window.requestAnimationFrame(function () {
                destroy_tiles()

                grid.cells.forEach(function (column) {
                    column.forEach(function (cell) {
                        if (cell) {
                            self.addTile(cell);
                        }
                    });
                });

                self.updateScore(metadata.score);
                self.updateBestScore(metadata.bestScore);

                if (metadata.terminated) {
                    if (metadata.over) {
                        self.message(false); // You lose
                    } else if (metadata.won) {
                        self.message(true); // You win!
                    }
                }

            });
        };

        // Continues the game (both restart and keep playing)
        Actuator.prototype.continueGame = function () {
            this.clearMessage();
        };

        Actuator.prototype.clearContainer = function (container) {
            // while (container.firstChild) {
            //   container.removeChild(container.firstChild);
            // }
        };

        Actuator.prototype.addTile = function (tile) {
            var self = this;

            var wrapper = create_tile()
            var new_pos = { x: tile.x, y: tile.y }
            var position = tile.previousPosition || new_pos;
            wrapper.set_value(tile.value)
            wrapper.set_position(position)

            if (tile.previousPosition) {
                window.requestAnimationFrame(function () {
                    wrapper.set_position(new_pos)
                })
            } else if (tile.mergedFrom) {
                wrapper.set_scale(1.2)
                wrapper.set_scale(1)
            } else {
                wrapper.set_scale(0)
                wrapper.set_scale(1)
            }
        };

        Actuator.prototype.updateScore = function (score) {
            //this.clearContainer(this.scoreContainer);

            var difference = score - this.score;
            this.score = score;

            this.scoreContainer(this.score);

            if (difference > 0) {
                // var addition = document.createElement("div");
                // addition.classList.add("score-addition");
                // addition.textContent = "+" + difference;

                // this.scoreContainer.appendChild(addition);
            }
        };

        Actuator.prototype.updateBestScore = function (bestScore) {
            this.bestContainer(bestScore);
        };

        Actuator.prototype.message = function (won) {
            var type = won ? "game-won" : "game-over";
            var message = won ? "You win!" : "Game over!";

            this.messageContainer(message)

            // this.messageContainer.classList.add(type);
            // this.messageContainer.getElementsByTagName("p")[0].textContent = message;
        };

        Actuator.prototype.clearMessage = function () {
            // IE only takes one value to remove at a time.
            // this.messageContainer.classList.remove("game-won");
            // this.messageContainer.classList.remove("game-over");
        };

        return Actuator
    }

})()
