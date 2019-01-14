function getQuote() {
    return new Promise(function (resolve, reject) {
        fetch('https://prof.ti.bfh.ch/~lhp2/js/services/quote.php').then(response => {
            return response.text();
        }).then(text => {
            resolve(text);
        }).catch(error => {
            reject("Api not Responding");
        })
    });
}


function toMorse(text) {
    return new Promise(function (resolve, reject) {
        fetch(`https://prof.ti.bfh.ch/~lhp2/js/services/morse.php?text=${text}`)
        .then(response => {
            return response.text();
        }).then(morseText => {
            resolve(`original: ${text} morse: ${morseText}`);
        }).catch(error => {
            reject("Api not responding");
        });
    });
}

var quoteblock = document.getElementById('quotes');


Promise.all([getQuote().then(q => toMorse(q)), getQuote().then(q => toMorse(q)), getQuote().then(q => toMorse(q)), getQuote().then(q => toMorse(q))]).then(quotes => {
    let quoteHolder = document.getElementById("quotes");
    quoteHolder.innerHTML = "";
    quotes.forEach(q => {
        quoteHolder.innerText += q;
    });
}).catch(error => console.log("Api broken"));