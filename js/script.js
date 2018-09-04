$('.carousel').carousel({
  interval: 4000,
  pause: false
});

$(document).ready(function(){
  $("#carousel-example-generic").on("slide.bs.carousel",function(event){
    $(".barra", this)
      .removeClass("anima").css("width","0%");
    }).on("slid.bs.carousel", function(event){
        $(".barra", this)
          .addClass("anima").css("width", "100%");
    });

    $(".barra", "#carousel-example-generic").css("width", "100%");
});
