(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // TOUR LINK UPDATE
    if ($(window).width() < 992) {
        $('.btn-showfilter').click(function () {
            $('.filter-wrap').toggleClass('open');
        });
        $('.filter-title').click(function () {
            $('.filter-wrap').removeClass('open');
        });
    }
    // END UPDATE


    // new WOW({
    //     offset: 50,
    // }).init();
    // $('.search-panel').scrollToFixed({
    //     zIndex: 900,
    //     marginTop: 70
    // });
    // jQuery.scrollSpeed(100, 500);
    $('.product-tabs ul.tabs, #product-tabs ul.tabs').scrollToFixed({
        zIndex: 100,
        marginTop: $('header').outerHeight()
    });

    $('[data-toggle="tooltip"]').tooltip();
    // $(".TickerNews").newsTicker();
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    $(".counter").countimator({
        duration: 1000
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    $('.product-tabs a[href^="#"]').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 150
        }, 700);
        $('.product-tabs li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });

    // MENU

    $('.btn-showmenu').click(function () {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('html').css('overflow', 'hidden');
    });
    $('.overlay').click(function () {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function () {
        $(this).siblings('.sub').slideToggle(300);
    });

    if ($(window).width() < 575) {}
    // $('header .login').insertAfter('.menulink');


    // END MENU

    // SEARCH
    $('#btn-datepick').click(function () {
        $(this).siblings('.date-picker').toggleClass('show');
    });

    $('.btn-showadvanced').click(function () {
        $(this).toggleClass('active');
        $('.hidden-group').slideToggle(300);
    });

    $('#advance-search').click(function () {
        $('.advance-search').addClass('show');
    });
    $('.child-number').on('change', function () {
        $('.group-yearold label').fadeIn();
        $('#select-age-group').empty();
        $.each(new Array(+this.value), function (i) {
            $('<select />', {
                html: '<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option>'
            }).appendTo('#select-age-group');
        });
    });
    // $('.btn-update').click(function() {
    //     var phong = $('#phong').val();
    //     var nguoilon = $('#nguoilon').val();
    //     var treem = $('#treem').val();
    //     $('.advance-search').removeClass('show');
    //     $('#advance-search').val("Số phòng: " + phong + ", Người lớn: " + nguoilon + ", Trẻ em: " + treem);
    // });
    // $('.btn-update2').click(function() {
    //     var nguoilon = $('#nguoilon').val();
    //     var treem = $('#treem').val();
    //     $('.advance-search').removeClass('show');
    //     $('#advance-search').val("Người lớn: " + nguoilon + ", Trẻ em: " + treem);
    // });
    // END SEARCH
    //USER CONTROL PANEL SCRIPT

    $('.user-sidebar').click(function () {
        $('.user-sidelink').slideToggle(300);
    });

    $('#btn-changepw').click(function () {
        $('.changepw-form').slideToggle(300);
    });

    // TOUR BOOKING

    // SLIDE
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true
    });

    $('.partner-list').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.login-bg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false,
        swipeToSlide: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000
    });

    $('.hotel-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false
    });
    $('.picture-slide').slick({
        slidesToShow: 5,
        slidesToSlide: 1,
        speed: 500,
        arrows: true,
        dots: false
    });
    $('.other-service .service-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        speed: 500,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // $('.other-service .service-img').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     fade: true,
    //     autoplaySpeed: 3000,
    //     arrows: false,
    //     dots: false,
    // });

    // DATE TIME
    // $('input[name="daterange"]').daterangepicker({
    //     "singleDatePicker": true,
    //     "autoApply": true
    // }, function(start, end, label) {
    //     console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    // });

    // FAQ

    $('.faq .faqtitle').click(function () {
        var _parent = $(this).parent();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            _parent.find('.faqcontent').slideUp(400);
        } else {
            $('.faq .faqtitle').removeClass('active');
            $('.faq .faqcontent').slideUp();
            $(this).addClass('active');
            _parent.find('.faqcontent').slideDown(400);
        }
    });
    $('.qa-title').click(function () {
        $(this).toggleClass('active');
        $(this).next('.qa-answer').find('.qa-content').slideToggle(300);
    });

    // HOTEL DETAIL SCRIPT

    $('.btn-viewprice').click(function (e) {
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 700);
        $('.search-panel .date').eq(0).delay(700).find('input').focus();
    });

    $('.btn-book').click(function () {
        $(this).parents('.room-group').children('.hotel-booking').slideToggle(300);
    });

    // SUPPORT SCRIPT
    $('.btn-sendmess').click(function () {
        $('.send-mess').slideToggle(500);
    });

    // INPUT NUMBER
    $('.btn-spin').click(function () {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });
    // END INPUT NUMBER

    // TABS
    $('#product-tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });
    $('#visadate').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // BOOKING SCRIPT
    $('#btn-bookfor').click(function () {
        $('#booking-for-form').slideToggle(300);
    });
    $('.btn-showform').click(function () {
        $(this).siblings('.form-wrap').slideToggle(300);
    });
    $('#btn-duadon').click(function () {
        $('.form-duadon').slideToggle(300);
    });

    // END BOOKING
    // VISA
    $('.visa-type a').click(function () {
        $('.visa-type a').removeClass('active');
        $(this).addClass('active');
    });
    // END VISA

    // TOUR SLIDE
    $('.tour-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true
    });
    // END TOUR SLIDE

    // PRODUCT SLIDE
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });
    // END GOLF SLIDE
});

},{}]},{},[1])

//# sourceMappingURL=main.js.map
