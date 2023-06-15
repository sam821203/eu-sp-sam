$(function() {

    function menuDotsScrollToScreen(elementId) {
        const $htmlBody = $('html, body');
        const $elementId = $(elementId);
        const $elementIdMenuA = $elementId.find('li a');
       
        $elementIdMenuA.on('click', function(e) {
            e.preventDefault();
            const $this = $(this);

            let elementName = $this.attr('href');
            let $elementName = $(elementName);

            $htmlBody.animate({
                scrollTop: $elementName.offset().top
            }, 800);
            
        });
    }

    function showNavDotAndSecondLogo() {
        const $navDot = $('#navDot');
        const $secondLogo = $('#secondLogo');
        const _screen1Height = $('#screen1').outerHeight();

        $(window).on('scroll', function(){
            if($(this).scrollTop() >= _screen1Height) {
                $navDot.removeClass('is--hide');
                $secondLogo.removeClass('is--hide');
            } else {
                $navDot.addClass('is--hide');
                $secondLogo.addClass('is--hide');
            }
        });

    }

    function scrollToElementAddClass() {
        const $navDotAs = $('#navDot li a');

        let dotHrefArray = [];

        for (let i = 0; i < $navDotAs.length; i++ ) {
            let getHref =  $navDotAs[i].getAttribute('href');
            dotHrefArray.push(getHref);
        }

        $(window).on('scroll', function() {
            const $this = $(this);
            let winPos = $(window).scrollTop();
            
            for(let i = 0; i < dotHrefArray.length; i++) {
                const elementId = dotHrefArray[i];
                const $elementId = $(elementId);
                let elementIdPos = $elementId.offset().top - 300;
                let elementIdBottom = $elementId.outerHeight();
                
                if( winPos >= elementIdPos && winPos < (elementIdPos + elementIdBottom) ) {
                    $('a[href="' + elementId + '"]').parent('li').addClass('current');
                    switch (elementId) {
                        case '#screen2':
                            $('.second__slogn').removeClass('is--hide').addClass('animated fadeInLeft');
                            $('.second__intro').removeClass('is--hide').addClass('animated fadeInUp');
                            $('#screen2 .promo__box').removeClass('is--hide').addClass('animated bounceInDown');
                            break;
                        case '#screen3':
                            $('#screen3 .promo__box').removeClass('is--hide').addClass('animated bounceInUp');
                            break;
                        case '#screen4':
                            $('#screen4 .promo__box').removeClass('is--hide').addClass('animated bounceInDown');
                            break;
                        case '#screen5':
                            $('#screen5 .promo__box').removeClass('is--hide').addClass('animated bounceInDown');
                            break;
                        case '#screen6':
                            $('#screen6 .promo__box').removeClass('is--hide').addClass('animated bounceInDown');
                            break;
                        case '#screen7':
                            $('#screen7 .promo__box').removeClass('is--hide').addClass('animated bounceInDown');
                            break;
                        case '#screen8':
                            $('#screen8 .promo__box').removeClass('is--hide').addClass('animated zoomIn');
                            break;
                        case '#screen9':
                            $('#screen9 .promo__box').removeClass('is--hide').addClass('animated zoomIn');
                            break;
                        case '#screen10':
                            $('#screen10 .promo__box').removeClass('is--hide').addClass('animated zoomIn');
                            break;
                    }
                } else {
                    $('a[href="' + elementId + '"]').parent('li').removeClass('current');
                    switch (elementId) {
                        case '#screen2':
                            $('.second__slogn').addClass('is--hide').removeClass('animated fadeInLeft');
                            $('.second__intro').addClass('is--hide').removeClass('animated fadeInUp');
                            $('#screen2 .promo__box').removeClass('animated bounceInDown');
                            break;
                        case '#screen3':
                            $('#screen3 .promo__box').addClass('is--hide').removeClass('animated bounceInUp');
                            break;
                        case '#screen4':
                            $('#screen4 .promo__box').addClass('is--hide').removeClass('animated zoomIn');
                            break;
                        case '#screen5':
                            $('#screen5 .promo__box').addClass('is--hide').removeClass('animated bounceInDown');
                            break;
                        case '#screen6':
                            $('#screen6 .promo__box').addClass('is--hide').removeClass('animated bounceInDown');
                            break;
                        case '#screen7':
                            $('#screen7 .promo__box').addClass('is--hide').removeClass('animated bounceInDown');
                            break;
                        case '#screen8':
                            $('#screen8 .promo__box').addClass('is--hide').removeClass('animated zoomIn');
                            break;
                        case '#screen9':
                            $('#screen9 .promo__box').addClass('is--hide').removeClass('animated zoomIn');
                            break;
                        case '#screen10':
                            $('#screen10 .promo__box').addClass('is--hide').removeClass('animated zoomIn');
                            break;
                    }
                }
            }

        });

    }



    menuDotsScrollToScreen('#navMenu');
    menuDotsScrollToScreen('#navDot');
    showNavDotAndSecondLogo();
    scrollToElementAddClass();

    
});