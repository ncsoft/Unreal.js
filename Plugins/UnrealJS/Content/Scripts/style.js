(function () {
    'use strict'
    var _ = require('lodash');
    var split = require('css-split');
    var instantiator = require('instantiator')
    var conv = instantiator.conv;

    function Style(id,attrs) {
        var s = split(id)
        var doc = {
            class : s.class,
            type : s.type,
            attrs: _.clone(conv(attrs)) || {id:s.id},
            children: Array.prototype.slice.call(arguments,2)
        };

        return doc
    }

    module.exports = Style;
}())
