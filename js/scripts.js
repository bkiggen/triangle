$(document).ready(function() {
  var age = parseInt(prompt("What is your age?"));
  console.log(age);
  if (age) {
    if (age >= 18) {
       $("p.voting").toggle();
    } else {
      $("p.underage").toggle();
    }
    console.log("true");
  } else {
    alert ("Please enter a valid age");
    location.reload();
    console.log("false");
  }

});
