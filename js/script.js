$(document).ready(function() {
  $(".title").fadeIn(1000).removeClass('hidden');
  $("#wor-exp").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
  $("#per-exp").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
  $("#lan-exp").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
  $("#con").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});
