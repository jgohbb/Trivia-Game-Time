var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var timeCount = 30;
var intervalID;

//$(document).ready(function() {

    function initialScreen() {
        $('.start').show();
        $('.summary').hide();
        $('.wrapper').hide();       
    };
    initialScreen();

    $('.start a').on("click", function(){
        startGame();
    });
        
    function startGame() {
        $('.start').hide();
        $('.summary').hide();
        $('.wrapper').show();
        run();
    
        function run() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
        };

        function decrement() {
            timeCount--;
            $("#timer").text(timeCount);
            if (timeCount === 0) {
                clearInterval(intervalID);
                verifyAnswer();
            };
        };
    };

    $("#submit").on("click", function() {
        verifyAnswer();
    });     

    function verifyAnswer() {
        correctAnswer = 0;
        wrongAnswer = 0;
        noAnswer = 0;

        var qOne = $("input[name='q1']:checked").val();
        var qTwo = $("input[name='q2']:checked").val();
        var qThree = $("input[name='q3']:checked").val();
        var qFour = $("input[name='q4']:checked").val();
        var qFive = $("input[name='q5']:checked").val();
        var qSix = $("input[name='q6']:checked").val();
        var qSeven = $("input[name='q7']:checked").val();
        var qEight = $("input[name='q8']:checked").val();
           
        if (parseInt(qOne) === 1) {
            correctAnswer++;
        } else if (parseInt(qOne) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };
        
        if (parseInt(qTwo) === 1) {
            correctAnswer++;
        } else if (parseInt(qTwo) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };

        if (parseInt(qThree) === 1) {
            correctAnswer++;
        } else if (parseInt(qThree) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };

        if (parseInt(qFour) === 1) {
            correctAnswer++;
        } else if (parseInt(qFour) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };

        if (parseInt(qFive) === 1) {
            correctAnswer++;
        } else if (parseInt(qFive) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };

        if (parseInt(qSix) === 1) {
            correctAnswer++;
        } else if (parseInt(qSix) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };

        if (parseInt(qSeven) === 1) {
            correctAnswer++;
        } else if (parseInt(qSeven) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };

        if (parseInt(qEight) === 1) {
            correctAnswer++;
        } else if (parseInt(qEight) === 0) {
            wrongAnswer++;
        } else {
            noAnswer++;
        };
       
        var correctA = correctAnswer;
        var wrongA = wrongAnswer;
        var noA = noAnswer;

        $("#correct-answer").text(correctA);
        $("#wrong-answer").text(wrongA);
        $("#no-answer").text(noA); 
        $('.start').hide();
        $('.summary').show();
        $('.wrapper').hide();      
    };

    $("#reset").on("click", function() {
        timeCount = 30;
        function myForm() {
            document.getElementById("form").reset();
        };
        myForm();
        startGame();
    });

//});
