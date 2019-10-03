function LocalStorageManager() {
  this.bestScore = 0;
  this.gameState = null;
}

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  return this.bestScore;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.bestScore = score;
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  return this.gameState;
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  thisgameState = gameState;
};

LocalStorageManager.prototype.clearGameState = function () {
  this.gameState = null;
};
