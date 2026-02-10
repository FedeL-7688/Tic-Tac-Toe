////Tic-Tac-Toe game
//// 1) create table
//// 1.2) create a way to replace a number with an X or O
//// 1.2.1) 
//// 2) input the player and CPU objects so their choices load up in the board (first in console)
//// 3) create game systems to count wins from each players and set a max of 5 rounds


const GameBoard =(function () {
  const maker = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  function markSetter(index,mark){
    maker.board[index]= mark;
    
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

  function gridDel(place){
   let index = maker.board.indexOf(place)
    maker.board.splice(index,1)
  }
  gridMaker(maker.board);


  return {
    gridDel,
    markSetter,
    gridMaker
  }


})();

const player = function(name){
 const Pname = name
 let turn = 0
  getTurn = function(){
    console.log(turn)
  }
  addTurn = function() {turn++}
 return{
  Pname,getTurn,addTurn
 }
}

function game(p1, p2) {
  console.log("Welcome to tic tac toe")
  let player1 = player(p1)
  let player2 = player(p2)
function play(player)
{console.log(`player ${player.Pname}, make your move`)
console.log("available options: " )
}
const score = function(){
 
}
player1.addTurn()
player1.addTurn()
player1.getTurn()


}
game("pepe","juan")




GameBoard.gridMaker()
GameBoard.gridDel(2)
GameBoard.gridMaker()







// console.log("\x1b[37mTurno del jugador X\x1b[0m");