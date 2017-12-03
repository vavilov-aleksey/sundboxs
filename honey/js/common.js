$(function() {

    $('.carousel-reviews').owlCarousel({
        loop: true,
        nav: true,
        navText:['<i class="fa fa-reply-all"></i>','<i class="fa fa-reply-all"></i>'],
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


    });


    jQuery(document).on('click', '.link-right', function (e) {
        e.preventDefault();

        var link = $(this).find('.fa');
        link.removeClass('fa-caret-right').addClass('fa-caret-down');

        $(this).addClass('link-down');
    }).on('click', '.link-down', function (e) {
        e.preventDefault();

        var link = $(this).find('.fa');
        link.removeClass('fa-caret-down').addClass('fa-caret-right');

        $(this).removeClass('link-down');
    });

    //Scroll link
    $(function(){
        $('.link-menu').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
            // return false;

            var hamburger = $(this).parents('.mobile-menu').find('.hamburger');
            hamburger.removeClass('is-active');

            var nav = $(this).parents('.mobile-menu').find('.hidden-menu');
            nav.addClass('hidden');

        });
    });

    //Scrol menu
    $(document).ready(function() {

        var header = $(".mobile-menu"); // Меню
        var scrollPrev = 0; // Предыдущее значение скролла

        $(window).scroll(function() {
            var scrolled = $(window).scrollTop(); // Высота скролла в px
            var firstScrollUp = false; // Параметр начала сколла вверх
            var firstScrollDown = false; // Параметр начала сколла вниз

            // Если скроллим
            if ( scrolled > 0 ) {
                // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
                if ( scrolled > scrollPrev ) {
                    firstScrollUp = false; // Обнуляем параметр начала скролла вверх
                    // Если меню видно
                    if ( scrolled < header.height() + header.offset().top ) {
                        // Если только начали скроллить вниз
                        if ( firstScrollDown === false ) {
                            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                            header.css({
                                "top": topPosition + "px"
                            });
                            firstScrollDown = true;
                        }
                        // Позиционируем меню абсолютно
                        header.css({
                            "position": "absolute"
                        });
                        // Если меню НЕ видно
                    } else {
                        // Позиционируем меню фиксированно вне экрана
                        header.css({
                            "position": "fixed",
                            "top": "-" + header.height() + "px"
                        });
                    }

                    // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
                } else {
                    firstScrollDown = false; // Обнуляем параметр начала скролла вниз
                    // Если меню не видно
                    if ( scrolled > header.offset().top ) {
                        // Если только начали скроллить вверх
                        if ( firstScrollUp === false ) {
                            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                            header.css({
                                "top": topPosition + "px"
                            });
                            firstScrollUp = true;
                        }
                        // Позиционируем меню абсолютно
                        header.css({
                            "position": "absolute"
                        });
                    } else {
                        // Убираем все стили
                        header.removeAttr("style");
                    }
                }
                // Присваеваем текущее значение скролла предыдущему
                scrollPrev = scrolled;
            }
        });
    });

    $(window).on('load', function(){
        $('.preloader').delay(100).fadeOut('slow');
    })

});