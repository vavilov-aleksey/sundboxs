$(function() {

    $('.carousel-reviews').owlCarousel({
        loop: true,
        nav: true,
        navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        dot: true,
        smartSpeed: 700,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }

        }
    });


    jQuery(document).on('click', '.hamburger', function (e) {
        e.preventDefault();

        var nav = $(this).parents('.mobile-menu').find('.hidden-menu');
        nav.removeClass('hidden');

        $(this).addClass('is-active');
    }).on('click', '.is-active', function (e) {
        e.preventDefault();

        var nav = $(this).parents('.mobile-menu').find('.hidden-menu');
        nav.addClass('hidden');

        $(this).removeClass('is-active');

    })

});