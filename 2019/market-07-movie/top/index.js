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
            var targetId = $(".big--photo");
            targetId.each(function () {
                if (touchId == $(this).attr('id')) {
                    $(this).fadeIn(200).addClass("overlay-open");
                }
            });
        }

        function SettingzIndex(size, hidden) {
            $(".sp--1260").css("z-index", size);
            $(".sp__visual").css("z-index", size);
            $(".big--photo img").css("z-index", size);
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
//            ytControl();
        closeOverlay();
    });
    $(document).on("click touch", ".overlay-mask", function () {

        closeOverlay();
    });
    function closeOverlay() {
        $(".close-icon-btn").hide();
        $(".overlay-mask").hide();

        $(".big--photo").removeClass("overlay-open").css('display', 'none');
        $(".sp--1260").css("z-index", "");
        $(".sp__visual").css("z-index", "");
        $('body').css("overflow", "");
    }

    // 時間判定 Data
    var responseObject = {
        "goodsIsOpen": [
            {
                "img": "promot04-2.png",
                "alt": "活動已結束",
                "startTime": "2019/06/27 10:00",
                "endTime": "2019/07/08 10:00",
                "isOpen": "1"
            },
        ]
    }
    // 時間判定
    function checkTime(res) {
        var startTime = '';
        var endTime = '';
        var currentTime = new Date();
        var $conOrder = $("#isDeadline");

        for (var i = 0; i < res.goodsIsOpen.length; i++) {
            startTime = res.goodsIsOpen[i].startTime;
            endTime = res.goodsIsOpen[i].endTime;
            start = new Date(startTime.replace("-", "/"));
            end = new Date(endTime.replace("-", "/"));
            isOpen = res.goodsIsOpen[i].isOpen;
            if (currentTime >= start && currentTime < end && isOpen == "1") {
            }
            else {
                $conOrder.empty();
                var endContent = [];
                endContent += '<img src="' + res.goodsIsOpen[i].img + '" alt="' + res.goodsIsOpen[i].src + '">';
                $conOrder.append(endContent);
            }
        }
    }

    checkTime(responseObject);
});


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