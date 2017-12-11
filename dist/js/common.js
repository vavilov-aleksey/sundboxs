$(function() {

    //Scroll link
    $(function(){
        $('.link-menu').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 800);


        });
    });

});