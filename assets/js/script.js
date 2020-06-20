setTimeout(function() {
    $(".star-wars").fadeOut("fast");
    $(".fade").fadeOut("fast");
}, 350);

setTimeout(function() {
    $(".selection-heading").fadeIn("fast");
}, 350);

$(".light-side").hover(function(){
  $(".blue-saber").css("visibility", "visible");
  }, function(){
  $(".blue-saber").css("visibility","hidden");
});

$(".dark-side").hover(function(){
  $(".red-saber").css("visibility", "visible");
  }, function(){
  $(".red-saber").css("visibility","hidden");
});