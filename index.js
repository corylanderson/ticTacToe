//row and columns (think arrays 2d)

//beginning of object
const ticTacToe = {
  board: [
    [null, null, null],

    [null, null, null],

    [null, null, null],
  ],
  /* winning conditions will come from positions definined within the array of arrays. win condition is met if any player occupies the following array coordiates: 

x:
[0,0] [0,1] [0,2] - can i just log the whole array? same with midde and bottom row?

y:
[0,0] [1,0] [2,0] - can i group these as well vertically? or do they need to be individually acknowledged - see x note for contrast? 

bit X: 
[0,0] [1,1], [2,2]
[0,2] [1,1], [2,0]


*/

  //move method
  move: function (character, rowNumber, columnNumber) {},

  //clear method - can i call the original board?
  clear: function (board) {},
};
//end of object
