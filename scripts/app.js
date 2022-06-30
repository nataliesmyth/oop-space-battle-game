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

function getRandomDecimal (min, max) {
    if (min || max >= 1) || (min || max < 0) {
        console.log('please use numbers between 0 and 1')
    } else {
        return Math.random() * (max - min) + min;
    }
}

// enemy class
class Enemy {
    constructor(hull, firepower, accuracy) {
        this.hull = getRandomNumber(3, 6);
        this.firepower = getRandomNumber(2, 4);
        this.accuracy = getRandomDecimal(.6, .8);
    }
}

// Enemy
// const alienShip = new Ship();

// Empty Array to populate with aliens
const enemyShips = []

// Create your army (populate empty array with desired amount of ships)
for (let i = 0; i < 6; i++) {
    enemyShips.push(new Ship())
}

console.log(enemyShips)

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


