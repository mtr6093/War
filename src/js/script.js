console.log("hello!"); //Entering player names
let player1 = prompt("Name of player 1?")
let player2 = prompt("Name of player 2?")

class Card {  //Complete deck
    constructor (suit, rank, score) {
        this.suit=suit
        this.rank=rank
        this.score=score
    }
  }

let suits = ['hearts', 'spades', 'clubs', 'diamonds']
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

let cards = [] //array of cards built from the create function

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
    console.log("Shuffling")
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
shuffler(shuffled)


let player1Hand = [] //array of player 1 cards
let player2Hand = [] //array of player 2 cards


function deal (){ // function that deals the deck to player1 and player2
  console.log("Dealing")
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

let playedP1 = [] //card played each round by player 1
let playedP2 = []  //card played each round by player 2
let warHand = []   //extra 3 cards plus caard played by player1&2 that tied to go to winner of round of war

function play () {  //Function for normal round play
  if (player1Hand.length>0) {
    playedP1.push((player1Hand)[0])
    player1Hand.splice(0,1)
  } else if (player1Hand.length==0){
    console.log(player1, "is out of cards.", player2 , "Wins!")
  } 
  if (player2Hand.length>0) {
    playedP2.push((player2Hand)[0])
    player2Hand.splice(0,1)
  } else if (player2Hand.length==0){
    console.log(player2, "is out of cards.", player1, "Wins!")
  } 
}

for (let index = 0; index < 10000; index++) {   //Loop for playing the game
  if (player1Hand.length==0) {
    console.log(player1, "is out of cards", player2, "wins.")
    break
  }
  else if (player2Hand.length==0) {
    console.log(player2, "is out of cards", player1, "wins.")
    break
  }
  else{
    play()
    roundWinner()
  }  
}

function roundWinner () {    //function for determining the winner of each round
  if (playedP1[0]["score"] > playedP2[0]["score"]) {
      console.log(player1, "wins.", player1,"played ", playedP1[0], "and",player2, "played ", playedP2[0])
      player1Hand.push(playedP1[0])
      player1Hand.push(playedP2[0])
      playedP1.pop()
      playedP2.pop()
      console.log(player1, "has", player1Hand.length, " cards remaining.", player2, "has ", player2Hand.length, "cards remaining.")
  } else if (playedP2[0]["score"] > playedP1[0]["score"]) {
      console.log(player2, "wins.", player2, "played ", playedP2[0], "and", player1, "played", playedP1[0])
      player2Hand.push(playedP1[0])
      player2Hand.push(playedP2[0])
      playedP1.pop()
      playedP2.pop()
      console.log(player2, "has", player2Hand.length, "cards remaining.", player1, "has", player1Hand.length, "cards remaining.")
  } else {
      console.log("WAR! It is a tie", player2, ". played ", playedP2[0], "and", player1, "played", playedP1[0], ".")
      warHand.push(playedP1[0])
      warHand.push(playedP2[0])
      playedP1.pop()
      playedP2.pop()
      if (player1Hand.length>=4 && player2Hand.length>=4) {
        warHand.push(player1Hand[0])
        warHand.push(player1Hand[1])
        warHand.push(player1Hand[2])
        player1Hand.splice(0,3)
        warHand.push(player2Hand[0])
        warHand.push(player2Hand[1])
        warHand.push(player2Hand[2])
        player2Hand.splice(0,3)
        war()
      } else if (player1Hand.length<4) {
        console.log(player1, "is out of cards.", player2 , "Wins!")
       
      } else if (player2Hand.length<4) {
        console.log(player2, "is out of cards.", player1 , "Wins!")
      }
  }
}


function war() {  //Function called if round is a tie 
    play()
    warWinner()
}

function warWinner () {  //function for determining winner of round of war
  if (playedP1[0]["score"] > playedP2[0]["score"]) {
      console.log(player1, "wins war.", player1,"played ", playedP1[0], "and",player2, "played ", playedP2[0])
      player1Hand.push(playedP1[0])
      player1Hand.push(playedP2[0])
      playedP1.pop()
      playedP2.pop()
      while (warHand.length>0) {
        player1Hand.push(warHand[0])
        warHand.splice(0,1)
      }
      console.log(player1, "has", player1Hand.length, " cards remaining.", player2, "has ", player2Hand.length, "cards remaining.")
  } else if (playedP2[0]["score"] > playedP1[0]["score"]) {
      console.log(player2, "wins war.", player2, "played ", playedP2[0], "and", player1, "played", playedP1[0])
      player2Hand.push(playedP1[0])
      player2Hand.push(playedP2[0])
      playedP1.pop()
      playedP2.pop()
      while (warHand.length>0) {
        player2Hand.push(warHand[0]);
        warHand.splice(0,1)
      }
      console.log(player2, "has", player2Hand.length, "cards remaining.", player1, "has", player1Hand.length, "cards remaining.")
  } else {
      console.log("WAR! It is a tie", player2, ". played ", playedP2[0], "and", player1, "played", playedP1[0], ".")
      warHand.push(playedP1[0])
      warHand.push(playedP2[0])
      playedP1.pop()
      playedP2.pop()
      warHand.push(player1Hand[0])
      warHand.push(player1Hand[1])
      warHand.push(player1Hand[2])
      player1Hand.splice(0,3)
      warHand.push(player2Hand[0])
      warHand.push(player2Hand[1])
      warHand.push(player2Hand[2])
      player2Hand.splice(0,3)
      war()
  }
}