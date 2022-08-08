//global variables
var win = 0;
var loss = 0;
var ties = 0;
var computerChoices = ["R", "P", "S"];

function playRPS() {
  //user choice
  var userMove = prompt(
    "Enter R for Rock, P for Paper or S for Scissors:"
  ).toUpperCase();
  console.log(userMove);

  //computer choice
  var pcMove =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(pcMove);

  var showMove = confirm("The Computer choose " + pcMove);

  //Confirms to User that they won or Lost
  if (userMove === "R" && pcMove === "P") {
    var pcWin = confirm("You lose");
  } else if (userMove === "S" && pcMove === "P") {
    var userWin = confirm("You win");
  } else if (userMove === "P" && pcMove === "R") {
    var userWin = confirm("You win");
  } else if (userMove === "R" && pcMove === "S") {
    var userWin = confirm("You win");
  } else if (userMove === "P" && pcMove === "S") {
    var pcWin = confirm("You lose");
  } else if (userMove === "S" && pcMove === "R") {
    var pcWin = confirm("You Lose");
  } else {
    var tie = confirm("this was a tie");
  }

  //logic to show the stats of the user
  if (userWin === true) {
    win++;
  } else if (pcWin === true) {
    loss++;
  } else {
    ties++;
  }
  console.log("wins " + win);
  console.log("Losses " + loss);
  console.log("Ties " + ties);

  //Users stats show up as an alert
  var stats = confirm(
    "User's Stats:\nwins: " + win + "\nLosses: " + loss + "\nTies: " + ties
  );

  //This if else statement continues the game
  var restart = "play again";
  if (restart === true) {
    for (i = 0; i < playRPS(); i++) {
      playAgain();
    }
  } else {
    alert("Restarting Game(If you want to quit restart webpage)");
    window.location.reload(playRPS());
  }
}
playRPS();
