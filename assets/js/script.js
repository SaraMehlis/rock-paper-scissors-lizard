const choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const playerChoice = this.id;

        const computerChoice = choice[Math.floor(Math.random() * 5)];
        const result = getResult(playerChoice, computerChoice);
        if (result === 'You win !') {
            playerScore++;

        } else if (result === 'Computer wins!') {
            computerScore++;
        };
        document.getElementById('result').textContent = result;
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;



    });
});

//result
function getResult(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
        (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
        (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
        (player === 'lizard' && (computer === 'paper' || computer === 'spock')) ||
        (player === 'spock' && (computer === 'rock' || computer === 'scissors'))
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}




