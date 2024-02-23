let currentPlayer = "X";
let container = document.querySelector(".container");
let rows = 0;
let turnsCounter = 0;
let cellMatrix = [];
let resetButton = document.getElementById("reset");

const checkRow = (mark) => {
  for (let i = 0; i < rows; i++) {
    let column = 0;
    while (column < rows) {
      if (cellMatrix[i][column] !== mark) {
        column = 0;
        break;
      }
      column++;
    }
    if (column === rows) {
      return true;
    }
  }
  return false;
};
const checkColumn = (mark) => {
  for (let i = 0; i < rows; i++) {
    let row = 0;
    while (row < rows) {
      if (cellMatrix[row][i] !== mark) {
        row = 0;
        break;
      }
      row++;
    }
    if (row === rows) {
      return true;
    }
  }
  return false;
};

const checkDiagonal = (mark) => {
  for (let i = 0; i < rows; i++) {
    let row = 0;
    let col = 0;
    while (row < rows && col < rows) {
      if (cellMatrix[row][col] !== mark) {
        row = 0;
        col = 0;
        break;
      }
      row++;
      col++;
    }
    if (row === rows && col === rows) {
      return true;
    }
  }
  return false;
};
const checkReversedDiagonal = (mark) => {
  let win = true;
  for (let i = 0; i < rows; i++) {
    if (cellMatrix[i][rows - 1 - i] !== mark) {
      win = false;
      break;
    }
  }
  return win;
};
const reset = () => {
  deleteBoard();
  cellMatrix = [];
  createBoard(rows);
  currentPlayer = "X";
  turnsCounter = 0;
};

const checkWin = () => {
  return (
    checkRow(currentPlayer) ||
    checkColumn(currentPlayer) ||
    checkDiagonal(currentPlayer) ||
    checkReversedDiagonal(currentPlayer)
  );
};

const runWinEvent = (currentPlayer) => {
  setTimeout(() => {
    alert(`Player ${currentPlayer} wins`);
    reset();
  }, 100);
};

const runDrawEvent = () => {
  setTimeout(() => {
    alert("Draw");
    reset();
  }, 100);
};

const getCellIndex = (index, rows) => {
  let row = Math.floor(index / rows);
  let col = index % rows;
  return [row, col];
};

const cellClickHandler = (event, index) => {
  let cellElement = event.target;
  if (cellElement) {
    const valueElement = cellElement.querySelector(".value");
    if (
      valueElement &&
      valueElement.textContent !== "X" &&
      valueElement.textContent !== "O"
    ) {
      cellElement.classList.add(`cell--${currentPlayer}`);
      turnsCounter++;
      valueElement.textContent = currentPlayer;
      const [row, col] = getCellIndex(index, rows);
      cellMatrix[row][col] = currentPlayer;
    }
  }
  if (checkWin()) {
    runWinEvent(currentPlayer);
  } else if (turnsCounter === rows ** 2) {
    runDrawEvent();
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};
const createCell = (index) => {
  let cellString = `<div class="cell" role="button" tabindex="${
    index + 1
  }"><span class="value"></span></div>`;
  let cellElement = document.createRange().createContextualFragment(cellString);
  cellElement.querySelector(".cell").onclick = (event) =>
    cellClickHandler(event, index);
  cellElement.querySelector(".cell").onkeydown = (event) =>
    event.key === "Enter" ? cellClickHandler(event, index) : true;
  return cellElement; // Return the cellElement
};

const createBoard = (rows) => {
  cellMatrix = Array.from({ length: rows }, () => Array(rows).fill(0));
  let board = document.createElement("div");
  board.classList.add("board");
  for (let index = 0; index < rows ** 2; index++) {
    board.appendChild(createCell(index)); // Append the cellElement returned by createCell
  }
  container.insertAdjacentElement("afterbegin", board);
  document.documentElement.style.setProperty("--grid-rows", rows);
};

const deleteBoard = () => {
  let board = document.querySelector(".board");
  if (board) {
    board.remove();
  }
};

const createRowsField = () => {
  let rowsField = document.createElement("input");
  rowsField.classList.add("rowsField");
  rowsField.placeholder = "Enter number of rows";
  container.insertAdjacentElement("beforeend", rowsField);
  return rowsField;
};

const rowsFieldHandler = () => {
  deleteBoard();
  rows = parseInt(rowsField.value);
  createBoard(rows);
};

let rowsField = createRowsField();
rowsField.addEventListener("input", rowsFieldHandler);
resetButton.addEventListener("click", reset);
