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
  userClickedPattern = [];
  level++ ;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  $("#" + randomChosenColor).on("click" , function(){

    animation(randomChosenColor);
    playSound(randomChosenColor);

  });

}

$(".btn").click(handler);

function handler() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
}

function animation(ani) {
  $("#" + ani).addClass("pressed");
  setTimeout(function(){$("#" + ani).removeClass("pressed")} , 100);
}

function playSound(name) {
  var au = new Audio("sounds/" + name + ".mp3");
  au.play();
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length){
      setTimeout(function() {
        nextSequence();
      },1000);
    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    gameOver();
  }
}

function gameOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
