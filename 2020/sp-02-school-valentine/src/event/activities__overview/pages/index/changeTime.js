/**
 * Created by jing on 2019/2/20.
 */

(function ($) {

    // 時間開關
    var responseObject = {
        "goodsIsOpen": [
            {
                "id": "js-form01",
                "startTime": "2019/03/04 10:00",
                "endTime": "2020/01/11 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form02",
                "startTime": "2019/03/04 10:00",
                "endTime": "2020/03/11 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form03",
                "startTime": "2019/02/04 10:00",
                "endTime": "2020/04/01 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form04",
                "startTime": "2019/02/14 10:00",
                "endTime": "2020/03/19 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form05",
                "startTime": "2019/02/19 10:00",
                "endTime": "2020/03/21 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form06",
                "startTime": "2019/02/19 10:00",
                "endTime": "2020/03/26 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form07",
                "startTime": "2019/02/26 10:00",
                "endTime": "2020/03/30 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form08",
                "startTime": "2019/02/30 10:00",
                "endTime": "2020/04/01 11:00",
                "isOpen": "1"
            },
            {
                "id": "js-form09",
                "startTime": "2019/02/15 14:34",
                "endTime": "2020/03/20 14:34",
                "isOpen": "1"
            },
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



    var url = window.location;
    //  正式環境
    var urlHref = url.href;
    //  測試網址
    // var urlHref = "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107207/w/index.html?regist=js-form02+js-form03";
    var isDeviceSplit = urlHref.split("html")[1];
    var getValueAll = [];
    var getValue = '';
    var $conOrder = $(".js-shopGroup a.js-shopList");

    // ajax json 直接打開資料夾無法測試
    // var xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         responseObject = JSON.parse(xhr.responseText);
    //     }
    // }
    // xhr.open("Get", "goods.json", true);
    // xhr.send(null);

    checkTime(responseObject);


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


})(jQuery);