// export var initBuildTab = buildTab();

function buildTab() {
    var tabBox = document.getElementById('tabBox');
    var tabItems = Array.apply(null, tabBox.querySelectorAll('.tab__item'));
    var contentBlock = document.getElementById('contentBlock');
    var contentBox = Array.apply(null, contentBlock.querySelectorAll('.content__box'));
    var dateNow = dateCheck() - 1; // change date to zero start

    // console.log('t',tabItems.length);
    // console.log('c',contentBox.length);
    // console.log('d',tabBox.length);
    if (tabItems.length !== contentBox.length) {
        console.error('Tab Item數量與Content Box數量不符');
        return false;
    }

    tabItems.forEach(function (el, index) {
        if (index === dateNow) {
            addActive(tabItems, dateNow);
            addActive(contentBox, index);
        }

        function clickActive() {
            addActive(tabItems, index);
            addActive(contentBox, index);
        }

        if (el.addEventListener) {
            el.addEventListener('click', clickActive, false);
        }
        else if (el.attachEvent) {
            el.addEventListener('onclick', clickActive);

        }
    });
}

function addActive(arrayElementIn, elementIndex) {
    arrayElementIn.forEach(function (el) {
        el.classList.remove('active');
    });
    arrayElementIn[elementIndex].classList.add('active');
}

function dateCheck() {
    var date = new Date().getDate();
    return date;
}

//- 動態產出檔案
import {makeLink} from 'utils/js/detect.js'
export var initdailyGoods = tabSectionGoods();

function tabSectionGoods() {
    if (typeof tabGoodsData === 'undefined') return false;

    var getTabGoodsData = document.getElementById('contentBlock');

    // 填輪播迴圈
    var str = '';
    // console.log(tabGoodsData.length);
    for (var i = 0; i < tabGoodsData.length; i++) {
        var judge = i % 6;
        var content;
        if (judge == 0 && i == 0) {
            content = '<li class="content__box clearfix active">';
            content += '<div class="content__item">';
        }
        else if (judge == 0) {
            content = '<li class="content__box clearfix">';
            content += '<div class="content__item">';
        }
        else {
            content = '<div class="content__item">';
        }
        content += '<a class="tabGoods__href" href="" title="' + tabGoodsData[i].name + '">';
        content += '<img src="' + tabGoodsData[i].productImg + '" alt="' + tabGoodsData[i].name + '">';
        content += '<p class="tab__good__title">' + tabGoodsData[i].name + '</p>';
        content += '<p class="tab__good__price">';
        content += '<span class="price__init">$</span>';
        content += '<span class="price">' + tabGoodsData[i].price + '</span></p>';
        content += '</a>';

        if (judge == 5) {
            content += '</div></li>';
        }
        else {
            content += '</div>';
        }
        str += content;
    }


    getTabGoodsData.innerHTML = str;
    // console.log(str);
    var tabGoodsHref = document.querySelectorAll(".tabGoods__href");
    for (var i = 0; i < tabGoodsData.length; i++) {
        buildLink(tabGoodsData[i], tabGoodsHref[i]);
    }

    window.addEventListener("load", function () {

        buildTab();
    });
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