const maze = document.getElementById('maze');
const cells = [];
let playerPosition = 0; // Posición inicial del jugador

// Crear el laberinto
function createMaze() {
  for (let i = 0; i < 400; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cells.push(cell);
    maze.appendChild(cell);
  }
  // Establecer posición inicial del jugador
  cells[playerPosition].classList.add('player');
}

// Mover el jugador
function movePlayer(event) {
  // Eliminar la clase 'player' de la posición actual del jugador
  cells[playerPosition].classList.remove('player');

  if (event.key === 'ArrowUp') {
    // Mover hacia arriba
    if (playerPosition >= 20) {
      playerPosition -= 20;
    }
  } else if (event.key === 'ArrowDown') {
    // Mover hacia abajo
    if (playerPosition < 380) {
      playerPosition += 20;
    }
  } else if (event.key === 'ArrowLeft') {
    // Mover hacia la izquierda
    if (playerPosition % 20 !== 0) {
      playerPosition -= 1;
    }
  } else if (event.key === 'ArrowRight') {
    // Mover hacia la derecha
    if (playerPosition % 20 !== 19) {
      playerPosition += 1;
    }
  }

  // Agregar la clase 'player' a la nueva posición del jugador
  cells[playerPosition].classList.add('player');


  // Comprobar si el jugador ha llegado a la salida
  if (playerPosition === 399) {
    alert('¡Felicidades, has ganado!');
  }
}

// Inicializar el juego
function init() {
  createMaze();
  document.addEventListener('keydown', movePlayer);
}

init();