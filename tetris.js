const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;
const COLORS = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#f90'];

let board = [];
let score = 0;
let currentPiece;

const pieces = 'IJLOSTZ';

const shapes = {
  I: [[1, 1, 1, 1]],
  J: [[1, 0, 0], [1, 1, 1]],
  L: [[0, 0, 1], [1, 1, 1]],
  O: [[1, 1], [1, 1]],
  S: [[0, 1, 1], [1, 1, 0]],
  T: [[0, 1, 0], [1, 1, 1]],
  Z: [[1, 1, 0], [0, 1, 1]],
};

function createPiece(type) {
  return shapes[type].map(row => row.slice());
}

function drawBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c]) {
        context.fillStyle = COLORS[board[r][c] - 1];
        context.fillRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }
  }
}

function drawPiece(piece, offset) {
  piece.forEach((row, r) => {
    row.forEach((value, c) => {
      if (value) {
        context.fillStyle = COLORS[value - 1];
        context.fillRect((c + offset.x) * BLOCK_SIZE, (r + offset.y) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    });
  });
}

function collide(board, piece, offset) {
  for (let r = 0; r < piece.length; r++) {
    for (let c = 0; c < piece[r].length; c++) {
      if (piece[r][c] &&
          (board[r + offset.y] && board[r + offset.y][c + offset.x]) !== 0) {
        return true;
      }
    }
  }
  return false;
}

function merge(board, piece, offset) {
  piece.forEach((row, r) => {
    row.forEach((value, c) => {
      if (value) {
        board[r + offset.y][c + offset.x] = value;
      }
    });
  });
}

function rotate(piece) {
  const len = piece.length;
  const rotated = [];
  for (let r = 0; r < len; r++) {
    rotated[r] = [];
    for (let c = 0; c < len; c++) {
      rotated[r][c] = piece[len - 1 - c][r];
    }
  }
  return rotated;
}

function removeFullRows() {
  outer: for (let r = ROWS - 1; r >= 0; r--) {
    for (let c = 0; c < COLS; c++) {
      if (!board[r][c]) {
        continue outer;
      }
    }
    board.splice(r, 1);
    board.unshift(new Array(COLS).fill(0));
    score += 10;
    scoreDisplay.textContent = `Score: ${score}`;
  }
}

function resetGame() {
  board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  currentPiece = {
    piece: createPiece(pieces[(Math.random() * pieces.length) | 0]),
    offset: { x: (COLS / 2) | 0, y: 0 },
  };
}

function update() {
  currentPiece.offset.y++;
  if (collide(board, currentPiece.piece, currentPiece.offset)) {
    currentPiece.offset.y--;
    merge(board, currentPiece.piece, currentPiece.offset);
    removeFullRows();
    currentPiece.piece = createPiece(pieces[(Math.random() * pieces.length) | 0]);
    currentPiece.offset = { x: (COLS / 2) | 0, y: 0 };
    if (collide(board, currentPiece.piece, currentPiece.offset)) {
      resetGame();
    }
  }
  drawBoard();
  drawPiece(currentPiece.piece, currentPiece.offset);
}

function drop() {
  update();
  setTimeout(drop, 1000);
}

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    currentPiece.offset.x--;
    if (collide(board, currentPiece.piece, currentPiece.offset)) {
      currentPiece.offset.x++;
    }
  } else if (event.key === 'ArrowRight') {
    currentPiece.offset.x++;
    if (collide(board, currentPiece.piece, currentPiece.offset)) {
      currentPiece.offset.x--;
    }
  } else if (event.key === 'ArrowDown') {
    update();
  } else if (event.key === 'ArrowUp') {
    const rotatedPiece = rotate(currentPiece.piece);
    if (!collide(board, rotatedPiece, currentPiece.offset)) {
      currentPiece.piece = rotatedPiece;
    }
  }
  drawBoard();
  drawPiece(currentPiece.piece, currentPiece.offset);
});

startButton.addEventListener('click', () => {
  resetGame();
  drop();
});

resetGame();
drawBoard();
