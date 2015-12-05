(function () {
    'use strict';
    function split(id) {
        var doc = {
        }
        id.replace(/(^[^#\.]+|[#\.][^#\.]+)/g,function(match){
            if (match[0] == '#') {
                doc.id = match.substr(1)
            } else if (match[0] == '.') {
                doc.class = doc.class || []
                doc.class.push(match.substr(1))
            } else {
                doc.type = eval(match)
                if (doc.type == undefined) {
                    throw "Undefined type " + match + " for instantiator"
                }
            }
        })
        return doc
    }
    module.exports = split;
}())
