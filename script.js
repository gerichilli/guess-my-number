'use strict';
 
const numberDOM = document.querySelector('.number');
const scoreDOM = document.querySelector('.score');
const bodyDOM = document.querySelector('body');
const highScoreDOM = document.querySelector('.highscore');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

let secretNumber, score;
let highScore = 0;

init();

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if (!guess) {
        displayMessage('No number');

    //When player win
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');

        //Display correct number
        numberDOM.textContent = secretNumber;

        //Change background color to green when correct
        bodyDOM.style.backgroundColor = '#60b347';
        numberDOM.style.width = '30rem';

        //Setting the new highscore
        if (score > highScore) {
            highScore = score;
        }

        highScoreDOM.textContent = highScore;

    //When guess number is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            scoreDOM.textContent = score;
        } else {
            displayMessage('You lose the game!!!');
            scoreDOM.textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    init();
})

function init() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    //Refresh input value
    document.querySelector('.guess').value = '';

    //Reset message text
    displayMessage('Start guessing...');

    //Reset scores
    score = 20;
    scoreDOM.textContent = score;
        
    //Hide correct number
    numberDOM.textContent = '?';

    //Change background and number width
    bodyDOM.style.backgroundColor = '#222';
    numberDOM.style.width = '15rem';

    return secretNumber, score;
}