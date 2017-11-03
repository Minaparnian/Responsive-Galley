$(document).ready(function(){
  $('.overlay').mouseover(function(e) {
    e.preventDefault();
    $('h2').addClass('animated rotateIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (){
      $(this).removeClass('animated rotateIn');
    });
  });


  // add class and remove the class to have animated without refreshing the page
  $('h1').mouseover(function(e) {

    e.preventDefault();
    $(this).addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (){
      $(this).removeClass('animated bounce');
    });
  });
});
