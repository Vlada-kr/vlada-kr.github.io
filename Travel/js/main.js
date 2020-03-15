$(function () {

    $('.parallax-window').parallax();
    
    jQuery(".eTimer").eTimer({
        etType: 1, etDate: "05.03.2020.0.0", etTitleText: "", etTitleSize: 0, etShowSign: 1, etSep: ":", etFontFamily: "Roboto", etTextColor: "#fff", etPaddingTB: 15, etPaddingLR: 15, etBackground: "transparent", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "white", etShadow: " 0px 0px 0px 0px transparent", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 35, etNumberColor: "#f6b230", etNumberPaddingTB: 0, etNumberPaddingLR: 4, etNumberBackground: "transparent", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 0px 0px transparent"
    });

    $('.acc__title').click(function (e) {

        var dropDown = $(this).closest('.acc__card').find('.acc__panel');
        $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc__title.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        e.preventDefault();
    });

    $('.header-menu__btn').on('click', function(){
        $(this).toggleClass('active');
        $('.header__menu').slideToggle();
    })


});