'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
    const message = document.querySelector('.message');
    const scoreTxt = document.querySelector('.score');
    if (score > 0) {
        message.textContent = '📈Too High';
        score--;
    } else {
        message.textContent = 'You lost the game';
    }
    scoreTxt.textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');

    if (!guess) {
        message.textContent = '☹️No Number';
    } else if (guess === secretNumber) {

        message.textContent = '✅Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess < secretNumber) {
        displayMessage('📉Too low')
    } else if (guess > secretNumber) {
        displayMessage('📈Too High')
    }
})

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});