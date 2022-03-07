const table = document.getElementById("table");
const restartButton = document.getElementById("restartButton");



//state

const ticTacToe = {
  players: ["x", "o"],
  board: [
    [null, null, null],

    [null, null, null],

    [null, null, null],
  ],
  currentPlayer: "x",

  counter: 0,
};
//create player
const player = (name) => {
  name = name;
  return { name };
};
let playerX = player("");
let playerY = player("");

//fix this button!!
restartButton.addEventListener("click", clearBoard);

//I had this logging working for x but broke it somewhere...
function checkRowX(x = ticTacToe.board) {
  for (let i = 0; i < x.length; i++) { 
    if (x[i].join("") = "xxx") {
      alert("X Beats O");
    }
  }
}

// look into 'transpose' function to use for checkColumn 

function transpose() {
  let arr = [];
  for (let i = 0; i < ticTacToe.board.length; i++) {
    arr.push([]);
    for (let j = 0; j < ticTacToe.board.length; j++) {
      arr[i].push(ticTacToe.board[j][i]);
    }
  }
  return arr;
}

function checkForWinner() {
  checkColumn();
  checkRow();
  //checkDiagnal()
}

function checkColumn() {
  let newArray = transpose();
  console.log(newArray);
  checkRow(newArray);
}

function checkDiagnal() {}

//add button
function clearBoard() {
  ticTacToe.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ] 
  
}

function renderBoard() {
  for (let i = 0; i < ticTacToe.board.length; i++) {
    // console.log("Im in the outer for loop and I is:", i);
    for (let j = 0; j < ticTacToe.board.length; j++) {
      // console.log("Im in the inner for loop and j is:", j);
      const currCell = document.getElementById(`${i}${j}`);
      currCell.innerText = ticTacToe.board[i][j];
    }
  }
}

//if (line 50) there is not inner text move foward in function(line 51).
table.addEventListener("click", function (event) {
  if (!event.target.innerText) {
    const row = event.target.id[0];
    const col = event.target.id[1];
    ticTacToe.board[row][col] = ticTacToe.currentPlayer;
    renderBoard();
    // console.log(ticTacToe.board);
    if (ticTacToe.currentPlayer === "x") {
      ticTacToe.currentPlayer = "o";
      ticTacToe.counter++;
    } else {
      ticTacToe.currentPlayer = "x";
    }
    // console.log(ticTacToe.counter);
    if (ticTacToe.counter >= 3) {
      checkForWinner();
    }
  }

  // checkRow(ticTacToe.board[0], "x");
  // checkRow(ticTacToe.board[0], "o");
  // checkRow(ticTacToe.board[1], "x");
  // checkRow(ticTacToe.board[1], "o");
  // checkRow(ticTacToe.board[2], "x");
  // checkRow(ticTacToe.board[2], "o");
})
