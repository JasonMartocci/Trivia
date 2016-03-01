//Score Variables
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var value = "";

window.onload = function(){
  $('#stop').click(stopwatch.stop);
  $('#reset').click(stopwatch.reset);
  $('#start').click(stopwatch.start);
};

// Trivia questions

function questionOne(){
  $("#question").append("<h3>What is two plus two?</h3>");
  $("#answerOne").append("<button class='submit' value='incorrect'>5</button><br>");
  $("#answerTwo").append("<button class='submit' value='incorrect'>9</button><br>");
  $("#answerThree").append("<button class='submit' value='incorrect'>3</button><br>");
  $("#answerFour").append("<button class='submit' value='incorrect'>8</button><br>");
  $("#answerFive").append("<button class='submit' value='correct'>4</button><br>");

    $("button").click(function(){
        var ans = $(this);
        if(ans.val() === "correct"){
          correct++;
          alert('You are correct');
        }else if(ans.val() === "incorrect"){
          incorrect++;
        }else{
          unanswered++;
        }
    }); 

    $(".submit").click(function(){
      questionTwo();
      stopwatch.reset();
    });
}

function questionTwo(){
  $("#question").empty().append("<h3>What is three plus two?</h3>");
  $("#answerOne").empty().append("<button class='submit' value='correct'>5</button><br>");
  $("#answerTwo").empty().append("<button class='submit' value='incorrect'>7</button><br>");
  $("#answerThree").empty().append("<button class='submit' value='incorrect'>2</button><br>");
  $("#answerFour").empty().append("<button class='submit' value='incorrect'>9</button><br>");
  $("#answerFive").empty().append("<button class='submit' value='incorrect'>3</button><br>");

    $("button").click(function(){
        var ans = $(this);
        if(ans.val() === "correct"){
          correct++;
          alert('You are correct');
        }else if(ans.val() === "incorrect"){
          incorrect++;
        }else{
          unanswered++;
        }
    }); 

    $(".submit").click(function(){
      questionThree();
      stopwatch.reset();
    });
}

function questionThree(){
  $("#question").empty().append("<h3>What is the color brown?</h3>");
  $("#answerOne").empty().append("<button class='submit' value='correct'>5</button><br>");
  $("#answerTwo").empty().append("<button class='submit' value='incorrect'>7</button><br>");
  $("#answerThree").empty().append("<button class='submit' value='incorrect'>2</button><br>");
  $("#answerFour").empty().append("<button class='submit' value='incorrect'>9</button><br>");
  $("#answerFive").empty().append("<button class='submit' value='incorrect'>3</button><br>");

    $("button").click(function(){
        var ans = $(this);
        if(ans.val() === "correct"){
          correct++;
          alert('You are correct');
        }else if(ans.val() === "incorrect"){
          incorrect++;
        }else{
          unanswered++;
        }
    }); 

    $(".submit").click(function(){
      results();
      stopwatch.stop();
    });
}

function results(){

    $("#question").empty().append("<h3>Correct Answers: " + correct + "</h3>");
    $("#answerOne").empty().append("<h3>Incorrect Answers: " + incorrect + "</h3>");
    $("#answerTwo").empty().append("<h3>Unanswered: " + unanswered + "</h3>");
    $("#answerThree").empty().hide("");
    $("#answerFour").empty().hide("");
    $("#answerFive").empty().hide("");

  }

// Timer function
var stopwatch = {
  time:30,
  reset: function(){
    stopwatch.time = 30;
    $('#display').html('00:30');
  },
  start: function(){
    counter = setInterval(stopwatch.count, 1000);
    questionOne();
    $(this).parent().hide();
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
  //clearInterval(counter);
}




// Only one question will be shown at a time.
// The time limit will apply to each question, and when the time runs out, the game will show a screen with the correct answer, and then move on to the next question without user input.
// If the user chooses the correct answer, the game will show a screen letting them know the answer was correct, and then move on to the next question without user input.
// If the user chooses the incorrect answer, the game will show a screen with the correct answer, and then move on to the next question without user input.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).