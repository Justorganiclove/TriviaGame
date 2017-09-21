var timeUp = "5";
var correct = 0; ///still need to make this count
var missed = 0; ///still need to make this count
var total = 0; ///still need to make this count

var intervalId = "";

$("#start").on("click", function() {
    $("#start").hide();
    $("#questions").html(questions);

    $("#question , #question2").css({ "color": "black", "font-size": "1.0em", "background-color": "lightgrey", "text-align": "left", "padding": "5px" });
    $("div").css({ "color": "black", "font-size": "1.0em", "background-color": "white", "text-align": "left", "padding": "5px" });

    var minutes = 0;
    var seconds = 0;

    function start() {
        intervalId = setInterval(countDown, 1000);
    }

    function countDown() {
        timeUp--;

        var converted = timeConverter(timeUp);
        $("#timer").html("Choose as many correct answers below in " + converted);
        $("#timer").css({ "color": "white", "font-size": "1.5em", "background-color": "#55a5f5", "text-align": "center", "padding": "5px" });

        if (timeUp < 0) {
            function stop() {
                clearInterval(start);
            }

            stop();
            $("#timer").hide();
            $(questions).hide();
            $("#questions").html(results);
            $("#results").css({
                "background-color": "#55a5f5",
                "color": "white",
                "width": "50%",
                "margin": "20px auto 20px auto",
                "padding": "10px",
                "font-size": "1.2em"
            });

            console.log("Time is up!");
        }
    }

    function timeConverter(timeUp) {
        var minutes = Math.floor(timeUp / 60);
        var seconds = timeUp - (minutes * 60);
        return minutes + ": " + seconds;
    }

    start();
});



// Questionnaire__________________________________________________________________________
var questions =
    // Question 1
    "<br/>" +
    "<section id=testquestions>" +
    "<h2 id='question'>" + "Myosis affects which part of the human body: Neck; Stomach; or Eye?" + "</h2>" +
    "<div id='aonea'>" + "A -Neck" + "</div>" +
    "<div id='aoneb'>" + "B -Stomach" + "</div>" +
    "<div id='aonec'>" + "C -Heart" + "</div>" +
    "<div id='aoned'>" + "D-Eye" + "</div>" +
    // Question 2
    "<br>" +
    "<h2 id='question2'>" + "What is the name of the tallest structure ever built? " + "</h2>" +
    "<div id='atwoa'>" + "A -CN Tower" + "</div>" +
    "<div id='atwob'>" + "B -Grollo Tower" + "</div>" +
    "<div id='atwoc'>" + "C -Taipei 101" + "</div>" +
    "<div id='atwod'>" + "D-Burj Khalifa" + "</div>" +
    // Question 3
    "<br>" +
    "<h2 id='question2'>" + "Who was the first American President to reside at The White House? " + "</h2>" +
    "<div id='atwoa'>" + "A -Abraham Lincoln" + "</div>" +
    "<div id='atwob'>" + "B -George Washington" + "</div>" +
    "<div id='atwoc'>" + "C -John Adams" + "</div>" +
    "<div id='atwod'>" + "D- Thomas Jefferson" + "</div>" +
    // Question 4
    "<br>" +
    "<h2 id='question2'>" + "Which 19th century poet and novelist, when age twenty-six, married his thirteen year old cousin? " + "</h2>" +
    "<div id='atwoa'>" + "A -Oscar Wilde" + "</div>" +
    "<div id='atwob'>" + "B -Victor Hugo" + "</div>" +
    "<div id='atwoc'>" + "C -Edgar Allan Poe" + "</div>" +
    "<div id='atwod'>" + "D-Mark Twain" + "</div>" +
    // Question 5
    "<br>" +
    "<h2 id='question2'>" + "What did the \"D\" in \"D-Day\" stand for? " + "</h2>" +
    "<div id='atwoa'>" + "A -Day" + "</div>" +
    "<div id='atwob'>" + "B -Doom" + "</div>" +
    "<div id='atwoc'>" + "C -Dwight(Eisenhower)" + "</div>" +
    "<div id='atwod'>" + "D- Dunkirk" + "</div>" +
    "</section>";

// RESULTS______________________________________________________________________________________________________________________

var results =

    "<section id='results'>" +
    "<div id='total'>" + "Total questions answered: " + total + "</div>" + ///still need to make this count
    "<div id='correct'>" + "Correct questions: " + correct + "</div>" + ///still need to make this count
    "<div id=missed>" + "Missed questions: " + missed + "</div>"; ///still need to make this count
"</section>";