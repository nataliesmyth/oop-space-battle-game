class SpaceShip {
    constructor(hull=20, firepower=5, accuracy=.7) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(target) {
        target.health = target.health - this.damage;
    }
}

console.log(SpaceShip)

const earthCaptain = new SpaceShip();

console.log(earthCaptain)

class Enemy {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    static randomHull(min, max) {
        return Math.random() * (max - min) + min;
    }
    static randomFirepower(min, max) {
        return Math.random() * (max - min) + min;
    }
    static randomAccuracy(min, max) {
        return Math.random() * (max - min) + min;
    }
}

console.log(Enemy.randomHull(3, 6))

const enemy0 = new Enemy(randomHull(3, 6));

console.log(enemy0.randomHull(3, 6))