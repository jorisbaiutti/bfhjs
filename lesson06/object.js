function Person(name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

Person.prototype.getAge = function(){
    return this.age;
}

function Student(name, lastname, age, School){
    this.School = School;
    Person.call(this, name, lastname, age);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

