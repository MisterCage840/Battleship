import { ship } from "./ship.js";

const gameboard = () => {
  let gamecells = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  let shipObjects = [];

  const placeShip = (ship) => {
    shipObjects.push(ship);

    let coordinate = Math.floor(Math.random() * 9);
    const shipLength = ship.getLength();
    const shipDirection = ship.getDirection();
    let shipName = ship.getShipName();

    if (shipDirection == "horizontal") {
      if (shipLength + coordinate > 9) {
        for (let i = shipLength; i > 0; i--) {
          gamecells[i][coordinate] = shipName;
        }
      } else {
        for (let i = 0; i < shipLength; i++)
          gamecells[i][coordinate] = shipName;
      }
    } else if (shipDirection == "vertical") {
      if (shipLength + coordinate > 9) {
        for (let i = shipLength; i > 0; i--) {
          gamecells[coordinate][i] = shipName;
        }
      } else {
        for (let i = 0; i < shipLength; i++)
          gamecells[coordinate][i] = shipName;
      }
    }
  };

  const receiveAttack = (x, y) => {
    console.log(x + " " + y);
    if (gamecells[x][y] == null) gamecells[x][y] = "X";
    else if (gamecells[x][y] == "hit") {
    } else {
      shipObjects.forEach((ship) => {
        if (ship.getShipName() == gamecells[x][y]) {
          ship.hit();
          gamecells[x][y] = "hit";
        }
      });
    }
  };

  const checkShips = () => {
    let allShipsSunk = true;
    shipObjects.forEach((ship) => {
      if (ship.getHits() < ship.getLength()) allShipsSunk = false;
    });
    return allShipsSunk;
  };

  const getGameboard = () => gamecells;
  const getShipObjects = () => shipObjects;

  return { getGameboard, placeShip, receiveAttack, checkShips, getShipObjects };
};

export { gameboard };
