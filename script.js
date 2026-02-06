////Tic-Tac-Toe game
//// 1) create table
//// 2) input the player and CPU objects so their choices load up in the board (first in console)
//// 3) create game systems to count wins from each players and set a max of 5 rounds

const GameBoard =(function () {
  const maker = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  function markSetter(index,mark){
    board[index]= mark
    return board
  }

  function gridMaker() {
    let output = "";
    for (let i = 0; i < maker.board.length; i++) {
      output += maker.board[i] + " ";

      if ((i + 1) % 3 === 0) {
        output += "\n";
      }
    }
    return output
  }

  gridMaker(maker.board);


  return {
    markSetter,
    gridMaker
  }
})();



function game(p1, p2) {}


board = GameBoard.gridMaker()
console.log(board)


GameBoard.markSetter(1,'hi')
console.log(board)



