const Player = require("./player").default;

class Board {
  constructor() {
    this.snakes = [];
    this.ladders = [];
    this.currentPlayer = 0;
    this.players = [];
  }
  addSnakes([head, tail]) {
    if (head !== 100) {
      this.snakes.push([head, tail]);
    }
  }
  addLadders([start, end]) {
    this.ladders.push([start, end]);
  }
  movePlayer(player, steps) {
    let initialPosition = player.position;
    if (player.position + steps <= 100) {
      player.position = player.position + steps;
    }
    if (player.position === 100) {
      console.log(`${player.name} won!!!`);
      return 1;
    }
    while (true) {
      let found = false;
      for (let e of this.snakes) {
        if (e[0] === player.position) {
          player.position = e[1];
          found = true;
          break;
        }
      }
      if (!found) break;
    }
    while (true) {
      let found = false;
      for (let e of this.ladders) {
        if (e[0] === player.position) {
          player.position = e[1];
          found = true;
          break;
        }
      }
      if (!found) break;
    }

    this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    let finalPosition = player.position;
    console.log(
      `${player.name} moved from ${initialPosition} to ${finalPosition}.`
    );
    return 0;
  }
}
module.exports = Board;
