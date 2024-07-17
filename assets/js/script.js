$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= 80) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

$(document).ready(function () {
  //Typed Effect
  new Typed("#type-it", {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 80,
    loop: true,
  });

  //One page scroll
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "linear", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -70, // offste (in px) for fixed top navigation
  });
});
