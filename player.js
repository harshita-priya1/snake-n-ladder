class Player {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

module.exports = Player;
