$(function () {
    'use strict';

    // Banner slider js

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });


    // About video js
    // gallery js
    $('.venobox').venobox();

    // Testimonial slider

    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

     // Counter js start
     $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Logo slider start
    
    $('.logo_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr transition"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arr transition"></i>',
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
    });


});