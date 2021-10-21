var buttonColors = ["red" , "blue" , "green" , "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  level = level + 1;
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  $("#" + randomChosenColor).on("click" , function(){

    animation(randomChosenColor);
    playSound(randomChosenColor);

  });

  return randomChosenColor;
}

$(".btn").click(handler);

function handler() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
}

function animation(ani) {
  $("#" + ani).addClass("pressed");
  setTimeout(function(){$("#" + ani).removeClass("pressed")} , 100);
}

function playSound(name) {
  var au = new Audio("sounds/" + name + ".mp3");
  au.play();
}
