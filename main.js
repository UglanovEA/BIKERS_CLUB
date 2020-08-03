$(document).ready(function () {
  $(".header-button").click(function (event) {
    $(".header-button,.header-nav-hidden").toggleClass("active");
  });

  $(".header-nav-hidden_list").click(function (event) {
    $(".header-button,.header-nav-hidden").removeClass("active");
    $("body").removeClass("lock");
  });

  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
  });
});
