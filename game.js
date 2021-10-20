function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  return randomNumber;
}

var buttonColors = ["red" , "blue" , "green" , "yellow"];

var randomChosenColor = buttonColors[nextSequence()];

//alert(randomChosenColor); //to check whether its working

var gamePattern = [];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

$("#" + randomChosenColor).on("click" , function(){
  var au = new Audio("sounds/" + randomChosenColor + ".mp3");
  au.play();
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
});
