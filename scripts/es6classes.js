// ES6 Class Syntax

class Ship {
    constructor(id=1, health=100, damage=10, shipColor) {
        this.id = id;
        this.health = health;
        this.damage = damage;
        this.shipColor = shipColor;
    }
    // Instance Method
    // methods without the static keyword is an instance
    attack(target) {
        target.health = target.health - this.damage;
    }

    // Class Method
    static getColors() {
        return ['red', 'blue', 'black'];
    }
}

// Enemy1 is an Instance of the Ship Class
// We instantiate the Ship Class
const enemy1 = new Ship();
console.log(enemy1)
const enemy2 = new Ship();
console.log(enemy2)
const user = new Ship(10, 50, 5);
console.log(user)

enemy1.attack(user);
console.log(user) // health is 40, attack method works

// Ship.attack(); // Ship class CANNOT access instance methods

// Ship.getColors(); // Ship class CAN access static methods

const enemy4 = new Ship(4, 100, 8, Ship.getColors()[1]);
console.log(enemy4)

class Person {
    constructor(firstname, lastname, age, birthdate, birthyear) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.birthdate = birthdate;
        this.birthyear = birthyear;
    }

    static sayHi() {
        return 'hi'
    }
}
console.log(Person.sayHi())

const person0 = new Person('frank', 'degruttalo', 36, 'June 20', 1986)


console.log(person0)

class Pet {
    constructor(name, breed, size, color) {
        this.name = name;
        this.breed = breed;
        this.size = size;
        this.color = color;
    }

    static getSizes() {
        return ['small', 'medium', 'large'];
    }

    static getFurColor() {
        return ['black', 'white', 'grey', 'brown', 'red']
    }
}

const zoe = new Pet('zoe', 'shih tzu', Pet.getSizes()[1], Pet.getFurColor()[0]);

console.log(zoe)