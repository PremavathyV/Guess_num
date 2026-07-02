let secretNumber = 0;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;

    const guessInput = document.getElementById("guessInput");
    const result = document.getElementById("result");
    const attemptsDisplay = document.getElementById("attempts");

    guessInput.value = "";
    guessInput.focus();
    result.textContent = "A new secret number is ready. Make your first guess!";
    attemptsDisplay.textContent = "Attempts: 0";
}

function guessNumber() {
    const guessInput = document.getElementById("guessInput");
    const result = document.getElementById("result");
    const attemptsDisplay = document.getElementById("attempts");
    const userGuess = Number(guessInput.value);

    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 10) {
        result.textContent = "❌ Please enter a valid number between 1 and 10.";
        return;
    }

    attempts += 1;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === secretNumber) {
        result.textContent = `🎉 Correct! You guessed the number in ${attempts} attempt(s).`;
    } else if (userGuess < secretNumber) {
        result.textContent = "📉 Too low! Try a higher number.";
    } else {
        result.textContent = "📈 Too high! Try a lower number.";
    }
}

window.addEventListener("DOMContentLoaded", startGame);
