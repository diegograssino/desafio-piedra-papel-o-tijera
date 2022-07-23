// 1: Controlamos los elementos HTML que necesitamos.

const info = document.getElementById('info');

const rock = document
  .getElementById('rock')
  .addEventListener('click', e => play('✊'));

const paper = document
  .getElementById('paper')
  .addEventListener('click', e => play('✋'));

const scissor = document
  .getElementById('scissor')
  .addEventListener('click', e => play('✌'));

const computer =
  document.getElementById('computer');

// 2. Inicializo todo lo necesario

info.innerHTML = 'Elija su arma ...';

// 3. Hago la logica del juego
function play(weapon) {
  // La función primero va a generar un numeron random para asignar un arma a la computadora
  let computerSelection = Math.floor(
    Math.random() * 3
  );

  let computerWeapon = '';

  if (computerSelection === 0) {
    computerWeapon = '✊';
  } else if (computerSelection === 1) {
    computerWeapon = '✋';
  } else {
    computerWeapon = '✌';
  }

  // Comenzamos con la lógica para saber si se gano, perdio o empato
  let result = '';

  // Casos Ganadores
  // Piedra - Tijera x
  // Tijera - Papel x
  // Papel - Piedra x
  // Casos perdedores
  // Papel - Tijera
  // Piedra - Papel
  // Tijera - Piedra

  if (weapon === computerWeapon) {
    result = 'empate';
  } else if (
    (weapon === '✊' &&
      computerWeapon === '✌') ||
    (weapon === '✌' &&
      computerWeapon === '✋') ||
    (weapon === '✋' && computerWeapon === '✊')
  ) {
    result = 'ganó';
  } else {
    result = 'perdió';
  }

  info.innerHTML = 'Suspenso ...';
  computer.innerHTML = '';

  setTimeout(() => {
    // Mostramos en el contenedor computer que eligió la computadora
    computer.innerHTML = `Su oponente eligió ${computerWeapon}`;
    // Mostramos en el contenedor info que sucedió
    info.innerHTML = `Ud. eligió ${weapon} y ${result}.`;
  }, 2000);
}
