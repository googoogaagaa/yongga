// ------------------------------
// https://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
    $('button').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
      $(this).closest('button').addClass("active");
    var theClass = $(this).attr("class");
      $('.' + theClass).parent('button').addClass('active');
    //Animate
    
    return false;
  });
 
}
scrollNav();