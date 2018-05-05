(function($) {
  "use strict";
  /*=============================================
  =                  Preloader                  =
  =============================================*/
  setTimeout(function() {
    $("#loading").addClass("hidden");
    $("#home").addClass("active");
  }, 1000);

  /*=============================================
  =                Menu Functions              =
  =============================================*/
  $(".navigation ul li a").on("click", function(e) {
    e.preventDefault();
    var activeSection = $(this).attr("href");
    var overlayChance = $(this)
      .parent("li")
      .attr("class");
    $(".section").removeClass("active");
    $("#home").removeClass('fadeInUp').addClass('fadeOutDown');
    $(".overlay")
      .removeClass("home-overlay")
      .addClass(overlayChance + "-overlay");
    $(".close-section").addClass("active");
    $(activeSection).addClass("active");
    $(activeSection).addClass('fadeInUp').removeClass('fadeOutDown');
    return false;
  });

  /*=============================================
  =           Section Close Function            =
  =============================================*/
  $(".close-section").on("click", function(e) {
    var overlayCloseChance = $(".section.active").attr("id");
    $(this).removeClass("active");
    $(".overlay")
      .removeClass(overlayCloseChance + "-overlay")
      .addClass("home-overlay");
    $(".section").removeClass('fadeInUp').addClass('fadeOutDown');
    $("#home").removeClass('fadeOutDown').addClass("fadeInUp");
    $("#home").addClass("active");
    return false;
  });
})(jQuery);
