'use strict';
const totalScore0 = document.querySelector('#score--0');
const totalScore1 = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');
const bntNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');



let score;
let totalScore;
let activePlayer;
let isPlaying;

const initGame  = function () {
    totalScore0.textContent = 0;
    totalScore1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    score = 0;
    totalScore = [0 , 0];
    player0.classList.remove('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player0.classList.remove('player--winner');
    player0.classList.add('player--active');
    activePlayer = 0;
    isPlaying = true;
    dice.classList.add('hidden');
}
initGame();

const switchActivePlayer  = function () {
    score = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = score;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

bntRoll.addEventListener('click', function () {
    if (isPlaying){
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice${randomNumber}.png`;

    if (randomNumber !== 1){
        score = score + randomNumber;
        document.querySelector(`#current--${activePlayer}`).textContent = score;
    }else {
        switchActivePlayer ();
    }
} 
});
bntHold.addEventListener('click', function () {
    if(isPlaying){
        totalScore[activePlayer] = totalScore[activePlayer] + score;
        document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer];

        if (totalScore[activePlayer] >= 10){
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add('hidden');

        }else {
            switchActivePlayer();
        }
    }
});
bntNew.addEventListener('click',initGame)