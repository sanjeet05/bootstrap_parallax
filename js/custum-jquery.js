$(document).ready(function(){
	// $('#nav').localScroll(1000);
  // https://github.com/flesler/jquery.localScroll/issues/23
  $('#nav').localScroll({
    hash:true,
    duration: 1000,
    offset: function() {
        return { top: 1 - $('.nav_height').height(), left:0 };
    }
  });
  // $('#nav').localScroll({
  //   hash:true,
  //   duration: 1000,
  //   offset: {top:-50,left:0 },
  // });

  // for active the menubar
  // for refresh
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');
  //  for current click
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $('a').each(function () {
          $(this).parent().removeClass('active');
      })
      $(this).parent().addClass('active');
  });

  // close menu toogle
  // for browser
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });
  // for mobile and browser
  // $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
  //     $('.navbar-toggle:visible').click();
  // });

	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	// $('#intro').parallax("50%", 0.1);
	// $('#second').parallax("50%", 0.1);
	// $('.bg').parallax("50%", 0.4);
	// $('#third').parallax("50%", 0.3);

  // $('#nav').height()
});
