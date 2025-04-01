// Project: Random Number Guessing Game
function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    function checkGuess(guess) {
        attempts++;
        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
            return true;
        } else if (guess < secretNumber) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }
        return false;
    }
    
    return checkGuess;
}

const game = guessingGame();
game(50);
game(75);
game(63);