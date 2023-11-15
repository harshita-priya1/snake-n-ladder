const readlineSync = require("readline-sync");

const Board = require("./board");
const Player = require("./player");

let SnLBoard = new Board();

let totalSnakes = parseInt(
  readlineSync.question("Enter the number of snakes:")
);

for (let i = 0; i < totalSnakes; i++) {
  let input = readlineSync.question(
    "Enter a value for the head and tail, separated by a blank space:"
  );
  let [head, tail] = input.split(" ");
  SnLBoard.addSnakes([parseInt(head), parseInt(tail)]);
}

let totalLadders = parseInt(
  readlineSync.question("Enter the number of Ladders:")
);

for (let i = 0; i < totalLadders; i++) {
  let input = readlineSync.question(
    "Enter a value for the start and end, separated by a blank space:"
  );
  let [start, end] = input.split(" ");
  SnLBoard.addLadders([parseInt(start), parseInt(end)]);
}

let totalPlayers = parseInt(
  readlineSync.question("Enter the number of Players:")
);

for (let i = 0; i < totalPlayers; i++) {
  let name = readlineSync.question("Enter the name:");
  let player = new Player(name);
  SnLBoard.players.push(player);
}

while (true) {
  let flag = 0;
  let currentPlayer = SnLBoard.players[SnLBoard.currentPlayer];
  let steps = currentPlayer.rollDice();
  console.log(`${currentPlayer.name} got a ${steps}.`);
  flag = SnLBoard.movePlayer(currentPlayer, steps);
  if (flag === 1) {
    console.log("Game has ended");
    break;
  }
}
