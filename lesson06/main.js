var dataHandler = _require("dataHandlerService");
function _require(name){
    var code = new Function("exports", _readFile(name));
    var exports = {}
    code(exports);
    return exports;

}
function _readFile(name) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("text/javascript");
    req.open("GET", "./" + name + ".js", false);
    req.send(null);
    return req.responseText;
}

var quoteblock = document.getElementById('quotes');

var promise = dataHandler.getQuote().then(q => dataHandler.toMorse(q));

Promise.all([promise, promise, promise]).then(quotes => {
    let quoteHolder = document.getElementById("quotes");
    quoteHolder.innerHTML = "";
    quotes.forEach(q => {
        quoteHolder.innerText += q;
    });
}).catch(error => console.log("Api broken"));
