class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(target) {
        target.health = target.health - this.damage;
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

class Enemy {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
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

// console.log(Enemy.randomHull(3, 6))

// const enemy0 = new Enemy(randomHull(3, 6));

// console.log(enemy0.randomHull(3, 6))