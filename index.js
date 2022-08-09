gamePattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
var started = 0;
var level = 0;

$(document).keypress(function() {
  if(started == 0){
    started = 1;
    main();
  }
});

function main() {
userCliked = [];
  level++;
  $("#level-title2").html("Level " + level);
  var randNumber = Math.floor(Math.random() * 4);
  currColor = buttonColors[randNumber];
  var targetele = "." + currColor;
  $(targetele).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio('audio/' + currColor + '.mp3');
  audio.play();
  gamePattern.push(currColor);
  console.log(gamePattern);
}

$(".btn").click(function(event){
  var now = this.getAttribute('class').split(" ")[1];
  userCliked.push(now);
  var audio = new Audio('audio/' + now + '.mp3');
  audio.play();
  $("." + now).fadeIn(100).fadeOut(100).fadeIn(100);
  checkAnswer(userCliked.length - 1);
});

function checkAnswer(n)
{
  if(userCliked[n] == gamePattern[n]){
    if(userCliked.length == gamePattern.length){
      setTimeout(function () {
          main();
        }, 1000);
    }
  }else{
    var audio = new Audio("audio/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title2").text("Game Over, Press Any Keyboard Key to Restart");
    startOver();
  }
}




function startOver() {
  level = 0;
  gamePattern = [];
  started = 0;
}
