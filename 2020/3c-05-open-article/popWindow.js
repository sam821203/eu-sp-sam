/**
 * Created by jing on 2019/6/27.
 */

$(function () {
    var isClick = true;

    // 了解詳情
    $(document).on("click", ".open-bigPhoto", function () {
        var $openCloseBtn = '';
        var $overlayEvents = $(this);
        var $body = $("body");
        var touchId = $(this).attr('data-dialog');

        if (isClick) {
            initDialog();
            isClick = false;
        }
        else {
            $(".close-icon-btn").show();
            $(".overlay-mask").show();
            comparisonDialog();
            SettingzIndex("100", "hidden");
        }

        function comparisonDialog() {
            var targetId = $(".open--window--wrap");
            targetId.each(function () {
                if (touchId == $(this).attr('id')) {
                    $(this).fadeIn(200).addClass("overlay-open");
                }
            });
        }

        function SettingzIndex(size, hidden) {
            $(".sp--1260").css("z-index", size);
            $(".sp__visual").css("z-index", size);
            $(".open--window--wrap img").css("z-index", size);
            $("body").css("overflow", hidden);
        }

        function initDialog() {
            $body.prepend('<div id="overlay-mask" class="overlay-mask"></div>');

            // add close btn
            $openCloseBtn += ('<div id="close-icon-btn" class="close-icon-btn">');
            $openCloseBtn += ('<div class="close-icon close-icon-r"></div>');
            $openCloseBtn += ('<div class="close-icon close-icon-l"></div>');
            $openCloseBtn += ('</div>');
            $body.prepend($openCloseBtn);

            comparisonDialog();
            SettingzIndex("100", "hidden");
        }

    })
    $(document).on("click touch", ".close-icon-btn", function () {
        closeOverlay();
    });
    $(document).on("click touch", ".overlay-mask", function () {

        closeOverlay();
    });
    function closeOverlay() {
        $(".close-icon-btn").hide();
        $(".overlay-mask").hide();

        $(".open--window--wrap").removeClass("overlay-open").css('display', 'none');
        $(".sp--1260").css("z-index", "");
        $(".sp__visual").css("z-index", "");
        $('body').css("overflow", "");
    }

});

// youtube
function ytControl() {
    var openDialog = document.querySelectorAll(".open-bigPhoto")[0];
    openDialog.addEventListener("click", function () {
        var videos = document.querySelector('.video--youtube');
        //    videos.forEach(function (el) {
        //        var player;
        //        el.addEventListener('load', function () {
        //            onYouTubePlayerAPIReady(el.id);
        //            console.log('testaaa');
        //        });
        //    });

        onYouTubePlayerAPIReady(video1);

        function onYouTubePlayerAPIReady(id) {
            player = new YT.Player(id, {
                events: {
                    'onReady': onPlayerReady
                }
            });
        };

        function onPlayerReady(event) {
            var pauseButton1 = document.getElementById("overlay-mask");
            var pauseButton2 = document.getElementById("close-icon-btn");
            console.log(pauseButton1);
            console.log(pauseButton2);
            pauseButton1.addEventListener("click", function () {
                event.target.pauseVideo();
            });
            pauseButton2.addEventListener("click", function () {
                event.target.pauseVideo();
            });
        };

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    });

}
ytControl();

// 輪播彈窗
addForEach();
// if (isIE9()) addForEach();
detectApp(window.addEventListener('load', sliderEventReady), sliderEventReady);
makeOverlay();

function detectApp(toDoInWebview, toDoInBrowser) {
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
    if (isUiWebview) return toDoInWebview;
    else return toDoInBrowser;
}
function isIE9() {
    if (navigator.appName.indexOf("Internet Explorer") != -1) {
        var badBrowser = navigator.appVersion.indexOf("MSIE 1") == -1;
        if (badBrowser) return true;
    }
}
function addForEach() {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
}
function sliderEventReady() {
    var sliderEl = document.querySelector('#sliderMovie');
    var sliderEvent = new Swiper('#sliderMovie', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true,
        // loop: true,
        navigation: {
            nextEl: sliderEl.nextElementSibling.nextElementSibling,
            prevEl: sliderEl.nextElementSibling,
        },
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 600,
        simulateTouch: false,
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
        },
    })
}

function makeOverlay() {
    var openersNodelist = document.querySelectorAll('#sliderMovie a');
    var openers = isIE9() ? Array.apply(null, openersNodelist) : openersNodelist;
    var overlaysNodelist = document.querySelectorAll('#movieDialog .dialog__item');
    var overlays = isIE9() ? Array.apply(null, overlaysNodelist) : overlaysNodelist;

    openers.forEach(function(el, i) {
        el.addEventListener('click', function(e){
            e.preventDefault();
            overlays[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        if (openers.length === overlays.length) {
            overlays[i].addEventListener('click', function () {
                this.style.display = 'none';
                document.body.style.overflow = '';
            });
        } else {
            console.error('按鈕數量與蓋板數量不符');
        }
    });
}