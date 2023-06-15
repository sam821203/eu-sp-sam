/**
 * Created by jing on 2020/9/4.
 */

$(function () {
    $('.js-tab a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        target = $(this).attr('href');
        var closeOther = $(this).parents(".js-blogWrap").find(".tab__image");
        closeOther.not(target).hide();
        // $('.js-tab-content > div').not(target).hide();
        $(target).fadeIn(600);

    });
// 點擊箭頭往下
    $(".js--down").click(function () {
        $('html, body').animate({
            scrollTop: $(".js--theme-top--height").height()
        }, 500);
    });

// 回到最上面
    var basicScrollTop = function () {
        // The button
        var btnTop = document.getElementById('goTop');
        if (btnTop) {
            // Reveal the button
            var btnReveal = function () {
                if (window.scrollY >= 300) {
                    btnTop.classList.add('is-visible');
                } else {
                    btnTop.classList.remove('is-visible');
                }
            }
            // Smooth scroll top
            var TopscrollTo = function () {
                if (window.scrollY != 0) {
                    if (window.jQuery) {
                        $('html,body').stop().animate({scrollTop: 0}, 500);
                    } else {
                        setTimeout(function () {
                            window.scrollTo(0, window.scrollY - 100);
                            TopscrollTo();
                        }, 0);
                    }
                }
            }
            // Listeners
            window.addEventListener('scroll', btnReveal);
            btnTop.addEventListener('click', TopscrollTo);
        }
    };
    basicScrollTop();
// 判斷文字高度

    function istextOnImageHeight() {
        var textOnImageHeight = $(".js-textHeight").height() + 40 + 'px';
        var winWt = $(document).width();
        var textOnImageHeight_mobile = ($(".js-textHeight").height() / winWt * 100 + 6) + 'vw';
//        var navTop = document.getElementById('navTop');
//        var goTop = document.getElementById('goTop');
//        console.log(textOnImageHeight)


        if (winWt >= 960) {
            $(".js-textOnImageSetHeight").css("maxHeight", textOnImageHeight);
//            $('head').append("<style>.js-textOnImageSetHeight::before{height:" + textOnImageHeight + "}</style>");
            $(".textOnImage__mask").css("height", textOnImageHeight);
        } else {
            $(".js-textOnImageSetHeight").css("maxHeight", textOnImageHeight_mobile);
//            $('head').append("<style>.js-textOnImageSetHeight::before{height:" + textOnImageHeight_mobile + "}</style>");
            $(".textOnImage__mask").css("height", textOnImageHeight_mobile);
        }
    }

    istextOnImageHeight();
    $(window).resize(function () {
        istextOnImageHeight();
    })
});