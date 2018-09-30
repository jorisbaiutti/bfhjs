var bob = {
    name: 'bab',
    lastname: 'marley',
    age: 69,
    girlfriend: {
        name: "alice",
        age: 20
    }
}
console.log(bob.girlfriend);

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = () => {
        console.log('Hello');
    }
}

var alice = new Person('Alice', 27);
alice.speak();
Person.prototype.saySomething = function(){
    console.log('Something ' + this.name);
}

alice.saySomething();