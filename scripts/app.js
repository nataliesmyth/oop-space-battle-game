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
    constructor(hull=20, firepower=5, accuracy=.7) {
        super(hull, firepower, accuracy);
    }

    randomHull() {
        return Math.random() * (6 - 3) + 3;
    }
    randomFirepower() {
        return Math.random() * (4 - 2) + 2;
    }
    randomAccuracy() {
        return Math.random() * (.8 - .6) + .6;
    }
}

const alien1 = new Enemy();
captain.attack(alien1);
console.log(alien1.randomAccuracy());