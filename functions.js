var prompt = require('prompt');
var play1 = 0;
var play2 = 0;

// exports the ask function to keep the original file clean
module.exports ={
  ask: function ask(){
    prompt.start();
    prompt.get(['player1', 'player2'], function (err, result){
      decide(result.player1, result.player2)
  })}
}

// figures out which player has won using rps rules, passes winner to function judge
function decide(input1, input2){
  if (input1 == "rock" && input2 == "scissors"){
    console.log("player1 wins!");
    var winner = "player 1";
  }
  else if (input1 == "scissors" && input2 == "rock"){
    console.log("player1 wins!");
    var winner = "player1";
  }
  else if (input1 == "paper" && input2 == "rock"){
    console.log("player1 wins");
    var winner = "player1"
  }
  else{ 
    console.log("player2 wins");
    var winner = "player2"
  } 
  track(winner)
}

// gets input, starts the whole ballrolling
function ask(){
    prompt.start();
    prompt.get(['player1', 'player2'], function (err, result){
      decide(result.player1, result.player2);
  })}

// adds to the score of winner
function track(winner){
  if (winner == "player1"){
    play1 +=1;
  }
  else{
    play2 +=1;
  }
  judge()
}

// ends the match when one player wins three games
function judge(){
  if (play1 == 3 || play2 == 3){
    console.log("The match has ended!");
  }
  else{ask()}
}