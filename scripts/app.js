// player object
const player = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        target.hull = target.hull - this.firepower;
    }
}

// functions to manipulate properties

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomNumber(3, 6))

function getRandomDecimal (min, max) {
    if ((min || max) >= 1 || (min || max) < 0) {
        console.log('please use numbers between 0 and 1')
    } else {
        return Math.random() * (max - min) + min;
    }
}

// enemy class
class Enemy {
    constructor() {
        this.hull = getRandomNumber(3, 6);
        this.firepower = getRandomNumber(2, 4);
        this.accuracy = getRandomDecimal(.6, .8);
    }
    attack(target) {
        this.hull = this.hull - this.firepower;
    };
};

console.log(Enemy)


// Alien Army Array
const enemyShips = []

// Loop to populate alien army array
for (let i = 0; i < 6; i++) {
    enemyShips.push(new Enemy())
}

console.log(enemyShips[0].hull)

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