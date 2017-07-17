

window.onload = function(){

(function(){
  var counter = 30;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      $("#counter").html("Time Remaining: "+ counter + "!");
    }
    if (counter === 0) {
        alert("Time is Up!");
        clearInterval(counter);
    }

  }, 1000);

})();

}





$("#A11").click (function(){

	alert("Wrong Answer!");
});
$("#A12").click (function(){

	alert("Correct!");
});
$("#A13").click (function(){

	alert("Wrong Answer!");
});
$("#A21").click (function(){

	alert("Correct");
});
$("#A22").click (function(){

	alert("Wrong Answer!");
});
$("#A23").click (function(){

	alert("Wrong Answer!");
});
$("#A31").click (function(){

	alert("Wrong Answer!");
});
$("#A32").click (function(){

	alert("Wrong Answer!");
});
$("#A33").click (function(){

	alert("Correct");
});