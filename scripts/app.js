// player object
const player = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: attack,
}

// functions to manipulate properties

function attack(target) {
    target.hull =- this.firepower
}
function getRandomNumber (min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomDecimal (min, max) {
    if ((min || max) >= 1 || (min || max) < 0) {
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
        this.attack = attack
    }
}

// Alien Army Array
const enemyShips = []

// Loop to populate alien army array
for (let i = 0; i < 6; i++) {
    enemyShips.push(new Enemy())
}

console.log(enemyShips)

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
    for (let i = 0; i < enemyShips.length; i++) {
        if ((enemyShips[i].hull) <= 0 || (player.hull) <=0) {
    }
        return 'game over'
    }
}
console.log(playerMove(enemyShips[0]));