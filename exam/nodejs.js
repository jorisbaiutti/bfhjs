function speak(phrase){
    console.log(`${this.name} says: ${phrase}`);
}

var bob = {
    name: "bob"
}

var alice = {
    name: "alice"
}

speak("Hello");

speak.bind(bob)("Hello Bind");

speak.call(alice, "Hello from alice");