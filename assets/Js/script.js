//global variables
var win = 0;
var loss = 0;
var ties = 0;
var computerChoices = ["R", "P", "S"];

//user choice
var userMove = prompt("enter R, P or S");
console.log(userMove);

//PC choice
var pcMove =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

var showMove = confirm("pc chose " + pcMove);
console.log(showMove);

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
