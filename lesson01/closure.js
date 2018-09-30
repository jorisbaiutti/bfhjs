var incrementer = function () {
    var c = 0;
    return function () {
        c++;
        return c;
    }
}

var inc = incrementer();
console.log(inc());
console.log(inc());

var inc2 = incrementer();
console.log(inc2());