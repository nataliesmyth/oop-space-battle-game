// Parent Class
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
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

// Alien Army
const alienArmy = [];

// Loop to populate army
for (let i = 0; i < 6; i++) {
    alienArmy.push(new Alien(`Alien${i + 1}`));
}

console.log(alienArmy)


// Alien Army Array
const enemyShips = []

// Player battles each alien one at a time
// We have to loop through each alien ship until all are defeated, or the player is defeated
// if hull <= 0, game over
// for (let j = 0; j < enemyShips.length; j++)  {

//     while (Math.random() > enemyShips[j].accuracy && player.hull <= 0 && enemyShips[j].hull <= 0) {
//         player.attack(enemyShips[j])
//         console.log('you hit the alien ship! Attack again!');
//     }
//     if (Math.random() < enemyShips[j].accuracy) {
//         console.log('You have been it!');
//         enemyShips[j].attack(player);
//         console.log(player)
//     } 
// }

// game rounds

function playerMove(enemy) {
    if (Math.random() < player.accuracy) {
        player.attack(enemy);
        return `Direct hit! Enemy ship hull: ${enemy.hull}`
    } else if (Math.random() > player.accuracy) {
        enemy.attack(player);
        return `You missed! Enemy ship hull: ${enemy.hull}`
    };
    gameOver();
};

function gameOver() {
        if ((enemyShips[0].hull) <= 0 || (player.hull) <=0) {
    }
        console.log('game over')
}

console.log(playerMove(enemyShips[0]));