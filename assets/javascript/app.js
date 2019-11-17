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
        showResults
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
    }
    
    $("#form").onsubmit=function(){
        question1 = parseInt(document.querySelector("input[name = 'question1']:checked").value);
        console.log(question1);
    }
    //    function timer() {
//        if(timeRemaing === 0) {
//            answered = true;
//            clearInterval(intervalID);
//
//        }
//    }
//
//    
//        v
//    }



    // act like a radio button with highlight
    // $('.quiz ul').on('click', 'li', function() {
        // $('.selected').removeClass('selected');
        // $(this).addClass('selected');
    // });
    // 

});

