const header = $('header');
const logo = $('#logo');

$(window).on('scroll', function () {   
  if ($(window).scrollTop() > 0) { 
    header.addClass('scrolled'); 
    logo.attr('src', 'assets/images/logo-orange-text.png'); 
  } else { 
    header.removeClass('scrolled'); 
    logo.attr('src', 'assets/images/logo-white-text.png'); 
  } 
});

