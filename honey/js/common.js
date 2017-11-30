$(function() {

    $('.carousel-reviews').owlCarousel({
        loop: true,
        nav: true,
        navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        dot: true,
        smartSpeed: 700,
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

});