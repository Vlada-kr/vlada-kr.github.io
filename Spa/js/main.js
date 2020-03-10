$(function () {
    $('.clients__slider').slick({
        arrows: false,
        dots: true
    });

    $('select').styler();
    
    $('.header__menu-btn').on('click', function(){
        $('.menu__list').slideToggle();
    })
});