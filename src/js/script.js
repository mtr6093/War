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

// for (let index = 0; index < 50; index++) {
//   if (player1Hand.length==0 || player2Hand.length==0) {
//     break;
//   }
//   else{
//     play()
//     // console.log(player1Hand.length)
//     // console.log(player2Hand.length) 
    

//   }
  
// }

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
    player2Hand.splice(0,1)
  } else if (player2Hand.length==0){
    console.log("Player2 out of cards")
  } 
}



for (let index = 0; index < 50; index++) {
  if (player1Hand.length==0 || player2Hand.length==0) {
    break;
  }
  else{
    play()
    roundWinner()
  }
  
}


// console.log("roundPlayed", playedP1)
//console.log(playedP1[0])
//console.log(playedP2[0])
console.log("p1", player1Hand[0])
console.log("P2", player2Hand[0])
//  console.log(playedP1[0]["score"])
//  console.log(playedP2[0]["score"])


function roundWinner () {
  if (playedP1[0]["score"] > playedP2[0]["score"]) {
    console.log("Player1 wins. player1 played ", playedP1[0], "and player 2 played ", playedP2[0])
    player1Hand.push(playedP1[0])
    player1Hand.push(playedP2[0])
    playedP1.pop()
    playedP2.pop()

    console.log("player1 has "+ player1Hand.length + " cards remaining. Player 2 has " + player2Hand.length + "cards remaining.")
  } else if (playedP2[0]["score"] > playedP1[0]["score"]) {
    console.log("Player2 wins. player2 played ", playedP2[0], "and player 1 played", playedP1[0])
    player2Hand.push(playedP2[0])
    player2Hand.push(playedP2[0])
    playedP1.pop()
    playedP2.pop()
    console.log("player2 has "+ player2Hand.length + " cards remaining. Player 1 has " + player1Hand.length + "cards remaining.")
  } else if (playedP2[0]["score"] == playedP1[0]["score"]) {
    console.log("It is a tie, War!")
  }
}


// roundWinner()

