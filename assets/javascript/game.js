var wins = 0;
var losses = 0;
var targetNum = Math.floor(Math.random() * 102) + 19;
var random1 = Math.floor(Math.random() * 12) + 1;
var random2 = Math.floor(Math.random() * 12) + 1;
var random3 = Math.floor(Math.random() * 12) + 1;
var random4 = Math.floor(Math.random() * 12) + 1;
var accumScore = 0;
console.log("target num is: " + targetNum);
console.log("total wins are: " + wins);
console.log("total losses are: " + losses);
console.log("random numbers are: " + random1 + " " + random2 + " " + random3 + " " + random4);
$(document).ready(function () {
    $("#targetNum").text(targetNum);

    $("#gem1").on("click", function () {
        accumScore = accumScore + random1;
        $("#accumScore").text(accumScore);
        checker();
    });
    $("#gem2").on("click", function () {
        accumScore = accumScore + random2;
        $("#accumScore").text(accumScore);
        checker();
    });
    $("#gem3").on("click", function () {
        accumScore = accumScore + random3;
        $("#accumScore").text(accumScore);
        checker();
    });
    $("#gem4").on("click", function () {
        accumScore = accumScore + random4;
        $("#accumScore").text(accumScore);
        checker();
    });
    function checker() {
        if (accumScore == targetNum) {
            wins++;
            $("#wins").text(wins);
            targetNum = Math.floor(Math.random() * 102) + 19;
            $("#targetNum").text(targetNum);
            accumScore = 0;
            $("#accumScore").text(accumScore);
            random1 = Math.floor(Math.random() * 12) + 1;
            random2 = Math.floor(Math.random() * 12) + 1;
            random3 = Math.floor(Math.random() * 12) + 1;
            random4 = Math.floor(Math.random() * 12) + 1;
            console.log("target num is: " + targetNum);
            console.log("total wins are: " + wins);
            console.log("total losses are: " + losses);
            console.log("random numbers are: " + random1 + " " + random2 + " " + random3 + " " + random4);
        }

        else if (accumScore > targetNum) {
            losses++;
            $("#losses").text(losses);
            targetNum = Math.floor(Math.random() * 102) + 19;
            $("#targetNum").text(targetNum);
            accumScore = 0;
            $("#accumScore").text(accumScore);
            random1 = Math.floor(Math.random() * 12) + 1;
            random2 = Math.floor(Math.random() * 12) + 1;
            random3 = Math.floor(Math.random() * 12) + 1;
            random4 = Math.floor(Math.random() * 12) + 1;

            console.log("target num is: " + targetNum);
            console.log("random numbers are: " + random1 + " " + random2 + " " + random3 + " " + random4);
            console.log("total wins are: " + wins);
            console.log("total losses are: " + losses);
        }
    }
});
