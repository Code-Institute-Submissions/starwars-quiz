setTimeout(function() {
    $(".star-wars").fadeOut("fast");
    $(".fade").fadeOut("fast");
}, 350);

$(".light-h3").hover(function(){
  $(this).css("background-color", "grey" + "color", "white");
  }, function(){
  $(this).css("background-color", "transparent" + "color", "blue");
});

$(".light-h3").hover(function(){
  $(".blue-saber").css("visibility", "");
  }, function(){
  $(".blue-saber").css("visibility","hidden");
});
