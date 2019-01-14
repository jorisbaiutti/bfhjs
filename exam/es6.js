class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(phrase){
        console.log(`${this.name} says: ${phrase}`);
    }
}

let person = new Person("Joris", 27);
person.speak("Hello");

class Student extends Person{
    constructor(name, age, school){
        super(name, age);
        this.school = school;
    }
    learn(){
        console.log(`${this.name} is learning at ${this.school}`);
    }
}

let student = new Student("Joriss", 27, "BFH");
student.speak("Hello");
student.learn();


let promise = new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    req.open("get", "https://api.apixu.com/v1/current.json?key=9a446f698117469eb5c110445180411&q=Bern");
    req.onload = function(){
        if(req.status === 200){
            resolve(req.responseText);
        }
        else{
            reject("Api Error");
        }
    };
    req.send();
});
promise.then(resp => console.log(resp)).catch(err => console.log(err));

let timer = new Promise(function(resolve, reject){
    setTimeout(function(){
        let bool = true;
        if(bool){
            resolve("resolved");
        }
        else{
            reject("rejected");
        }
    }, 3000);
});