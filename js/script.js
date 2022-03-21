
//hamburger + drawer menu
$(function () {
    $('#hamburger-btn').click(function () {
      $('body').toggleClass('is-drawer-active')
  
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true')
        $('#drawer').attr('area-hidden','false')
      } else {
        $(this).attr('aria-expanded', 'false')
        $('#drawer').attr('area-hidden','true')
      }
    })
    //hamburger menu bun background
    $('.js-hamburger-bg').click(function () {
      $('body').removeClass('is-drawer-active')
      $('#hamburger-btn').attr('aria-expanded', 'false')
      $('#drawer').attr('area-hidden','true')
    })
    
    $('.header__list a[href]').on('click', function() {
      $('#hamburger-btn').trigger('click');
    });
});

 //add css to header after scroll
 $(function() {
  let header = $('.header');

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 120) {
      header.css({'background-color': '#fff', 'box-shadow': '0px 3px 6px rgba(0, 0, 0, 0.2)'});
    } else {
      header.css({'background-color':'transparent', 'box-shadow': 'none'});
    }
  });
});

  