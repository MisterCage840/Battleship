const ship = (shipName, length) => {
  let hits = 0;
  let isSunk = false;
  let direction;

  const hit = () => hits++;
  const toggleSunk = () => (isSunk = true);

  const getDirection = () => {
    let randomiser = Math.round(Math.random());
    direction = randomiser == 0 ? "horizontal" : "vertical";
    return direction;
  };

  const getLength = () => length;
  const getHits = () => hits;
  const getSunk = () => isSunk;
  const getShipName = () => shipName;

  return {
    getLength,
    getHits,
    getSunk,
    hit,
    toggleSunk,
    getDirection,
    getShipName,
  };
};

export { ship };
