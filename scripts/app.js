clicks= 0;

$(document).ready(function(){
  var challengeArena = document.createElement('div');
  challengeArena.id= "container";

  var generateButton = document.createElement('button');
    generateButton.textContent="generate";
    generateButton.className='generate';
    challengeArena.appendChild(generateButton);
  $('body').append(challengeArena);



$('.generate').click( function(){

  clicks++;
//jQuery funciton to create a row ('div' class) on the DOM, including the number tracking the
//amount of times 'generate' has been clicked.
  var row = document.createElement('div');
  row.id="row";
  var count = document.createElement('p');
  count.textContent=clicks;
  row.appendChild(count);

  //Adds the color-changing button

var colorChanger = document.createElement('button');
colorChanger.id="colorCh";
colorChanger.textContent="change";
row.appendChild(colorChanger);

  //adds the deletion button

  var deleter = document.createElement('button');
  deleter.id="deleted";
  deleter.textContent="delete";
  row.appendChild(deleter);

//Appends all of our content to the body (earlier it was just
// created within the 'logic,' but not visible on the DOM')
  $('body').append(row);


//Allows the color changing button to toggle the background colorCh
$(document).unbind().on('click', '#colorCh', function() {
  console.log("colorCh clicked");
  var currentBg= $(this).parent().css("background-color");

  if (currentBg== "rgb(255, 255, 0)"){
    $(this).parent().css("background-color", "#FF0000");
  } else {
    $(this).parent().css("background-color", "#FFFF00");
  }
});




//Delets each row$()
$(document).on('click', '#deleted', function() {
$(this).parent().remove();
});

});


});
