function charToMorse(char) {
    var alphabetString =
        "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
        "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
        "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";
    var items = alphabetString.split(';');
    var item = items.filter(item => item.split('=')[0] === char)[0];
    if (item) {
        return item.split('=')[1];
    }
}

function stringToMorse(text) {
    var morse = "";
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
        morse += charToMorse(text.charAt(i)) + "/";
    }
    return morse;
}
console.log(stringToMorse("Hallo"));


