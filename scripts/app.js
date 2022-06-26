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

    randomHull(min, max) {
        return Math.random() * (max - min) + min;
    }
    static randomFirepower(min, max) {
        return Math.random() * (max - min) + min;
    }
    static randomAccuracy(min, max) {
        return Math.random() * (max - min) + min;
    }
}

const alien1 = new Enemy();
captain.attack(alien1);
console.log(alien1);

// console.log(Enemy.randomHull(3, 6))

// const enemy0 = new Enemy(randomHull(3, 6));

// console.log(enemy0.randomHull(3, 6))