$(function () {
  $(".clients-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="client-arrow clients-clider_arrowleft" src="images/icons/arrowleft.svg" alt="">',
    nextArrow: '<img class="client-arrow  clients-clider_arrowright" src="images/icons/arrowright.svg" alt="">',
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]

  });
  $('.customers__slider').slick({
    fade: true,
    prevArrow: '<img class="customer-arrow customer-clider_arrowleft" src="images/icons/arrowleft.svg" alt="">',
    nextArrow: '<img class="customer-arrow  customer-clider_arrowright" src="images/icons/arrowright.svg" alt="">',
    responsive: [
      {
        breakpoint: 796,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },

    ]
  });

  $('.btn-menu').on('click', function () {
    $('.header-menu__list').slideToggle();
  });

  var block_show = false;

  function scrollTracking() {
    if (block_show) {
      return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.facts-stat__item-number').offset().top;
    var eh = $('.facts-stat__item-number').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show = true;

      // Код анимации
      $('.facts-stat__item-number').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  }
  $(window).scroll(function () {
    scrollTracking();
  });

  $(document).ready(function () {
    scrollTracking();
  });

  $(document).ready(function () {
    $(".header").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1800);
    });

  });
});