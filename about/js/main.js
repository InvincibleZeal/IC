$(() => {

    $('.about-img').click(zoomIn);
    var i = 0;
    function zoomIn(e) {
      if($(window).width() > 900) {
        var target = e.target.closest('.about-img')
        if(i%2 == 0) {
          $(target).toggleClass('zoom')
          $(target).animate({width: "100%"}, 300);
          $('.about-img').not(target).animate({width:"0"}, 300);
          $('.about-img').not(target).animate({opacity:"0"}, 2);
        } else {
          $('.about-img').animate({opacity: "1"}, 10);
          $('.about-img').animate({width: "33.3333333%"}, 300);
          setTimeout(() => $(target).toggleClass('zoom'), 1000);
        }
        $('.about-img .material-icons').toggleClass('hide');
        i++;
      }
    }

});
