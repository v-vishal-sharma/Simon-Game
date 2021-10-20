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
  $("#" + randomChosenColor).addClass("pressed");
  setTimeout(function(){$("#" + randomChosenColor).removeClass("pressed")} , 100);
});

var userClickedPattern = [];

$(".btn").click(handler);

function handler() {
  var userChosenColor = $(".btn").attr("id");
  return userChosenColor;
}


var choColor = handler();

userClickedPattern.push(choColor);

console.log(userClickedPattern);
