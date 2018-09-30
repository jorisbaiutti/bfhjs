var color1 = "blue";
var color2 = "red";
var color3 = "green";

var colors = ["blue", "red", "green"] //same as var colors = new Array["blue", "red", "green"] but don't use this

var bob = ["Bob", 25, 5.25, true];

var bob = {name: "Bob", age: 25, toString(){
    return this.name + this.age;
}};

console.log(bob.toString());

colors['favorite'] = 'Pink'
colors.length;

var person = "";
person.name = "Joris";
person.colors = colors;
console.log(person);