/*console.log("Up and running!");
let cardOne = "queen"
let cardTwo = "queen"
let cardThree = "king"
let cardFour = "king"
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);*/

let cards = ["queen","queen","king","king"];
let cardsInPlay = [];
let cardId;
cardsInPlay.push(cards[cardId]);

function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard(cardId){
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	
};

flipCard(0);
flipCard(2);



/*cardOne = cards[0];
cardsInPlay.push(cardOne);

cardTwo = cards[1];
cardsInPlay.push(cardTwo)

if (cardsInPlay === cardOne)
{
console.log('User flipped queen.');
}
//console.log("User flipped queen")




function hotOrNot(temp){
	if (temp >= 70){
	return "Hot!";}
	else{
		return "Not hot!";
	}
	};
*/
 