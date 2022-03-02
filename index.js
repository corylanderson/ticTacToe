//row and columns (think arrays 2d)

//beginning of object

const ticTacToe = {
  players: ["x", "o"],
  board: [
    [null, null, null],

    [null, null, null],

    [null, null, null],
  ],
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

// table.addEventListener("click", clickTest);

/*focus on event listeners for putting x or o in box - refer to pixelate and whack a mole. */

//move method and event listener

function clickTest(Event) {
  console.log("clicked");
}

// playerMove: function (player, rowNumber, columnNumber) {},

//clear method - can i call the original board?

function clearBoard() {
  ticTacToe.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}
