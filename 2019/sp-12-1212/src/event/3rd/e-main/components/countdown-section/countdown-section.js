import {detectApp} from 'utils/js/detect.js'
import {isIE9} from 'utils/js/detect.js'

export var initBuildCountDown = buildCountDown();

// 倒數計時使用方法 ===============================================================
// 1. 決定init時填入2.的資料（執行function，沒用到的要註解）
// 2. 製作填入資料的格式（建立function，沒用到的不用註解）
// 3. 填入4.的倒數結束方式（執行function，沒用到的要註解）
// 4. 決定倒數結束時用什麼結束方式（建立function，沒用到的不用註解
// ==============================================================================

function buildCountDown() {
    var productWrap = document.getElementById('productWrapCountdown');

    // 因為要build在輪播內，所以要先初始化輪播，把輪播相關移除就是純倒數
    // 注意要分不同div建立輪播與倒數build出來的東西，若是build出輪播的div如.swiper-slide之類的話導致輪播不正常
    // 開loop會導致輪播複製的dup slide內容錯誤(不會即時更新build出來的內容)
    var sliderCountdown = new Swiper('#sliderCountdown', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        // loop: true,
        navigation: {
            nextEl: '#sliderCountdownNext',
            prevEl: '#sliderCountdownPrev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 3,
        spaceBetween: '1%',
        speed: 600,
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
        }
    })


    function generateCountData() {
        // 1. 決定init時填入什麼資料（執行function，沒用到的要註解）
        // 1. start ==============================================================================

        // 多單輪流替補模式init
        // appendProduct(0, "notyet");
        // appendProduct(1, "notyet");
        // appendProduct(2, "notyet");
        // appendProduct(3, "notyet");

        // 固定單判斷日期模式init
        // function timeLimitInit(timePast) {
        //   var timePast = timePast || 0;
        //   for (var m = timePast; m < breakTime.length; m++) {
        //     var timeLimitMonth = (new Date(breakTime[m]).getMonth()) + 1;
        //     var timeLimitDate = new Date(breakTime[m]).getDate();
        //     appendProduct(m, "notyet", timeLimitMonth, timeLimitDate);
        //   }
        // }
        // timeLimitInit(0);

        // 輪播單替補模式init
        appendProductArray(0, "now");

        // 1. end ================================================================================


        var targetIndex = 0;

        productWrap.style.opacity = 0;

        // 頁面開始start
        for (var i = 0; i < breakTime.length - 1; i++) {
            countDownTimer();
        }

        // 每秒計時
        var timer = setInterval(function () {
            countDownTimer();
        }, 1000);

        productWrap.style.opacity = 0;


        // 2. 決定填入資料的形式（建立function，沒用到的不用註解）
        // 2. start ==============================================================================

        function appendProduct(i, state) {
            if (state === "notyet") {
                var productContent = '<div class="product product--just-standby"><a href="javascript:void(0)' +
                    '" title="' + productData[i].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i].productImg +
                    '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
                    '</div><div class="product__price"><span>$</span><span>' + productData[i].price + '</span></div></a></div>';
            } else if (state === "over") {
                var productContent = '<div class="product product--over"><a href="javascript:void(0)' +
                    '" title="' + productData[i].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i].productImg +
                    '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
                    '</div><div class="product__price"><span>$</span><span>' + productData[i].price + '</span></div></a></div>';
            } else {
                var isApp = detectApp('Webview', 'Web Browser');

                if (isApp === 'Web Browser') {
                    var productContent = '<div class="product product--over"><a href="' + productData[i].link +
                        '" title="' + productData[i].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i].productImg +
                        '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
                        '</div><div class="product__price"><span>$</span><span>' + productData[i].price + '</span></div></a></div>';
                } else if (isApp === 'Webview') {
                    var productContent = '<div class="product product--now"><a href="' + productData[i].appLink +
                        '" title="' + productData[i].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i].productImg +
                        '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
                        '</div><div class="product__price"><span>$</span><span>' + productData[i].price + '</span></div></a></div>';
                }
            }
            productWrap.innerHTML += productContent;
        }

        function appendProductArray(i, state) {
            for (var j = 0; j < productData[i].length; j++) {
                if (state === "notyet") {
                    var productContent = '<li class="swiper-slide"><div class="product product--just-standby"><a href="javascript:void(0)' +
                        '" title="' + productData[i].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i][j].productImg +
                        '" alt="' + productData[i][j].name + '"></div><div class="product__name">' + productData[i][j].name +
                        '</div><div class="product__price"><span>$</span><span>' + productData[i][j].price + '</span></div></a></div></li>';
                } else if (state === "over") {
                    var productContent = '<li class="swiper-slide"><div class="product product--over"><a href="javascript:void(0)' +
                        '" title="' + productData[i][j].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i][j].productImg +
                        '" alt="' + productData[i][j].name + '"></div><div class="product__name">' + productData[i][j].name +
                        '</div><div class="product__price"><span>$</span><span>' + productData[i][j].price + '</span></div></a></div></li>';
                } else {
                    var isApp = detectApp('Webview', 'Web Browser');

                    if (isApp === 'Web Browser') {
                        var productContent = '<li class="swiper-slide"><div class="product product--over"><a href="' + productData[i][j].link +
                            '" title="' + productData[i][j].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i][j].productImg +
                            '" alt="' + productData[i][j].name + '"></div><div class="product__name">' + productData[i][j].name +
                            '</div><div class="product__price"><span>$</span><span>' + productData[i][j].price + '</span></div></a></div></li>';
                    } else if (isApp === 'Webview') {
                        var productContent = '<li class="swiper-slide"><div class="product product--now"><a href="' + productData[i][j].appLink +
                            '" title="' + productData[i][j].name + '"><div class="product__img"><img class="swiper-lazy" data-src="' + productData[i][j].productImg +
                            '" alt="' + productData[i][j].name + '"></div><div class="product__name">' + productData[i][j].name +
                            '</div><div class="product__price"><span>$</span><span>' + productData[i][j].price + '</span></div></a></div></li>';
                    }
                }
                productWrap.innerHTML += productContent;
            }

        }

        // 2. end ================================================================================


        // core 計算倒數
        function countDownTimer() {
            if (!breakTime && !productData) return false;

            var timeNow = new Date().getTime();
            var targetTime = new Date(breakTime[targetIndex]).getTime();
            var countDownTime = targetTime - timeNow;
            var seconds = Math.floor(countDownTime / 1000);
            var min = Math.floor(seconds / 60);
            var hour = Math.floor(min / 60);
            var day = Math.floor(hour / 24);

            hour %= 24;
            min %= 60;
            seconds %= 60;

            // all day plus back to hour
            hour += day * 24;

            // 結束時
            if (countDownTime <= 0) {
                day = 0
                hour = 0;
                min = 0;
                seconds = 0;

                targetIndex++;


                // 3. 填入4.的倒數結束方式（執行function，沒用到的要註解）
                // 3. start ==============================================================================

                // 多單輪流替補模式
                // countProduct(targetIndex, breakTime);

                // 固定單判斷日期模式
                // countTimeLimit(targetIndex);

                // 輪播單判斷日期模式
                countProductSlider(targetIndex, breakTime)

                // 3. end ================================================================================


            }
            appendTime(day, hour, min, seconds);
            productWrap.style.opacity = 1;
        }

        // 將倒數結果加入DOM、被核心每秒call並且每秒填入
        function appendTime(day, hour, min, seconds) {
            var timer = document.getElementById('timerCountdown');

            var timeData =
                (hour > 99 ? '<span class="date date--hour date--out-range">99' : '<span class="date date--hour">' + ('0' + hour).slice(-2)) +
                '</span><span>:</span><span class="date date--min">' + ('0' + min).slice(-2) +
                '</span><span>:</span><span class="date date--seconds">' + ('0' + seconds).slice(-2) + '</span>';

            timer.innerHTML = timeData;
        }


        // 4. 決定倒數結束時用什麼結束方式（建立function，沒用到的不用註解）
        // 4. start ==============================================================================

        // 多單輪流替補模式
        function countProduct(targetIndex, breakTime) {
            while (productWrap.firstChild) {
                productWrap.removeChild(productWrap.firstChild);
            }

            appendProduct((targetIndex - 1) * 2);
            appendProduct((targetIndex - 1) * 2 + 1, "notyet");
            appendProduct((targetIndex - 1) * 2 + 2, "notyet");
            appendProduct((targetIndex - 1) * 2 + 3, "notyet");

            if (targetIndex >= breakTime.length) {
                clearInterval(timer);

                while (productWrap.firstChild) {
                    productWrap.removeChild(productWrap.firstChild);
                }

                appendProduct((breakTime.length - 1) * 2);
                appendProduct((breakTime.length - 1) * 2 + 1);
                appendProduct((breakTime.length - 1) * 2 + 2);
                appendProduct((breakTime.length - 1) * 2 + 3);
            }
            // 多單輪流結束時全部over
            if (targetIndex >= breakTime.length) {
                clearInterval(timer);

                while (productWrap.firstChild) {
                    productWrap.removeChild(productWrap.firstChild);
                }

                for (var k = 0; k < breakTime.length; k++) {
                    appendProduct(k, "over");
                }
            }
        }

        // 固定單判斷日期模式
        function countTimeLimit(targetIndex) {
            while (productWrap.firstChild) {
                productWrap.removeChild(productWrap.firstChild);
            }
            var timePast = 0;
            for (var i = 0; i < breakTime.length; i++) {
                if (i < targetIndex) {
                    timePast++;
                }
            }
            for (var j = 0; j < timePast - 1; j++) {
                appendProduct(j, "over");
            }

            // 過一天就下掉，不需要就註解掉即可
            // ===========================================
            var dateNow = new Date();
            var tomorrow = new Date(breakTime[timePast - 1])
            tomorrow.setDate(tomorrow.getDate() + 1);
            console.log(dateNow >= tomorrow);

            if (dateNow >= tomorrow) {
                appendProduct(timePast - 1, "over");
            } else {
                appendProduct(timePast - 1);
            }
            // ===========================================

            // 剩下的補上時間
            timeLimitInit(timePast);


            // 固定單結束時不強制遮蓋清除由原本時間判斷
            if (targetIndex >= breakTime.length) {
                clearInterval(timer);
            }
        }

        // 輪播單替補模式
        function countProductSlider(targetIndex, breakTime) {
            while (productWrap.firstChild) {
                productWrap.removeChild(productWrap.firstChild);
            }

            appendProductArray(targetIndex - 1);

            if (targetIndex >= breakTime.length) {
                clearInterval(timer);

                while (productWrap.firstChild) {
                    productWrap.removeChild(productWrap.firstChild);
                }

                appendProductArray(breakTime.length - 1);
            }

            // 輪播重新初始化
            sliderCountdown.updateSlides();
            sliderCountdown.updateProgress();
            sliderCountdown.autoplay.start();
        }

        // 4. end ================================================================================


    }

    generateCountData();


    // a little safe, delete all data in DOM，if not use compiler, delete the script.
    function delScript() {
        var data = document.getElementById('dataCountdown');
        // var generateData = document.getElementById('generateData');

        function destroyEl(el) {
            document.addEventListener('DOMContentLoaded', function () {
                el.parentElement.removeChild(el);
            })
        }

        destroyEl(data);
        // destroyEl(generateData);
    }

    delScript();
}
