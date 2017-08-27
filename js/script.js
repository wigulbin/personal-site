$(document).ready(function() {
  $(".title").fadeIn(1000).removeClass('hidden');
  $("#wor-exp").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
  $("#per-exp").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
  $("#lan-exp").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
  $("#con").click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
  $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
});
