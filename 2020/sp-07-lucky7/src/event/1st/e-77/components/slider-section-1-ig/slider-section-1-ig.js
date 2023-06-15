import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSliderRWD} from 'utils/js/detect.js'

export var initSliderEvent = detectApp(window.addEventListener('load', sliderEventReady), sliderEventReady);

function sliderEventReady() {
    var sliderEvent = new Swiper('#sliderCollectGoods', {
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
        pagination: isIE9() ? '#sliderCollectGoodsPager' : {
            el: '#sliderCollectGoodsPager',
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
//- import {makeLink} from 'utils/js/detect.js'
//- export var initdailyGoods = collectAllGoods();
//-
//- function collectAllGoods() {
//-     if (typeof collectGoodsData === 'undefined') return false;
//-
//-
//-     var getCollectGoodsData = document.getElementById('getCollectGoodsData');
//-
//-     //- 填輪播迴圈
//-     var str = '';
//-     for (var i = 0; i < collectGoodsData.length; i++) {
//-         var content;
//-         content = '<li class="swiper-slide collect__item">';
//-         content += '<a class="collect__href" href="" title="' + collectGoodsData[i].name + '">';
//-         content += '<img src="' + collectGoodsData[i].productImg + '" alt="' + collectGoodsData[i].name + '">';
//-         content += '<p class="collect__good__title">' + collectGoodsData[i].name + '</p>';
//-         content += '<p class="collect__good__price">';
//-         content += '<span class="price__init">$</span>';
//-         content += '<span class="price">' + collectGoodsData[i].price + '</span></p>';
//-         content += '</a></li>';
//-         str += content;
//-     }
//-
//-     getCollectGoodsData.innerHTML = str;
//-     //-- console.log(getCollectGoodsData);
//-     var collectHref = document.querySelectorAll(".collect__href");
//-     for (var i = 0; i < collectGoodsData.length; i++) {
//-         buildLink(collectGoodsData[i], collectHref[i]);
//-     }
//- }
//-
//- function buildLink(dataSource, targetAnchor) {
//-     //- 讓data只要填銷編：前綴預填
//-     //- 填連結確認來源是銷編且有填
//-     var dataSource = dataSource || {};
//-     var targetAnchor = targetAnchor || {};
//-
//-     if (dataSource.hasOwnProperty('productNumber') && typeof dataSource.productNumber === 'number') {
//-         var itemPrefixWeb = 'https://www.etmall.com.tw/i/';
//-         var itemPrefixMobile = 'https://m.etmall.com.tw/Product/';
//-         var itemPrefixApp = 'etmall://open?pgid=1&gd=';
//-
//-         var heroGoodsLinkWeb = itemPrefixWeb + dataSource.productNumber;
//-         var heroGoodsLinkMobile = itemPrefixMobile + dataSource.productNumber;
//-         var heroGoodsLinkApp = itemPrefixApp + dataSource.productNumber;
//-
//-         targetAnchor.href = makeLink(960, heroGoodsLinkApp, heroGoodsLinkWeb, heroGoodsLinkMobile);
//-     } else {
//-         //- 如果不是銷編就填web、mobile、app
//-         targetAnchor.href = makeLink(960, dataSource.appLink, dataSource.webLink, dataSource.mobileLink);
//-     }
//-     targetAnchor.title = dataSource.name;
//- }