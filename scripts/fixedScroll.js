// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".main-header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > 0) {
    // Scroll Down
    $(".main-header").removeClass("nav-down").addClass("nav-up");
  } else if (st + $(window).height() < $(document).height()) {
    $(".main-header").removeClass("nav-up").addClass("nav-down");
  }
  //    if(st < 50) {
  //        $('.main-header').removeClass('nav-up').removeClass('nav-down');
  //        console.log(st);
  //    }

  lastScrollTop = st;
}
jQuery(function ($) {
  if ($(".logos_list ul li a").length) {
    $(".logos_list ul li a").click(function (e) {
      e.preventDefault();
    });
  }
});
//jQuery(function ($) {
//    var high = $(window).innerHeight();
//    var high2 = $(window).innerHeight();
//    var high3 = $(window).innerHeight();
//    $(window).scroll(function () {
//        var oTop1 = $('.affordable_row').offset().top - high;
//        if ($(window).scrollTop() > oTop1) {
//            $('.affordable_row').addClass('slow_open');
//        }
//        var oTop2 = $('.certificate_box').offset().top - high2;
//        if ($(window).scrollTop() > oTop2) {
//            $('.certificate_box').addClass('from_left');
//        }
//        var oTop3 = $('.certificate_learner_box').offset().top - high3;
//        if ($(window).scrollTop() > oTop3) {
//            $('.certificate_learner_box').addClass('from_right');
//        }
//
//    });
//
//    $('.hero_program .hero_enrole').click(function () {
//        $('html,body').animate({
//            scrollTop: $(".affordable_section").offset().top},
//                2000);
//
//    });
//    $('#alumni_carousel').owlCarousel({
//        slideTransition: 'linear',
//        autoplayTimeout: 2000,
//        autoplaySpeed: 2000,
//        loop: true,
//        margin: 5,
//        nav: false,
//        dots: false,
////                    direction: ltr,
//        autoplay: true,
//        responsive: {
//            0: {
//                items: 2
//            },
//            767: {
//                items: 2
//            },
//            1000: {
//                items: 5
//            }
//        }
//    });
//});
