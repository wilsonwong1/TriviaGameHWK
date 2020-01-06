var quiz = $("#quizContainer");
var timer;

// Game Timer 
var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,

    countdown: function () {
        game.counter--;
        $("#counterNumber").html(game.counter);
        if (game.counter === 0) {
            game.done();
        }
    },

    // Start Game 

    start: function () {
        timer = setInterval(game.countdown, 1000);
        console.log(timer);
        $("#timeCount").prepend(
            "<h1>Time Remaning: <span id ='counterNumber'>45</span> Seconds</h1>"
        );
        $("#start").remove();

        for (var i = 0; i < myQuestions.length; i++) {
            quiz.append("<h2>" + myQuestions[i].question + "</h2>");
            for (var a = 0; a < myQuestions[i].answers.length; a++) {
                quiz.append("<input type='radio' name='question" + i +
                    "'value='" + myQuestions[i].answers[a] + "''>" + myQuestions[i].answers[a]);
            }
        }
        quiz.append("<button id='submit'>Submit</button>");
    },

    // Finished Game 
    done: function () {
        var inputs = quiz.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === myQuestions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },

    // Game Results 

    result: function () {
        clearInterval(timer);
        $("#timeCount h2").remove();
        quiz.html("<h2>Finish!</h2>");
        quiz.append("<h3>Correct Answers: " + this.correct + "</h3>");
        quiz.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#submit", function () {
    game.done();
});


