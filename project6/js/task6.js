$("#list").click(function(){
   $("#list").toggle();
   $("#times").toggle();
   $(".medialist").addClass("medialistnew");
});
$("#times").click(function(){
    $("#list").toggle();
    $("#times").toggle();
   $(".medialist").removeClass("medialistnew");
 });

//  $(".navList ul li a").click(function(){
//      alert("he")
//  })

$("#button").click(function(){
   alert('s');
})