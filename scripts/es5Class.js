console.log('sanity check')


function attack(targetObject) {
    return targetObject.health - this.damage;
}

const playerActions = {
    attack(targetObject) {
        return targetObject.health - this.damage;
    },
    addsHealth() {

    },
    getArmour() {

    }
}

const player3 = Object.create(playerActions);
player3.health = 10;
// console.log(player3)
const player = {
    health: 100,
    damage: 10,
    // referencing attack function
    attack: attack,
}

const enemy = {
    health: 100,
    damage: 7,
    // referencing attack function
    attack: attack,
}

enemy.attack(player);
// console.log(player);

// In javascript, a class is a function that creates similar objects
function EnemyShip(id, health, damage, attack) {
    // this is the name of the object we are working on
    this.id = id;
    this.health = health;
    this.damage = damage;
    // pull function out and define on prototype BELOW
    // methods should not go on the constructor, they should go on the PROTOTYPE
    // this.attack = function (target) {
    //     return target.health - this.damage;
    // }
    return this
}

// define class methods on the prototype
EnemyShip.prototype.attack = function(target) {
    target.health -= this.damage;
    return 'Enemy attacked'
}

EnemyShip.prototype.addArmour = function() {
    const level = damage / 2;
    this.armour = level;
}
const enemy1 = new EnemyShip();

// console.log(enemy1);
const enemyShips = [];

for (let i = 1; i < 101; i++) {
    enemyShips.push(new EnemyShip(i, 100, 10));
}

console.log(enemyShips)

enemyShips[1].attack(enemyShips[2])

console.log(enemyShips[2])
