// Parent Class
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(target) {
        if (Math.random() > this.accuracy) {
            console.log(`${this.name} missed ${this.name} has a hull of ${this.hull}.`);
        } else {
            target.hull -= this.firepower
            if (target.hull <= 0) {
                console.log(`${this.name} destroyed ${target.name}. ${target.name}'s hull is ${target.hull}`)
            } else{
                console.log(`${this.name} hit ${target.name} for ${this.firepower} damage. ${target.name} has ${target.hull} hull`);
            }
        }
    }
}

// Player Class
class Player extends Ship {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
    }
}


// Alien Class
class Alien extends Ship {
    constructor(name, hull = 3 + Math.floor(Math.random() * 3), firepower = 2 + Math.floor(Math.random() * 2), accuracy = 0.6 + Math.random() * 0.2) {
        super(name, hull, firepower, accuracy)
    }
}

// Player
const player = new Player('USS Assembly', 20, 5, 0.7);
console.log(player);

// Alien Army
const alienArmy = [];

// Loop to populate army
for (let i = 0; i < 6; i++) {
    alienArmy.push(new Alien(`Alien${i + 1}`));
}

console.log(alienArmy)



const battle = (player, target) => {
    while (player.hull > 0 && target.hull > 0) {
        player.attack(target);
        if (target.hull > 0) {
            target.attack(player);
        }
    }
}

const playGame = (player, target) => {
    for (let i = 0; i < target.length; i++) {
        battle(player, target[i]);
    }
}

playGame(player, alienArmy);