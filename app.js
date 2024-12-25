const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultDisplay = document.getElementById('result');

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;


const handleGuess = () => {
    event.preventDefault();
    const playerGuess = parseInt(guessInput.value);

    if (!playerGuess || playerGuess < 1 || playerGuess > 10) {
        resultDisplay.textContent = 'Please enter a number between 1 and 10.';
        return;
    }

    if (playerGuess === randomNumber) {
        resultDisplay.style.color = 'green';
        resultDisplay.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
        resetGame();
    } else {
        attempts--;
        resultDisplay.style.color = 'red';
        if (attempts > 0) {
            resultDisplay.textContent = playerGuess > randomNumber
                ? `Too high! You have ${attempts} attempts left.`
                : `Too low! You have ${attempts} attempts left.`;
        } else {
            resultDisplay.textContent = `Game over! The correct number was ${randomNumber}.`;
            resetGame();
        }
    }
};

const resetGame = () => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 3;
    guessInput.value = '';
};

guessButton.addEventListener('click', handleGuess);
