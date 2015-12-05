module.exports = {
    readFileSync : function (path,encoding) {
        var text = Context.ReadScriptFile(path);
        if (encoding == 'utf8') return text;
        return {
            toString: function () {
                return text;
            }
        }
    }
};
