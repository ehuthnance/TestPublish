$(document).ready(function(){
   /* This is the jscript for the Back-To-Top icon that appears on the page layouts. It works in combination with the "a.go-to-top" Styles in our master style sheet (.css) */
   
	/* Check to see if the window is at top, if not then display button */
   $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('.go-to-top').fadeIn();
      } else {
         $('.go-to-top').fadeOut();
      }
   });
   
	/* Click event to scroll to top */
   $('.go-to-top').click(function(){
      
	/* adjust speed - lower value faster */
      $('html, body').animate({scrollTop: 0}, 400);
      return false;
   });
});