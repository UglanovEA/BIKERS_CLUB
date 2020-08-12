$(document).ready(function () {
  $(".header-button").click(function (event) {
    $(".header-button,.header-nav-hidden").toggleClass("active");
    $("body").removeClass("lock");
  });
  $(".header-nav-hidden_list").click(function (event) {
    $(".header-button,.header-nav-hidden").removeClass("active");
    $("body").removeClass("lock");
  });
});
