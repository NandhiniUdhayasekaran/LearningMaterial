class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
/*Inheritance*/
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/*Statics*/
class Increment {
    constructor() {
        Increment.add++;
    }
}
Increment.add = 0;
var s1 = new Increment();
var s2 = new Increment();
console.log(Increment.add); // 2
/*Abstract Class*/
class FooCommand {
}
// class BarErrorCommand  extends FooCommand {} // 'BarErrorCommand' needs implement abstract member 'execute'.
class BarCommand extends FooCommand {
    execute() {
        return `Command Bar executed`;
    }
}
//const fooCommand: FooCommand = new FooCommand(); // Cannot create an instance of an abstract class.
const barCommand = new BarCommand();
barCommand.execute(); // Command Bar executed
//# sourceMappingURL=Classes.js.map