var wins = 0;
var losses = 0;
var userTotal = 0;
var gemValue = 0;

function generateGoal(){
    goal = Math.floor(Math.random() * 103) + 18;
    document.getElementById('goalCard').innerHTML = goal; 
    return goal;
}

function generateGemValue(){
    gemValue = Math.floor(Math.random() * 12) + 1;
    return gemValue;
}

function updateResults(){
    document.getElementById('resultsCard').innerHTML = "Wins: " + wins + " Losses: " + losses;
}

$(document).ready(function(){

    var goal = generateGoal();
    var redValue = generateGemValue();
    var blueValue = generateGemValue();
    var yellowValue = generateGemValue();
    var greenValue = generateGemValue();
    updateResults();

    $('#red').on("click", function(){
        userTotal += redValue;
    })

    $('#blue').on("click", function(){
        userTotal += blueValue;
    })

    $('#yellow').on("click", function(){
        userTotal += yellowValue;
    })

    $('#green').on("click", function(){
        userTotal += greenValue;
    })
});