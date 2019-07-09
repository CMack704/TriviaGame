//------------------------

// global variables
var correctAns = 0;
var wrongAns = 0;
var unanswered = 0;


var questions = [
    { q: "Who is the all-time leader of the NBA in points scored, with 38,387 points?",
    answers: ["Michael Jordan", "Kevin Durant", "Kareem Abdul-Jabbar", "Wilt Chamberlin"],
    correct: 2
    },
    { q: "Which quarteback has the most rushing touchdowns in NFL history with 58 touchdowns?",
    answers: ["Michael Vick", "Cam Newton", "Randall Cunningham", "Steve Young"],
    correct: 1
    },
    { q: "Which athlete is the only one to appear in a Super Bowl and a World Series?",
    answers: ["Bo Jackson", "Deion Sanders", "Russel Wilson", "Jim Brown"],
    correct: 1
    },
    { q: "How many touchdowns did Tom Brady throw in 2007, when he broke the record for touchdowns thrown in a single season?",
    answers: ["55", "48", "50", "60"],
    correct: 2
    },
    { q: "Who was the quarteback that later broke Tom Brady's single season touchdown record?",
    answers: ["Peyton Manning", "Drew Brees", "Joe Montana", "Patrick MaHomes"],
    correct: 0
    },
    { q: "Which pitcher is the all-time leader in strikeouts in MLB history?",
    answers: ["Randy Johnson", "Nolan Ryan", "Roger Clemens", "Cy Young"],
    correct: 1
    },
    { q: "Which NBA player was the first to average a triple double in the NBA finals?",
    answers: ["Magic Johnson", "LeBron James", "Larry Bird", "Russell Westbrook"],
    correct: 1
    },
    { q: "Who is the only player to win NBA finals MVP on the losing team?",
    answers: ["Jerry West", "Karl Malone", "Kobe Bryant", "Bill Russell"],
    correct: 0
    },
]




$(document).ready(function(){

    
    $(".question").hide();
    $("#timeleft").hide();


    

    $(".btn").click(function(){
        $("img").hide();        
        $(".question").show();
        $("#timeleft").show();
        $(".btn").text("Submit")
        start();
        
        

        var intervalId;
        var time = 120;
        var clockRunnung = false 
       

        function start() {
            intervalId = setInterval(count, 1000);
            clockRunnung = true;
            
        }
        function stop() {
            
        }

        function count() {
            time--;
            var convertedTime = timeConverter(time);
            $("#time").text(convertedTime);
            if (time === 0 ) {
                clearInterval(intervalId);
                clockRunnung = false;
            }
        }
        


        function timeConverter(t) {
            var mins = Math.floor(t / 60);
            var secs = t - (mins * 60);
            if (secs < 10) {
                secs = "0" + secs;
            }
            if (mins === 0) {
                mins = "00";
            }
            else if (mins < 10) {
                mins = "0" + mins;
            }
            return mins + ":" + secs;
        }
  
        

        

       


        
        $(".btn").click(function(){
            $(".question").hide();
            $(".btn").hide();
            $("#timeleft").hide();

            
            var answers = [];
            $("form input[type=checkbox]:checked").each(function() {
                console.log($(this).attr("value"));
                console.log($(this).prop("checked"));
                answers.push( $(this).attr('value') );


            });
            console.log(answers)
            for (var i = 0; i < answers.length; i++) {
                console.log(answers[i], questions[i].correct)
            if (answers[i] == questions[i].correct) {
                correctAns++;
            } else if (answers[i] != questions[i].correct) {
                wrongAns++;
            } else {
                unanswered++;
            }};


            var allDone = $("<p class='row done'></p>");
            var correctAnsText = $("<p class='row correct'></p>");
            var wrongAnsText = $("<p class='row wrong'></p>");
            var unansweredText = $("<p class='row unans'></p>");


            $(".jumbotron").append(allDone, correctAnsText, wrongAnsText, unansweredText);

            $(".done").text("Finished!!");
            $(".correct").text("Correct Answers: " + correctAns);
            $(".wrong").text("Wrong Answers: " + wrongAns);
            $(".unans").text("Unanswered: " + unanswered);

        });
        



    });

});