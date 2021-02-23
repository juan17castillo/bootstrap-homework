(function ($) {
    "use strict";
  
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            800,
            "easeInOutExpo"
          );
          return false;
        }
    });
  
    $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
    });
  
    $("body").scrollspy({
      target: "#sideNav",
    });
  })(jQuery);
  