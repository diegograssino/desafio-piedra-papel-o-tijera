const info = document.getElementById('info');
info.innerHTML = 'Elija su arma';

const rock = document
  .getElementById('rock')
  .addEventListener('click', e =>
    console.log('rock')
  );

const paper = document
  .getElementById('paper')
  .addEventListener('click', e =>
    console.log('paper')
  );

const scissor = document
  .getElementById('scissor')
  .addEventListener('click', e =>
    console.log('scissor')
  );

function computerPlay() {}

function play(weapon) {
  let computerSelection = Math.floor(
    Math.random() * 3
  );

  let computerWeapon = '';

  if (computerSelection === 0) {
    computerWeapon = 'rock';
  } else if (computerSelection === 1) {
    computerWeapon = 'paper';
  } else {
    computerWeapon = 'scissor';
  }
  console.log(computerWeapon);
}

play('rock');
