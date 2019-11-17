var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer =0;
var timeCount = 10;
var intervalID;

$(document).ready(function() {

    function initialScreen() {
        $('.start').show();
        $('.summary').hide();
        $('.wrapper').hide();       
    }
    initialScreen();

    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.summary').hide();
        $('.wrapper').show();
       // showQuestion();
       run();
    });

    $('#submit').click(function() {
        showResults();
    })

    function run() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    }

    function decrement() {
        timeCount--;
        $("#timer").text(timeCount);
        if (timeCount === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalID);
        $("#timer").text("Sorry times up!!");
        verifyAnswer();
    }
    
    function verifyAnswer() {
        $("#form").on("submit", function() {
        qOne = parseInt(document.querySelector('input[name = "question1"]:checked').value);
        qTwo = parseInt(document.querySelector('input[name = "question2"]:checked').value);
        qThree = parseInt(document.querySelector('input[name = "question3"]:checked').value);
        qFour = parseInt(document.querySelector('input[name = "question4"]:checked').value);
        qFive = parseInt(document.querySelector('input[name = "question4"]:checked').value);
        qSix = parseInt(document.querySelector('input[name = "question4"]:checked').value);
        qSeven = parseInt(document.querySelector('input[name = "question4"]:checked').value);
        qEight = parseInt(document.querySelector('input[name = "question4"]:checked').value);
        
        
        correctAnswer = qOne + qTwo + qThree + qFour + qFive + qSix + qSeve + qEight;
  
        })
    }
   
    function showResults() {
	    if ((correctAnswer + wrongAnswer + noAnswer) === qCount) {
            $('.start').hide();
            $('.summary').show();
            $('.wrapper').hide();      
            $("#correct-answer").append(correctAnswer);
	    	$("#wrong-answer").append(wrongAnswer);
	    	$("#no-answer").append(noAnswer);
	    } 
    }
    
    $("#reset").on("click", function(e) {
        e.preventDefault();
        $('.start').show();
        $('.summary').hide();
        $('.wrapper').hide();
        correctCount = 0;
		wrongCount = 0;
		unanswerCount = 0;
        run()
        
    });

})





    // act like a radio button with highlight
    // $('.quiz ul').on('click', 'li', function() {
        // $('.selected').removeClass('selected');
        // $(this).addClass('selected');
    // });
    // 