function Char(value, string) {
    this.value = value;
    this.string = string;
}

function Font(name, chars) {
    this._name = name;
    this._alphabet = {}
    chars.forEach(c => this._alphabet[c.value] = c.string)
}


Font.prototype.render = function (text) {
    var morse = "";
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
        morse += this._alphabet[text.charAt(i)];
    }
    return morse;
};

Font.prototype.write = function (text, to) {
    if (to === undefined) {
        console.log(this.render(text));
    } else {
        to(this.render(text));
    }
};

var alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--";

var alphabetString = alphabetString.split(';');
var morseAlphabet = alphabetString.map(item => new Char(item.split('=')[0], item.split('=')[1]));
var font = new Font("morse", morseAlphabet);

font.render = function (text) {
    var morse = "";
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
        morse += this._alphabet[text.charAt(i)] + '/';
    }
    return morse;
};

var renderedText = font.render('Hallo');
console.log("render: " + renderedText);
font.write("Hallo Write");

font.write("Hallo write", function (text) {
    console.log("through passed function: " + text);
});