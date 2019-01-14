eval("var y = 12;")
console.log(y);

var g = new Function("x, y", "return x+y");


function _require(name) {
    if(name in _require.cache){
        return _require.cache[name];
    }
    var code = new Function("exports, module", _readFile(name));
    var exports = {};
    var module = {exports: exports}
    code(exports, module);
    _require.cache[name] = exports.exports;
    return exports;
}
_require.cache = Object.create(null);


function _readFile(name) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("text/javascript");
    req.open("GET", "./" + name + ".js", false);
    req.send(null);
    return req.responseText;
}

function readFile(name) {
    var fs = require("fs");
}

var counter = _require("counterService");
counter.increment();
counter.get();
console.log("test", counter.get());
