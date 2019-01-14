function _require(name){
    var code = new Function("exports", _readFile(name));
    var exports = {};
    code(exports);
    return exports;
}

function _readFile(name){
    var req = new XMLHttpRequest();
    req.overrideMimeType("text/javascript");
    req.open("get", "./" + name + ".js", false);
    req.send();
    return req.responseText;
}

var weatherservice = _require("weatherService");

weatherservice.weather.then(res => console.log(res)).catch(err => console.log(err));

/** Prototype Chain & Inheritance */

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function(){
    console.log("Hello I'm a Person");
}

Person.prototype.walk = function(){
    console.log("Person: I'm walking");
}

function Student(name, age, school){
    this.school = school;
    Person.call(name, age);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.learn = function(){
    console.log("Student: I'm learning");
}

Student.prototype.walk = function(){
    console.log("Student: I'm Walking");
}

function Teacher(name, age, school){
    this.school = school;
    Person.call(name, age);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


var person1 = new Person("Joris", 27);
var student1 = new Student("Student1", 30, "BFH");
var teacher1 = new Teacher("Teacher1", 40, "BFH");

person1.walk();
person1.speak();
student1.walk();
student1.speak();
student1.learn();
teacher1.walk();

console.log("Student calls parent:" + Student.prototype.walk());


var joris = {
    name: "Joris",
    lastname: "Baiutti",
    get name(){
        return this.name;
    },
    set name(name){
        this.name = name;
    }
}

console.log(joris);
joris.name("TestJoris");
console.log(joris);


