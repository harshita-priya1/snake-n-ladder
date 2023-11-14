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
    if (player.position + steps <= 100) {
      player.position = player.position + steps;
    }
    if (player.position === 100) {
      console.log(`${player.name} won!!!`);
    }
    while (true) {
      let found = false;
      for (e of this.snakes) {
        if (e[o] === player.position) {
          player.position = e[1];
          found = true;
          break;
        }
      }
      if (!found) break;
    }
    while (true) {
      let found = false;
      for (e of this.ladders) {
        if (e[o] === player.position) {
          player.position = e[1];
          found = true;
          break;
        }
      }
      if (!found) break;
    }
  }
}
module.exports = Board;
