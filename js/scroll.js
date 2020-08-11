document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      let href = anchor.getAttribute("href");
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
