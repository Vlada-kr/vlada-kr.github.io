$(function () {
    new WOW().init();

    $('.header__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplaySpeed: 5000,
        autoplay: true
    });

    $('.header__mobile-btn').on('click', function () {
        $('.nav__mobile').slideToggle();
    });

    //сдайдер

    $('.header__slider').on('swipe', function(event, slick, direction){
        
        
      });

    var block_show1 = false;
    var block_show2 = false;
    function scrollTracking() {
        if (block_show1 && block_show2) {
            return false;
        }
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.features-second__number').offset().top;
        var eh = $('.features-second__number').outerHeight();
        var ec = $('.chart').offset().top;
        var ech = $('.chart').outerHeight();
        var dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            block_show1 = true;
            $('.features-second__number').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
        if (wt + wh >= ec || wh + wt == dh || ec + ech < wh) {
            block_show2 = true;
            $('.chart').easyPieChart({
                trackColor: false,
                scaleColor: false,
                barColor: '#000',
                size: 196,
                lineWidth: 1,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    }
    $(window).scroll(function () {
        scrollTracking();
    });

    $(document).ready(function () {
        scrollTracking();
    });





    $('.header__btn').on('click', function () {
        $('.header__btn').toggleClass('active');
        $('.header__menu-box').toggleClass('active');
    });

    $('.interiors__items').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1200
    });

    $('.partners__items').slick({
        arrows: false,
        dots: false,
        speed: 1200,
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.flat__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.flat__slider-nav'
    });
    $('.flat__slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.flat__slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true,
        speed: 1200,
        autoplay: true
    });

    $('.flat__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.flat__tabs, .tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.flat__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    $('.inastagram__slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1200,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});