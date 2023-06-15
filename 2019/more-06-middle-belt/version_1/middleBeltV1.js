/**
 * Created by jing on 2019/2/20.
 */
(function ($) {

    // goTop 使用方法
    $('a[href^="#"]').on('click', function (e) {
        var target = $('a[name=' + this.getAttribute('href').split('#')[1] + ']');
        e.preventDefault();
        if (target.length) {
            $('html,body').stop().animate({scrollTop: target.offset().top}, 500);
        }
    });

    $(document).ready(function () {
        ulMidBelt(responseObject);
        checkTime(responseObject);
    });

    // 資料輸入
    function ulMidBelt(bn) {
        var midBelt = [];
        var $wrapId = $("#mid__belt");
        midBelt += '<ul class="mid__belt-style">';
        for (var j = 0; j < bn.goodsIsOpen.length; j++) {

            if (j < 3) {
                midBelt += '<li id="' + bn.goodsIsOpen[j].id + '" class="start__wrap" data-wow-duration="0" data-wow-delay="0">';
            }
            else if (j >= 3 && j < 5) {
                midBelt += '<li id="' + bn.goodsIsOpen[j].id + '" class="wow bounceInDown" data-wow-duration="1s" data-wow-delay=".2s">';
            }
            else {
                midBelt += '<li id="' + bn.goodsIsOpen[j].id + '" class="wow flop__effect" data-wow-duration=".5s" data-wow-delay=".7s">';
            }

            midBelt += '<img src="' + bn.goodsIsOpen[j].img + '" alt="' + bn.goodsIsOpen[j].alt + '">';
            midBelt += '</li>';
        }
        $wrapId.append(midBelt);
    }

    // 時間判定
    function checkTime(res) {
        var startTime = '';
        var endTime = '';
        var currentTime = new Date();
        var $conOrder = $("#mid__belt .mid__belt-style li");

        for (var i = 0; i < res.goodsIsOpen.length; i++) {
            // if (res.goodsIsOpen[i].id == $conOrder.eq(i).attr('id')) {
            startTime = res.goodsIsOpen[i].startTime;
            endTime = res.goodsIsOpen[i].endTime;
            start = new Date(startTime.replace("-", "/"));
            end = new Date(endTime.replace("-", "/"));
            isOpen = res.goodsIsOpen[i].isOpen;
            if (currentTime >= start && currentTime < end && isOpen == "1") {
                $conOrder.eq(i).addClass("is-open");
            }
            else {
                $conOrder.eq(i).addClass("is-close");
                // $conOrder.eq(i).remove();
            }
            // }
        }
    }
})(jQuery);


new WOW().init();