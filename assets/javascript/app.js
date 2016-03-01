window.onload = function(){
  $('#stop').click(stopwatch.stop);
  $('#reset').click(stopwatch.reset);
  $('#start').click(stopwatch.start);
};

var stopwatch = {
  time:30,
  reset: function(){
    stopwatch.time = 30;
    $('#display').html('00:30');
  },
  start: function(){
    counter = setInterval(stopwatch.count, 1000);
  },
  stop: function(){
    clearInterval(counter);
  },
  count: function(){
    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#display').html(converted);
    if (stopwatch.time === 0){
        stop();
    }
  },
  timeConverter: function(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    } 
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

};

function stop(){
	debugger;
  //clearInterval(counter);
}




// Only one question will be shown at a time.
// The time limit will apply to each question, and when the time runs out, the game will show a screen with the correct answer, and then move on to the next question without user input.
// If the user chooses the correct answer, the game will show a screen letting them know the answer was correct, and then move on to the next question without user input.
// If the user chooses the incorrect answer, the game will show a screen with the correct answer, and then move on to the next question without user input.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).