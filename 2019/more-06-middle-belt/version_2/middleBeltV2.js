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
        var midBelt_v2 = [];
        var $wrapId = $("#mid__belt--v2");
        midBelt_v2 += '<ul class="cards__group">';

        for (var j = 0; j < bn.goodsIsOpen.length; j++) {
            midBelt_v2 += '<li id="' + bn.goodsIsOpen[j].id + '" class="card__def ' + bn.goodsIsOpen[j].classColor + '">';
            midBelt_v2 += '<img src="left-bg-light.svg" class="left-bg-light">';
            midBelt_v2 += '<img src="right-bg-light.svg" class="right-bg-light">';
            midBelt_v2 += '<h4>' + bn.goodsIsOpen[j].title + '</h4>';
            midBelt_v2 += '<p>' + bn.goodsIsOpen[j].subTitle + '</p>';
            midBelt_v2 += '<div class="goShop__Btn">';
            midBelt_v2 += '<span>' + bn.goodsIsOpen[j].btnText + '</span>';
            midBelt_v2 += '<img src="arrow-right.svg" class="svg-color arrow-right">';
            midBelt_v2 += '</div>';
            midBelt_v2 += '<div class="keyWord">' + bn.goodsIsOpen[j].keyWord + '</div>';
            midBelt_v2 += '</li>';
        }
        $wrapId.append(midBelt_v2);
    }

    // 時間判定
    function checkTime(res) {
        var startTime = '';
        var endTime = '';
        var currentTime = new Date();
        var $conOrder = $("#mid__belt--v2 .cards__group li");

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

$(function () {
    // 改變svg 顏色 ex:http://jsfiddle.net/wuSF7/462/
    jQuery('.svg-color').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
});