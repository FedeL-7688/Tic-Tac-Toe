////Tic-Tac-Toe game
//// 1) create table
//// 1.2) create a way to replace a number with an X or O
//// 1.2.1)
//// 2) input the player and CPU objects so their choices load up in the board (first in console)
//// 3) create game systems to count wins from each players and set a max of 5 rounds

const GameBoard = (function () {
  const maker = {
    board: [1,2,3,4,5,6,7,8,9],
  };
  function gridSetter(index, mark) {
    maker.board[index] = mark;
  }
  function gridMaker() {
    let output = "";
    for (let i = 0; i < maker.board.length; i++) {
      output += maker.board[i] + " ";

      if ((i + 1) % 3 === 0) {
        output += "\n";
      }
    }
    return output;
  }
   gridReturn = () => maker.board;
  

  gridMaker(maker.board);

  return {
    gridReturn,
    gridSetter,
    gridMaker,
  };
})();

const player = function (name) {
  let pName = name
  let turn = 0
  const getName = ()=> pName
  const getTurn =  () => turn;
  const addTurn =  () => turn++;
  const Select = (el) => choice = el;
  const getSelect = ()=> choice;
 
  return {
    getName,
    getTurn,
    addTurn,
    Select,
    getSelect,
  };
};

function game(p1, p2) {
  let ActualPlayer = ""
  generalTurn = 0
  console.log("Welcome to tic tac toe");
  let player1 = player(p1);
  let player2 = player(p2);
  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkPattern(board){
    return patterns.some(pattern=>{
      const[a,b,c] = pattern;
      return (board[a]===board[b]
          && board[b]===board[c]
          && typeof board[a]==="string")
    })
  }

  function checkWinner(){
  if( checkPattern(GameBoard.gridReturn())){
    return(` \x1b[32m${ActualPlayer}\x1b[0m has won!` )
    
  }
  else {return "game keeps going" }
  
  }
 addGTurn = ()=>  generalTurn++
  function play(player) {
    player.addTurn()
    console.log("Turn #",player.getTurn())
    console.log(`player \x1b[32m${player.getName()}\x1b[0m, make your move \n available options:\n`, GameBoard.gridMaker());
    console.log();
    addGTurn()
    ActualPlayer=player.getName()

    console.log("actual player is", ActualPlayer)
  
  }
  
  

  console.log(GameBoard.gridMaker());
  return {
    player1,
    player2,
    play,
    addGTurn,
    checkPattern,
    checkWinner,
  };
}
const myGame = game("pepe", "juan");
myGame.play(myGame.player1);
myGame.play(myGame.player2);


console.log(myGame.checkWinner())

// console.log("\x1b[37mTurno del jugador X\x1b[0m");
