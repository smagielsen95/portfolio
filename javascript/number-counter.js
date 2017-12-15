$(window).scroll(function() {
  if ($(this).scrollTop()> 350) {
    $('.fade-in').fadeIn(1000);
   } else {
    $('.fade-in').fadeOut(1000);
   }
});

