const table = document.getElementById("table");

const winningConditions = console.log("table", table);

const ticTacToe = {
  players: ["x", "o"],
  board: [
    [null, null, null],

    [null, null, null],

    [null, null, null],
  ],
  currentPlayer: "x",
};

console.log("board start", ticTacToe.board);

/* winning conditions will come from positions definined within the array of arrays. win condition is met if any player occupies the following array coordiates: 

x:
[0][0] , [0] [1] , [0] [2] etc...

- can i just log the whole array? same with midde and bottom row?

y:
[0] [0] , [1] [0] , [2] [0] etc...

- can i group these as well vertically? or do they need to be individually acknowledged - see x note for contrast? 

bit X: 
[0] [0] [1] [1], [2] [2]
[0] [2] [1] [1], [2] [0]



*/

//add button
function clearBoard() {
  ticTacToe.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}

table.addEventListener("click", function (event) {
  console.log(event.target);
  event.target.innerText = ticTacToe.currentPlayer;

  if (ticTacToe.currentPlayer === "x") {
    ticTacToe.currentPlayer = "o";
  } else {
    ticTacToe.currentPlayer = "x";
  }
});
