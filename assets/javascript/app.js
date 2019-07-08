//------------------------

// global variables
var correctAns = 0;
var wrongAns = 0;
var unanswered = 0;

//arrays
var questions = ["Who is the all-time leader of the NBA in points scored, with 38,387 points?", 
    "Which quarteback has the most rushing touchdowns in NFL history with 58 touchdowns?",
    "Which athlete is the only one to appear in a Super Bowl and a World Series?", 
    "How many touchdowns did Tom Brady throw in 2007, when he broke the record for touchdowns thrown in a single season?", 
    "Who was the quarteback that later broke Tom Brady's single season touchdown record?",
    "Which pitcher is the all-time leader in strikeouts in MLB history?",
    "Which NBA player was the first to average a triple double in the NBA finals?", 
    "Who is the only player to win NBA finals MVP on the losing team?"
]
var answers = [ "Michael Jordan", "Kevin Durant", "Kareem Abdul-Jabbar", "Wilt Chamberlin",
    "Michael Vick", "Cam Newton", "Randall Cunningham", "Steve Young",
    "Bo Jackson", "Deion Sanders", "Russel Wilson",
    "55", "48", "50", "60",
    "Peyton Manning", "Drew Brees", "Joe Montana", "Patrick MaHomes",
    "Randy Johnson", "Nolan Ryan", "Roger Clemens", "Cy Young",
    "Magic Johnson", "Lebron James", "Larry Bird", 
    "Jerry West", "Karl Malone"
]

$(document).ready(function(){
    $("button").click(function(){
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


        $("#quest-1").text(questions[0]);
        $("#quest-2").text(questions[1]);
        $("#quest-3").text(questions[2]);
        $("#quest-4").text(questions[3]);
        $("#quest-5").text(questions[4]);
        $("#quest-6").text(questions[5]);
        $("#quest-7").text(questions[6]);
        $("#quest-8").text(questions[7]);
    });

});