$(document).ready(function () {

  $('.search').on('click', function() {
    $(this).parent().toggleClass('open');
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

  Waves.attach('.btn, .btn-subscribe', ['waves-dark']);
  Waves.init();

});

