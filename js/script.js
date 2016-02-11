$(document).ready(function() {

  $wh= $(window).height();
  $ww= $(window).width();
  console.log($wh);
  console.log($ww);
  console.log($("#about_us").offset(top));
  $("#home").height($wh);
  $(".pad-section").height(0.75*$wh);
  $('#nmain').hide();
  $('#e1').hide();
  $('#e2').hide();
  $('#e3').hide();
  $('#e4').hide();
  $('#e5').hide();
  $('#e6').hide();
  

  $(window).scroll(function () {
    if ($(window).scrollTop() > (0.75*$wh)) {
      $('#nmain').slideDown("easing");
    }
    else{
      $('#nmain').slideUp("easing");
    }


    if ($(window).scrollTop() > 1850) {
      $('#e1').fadeIn(3000);
      $('#e2').fadeIn(3050);
      $('#e3').fadeIn(4000);
      $('#e4').fadeIn(4050);
    }

    if($(window).scrollTop()>2500){
      $('#e5').fadeIn(3000);
      $('#e6').fadeIn(4000);
    }
  });
	$("#scroll_icon").click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).attr("href")).offset().top
    },2000);
  });
  $("nav div ul li a").click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).attr("href")).offset().top
    },2000);
  });
  $(function(){
    var image=$(document.getElementById('home'));
    var backgrounds = [
      "url('./img/sliders/home0.jpg') no-repeat center center fixed",
      "url('./img/sliders/home2.jpg') no-repeat center center fixed",
      "url('./img/sliders/home3.jpg') no-repeat center center fixed",
      "url('./img/sliders/home4.jpg') no-repeat center center fixed"
    ];
    var current = 0;
    function nextBackground(){
      image.fadeOut(2000);
      image.css("background",backgrounds[current = ++current % backgrounds.length]);
      image.fadeIn(2000);
      setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
  });
});