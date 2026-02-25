let setting = document.querySelector("#setter");
let info = document.querySelector(".info");
const gameGrid = document.querySelector(".grid");

const display = function () {
  const grid = document.querySelector(".grid");
  const renderGrid = () => {
    grid.textContent = "";

    GameBoard.gridReturn().forEach((cell, index) => {
      console.log("celda:", cell, "index:", index);
      let gridItem = document.createElement("div");
      gridItem.classList.add("cell");
      gridItem.textContent = cell;

      gridItem.addEventListener("click", () => {
        const result = game.playTurn(index);
        renderGrid();

        if (result) {
          grid.textContent = ""
          grid.classList.remove("grid")
          grid.classList.add("results")
          
          grid.textContent = result;
        }
      });

      grid.append(gridItem);
    });
  };

  const setupPlayers = () => {
    setting.addEventListener("click", (e) => {
      e.preventDefault();
    setting.hidden = true
    info.classList.remove("info")
    info.classList.add("playInfo")
      const p1Container = document.querySelector(".p1");
      const p1NameInput = document.querySelector("#player1");
      const p1MarkInput = document.querySelector("#mark1");
      const p1Para = p1Container.querySelector("p");
      const p1Label = p1Container.querySelector('label[for="p1mark"]')

      p1Para.textContent = ` ${p1NameInput.value} (${p1MarkInput.value})`;
      p1Para.style.padding = "5px"
      p1Para.style.fontSize = "25px"

      p1Para.hidden = false;

      p1Label.hidden = true;
      p1NameInput.hidden = true;
      p1MarkInput.hidden = true;

      const p2Container = document.querySelector(".p2");
      const p2NameInput = document.querySelector("#player2");
      const p2MarkInput = document.querySelector("#mark2");
      const p2Para = p2Container.querySelector("p");
      const p2Label = p2Container.querySelector('label[for="p2mark"]')

      p2Para.textContent = `${p2NameInput.value} (${p2MarkInput.value})`;
      p2Para.style.padding = "5px"
      p2Para.style.fontSize = "25px"

      p2Para.hidden = false;

      p2NameInput.hidden = true;
      p2MarkInput.hidden = true;
      p2Label.hidden = true;
      gameGrid.classList.remove("hidden");
      
      resetCont = document.querySelector(".resetCont");
      if(!resetCont.querySelector(".reset")){
      resetBtn = document.createElement("button");
      resetBtn.classList.add("reset");
     
      resetBtn.textContent = "restart";
      resetBtn.style.marginTop="30px"
      
      resetBtn.addEventListener("click", () => {
        if (!grid.classList.contains("grid")){
          grid.classList.add("grid")
          grid.classList.remove("results")
        }
        GameBoard.gridReset();
        game.start(p1NameInput.value,
        p1MarkInput.value,
        p2NameInput.value,
        p2MarkInput.value,)
        renderGrid()
       
      });
      resetCont.append(resetBtn);
    }

      game.start(
        p1NameInput.value,
        p1MarkInput.value,
        p2NameInput.value,
        p2MarkInput.value,
      );

      renderGrid();
    });
  };
  const displayResults = function(){

  } 
 

  return {
    setupPlayers,
    displayResults,
  };
};

const GameBoard = (function () {
  const maker = {
    board: ["", "", "", "", "", "", "", "", ""],
  };
  function gridSetter(index, mark) {
    if (maker.board[index] === "") {
      maker.board[index] = mark;
      return true;
    }

    return false;
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
  gridReset = () => (maker.board = ["", "", "", "", "", "", "", "", ""]);
  gridMaker(maker.board);

  return {
    gridReturn,
    gridSetter,
    gridMaker,
    gridReset,
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

const game = (function () {
  let player1;
  let player2;
  let currentPlayer;
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
    if (GameBoard.gridSetter(index, currentPlayer.getMark())) {
      if (checkWinner()) {
        return `${currentPlayer.getName()} wins!`;
      }
      if (checkTie()) {
        return `It's a tie!!!`;
      }
      switchPlayer();
    }
    return null;
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };
  const checkTie = () => {
    return !GameBoard.gridReturn().includes("");
  };
  const checkWinner = () => {
    const board = GameBoard.gridReturn();
    return patterns.some(
      ([a, b, c]) => board[a] && board[a] === board[b] && board[b] === board[c],
    );
  };

  const getCurrentPlayer = () => currentPlayer;

  return {
    playTurn,
    start,
    getCurrentPlayer,
  };
})();
displayController = display();
displayController.setupPlayers();
