import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'
import { isNeedSliderRWD } from 'utils/js/detect.js'

export var initSlider20offGoods = detectApp(window.addEventListener('load', sliderEventReady), sliderEventReady);

function sliderEventReady() {
    var sliderEvent = new Swiper('#slider20offGoods', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        // calculateHeight: true, // ie9 prevent float wrong height
        loop: true,
        // navigation: {
        //     nextEl: '#sliderBnNext',
        //     prevEl: '#sliderBnPrev',
        // },
        pagination: isIE9() ? '#slider20offGoodsPager' : {
            el: '#slider20offGoodsPager',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView : 2.4,
        centeredSlides : true,
        slidesOffsetBefore: 40,
        spaceBetween: 5,
        speed: 600,
        // lazyload
        preloadImages: false,
        lazy: {

            loadPrevNext: true,
        }
    })
}


//- 動態產出檔案
import {makeLink} from 'utils/js/detect.js'
export var initdailyGoods = discount20offGoods();

function discount20offGoods() {
    if (typeof discount20offData === 'undefined') return false;

    var getdiscount20offData = document.getElementById('getdiscount20offData');

    // 填輪播迴圈
    var str = '';
    for (var i = 0; i < discount20offData.length; i++) {
        var content;
        content = '<li class="swiper-slide slider__20off__item">';
        content += '<a class="discount20off__href" href="" title="' + discount20offData[i].name + '">';
        content += '<img class="swiper-lazy" data-src="' + discount20offData[i].productImg + '" alt="' + discount20offData[i].name + '">';
        content += '<div class="swiper-lazy-paloader"></div>';
        content += '<p class="good__title__20off">' + discount20offData[i].name + '</p>';
        content += '<span class="price__init">$</span><span class="coupon_price">' + discount20offData[i].discount +'</span>';
        content += '</a></li>';
        str += content;
    }

    getdiscount20offData.innerHTML = str;
    var discount20offHref = document.querySelectorAll(".discount20off__href");
    for (var i = 0; i < discount20offData.length; i++) {
        buildLink(discount20offData[i], discount20offHref[i]);
    }
}

function buildLink(dataSource, targetAnchor) {
    // 讓data只要填銷編：前綴預填
    // 填連結確認來源是銷編且有填
    var dataSource = dataSource || {};
    var targetAnchor = targetAnchor || {};

    if (dataSource.hasOwnProperty('productNumber') && typeof dataSource.productNumber === 'number') {
        var itemPrefixWeb = 'https://www.etmall.com.tw/i/';
        var itemPrefixMobile = 'https://m.etmall.com.tw/Product/';
        var itemPrefixApp = 'etmall://open?pgid=1&gd=';

        var heroGoodsLinkWeb = itemPrefixWeb + dataSource.productNumber;
        var heroGoodsLinkMobile = itemPrefixMobile + dataSource.productNumber;
        var heroGoodsLinkApp = itemPrefixApp + dataSource.productNumber;

        targetAnchor.href = makeLink(960, heroGoodsLinkApp, heroGoodsLinkWeb, heroGoodsLinkMobile);
    } else {
        // 如果不是銷編就填web、mobile、app
        targetAnchor.href = makeLink(960, dataSource.appLink, dataSource.webLink, dataSource.mobileLink);
    }
    targetAnchor.title = dataSource.name;
}