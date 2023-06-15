;
(function($) {

    function spSliderPic() {

        var $block = $('#visualMain'),
            $ad = $block.find('.umall-sp-ad'),
            showIndex = 0, // 預設要先顯示那一張
            fadeOutSpeed = 500, // 淡出的速度
            fadeInSpeed = 1000, // 淡入的速度
            defaultZ = 10, // 預設的 z-index
            isHover = false,
            timer, speed = 2000; // 計時器及輪播切換的速度

        $ad.css({
            opacity: 0,
            zIndex: defaultZ - 1
        }).eq(showIndex).css({
            opacity: 1,
            zIndex: defaultZ
        });

        var str = '';
        for (var i = 0; i < $ad.length; i++) {
            str += '<a href="#" class="umall-sp-pic-' + (i + 1) + '">' + (i + 1) + '</a>';
        }
        var $controlA = $block
            .append($('<div class="umall-sp-control">' + str + '</div>')
                .css('zIndex', defaultZ + 1)).find('.umall-sp-control a')
            .css({
                opacity: 0.8
            });

        $controlA.eq(0).css({
            opacity: 1
        });
        $controlA.mouseover(function() {
            showIndex = $(this).text() * 1 - 1;

            $ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function() {
                if (!isHover) {
                    timer = setTimeout(autoClick, speed + fadeInSpeed);
                }
            }).css('zIndex', defaultZ).siblings('a').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
            $(this).addClass('on').css({
                opacity: 1
            }).siblings().removeClass('on').css({
                opacity: 0.8
            });

            return false;
        }).focus(function() {
            $(this).blur();
        }).eq(showIndex).addClass('on');

        $block.hover(function() {
            isHover = true;
            clearTimeout(timer);
        }, function() {
            isHover = false;
            timer = setTimeout(autoClick, speed);
        });

        function autoClick() {
            if (isHover) return;
            showIndex = (showIndex + 1) % $controlA.length;
            $controlA.eq(showIndex).mouseover();
        }

        timer = setTimeout(autoClick, speed);


    }

    spSliderPic();


}(jQuery));