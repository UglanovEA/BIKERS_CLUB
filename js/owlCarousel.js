$(document).ready(function () {
  const clubcontrols = $("#ClubInfoCarousel");
  clubcontrols.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      1230: {
        dots: false,
      },
    },
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
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      900: {
        items: 3,
        dots: false,
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
    items: 4,
    loop: true,
    dots: false,
    margin: 30,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      850: {
        items: 3,
      },
      1250: {
        items: 4,
      },
    },
  });
  $("#shopcontrolsleft").click(function () {
    shopcontrols.trigger("next.owl.carousel");
  });
  $("#shopcontrolsright").click(function () {
    shopcontrols.trigger("prev.owl.carousel");
  });
});
