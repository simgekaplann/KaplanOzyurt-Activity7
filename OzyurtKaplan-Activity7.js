var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    
    $("name").focus(); 
};

function displayResults() {
    var total = 0;
    var highest = -Infinity;
    var highestIndex = -1;

    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highest) {
            highest = scores[i];
            highestIndex = i;
        }
    }
    
    var average = total / scores.length;
    
    $("results").innerHTML = "<h2>Results</h2><p>Average score is " + average.toFixed(2) + "</p><p>High score = " + names[highestIndex] + " with a score of " + highest + "</p>";
}



function displayScores() {

    
    var table = "<tr><td><b>Name</b></th><td><b>Score</b></td></tr>";
    
    
    for (var i = 0; i < names.length; i++) {
        table += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    
    $("scores_table").innerHTML = "<h2>Scores</h2>"+table;
}

function addScore() {
    var newName = $("name").value.trim();
    var newScore = parseInt($("score").value);
    
    
    if (newName === "" || isNaN(newScore) || newScore < 0 || newScore > 100) {
        alert("You must enter a name and a valid score");
        return;
    }
    
    names.push(newName);
    scores.push(newScore);
    
    
    $("name").value = "";
    $("score").value = "";
    $("name").focus();
    
    
}



