$(document).ready(function() {
  $("form#triangle").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());


    if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2){
      alert("I know triangles and you sir are no triangle!");
      location.reload();
    } else {
      if (side1 === side2 && side1 === side3 && side2===side3){
        $("div.result").html("<h3>Equilateral</h3>");
      } else if (side1 != side2 && side1 != side3 && side2 != side3) {
        $("div.result").html("<h3>Scalene</h3>");
      } else {
        $("div.result").html("<h3>Isosceles</h3>");
      };

    }



  });
});
