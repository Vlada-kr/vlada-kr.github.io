$("input[type='tel']").mask("+7 (999) 999-99-99");

if ($(document).width() > 800 ? true : false) {
    $(document).ready(function () {
        var banner = $("body");
        var imgs = $(".content__photo > *");

        function showAllObjects(object) {
            object.fadeIn(900);
        }

        function moving(object, speed) {
            banner.on('mousemove', function (event) {
                var X = Math.floor((event.pageX) / speed - 20) + "px";
                var Y = Math.floor((event.pageY) / speed) + "px";
                object.css('transform', 'translate(' + X + ' , ' + Y + ')');
            });
        }
        // /////// 8 объектов, как и 8 картинок в блоке .box_header_image. Цифры в конце- ем больше значение, тем меньше будет двигаться картинка
        function moveAll(object) {
            moving($(object[0]), 0);
            moving($(object[1]), 0);
            moving($(object[2]), 20);
            moving($(object[3]), 40);
            moving($(object[4]), 20);
            moving($(object[5]), 45);
            moving($(object[6]), 20);
            moving($(object[7]), 5);
        }
        // /////////////////////////////////////////////////////////////
        showAllObjects(imgs);
        moveAll(imgs);
        // /////////////////////////////////////////////////////////////
    });
}

$('.modal_content > span,.modal_close').click(function () {
    $('.modal_window').addClass('close_modal');
})
$('.open_modal').click(function () {
    $('.modal_window').removeClass('close_modal');
})
$('.content__cost-wrapper').click(function () {
    if ( $('.soc_icon').hasClass('active') ) {
        $('.soc_icon').removeClass('active');
    } else {
        $('.soc_icon').addClass('active');    
    }

})