$(document).ready(function () {

  $('.search').on('click', function() {
    $(this).parent().toggleClass('open');
  });

    $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
    $("body").toggleClass("menubar-in");
  });

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

  Waves.attach('.btn', ['waves-dark']);
  Waves.init();

});

