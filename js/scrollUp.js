$(document).ready(function () {
  let windowHeight = $(window).height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > windowHeight) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });

  $("#scrollToTop").click(function (event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0 }, 800);
  });
});
