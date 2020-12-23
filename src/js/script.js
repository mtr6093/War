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

let shuffled = [...cards] //Array of shuffled cards

function shuffler(array) { //Function that shuffles cards and puts them in the shuffled array
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
shuffler(shuffled)
//console.log("Shuffled", shuffled)

let player1Hand = [] //array of player 1 cards
let player2Hand = [] //array of player 2 cards


function deal (){ // function that deals the deck to player1 and player2
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
//console.log("Player1", player1Hand)
//console.log("Player2", player2Hand)
console.log(player1Hand[0])
let playedP1 = []
let playedP2 = []

function play () {
  if (player1Hand.length>0) {
    playedP1.push((player1Hand)[0])
    player1Hand.splice(0,1)
  } else if (player1Hand.length==0){
    console.log("Player1 out of cards")
  } 
  if (player2Hand.length>0) {
    playedP2.push((player2Hand)[0])
  } else if (player2Hand.length==0){
    console.log("Player1 out of cards")
  } 
}
play()

console.log("roundPlayed", playedP1)
console.log(playedP1[0])
console.log(playedP2[0])
console.log(player1Hand[0])