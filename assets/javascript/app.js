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
    answers: ["Magic Johnson", "Lebron James", "Larry Bird", "Russell Westbrook"],
    correct: 1
    },
    { q: "Who is the only player to win NBA finals MVP on the losing team?",
    answers: ["Jerry West", "Karl Malone", "Kobe Bryant", "Bill Russell"],
    correct: 0
    },
]
//arrays
var questionsText = ["Who is the all-time leader of the NBA in points scored, with 38,387 points?", 
    "Which quarteback has the most rushing touchdowns in NFL history with 58 touchdowns?",
    "Which athlete is the only one to appear in a Super Bowl and a World Series?", 
    "How many touchdowns did Tom Brady throw in 2007, when he broke the record for touchdowns thrown in a single season?", 
    "Who was the quarteback that later broke Tom Brady's single season touchdown record?",
    "Which pitcher is the all-time leader in strikeouts in MLB history?",
    "Which NBA player was the first to average a triple double in the NBA finals?", 
    "Who is the only player to win NBA finals MVP on the losing team?"
]


$(document).ready(function(){
    $(".btn").click(function(){
        $("img").hide();
        $("button").text("Submit")

        var mins = 2;
        var secs = mins * 60;

        function minutes() {
            mins = Math.floor(secs / 60);
            return mins;
        }
        function seconds() {
            return secs - Math.round(mins * 60);
        }
        


        $("#quest-1").text(questionsText[0]);
        $("#quest-2").text(questionsText[1]);
        $("#quest-3").text(questionsText[2]);
        $("#quest-4").text(questionsText[3]);
        $("#quest-5").text(questionsText[4]);
        $("#quest-6").text(questionsText[5]);
        $("#quest-7").text(questionsText[6]);
        $("#quest-8").text(questionsText[7]);

       var newbutton1 = $("<button class='col-sml-3 answer'></button>");
       var newbutton2 = $("<button class='col-sml-3 answer'></button>");
       var newbutton3 = $("<button class='col-sml-3 answer'></button>");
       var newbutton4 = $("<button class='col-sml-3 answer'></button>");

       $(".answers").append(newbutton1, newbutton2, newbutton3, newbutton4);









        
        $(".btn").click(function(){
            $(".question").hide();
            $(".answer").hide();
            $(".answers").hide();
            $(".btn").hide();

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