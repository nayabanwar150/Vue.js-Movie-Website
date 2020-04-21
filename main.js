// Navbar Toggler
$(document).ready(function () {
    $('.toggle-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
});

// Srcoll Top Button
var mybutton = document.getElementById("scrollTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}