class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(target) {
        target.hull = target.hull - this.firepower;
    }
}

// console.log(Ship)

class Player extends Ship {
    constructor(hull=20, firepower=5, accuracy=.7) {
    // super(); calls the parent constructor
        super(hull, firepower, accuracy); // calls the this object {}
    }
}

const captain = new Player();

console.log(captain)

class Enemy extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy);
    }

}

const aliens = [];
for (let i = 0; i < 6; i ++) {
    
}
const alien1 = new Enemy(Math.random() * (6 - 3) + 3, Math.random() * (4 - 2) + 2,Math.random() * (.8 - .6) + .6);
console.log(alien1)
console.log(captain)
captain.attack(alien1);
if (Math.random() < alien1.accuracy) {
	console.log('You have been hit!');
} else {
    console.log('You have not been hit!!')
}
console.log(alien1);
alien1.attack(captain)

if (alien1.hull <= 0) {
    console.log('ship is destroyed')
}