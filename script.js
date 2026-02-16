////Tic-Tac-Toe game
//// 1) create table
//// 1.2) create a way to replace a number with an X or O
//// 1.2.1)
//// 2) input the player and CPU objects so their choices load up in the board (first in console)
//// 3) create game systems to count wins from each players and set a max of 5 rounds



let setting = document.querySelector("#setter")
let info = document.querySelector(".info")
setting.addEventListener("click",()=>{
  info.forEach(element => {
  elemen
});
})

const display = function () {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  GameBoard.gridReturn().forEach((element) => {
    let gridItem = document.createElement("p");
    console.log(element);
    gridItem.classList.add("cell");
    gridItem.textContent = element;
    gridItem.addEventListener("click",()=>{
      gridItem.textContent = player.getMark
      game.play
    })
    grid.append(gridItem);
  });

  function names(p1,p2){
   const play1 = document.createElement("h2")
    play1.classList.add("players")
    play1.textContent = p1
   const  play2 = document.createElement("h2")
    play2.classList.add("players")
    play2.textContent = p2
    document.querySelector(".playerContainer").append(play1,play2)
  }
  return {
    names,

  }
};

const GameBoard = (function () {
  const maker = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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


const player = function (name,mark) {
  let pName = name;
  let pMark = mark;
  let turn = 0;
  const getName = () => pName;
  const getMark = () => pMark;
  const getTurn = () => turn;
  const addTurn = () => turn++;
  const Select = (el) => (choice = el);
  const getSelect = () => choice;

  return {
    getName,
    getMark,
    getTurn,
    addTurn,
    Select,
    getSelect,
  };
};

function game(p1,mk1,p2,mk2) {

  let ActualPlayer = "";
  generalTurn = 0;
  let player1 = player(p1,mk1);
  let player2 = player(p2,mk2);
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

  function checkPattern(board) {
    return patterns.some((pattern) => {
      const [a, b, c] = pattern;
      return (
        board[a] === board[b] &&
        board[b] === board[c] &&
        typeof board[a] === "string"
      );
    });
  }

  function checkWinner() {
    if (checkPattern(GameBoard.gridReturn())) {
      return ` \x1b[32m${ActualPlayer}\x1b[0m has won!`;
    } else {
      return "game keeps going";
    }
  }
  addGTurn = () => generalTurn++;
  function play(player) {
    player.addTurn();
    addGTurn();
    
    ActualPlayer = player.getName();
  }

  return {
    player1,
    player2,
    play,
    addGTurn,
    checkPattern,
    checkWinner,
  };
}
const myGame = game('john',"x", 'rambo',"O")

display.names(
  myGame.player1.getName(),
  myGame.player2.getName()
);
// const myGame = game("pepe", "juan");
// myGame.play(myGame.player1);
// myGame.play(myGame.player2);
// GameBoard.gridSetter(4, "x");
// GameBoard.gridSetter(5, "x");
// GameBoard.gridSetter(3, "x");
// console.log(GameBoard.gridMaker(GameBoard.gridReturn));

// console.log(myGame.checkWinner());



// console.log("\x1b[37m player turn X\x1b[0m");
