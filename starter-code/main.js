
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//if (cardOne === cardFour) {
//	alert("You found a match!");
//} 
//else {
//	alert("Sorry, try again.");
//}

var board = document.getElementById('game-board');

var createCards = function() {
	for (var i = 0; i< cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = "<img src='http://i.imgur.com/d9mGerk.png'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/WLfzFti.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

//alerts whether or not match was found
function isMatch(cards){
	if (cards[0] === cards[1]) {
		alert("You Found A Match!");
	} else {
		alert("Sorry, try again.");
	}
}

createCards();