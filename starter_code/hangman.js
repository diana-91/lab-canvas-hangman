var hangman;

function Hangman() {
  this.words = ['paciencia','pesadilla','ironhack'];
  this.secretWord='';
  this.letters = [];
}

Hangman.prototype._getWord = function () {
  var word = Math.floor(Math.random() * this.words.length);
  return this.secretWord = this.words[word];

};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return typeof(keyCode) === string;
};

Hangman.prototype._checkClickedLetters = function(key) {

};

Hangman.prototype._addCorrectLetter = function(i){

};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
