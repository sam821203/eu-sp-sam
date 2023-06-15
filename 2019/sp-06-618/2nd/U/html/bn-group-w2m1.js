// depend plugin
// ==========================================================================

// webHref:  大小網連結
// appHref:  app連結
// imgSrc :  圖片絕對路徑，前面請填這包所在的網址
// intro  :  用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
// *** 熱銷精選
window.dataSp = [
    // ====================================== 手動編輯區開始 ======================================
    {
        webHref: "https://www.u-mall.com.tw/np/55127",
        appHref: "https://www.u-mall.com.tw/np/55127",
        imgSrc: "bn-group-u-01.png",
        intro: "SK-II明星商品"
    },
    {
        webHref: "https://www.u-mall.com.tw/p/63759",
        appHref: "https://www.u-mall.com.tw/p/63759",
        imgSrc: "bn-group-u-02.png",
        intro: "任選2件79折"
    },
    {
        webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104569/w/index.html",
        appHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104569/w/index.html",
        imgSrc: "bn-group-u-03.png",
        intro: "指定相機送1000"
    },
    {
        webHref: "https://www.u-mall.com.tw/c2/63295",
        appHref: "https://www.u-mall.com.tw/c2/63295",
        imgSrc: "bn-group-u-04.png",
        intro: "95折up"
    },
    {
        webHref: "https://www.u-mall.com.tw/c2/31563",
        appHref: "https://www.u-mall.com.tw/c2/31563",
        imgSrc: "bn-group-u-05.png",
        intro: "抽dyson"
    },
    {
        webHref: "https://www.u-mall.com.tw/p/57752",
        appHref: "https://www.u-mall.com.tw/p/57752",
        imgSrc: "bn-group-u-06.png",
        intro: "內衣2折up"
    },
    {
        webHref: "https://www.etmall.com.tw/XML/content/DMSetting/Final/201905/SP_1108088/w/index.html",
        appHref: "https://www.etmall.com.tw/XML/content/DMSetting/Final/201905/SP_1108088/w/index.html",
        imgSrc: "bn-group-u-07.png",
        intro: "森森獨家新品"
    },
    {
        webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104546/w/index.html",
        appHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104546/w/index.html",
        imgSrc: "bn-group-u-08.png",
        intro: "買1人送1人"
    },
    // ====================================== 手動編輯區結束 ======================================
];
// 與使用var意思相同，window 全域變數
window.dataSp__carousel2 = [
    // ====================================== 手動編輯區開始 ======================================
    {
        webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104513/w/index.html',
        appHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104513/w/index.html',
        imgSrc: 'bn-group-c2-u-01.jpg',
        intro: '滿額加價購',
    },
    {
        webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104582/w/index.html',
        appHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104582/w/index.html',
        imgSrc: 'bn-group-c2-u-02.jpg',
        intro: '肯德基',
    },
    {
        webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104589/w/index.html',
        appHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104589/w/index.html',
        imgSrc: 'bn-group-c2-u-03.jpg',
        intro: '萊爾富',
    },
    {
        webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104557/w/index.html',
        appHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201906/SP_1104557/w/index.html',
        imgSrc: 'bn-group-c2-u-04.jpg',
        intro: '機動不已',
    },
    {
        webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104520/w/index.html',
        appHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104520/w/index.html',
        imgSrc: 'bn-group-c2-u-05.jpg',
        intro: '家電',
    },
    {
        webHref: 'https://www.u-mall.com.tw/np/55127',
        appHref: 'https://www.u-mall.com.tw/np/55127',
        imgSrc: 'bn-group-c2-u-06.jpg',
        intro: '美妝',
    },
    {
        webHref: 'https://www.u-mall.com.tw/np/62115',
        appHref: 'https://www.u-mall.com.tw/np/62115',
        imgSrc: 'bn-group-c2-u-07.jpg',
        intro: '保健',
    },
    {
        webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104575/w/index.html',
        appHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104575/w/index.html',
        imgSrc: 'bn-group-c2-u-08.jpg',
        intro: '流行',
    },
    // ====================================== 手動編輯區結束 ======================================
];

// 熱銷精選
makeSliderDOM("bnGroupW2m1", dataSp);

var bnGroupW2m1 = $('#bnGroupW2m1');
var btnPrevBnGroupW2m1 = $('#btnPrevBnGroupW2m1');
var btnNextBnGroupW2m1 = $('#btnNextBnGroupW2m1');

bnGroupW2m1.slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: btnPrevBnGroupW2m1,
    nextArrow: btnNextBnGroupW2m1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear'
        }
    }],
});

// 超值活動
makeSliderDOM("bnGroupW2m1__carousel2", dataSp__carousel2);
var bnGroupW2m1__carousel2 = $('#bnGroupW2m1__carousel2');
var btnPrevBnGroupW2m1__carousel2 = $('#btnPrevBnGroupW2m1__carousel2');
var btnNextBnGroupW2m1__carousel2 = $('#btnNextBnGroupW2m1__carousel2');

bnGroupW2m1__carousel2.slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: btnPrevBnGroupW2m1__carousel2,
    nextArrow: btnNextBnGroupW2m1__carousel2,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear'
        }
    }],
});


function makeSliderDOM(wrapId, dataSrc) {
    var eventZone = document.getElementById(wrapId);
    eventZone.innerHTML = "";

    dataSrc.forEach(function (el) {
        var eventAnchor = document.createElement('a');
        var eventImg = document.createElement('img');

        // eventAnchor.target = "_blank";
        eventAnchor.title = el.intro;
        eventAnchor.href = detectApp(el);
        eventImg.src = el.imgSrc;
        eventImg.alt = el.intro;

        eventAnchor.appendChild(eventImg);
        eventZone.appendChild(eventAnchor);
    });
}

function detectApp(el) {
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
    if (isUiWebview) return el.appHref;
    else return el.webHref;
}
