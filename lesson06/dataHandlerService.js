exports.getQuote = function () {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("get", "https://prof.ti.bfh.ch/~lhp2/js/services/quote.php", true);
        req.onload = function () {
            if (req.readyState === 4){
                if(req.status === 200) {
                    resolve(req.responseText)
                }
                else{
                    reject(`Api Error: ${req.statusText}`);
                }
            }
        }
        req.send();
    })
}

exports.toMorse = function(text){
    return new Promise(function (resolve, reject){
        var req = new XMLHttpRequest();
        req.open("get", `https://prof.ti.bfh.ch/~lhp2/js/services/morse.php?text=${text}`, true);
        req.onload = function(){
            if(req.readyState === 4){
                if(req.status === 200){
                    resolve(`${text}: ${req.responseText}`);
                }
                else{
                    reject(`Api Error: ${req.statusText}`);
                }
            }
        }
        req.send();
    });
}