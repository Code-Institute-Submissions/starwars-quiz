setTimeout(function() {
    $(".star-wars").fadeOut("fast");
    $(".fade").fadeOut("fast");
}, 350);

$(".light-container").hover(function(){
  $(this).css("background-color", "grey" + "color", "white");  
  $(".blue-saber").css("visibility", "visible");
  }, function(){
  $(this).css("background-color", "transparent" + "color", "blue");
  $(".blue-saber").css("visibility","hidden");
});

$(".dark-container").hover(function(){
  $(".red-saber").css("visibility", "visible");
  $(this).css("background-color", "grey" + "color", "white");
  }, function(){
  $(".red-saber").css("visibility","hidden");
  $(this).css("background-color", "transparent" + "color", "red");
});