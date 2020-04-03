$(function() {
  // Toggle navigation
  $(".nav__toggler").click(function() {
    $(".nav__list").slideToggle(500);
    return false;
  });
  
  // Scrolling to anchor from navigation
  $(window).resize(function() {
    
        var width = $(window).width();
        if( width <= 600 ) {
          $('a[href^="#"]').click(function() {
            var link = $(this).attr("href");
            $("html, body")
            .stop()
            .animate({ scrollTop: $(link).offset().top - 73 }, 1000);
            $(".nav__list").slideUp(500);
            return false;
          });
        } else {
          $('a[href^="#"]').click(function() {
            var link = $(this).attr("href");
            $("html, body")
            .stop()
            .animate({ scrollTop: $(link).offset().top - 73 }, 1000);
            return false;
          });

        }
});

$(window).resize();




  
  /*
  // Hide elements after load
  $("dd").hide();

  // Accordion
  $("dt").click(function() {
    var parent = $(this).parent(),
      definitions = $(this).nextUntil("dt");

    $("body")
      .find("dd")
      .slideUp();
    definitions.not(":visible").slideDown();
    return false;
  });
  */

  // Scroll down from arrow anchor
  $(".arrow").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: $("main").offset().top - 73 }, 1000);
      return false;
  });
});
