console.log("hello!");

class Card {  //Complete deck
    constructor (suit, rank, score) {
        this.suit=suit
        this.rank=rank
        this.score=score
    }
  }

let suits = ['hearts', 'spades', 'clubs', 'diamonds']
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

let cards = []

function create (){ //Function that creates complete deck (Card)
    for (let i=0; i<suits.length; i++) {
      for (let j=0; j<ranks.length; j++) {
         cards.push(new Card(suits[i], ranks[j], j+2))
      }
    }
  }
  create()
//console.log(cards)

let shuffled = [...cards]

function shuffler(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffler(shuffled)
console.log("Shuffled", shuffled)

let player1Hand = []
let player2Hand = []


function deal (){
  for (let i=0; i<shuffled.length; i++){
    if ((i+2)%2==0) {
      player1Hand.push(shuffled[i])
    }
    else {
      player2Hand.push(shuffled[i])
    }
  }
}
deal(shuffled)
console.log("Player", player1Hand)