

$(document).ready(function() {

  var targetNumber = Math.floor(Math.random()*101+19);

  $("#number-to-guess").text(targetNumber);
  
  var counter = 0;
  var wins= 0;
  var losses = 0;

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  

  var numberOptions = [num1, num2, num3, num4];

  function reset(){
    targetNumber=Math.floor(Math.random()*101+19);
      console.log(targetNumber)
      $('#number-to-guess').text(targetNumber);
      
      counter= 0;
      $('#finalTotal').text(counter);
      } 

  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("#ahmed");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
 
  }

  $(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log("New score: " + counter);
    
    

    if (counter === targetNumber) {
      alert("You won!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }

    else if (counter >= targetNumber) {
      alert ("You lose!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }
    $('#finalTotal').text(counter);
  });
  
});
