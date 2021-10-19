var gamePattern = [];

var buttonColors = ["red" , "blue" , "green" , "yellow"];

function nextSequence() {
  randomNumber = Math.floor(Math.random()*4);
  return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

$(document).click(function(){
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
});

$("div").click(handler());

function handler() {
  
}
