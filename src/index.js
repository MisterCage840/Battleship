import { gameboard } from "./gameboard.js";
import { ship } from "./ship.js";
import { player } from "./player.js";

import "./style.css";

const p1gameboardGrid = document.querySelector(".p1gameboardGrid");
const p2gameboardGrid = document.querySelector(".p2gameboardGrid");
const winnerDiv = document.querySelector(".winnerDiv");

let gameTurn = "player1";

const toggleGameTurn = () => {
  gameTurn = gameTurn == "player1" ? "player2" : "player1";
  if (gameTurn == "player1") p2gameboardGrid.style.pointerEvents = "auto";
  else p2gameboardGrid.style.pointerEvents = "none";
  // if (gameTurn == "player1") {
  //   p2gameboardGrid.style.pointerEvents = "auto";
  //   p1gameboardGrid.style.pointerEvents = "none";
  //   gameTurn = "player2";
  // } else {
  //   p1gameboardGrid.style.pointerEvents = "auto";
  //   p2gameboardGrid.style.pointerEvents = "none";
  //   gameTurn = "player1";
  // }
};

let computerAttacks = [];
const player1 = player("human");
const player2 = player("computer");

const player1GameBoard = player1.getGameBoard();
const player2GameBoard = player2.getGameBoard();

const player1cells = player1GameBoard.getGameboard();
const player2cells = player2GameBoard.getGameboard();

const frank = ship("frank", 3);
const john = ship("john", 2);
const benjamin = ship("benj", 4);
const marcen = ship("marcin", 5);

const ahmad = ship("ahmad", 3);
const abuAli = ship("abuAli", 2);
const omar = ship("omar", 4);
const aniq = ship("aniq", 5);

player1GameBoard.placeShip(frank);
player1GameBoard.placeShip(john);
player1GameBoard.placeShip(benjamin);
player1GameBoard.placeShip(marcen);

player2GameBoard.placeShip(ahmad);
player2GameBoard.placeShip(abuAli);
player2GameBoard.placeShip(omar);
player2GameBoard.placeShip(aniq);

const renderGameboard = (gameboardGrid, gameboardcells) => {
  gameboardGrid.innerHTML = "";
  for (let i = 0; i < gameboardcells.length; i++)
    for (let j = 0; j < gameboardcells[i].length; j++) {
      const div = document.createElement("div");
      if (gameboardcells[i][j] != null && gameboardcells[i][j] != "X")
        div.classList.add("shipCell");
      div.classList.add("cell");
      // div.textContent = gameboardcells[i][j];
      div.dataset.row = i;
      div.dataset.col = j;
      if (gameboardcells[i][j] == "X") div.classList.add("missCell");
      if (gameboardcells[i][j] == "hit") div.classList.add("hitCell");
      gameboardGrid.appendChild(div);
    }
};

const renderComputerGameboard = (gameboardGrid, gameboardcells) => {
  gameboardGrid.innerHTML = "";
  for (let i = 0; i < gameboardcells.length; i++)
    for (let j = 0; j < gameboardcells[i].length; j++) {
      const div = document.createElement("div");
      // if (gameboardcells[i][j] != null && gameboardcells[i][j] != "X")
      //   div.classList.add("shipCell");
      div.classList.add("cell");
      // div.textContent = gameboardcells[i][j];
      div.dataset.row = i;
      div.dataset.col = j;
      if (gameboardcells[i][j] == "X") div.classList.add("missCell");
      if (gameboardcells[i][j] == "hit") div.classList.add("hitCell");
      gameboardGrid.appendChild(div);
    }
};

renderGameboard(p1gameboardGrid, player1cells);
renderComputerGameboard(p2gameboardGrid, player2cells);

// p1gameboardGrid.addEventListener("click", (e) => {
//   const row = e.target.dataset.row;
//   const col = e.target.dataset.col;

//   player1GameBoard.receiveAttack(row, col);
//   renderGameboard(p1gameboardGrid, player1cells);
//   toggleGameTurn();
// });

const randomAttack = (gameboard) => {
  let randomNumber1 = Math.floor(Math.random() * 10);
  let randomNumber2 = Math.floor(Math.random() * 10);
  let r1r2 = randomNumber1 + "" + randomNumber2;
  while (computerAttacks.includes(r1r2)) {
    randomNumber1 = Math.floor(Math.random() * 10);
    randomNumber2 = Math.floor(Math.random() * 10);
    r1r2 = randomNumber1 + "" + randomNumber2;
  }
  computerAttacks.push(r1r2);

  gameboard.receiveAttack(randomNumber1, randomNumber2);
  return r1r2;
};

p2gameboardGrid.addEventListener("click", (e) => {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);
  if (isNaN(row) || isNaN(col)) return; // in case click is on the gap

  if (player2cells[row][col] != "X" && player2cells[row][col] != "hit") {
    player2GameBoard.receiveAttack(row, col);
    if (player2cells[row][col] == "hit") {
      renderComputerGameboard(p2gameboardGrid, player2cells);
      renderGameboard(p1gameboardGrid, player1cells);
    } else {
      renderComputerGameboard(p2gameboardGrid, player2cells);
      toggleGameTurn();

      let random = randomAttack(player1GameBoard).split("");

      while (player1cells[random[0]][random[1]] == "hit") {
        random = randomAttack(player1GameBoard).split("");
        renderGameboard(p1gameboardGrid, player1cells);
      }

      renderGameboard(p1gameboardGrid, player1cells);

      toggleGameTurn();
    }
  }

  if (player1GameBoard.checkShips() || player2GameBoard.checkShips()) {
    p1gameboardGrid.style.pointerEvents = "none";
    p2gameboardGrid.style.pointerEvents = "none";
    if (player1GameBoard.checkShips()) {
      winnerDiv.innerHTML = "";
      const par = document.createElement("p");
      const winPar = document.createTextNode("Computer wins!");
      par.appendChild(winPar);
      winnerDiv.appendChild(par);
    } else if (player2GameBoard.checkShips()) {
      winnerDiv.innerHTML = "";
      const par = document.createElement("p");
      const winPar = document.createTextNode("Player1 wins!");
      par.appendChild(winPar);
      winnerDiv.appendChild(par);
    }
  }
});
