/**
 * Created by jing on 2019/2/20.
 */

(function ($) {

    
    // 時間開關
    var responseObject = {
        "goodsIsOpen": [
            {
                "id": "eForm01",
                "startTime": "2019/03/04 10:00",
                "endTime": "2019/03/11 11:00",
                "isOpen": "1"
              },
              {
                "id": "eForm02",
                "startTime": "2019/03/04 10:00",
                "endTime": "2019/04/01 11:00",
                "isOpen": "1"
              },
              {
                "id": "eForm03",
                "startTime": "2019/03/04 10:00",
                "endTime": "2019/03/11 11:00",
                "isOpen": "1"
              },
              {
                "id": "eForm04",
                "startTime": "2019/03/11 10:00",
                "endTime": "2019/03/19 11:00",
                "isOpen": "1"
              },
              {
                "id": "eForm05",
                "startTime": "2019/03/15 10:00",
                "endTime": "2019/03/19 11:00",
                "isOpen": "1"
              },
              {
                "id": "eForm06",
                "startTime": "2019/03/19 10:00",
                "endTime": "2019/03/26 11:00",
                "isOpen": "1"
              },
              {
                "id": "eForm07",
                "startTime": "2019/03/26 10:00",
                "endTime": "2019/03/30 11:00",
                "isOpen": "1"
              },
              {
                "id": "eForm08",
                "startTime": "2019/02/15 14:34",
                "endTime": "2019/03/20 14:34",
                "isOpen": "0"
              },
              {
                "id": "eForm09",
                "startTime": "2019/02/15 14:34",
                "endTime": "2019/03/20 14:34",
                "isOpen": "0"
              },
              {
                "id": "eForm10",
                "startTime": "2019/02/15 14:34",
                "endTime": "2019/03/20 14:34",
                "isOpen": "0"
              }
            ]
          }

      
    // goTop 使用方法
    $('a[href^="#"]').on('click', function (e) {
        var target = $('a[name=' + this.getAttribute('href').split('#')[1] + ']');
        e.preventDefault();
        if (target.length) {
            $('html,body').stop().animate({scrollTop: target.offset().top}, 500);
        }
    });

    // 手風琴
    // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();  // 預設第一個打開
    $('.accordion a.accordion-title').click(function (j) {
        var $dropDown = $(this).closest('li').find('.detail');
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        // $(".accordion-content").removeClass('con-order-active');        // 刪除排序 && 關閉detail
        $(this).closest('.accordion').find('.detail').not($dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');

            $body.stop().animate({
                scrollTop: $(this).offset().top,
            });
        }

        $dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });


    var url = window.location;
    //  正式環境
    var urlHref = url.href;
    //  測試網址
    // var urlHref = "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107207/w/index.html#eForm01+eForm05";
    var isDeviceSplit = urlHref.split("html")[1];
    var getValueAll = [];
    var getValue = '';
    var $conOrder = $(".accordion li.accordion-content");


    // ajax json
    checkTime(responseObject);
    whichDevice();

    //  judge Device
    function whichDevice() {
        var outputInUrl = new URL(location.href);
        var param = outputInUrl.searchParams.get('regist');
        if(param) {
            var paramArray = [];
            paramArray = param.split(' ');
            comparisonValue(paramArray);
        }
        else {
            presetNoValue();
        }
    }

    // 網址沒有帶值狀態
    function presetNoValue() {
        for (var i = 0; i < $conOrder.length; i++) {
            if($conOrder.eq(i).hasClass('is-open')) {
                $('.accordion > li:eq(' + i + ') a').addClass('active').next().slideDown();
                break;
            }
            else {
                $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
            }
        }
    }
    //  judge which form is open
    function comparisonValue(param) {

        getValue = param;
        var isActiveValue = [];
        var liList = [];

        for (var i = 0; i < $conOrder.length; i++) {
            // "push": 放入 array
            liList.push($conOrder.eq(i).attr('id'));
            for (var j = 0; j < getValue.length; j++) {
                isActiveValue.push(getValue[j]);
                if (isActiveValue[j] == liList[i]) {
                    var $activeThis = $('.accordion > li:eq(' + i + ') a');
                    $activeThis.addClass('active').next().slideDown();
                    $activeThis.parent().addClass("con-order-active");
                }
            }
        }
    }

    function checkTime(res) {
        var startTime = '';
        var endTime = '';
        var currentTime = new Date();

        // liList.push($conOrder.eq(i).attr('id'));

        for (var i = 0; i < res.goodsIsOpen.length; i++) {
            if (res.goodsIsOpen[i].id == $conOrder.eq(i).attr('id')) {
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
                }
            }
        }
    }

    // 了解詳情
    $(document).on("click", ".open-comment", function () {
        var $overlayEvents = $(this).parents(".accordion-content").find(".overlay");
        $overlayEvents.before('<div class="overlay-mask"></div>');
        $overlayEvents.fadeIn(200).addClass("overlay-open");
        $(this).parents("#sp_loginForm").find(".sp--1260").addClass("max-width-100");
    })
    $(document).on("click", ".overlay-mask", function () {
        closeOverlay();
    });
    $(document).on("click", ".close-icon-btn", function () {
        closeOverlay();
    });
    function closeOverlay() {
        $(".overlay-mask").remove();
        $(".overlay").removeClass("overlay-open").fadeOut(200).addClass("overlay-animate");
        $(".sp--1260").removeClass("max-width-100");
    }


})(jQuery);