// player object
const player = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        target.hull = target.hull - this.firepower;
    }
}

// functions

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// enemy class
class Enemy {
    constructor(hull, firepower, accuracy) {

    }
}
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
// console.log(ussAssembly)

// Enemy
// const alienShip = new Ship();

// Empty Array to populate with aliens
const alienShips = []

// Alien Army!
for (let i = 0; i < 6; i++) {
    alienShips.push(new Ship())
}

console.log(alienShips)

// Player battles each alien one at a time
// We have to loop through each alien ship until all are defeated, or the player is defeated
// if hull <= 0, game over
for (let j = 0; j < alienShips.length; j++)  {

    while (Math.random() > alienShips[j].accuracy && ussAssembly.hull <= 0 && alienShips[j].hull <= 0) {
        ussAssembly.attack(alienShips[j])
        console.log('you hit the alien ship! Attack again!');
    }
    if (Math.random() < alienShips[j].accuracy) {
        console.log('You have been it!');
        alienShips[j].attack(ussAssembly);
        console.log(ussAssembly)
    } 
}


