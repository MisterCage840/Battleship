import { gameboard } from "./gameboard.js";
import { ship } from "./ship.js";

let gameboard1 = gameboard();
let gamecells = gameboard1.getGameboard();

let ship1 = ship("frank", 2);
gameboard1.placeShip(ship1);

for (let i = 0; i < gamecells.length; i++)
  for (let j = 0; j < gamecells[i].length; j++)
    if (gamecells[i][j] == "frank") gameboard1.receiveAttack(i, j);

test("check ship status", () => {
  expect(ship1.getHits()).toBe(2);
});

test("New Gameboard Game cells", () => {
  let status = false;
  let count = 0;
  let gamecells = gameboard1.getGameboard();
  for (let row of gamecells)
    for (let cell of row) {
      if (cell == "hit") count++;
      if (count >= 2) status = true;
    }
  expect(status).toStrictEqual(true);
});

test("New Gameboard with no ships", () => {
  expect(gameboard1.getShipObjects()).toStrictEqual([ship1]);
});

test("check if all ships are sunk", () => {
  expect(gameboard1.checkShips()).toBe(true);
});
