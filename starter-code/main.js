
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardOne === cardFour) {
//	alert("You found a match!");
//} 
//else {
//	alert("Sorry, try again.");
//}

var board = document.getElementById('game-board');

var createBoard = function() {
	for (var i=0; i<4; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
	}
}
createBoard();