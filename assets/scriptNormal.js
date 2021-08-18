


$(document).ready(function () {
    $(".nav-logo-area-first .hamburger").click(function () {
  
      $('.nav-logo-area-first').css('display', 'none');
      $('.nav-logo-area-second').css('display', 'flex');
      $('.nav-area-mobile').toggleClass('bg-black');
      $('.nav-items-mobile').slideDown('fast');
      $('.nav-items-mobile').css('display', 'flex');
    });
  
    $(".nav-logo-area-second .hamburger").click(function () {
  
      $('.nav-logo-area-first').css('display', 'flex');
      $('.nav-logo-area-second').css('display', 'none');
      $('.nav-items-mobile').slideUp('fast');
      $('.nav-area-mobile').toggleClass('bg-black');
      $('.nav-items-mobile').css('display', 'flex');
  
    });
  
  });
  


  function myFunction4(x) {
    if (x.matches) { // If media query matches
      $('.nav-logo-area-second').css('display', 'none');
      $('.nav-logo-area-first').css('display', 'none');
      $('.nav-items-mobile').css('display', 'none');
      $('.nav-items').css('display', 'flex');
    } else {
      $('.nav-logo-area-first').css('display', 'flex');
  
      $('.nav-area-mobile').removeClass('bg-black');
      $('.nav-items').css('display', 'none');
    }
  }
  
  var x = window.matchMedia("(min-width: 992px)")
  myFunction4(x) // Call listener function at run time
  x.addListener(myFunction4) // Attach listener function on state changes


  /*SEARCH OPEN */


$(function () {
    $('a[href="#search"]').on("click", function (event) {
      event.preventDefault();
      $("#search").addClass("open");
      $('#search > form > input[type="search"]').focus();
    });
  
    $("#search, #search button.close").on("click keyup", function (event) {
      if (
        event.target == this ||
        event.target.className == "close" ||
        event.keyCode == 27
      ) {
          
        $(this).removeClass("open");
      }
    });
  
    $("form").submit(function (event) {
      event.preventDefault();
      return false;
    });
  });






  $(window).on('load',function(){
    setTimeout(function(){ // allowing 3 secs to fade out loader
    $('#loading').fadeOut('fast',function(){

      $('#loading').removeClass('d-flex');
      
    });
    
    },4000);
  });