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


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}