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