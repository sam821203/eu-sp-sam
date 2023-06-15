;(function ($) {

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');
            

    var goTopEffect = function( selectors ) {

        selectors.on('click', function(e) {
            e.preventDefault();

            $htmlBody.animate({

                scrollTop: 0

            }, 300);

        });
    }
    
    
    function spScrollNav() {




        var $spFixedNav = $('#spFixedNav'),
            $spNavLastLi = $spFixedNav.find('li:last')
            $spContainer = $('#spContainer');

        var $spFirstTable = $spContainer.find('table').eq(0);

        //console.log( $spNavLastLi  );

        _window.on( 'scroll', function(){

            if ( _document.scrollTop() >= 300 ){

                $spFixedNav.removeClass( 'sp-is--hide' );

            } else {

                $spFixedNav.addClass( 'sp-is--hide' );

            }

        });

        goTopEffect( $spNavLastLi );

    }

    spScrollNav();
    
} (jQuery));