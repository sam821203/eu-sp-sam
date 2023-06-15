'use strict';
$(function(){


    function showNavDotAndSecondLogo() {
        const $navDot = $('#navDot');
        const $header = $('#header');

        $(window).on('scroll', function(){

            // if($(this).scrollTop() >= _screen1Height) {
            //     // $navDot.removeClass('is--hide');
            //     $header.addClass('is--show');
                
            // } else {
            //     // $navDot.addClass('is--hide');
            //     $header.removeClass('is--show');
            // }
        });

        

    }
    showNavDotAndSecondLogo();

    function menuDotsScrollToScreen() {
        const $htmlBody = $('html, body');
        const $elementId = $("#navDot");
        const $elementIdMenuA = $elementId.find('li a');
       
        $elementIdMenuA.on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            let elementName = $this.attr('href');
            let $elementName = $(elementName);

            console.log( $elementName.offset().top)

            $htmlBody.stop().animate({
                scrollTop: $elementName.offset().top
            }, 800);
            
        });
    }

    // menuDotsScrollToScreen();

});