
$(document).ready(function() {

  console.log("sourced");

$("#art").click( function () {
  console.log("art Clicked");
  $("#art").children().remove();

  // for (var i=0; i<4000; i++) {
  //   console.log("In loop i");

    for (var j=0; j<400; j++) {
      console.log("In loop j");
      var fullColor = "";

      for (var k=0; k<3; k++){
        console.log("In loop k");
        var colorPart = "";

        for (var l=0; l<2; l++) {
          console.log("In loop l");
          var tempNum = Math.floor((Math.random() * 15));
          console.log("Random temp number: " + tempNum);

          switch (tempNum) {
            case 10:
            tempNum = "A";
            break;
            case 11:
            tempNum = "B";
            break;
            case 12:
            tempNum = "C";
            break;
            case 13:
            tempNum = "D";
            break;
            case 14:
            tempNum = "E";
            break;
            case 15:
            tempNum = "F";
            break;
            default:
            tempNum.toString;
          }//End of switch

          colorPart += tempNum;
          console.log("Create digit: " + colorPart);

          console.log("Adding digit to 2 digit string (" + l + "/2)" + ": " + fullColor);

        }//End of l loop

        fullColor += colorPart;
        console.log("Adding 2 digit string (" + k +"/3)" + ": " + fullColor);

      }//End of k loop

        $("#art").append("<div style='background-image: url(tile.jpg)'></div>");
        console.log("Append full color: #" + fullColor + " and make div");

    }//End of j for loop
  // }//End of i for loop
});

});



//$("#art").append("<div style='background-color:black</div>");
