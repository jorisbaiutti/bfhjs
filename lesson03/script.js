function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function (phrase) {
    console.log(phrase);
}

function Student(name, age, legi) {
    this.legi = legi;
    Person.call(this, name, age);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sleep = function () {

}


