// Project: Dice Roll Simulator
function rollDice(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

console.log("Dice roll result:", rollDice());
console.log("10-sided dice roll:", rollDice(10));