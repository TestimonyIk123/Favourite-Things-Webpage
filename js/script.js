$(document).ready(function(){
  console.log("Script executing");
  $("#formOne").submit(function(event){
    const foodInput = $("input#food").val();
    console.log ("Submit form successfully reached.");
    const drinkInput = $("input#drink").val();
    const colorInput = $("input#color").val();
    const musicInput = $("input#music").val();
    const celebrityInput = $("input#celebrity").val();
    const placeInput = $("input#place").val();

    let myInputArray=[];
    myInputArray.push(foodInput);
    myInputArray.push(drinkInput);
    myInputArray.push(colorInput);
    myInputArray.push(musicInput);
    myInputArray.push(celebrityInput);
    myInputArray.push(placeInput);

    $("#myCollection").append("<li>"+myInputArray[0]+"</li>")
    $("#myCollection").append("<li>"+myInputArray[1]+"</li>")
    $("#myCollection").append("<li>"+myInputArray[2]+"</li>")
    $("#myCollection").append("<li>"+myInputArray[3]+"</li>")
    $("#myCollection").append("<li>"+myInputArray[4]+"</li>")
    $("#myCollection").append("<li>"+myInputArray[5]+"</li>")

   $(".food").text(foodInput);
   $(".drink").text(drinkInput);
   $(".color").text(colorInput);
   $(".music").text(musicInput);
   $(".celebrity").text(celebrityInput);
   $(".place").text(placeInput);
   event.preventDefault()
   $("#story").show();
  });
});