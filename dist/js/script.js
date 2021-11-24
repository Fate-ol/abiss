$(document).ready(function(){

  $('.main-menu__ico').click(function() {
    $( this ).closest('.main-menu').toggleClass('open');
    return false;
  });

  if (document.documentElement.clientWidth < 768) {
      $('.page-nav').click(function() {
      $( this ).toggleClass('open');
      return false;
    });
  }







  function height_r()
	{
		$('.header-wrapper').css('height',$('.header-out').height()+'px');
		$('.footer-wrapper').css('height',$('.footer-out').outerHeight(true)+'px');
	}
	$(window).resize(function()
	{
    height_r();
	});
	height_r();
	$(window).on("load", function()
	{
		height_r();
	});

  
  $('.main-menu__li.dropdown').click(function() {
    $( this ).toggleClass('open');
    return false;
  });

  $('.search-b .search-link').click(function() {
    $( this ).parent().find('.search-content').toggleClass('open');
    return false;
  });
  $('.search-close').click(function() {
    $( this ).closest('.search-content').toggleClass('open');
    return false;
  });

  $('.opportunity-all').click(function() {
    $( this ).closest('.opportunity-list').toggleClass('hide');
    return false;
  });


  $('.promo-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
  });
  
  $('.work-main-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
    },
  ]
  });
  
  $('.partner-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
  ]
  });


  (function($) {
    $(function() {
    
      $('input.styler, select.styler').styler();
    
    });
  })(jQuery);

  $( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true
    });
  } );

});