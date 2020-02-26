$(function () {
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.header__menu-text').on('click', function () {
        $('.header__menu-list').slideToggle();
    });


    $('.about__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.about__slider-nav'
    });
    $('.about__slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.about__slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.price__menu li').on('click', function (e) {
        e.preventDefault();
        $(".price__menu li").removeClass('active');
        $(this).addClass('active');
    });
    $('.link').on('click', function (e) {
        e.preventDefault();
        $('.price__list').each(function () {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });

    $(".shop__item-rate").rateYo({
        starWidth: "15px",
        ratedFill: "#cf6161",
        rating: 4,
        readOnly: true
    });

    $('.shop__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<svg class="shop__slider-arrow shop__slirer-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-left" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>',
        nextArrow: '<svg class="shop__slider-arrow shop__slirer-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>'
    });

    $('.clients__slider').slick({
        prevArrow: '<i class="fas fa-arrow-left clients__slider-arrow clients__slider-left"></i>',
        nextArrow: '<i class="fas fa-arrow-right clients__slider-arrow clients__slider-right"></i>',
        fade: true
    });

   

    $('[data-fancybox]').fancybox({
        youtube : {
          controls : 0,
          showinfo : 0
        },
        vimeo : {
          color : 'f00'
        }
      });
      
      $('.blog__box').masonry({
        // options
        itemSelector: '.item',
        columnWidth: 380,
        fitWidth: true
    });


    function initMap() {
  
        // Метка на карте + координаты
        var myLatLng = {lat: 40.68669113, lng: -73.97347927};
      
        // Настройки карты
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng, // Координаты и центрирование по метке
          disableDefaultUI: true,
          mapTypeControl: true,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
        });
    }

    var mixer = mixitup('.works__gallery');

    $('.works__list a').on('click', function () {
        $(".works__list a").removeClass('active');
        $(this).addClass('active');
    });

});
