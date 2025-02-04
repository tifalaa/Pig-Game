'use strict';
//selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const newbtn = document.querySelector('.btn--new');
const holdbtn = document.querySelector('.btn--hold');
const rollbtn = document.querySelector('.btn--roll');
let CurrentScore = 0;

//starting condition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

//rolling the dice
rollbtn.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove('hidden');
  diceElement.src= `dice-${dice}.png`;
  if(dice !== 1){
    CurrentScore += dice;
    current0Element.textContent = CurrentScore;


  }else{

  }

});
