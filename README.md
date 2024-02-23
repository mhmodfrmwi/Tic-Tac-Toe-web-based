# Tic-Tac-Toe Game

This is a simple implementation of a Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game allows two players to take turns clicking on cells to make their move and checks for a winner or a draw after each move.

## Features

- Dynamic grid size: You can specify the number of rows in the grid by entering the desired number in the provided input field.
- Responsive design: The game is designed to be responsive and playable on various screen sizes.
## How to Play

1. **Enter Rows:**
   - Enter the desired number of rows in the input field.

2. **Make a Move:**
   - Click on a cell to make a move.

3. **Check for Outcome:**
   - The game will check for a winner or a draw after each move.

4. **Start New Game:**
   - If the game is over, click the "Reset" button to start a new game.

## Code Overview

- **Board Representation:**
  - The game uses a matrix to represent the state of the board.

- **Winning Conditions:**
  - Functions like `checkRow`, `checkColumn`, `checkDiagonal`, and `checkReversedDiagonal` are used to check for a win.

- **Reset Function:**
  - The `reset` function resets the board and other game variables.

- **Event Listeners:**
  - Set up to handle cell clicks, input changes, and the reset button.

## live server
### https://tic-tac-toe-web-based.vercel.app/

## Screen-shot
![screencapture-tic-tac-toe-web-based-vercel-app-2024-02-23-13_58_42](https://github.com/mhmodfrmwi/Tic-Tac-Toe-web-based/assets/151141036/6cfd99e3-2fff-4903-9634-f7dfa233ba94)

## Getting Started

1. Clone the repository or download the ZIP file.

```bash
git clone https://github.com/mhmodfrmwi/tic-tac-toe.git
