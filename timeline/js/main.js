$(window).on("load",() => {
  $('#rg_preloader').toggle();
  $('#rg_side-nav, #rg_showcase_events').removeClass('hidden');
  AOS.init();
});


$(function() {
  // animate on scroll for timeline headers

  // smooth scroll for side-nav btns
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });

  // adds active class to side-nav btns on click event
  $('#rg_anchors .rg_btn').click((event) => {
    $('#rg_anchors .rg_btn').removeClass('rg_active');
    if(event.target.classList[0] === 'rg_btn'){
      $(event.target).addClass('rg_active');
    } else {
      $(event.target).closest('rg_li').addClass('rg_active');
    }
  });

  // //checks for the first time which side-nav is active
  // $('.event .event-data').each((index, item) => {
  //   if(isElementInViewport(item)){
  //     var idx = item.parentElement.id.slice(-1);
  //     $('#anchors .btn').removeClass('active');
  //     $(`#anchors .btn-${idx}`).addClass('active');
  //   }
  // });

  // checks which side-nav is active on each scroll
  $(document).scroll(() => {
    $('.rg_event .rg_event-data').each((index, item) => {
      if(isElementInViewport(item)){
        var idx = item.parentElement.id.slice(-1);
        $('#rg_anchors .rg_btn').removeClass('rg_active');
        $(`#rg_anchors .rg_btn-${idx}`).addClass('rg_active');
      }
    });
  });

  // checks if an element is in viewport or not
  function isElementInViewport (el) {
      if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
  }
});
