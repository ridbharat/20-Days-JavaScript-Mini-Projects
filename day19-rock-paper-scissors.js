// Project: Rock Paper Scissors Game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

console.log(playGame('rock'));