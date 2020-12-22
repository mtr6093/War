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
