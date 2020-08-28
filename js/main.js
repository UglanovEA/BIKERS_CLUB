$(document).ready(function () {
  $(".header-button").click(function (event) {
    $(".header-button,.header-nav-hidden").toggleClass("active");
    $("body").removeClass("lock");
  });
  $(".header-nav-hidden_list").click(function (event) {
    $(".header-button,.header-nav-hidden, .ham").removeClass("active");
    $("body").removeClass("lock");
  });
});
