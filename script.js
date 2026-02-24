
let setting = document.querySelector("#setter");
let info = document.querySelector(".info");
const gameGrid = document.querySelector(".grid")

// setting.addEventListener("click", (e) => {
//   e.preventDefault();

//   const p1Container = document.querySelector(".p1");
//   const p1NameInput = document.querySelector("#player1");
//   const p1MarkInput = document.querySelector("#mark1");
//   const p1Para = p1Container.querySelector("p");

//   p1Para.textContent = `Player 1: ${p1NameInput.value} (${p1MarkInput.value})`;

//   p1Para.hidden = false;

//   p1NameInput.hidden = true;
//   p1MarkInput.hidden = true;

//   const p2Container = document.querySelector(".p2");
//   const p2NameInput = document.querySelector("#player2");
//   const p2MarkInput = document.querySelector("#mark2");
//   const p2Para = p2Container.querySelector("p");

//   p2Para.textContent = `Player 2: ${p2NameInput.value} (${p2MarkInput.value})`;

//   p2Para.hidden = false;

//   p2NameInput.hidden = true;
//   p2MarkInput.hidden = true;
//   gameGrid.classList.remove("hidden");
  

// });

const display = function () {
  const grid = document.querySelector(".grid");
  const renderGrid=()=>{ 
    console.log("renderGrid executed")
    grid.textContent = ""

  GameBoard.gridReturn().forEach((cell,index) => {
    console.log("celda:", cell, "index:", index);
    let gridItem = document.createElement("div");
    gridItem.classList.add("cell");
    gridItem.textContent = cell;

    gridItem.addEventListener("click", () => {
      const result = game.playTurn(index);
      renderGrid()

      if (result){
        alert(result)
      }
    });

    grid.append(gridItem);
  });
  
  }
  
  const setupPlayers = () => {
    setting.addEventListener("click", (e) => {

      e.preventDefault();

  const p1Container = document.querySelector(".p1");
  const p1NameInput = document.querySelector("#player1");
  const p1MarkInput = document.querySelector("#mark1");
  const p1Para = p1Container.querySelector("p");

  p1Para.textContent = `Player 1: ${p1NameInput.value} (${p1MarkInput.value})`;

  p1Para.hidden = false;

  p1NameInput.hidden = true;
  p1MarkInput.hidden = true;

  const p2Container = document.querySelector(".p2");
  const p2NameInput = document.querySelector("#player2");
  const p2MarkInput = document.querySelector("#mark2");
  const p2Para = p2Container.querySelector("p");

  p2Para.textContent = `Player 2: ${p2NameInput.value} (${p2MarkInput.value})`;

  p2Para.hidden = false;

  p2NameInput.hidden = true;
  p2MarkInput.hidden = true;
  gameGrid.classList.remove("hidden");
  
      

      game.start(p1NameInput.value, p1MarkInput.value, p2NameInput.value, p2MarkInput.value);

      renderGrid();
    });
  };

  return {
    setupPlayers,
  };
};

const GameBoard = (function () {
  const maker = {
    board: ["", "", "", "", "", "", "", "", ""],
  };
  function gridSetter(index, mark) {
    if (maker.board[index]===""){
    maker.board[index] = mark;
    return true
  }
    
  return false
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
  gridReset = ()=>  maker.board = ["", "", "", "", "", "", "", "", ""];
  gridMaker(maker.board);
  
  return {
    gridReturn,
    gridSetter,
    gridMaker,
  };
})();

const player = function (name, mark) {
  let pName = name;
  let pMark = mark;
  const getName = () => pName;
  const getMark = () => pMark;
  return {
    getName,
    getMark,
  };
};

const  game = (function() {
  let player1
  let player2
  let currentPlayer
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
  
  const start = (p1Name, p1Mark, p2Name, p2Mark) => {
     player1 = player(p1Name, p1Mark);
     player2 = player(p2Name, p2Mark);
     currentPlayer = player1;
  };
const playTurn = (index) => {
  console.log(currentPlayer);
console.log(typeof currentPlayer);
    if (GameBoard.gridSetter(index, currentPlayer.getMark())) {
      if (checkWinner()) {
        return `${currentPlayer.getName()} won!`;
      }
      switchPlayer();
    }
    return null;
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };
 
  const checkWinner = () => {
    const board = GameBoard.gridReturn();
    return patterns.some(([a,b,c]) =>
      board[a] &&
      board[a] === board[b] &&
      board[b] === board[c]
    );
  };

  const getCurrentPlayer = () => currentPlayer;


 

  return {
    playTurn,
    start,
    getCurrentPlayer,
  };
} )()
displayController = display()
displayController.setupPlayers()