class Ship {
    constructor(hull, firepower, accuracy) {
        // this = {} i.e, an empty object
        this.hull = hull || Math.random() * (6 - 3) + 3;
        this.firepower = firepower || Math.random() * (4 - 2) + 2;
        this.accuracy = accuracy || Math.random() * (.8 - .6) + .6;
    }

    attack(target) {
        target.hull = target.hull - this.firepower;
    }
}

// console.log(Ship)

// Player
const ussAssembly = new Ship(20, 5, .7);
console.log(ussAssembly)

// Enemy
const alienShip = new Ship();
console.log(alienShip)

const alienShips = []
for (let i = 0; i < 6; i++) {
    alienShips.push(new Ship())
}
// const alienShip1 = new Ship();
console.log(alienShips)
if (alienShip.hull <= 0) {
    console.log('You destroyed the alien ship')

}

ussAssembly.attack(alienShip)
if (Math.random() < alienShip.accuracy) {
    console.log('you hit the alien ship! Attack again!');
} else {
    console.log('You missed!');
}
console.log(ussAssembly)

if (ussAssembly.hull <= 0) {
    console.log('game over');
}