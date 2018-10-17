$(document).ready(function(){

	$(window).on("load", function(){
		var body = $('body');
		body.addClass("postload_body");
		// body.css("overflow", "initial");

		var preload_content = $(".rg_preloader"),
			postload_content = $(".postload_content");

		// preload_content.addClass("pt-page-scaleDown");
		postload_content.css("visibility", "unset");
		postload_content.addClass("pt-page-scaleUpDown");
		

		$(".live").css("padding-top", ($(window).height()*68/100));
		$(".ic_title").css("padding-top", ($(window).height()*38/100));


// SETTING INSTITUTE
		anime.timeline({loop: false})
		  .add({
		    targets: '.institute .line',
		    opacity: [0.5,1],
		    scaleX: [0, 1],
		    easing: "easeInOutExpo",
		    duration: 700
		  }).add({
		    targets: '.institute .line',
		    duration: 600,
		    easing: "easeOutExpo",
		    translateY: function(e, i, l) {
		      var offset = -0.625 + 0.625*2*i;
		      return offset + "em";
		    }
		  }).add({
		    targets: '.institute .ampersand',
		    opacity: [0,1],
		    scaleY: [0.5, 1],
		    easing: "easeOutExpo",
		    duration: 600,
		    offset: '-=600'
		  }).add({
		    targets: '.institute .letters-left',
		    opacity: [0,1],
		    translateX: ["0.5em", 0],
		    easing: "easeOutExpo",
		    duration: 600,
		    offset: '-=300'
		  }).add({
		    targets: '.institute .letters-right',
		    opacity: [0,1],
		    translateX: ["-0.5em", 0],
		    easing: "easeOutExpo",
		    duration: 600,
		    offset: '-=600'
		  });


// SETTING UP LIVE NOW
		anime.timeline({loop: false})
		  .add({
		    targets: '.live .word',
		    scale: [14,1],
		    opacity: [0,1],
		    easing: "easeOutCirc",
		    duration: 800,
		    delay: function(el, i) {
		      return 800 * i;
		    }
		  });



// >>>>>>>>>>>>>>>>>>>>EVENTS TIMELINE<<<<<<<<<<<<<<<<<<<<<<<
		// SETTING UP EVENTS SHOWCASE
		$('#rg_preloader').toggle();
 		$('#rg_side-nav, #rg_showcase_events').removeClass('hidden');
		AOS.init();


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

	});
});