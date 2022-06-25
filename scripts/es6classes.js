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