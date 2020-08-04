$(document).ready(function () {
  $(".header-button").click(function (event) {
    $(".header-button,.header-nav-hidden").toggleClass("active");
  });

  $(".header-nav-hidden_list").click(function (event) {
    $(".header-button,.header-nav-hidden").removeClass("active");
    $("body").removeClass("lock");
  });

  const clubcontrols = $("#ClubInfoCarousel");
  clubcontrols.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 1000,
  });
  $("#clubcontrolsleft,#comcontrolsleft").click(function () {
    clubcontrols.trigger("next.owl.carousel");
  });
  $("#clubcontrolsrigth, #comcontrolsright").click(function () {
    clubcontrols.trigger("prev.owl.carousel");
  });

  const ourcontrols = $("#OurRidersCarousel");
  ourcontrols.owlCarousel({
    items: 3,
    loop: true,
    dots: false,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  const commentcontrols = $("#CommentsCarousel");
  commentcontrols.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    margin: 20,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $("#comcontrolsleft").click(function () {
    commentcontrols.trigger("next.owl.carousel");
  });
  $("#comcontrolsright").click(function () {
    commentcontrols.trigger("prev.owl.carousel");
  });

  const shopcontrols = $("#ShopCarousel");
  shopcontrols.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    margin: 20,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $("#comcontrolsleft").click(function () {
    commentcontrols.trigger("next.owl.carousel");
  });
  $("#comcontrolsright").click(function () {
    commentcontrols.trigger("prev.owl.carousel");
  });
});
