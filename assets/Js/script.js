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
