import { gameboard } from "./gameboard.js";

const player = (type) => {
  const playerGameboard = gameboard();

  const getGameBoard = () => playerGameboard;
  const getPlayerType = () => type;

  return { getPlayerType, getGameBoard };
};

export { player };
