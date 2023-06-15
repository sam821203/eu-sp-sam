// 初始化參數
// textX1 fontSize2 -> mobile
var transferInfo = {
    imgSource: 'card-2.jpg?01151406',
    textColor1: '#5d5d5d',
    textX1: 80,
    textY1: 1260,
    textXD1: 35,
    textYD1: 505,
    fontSize1: '56px',
    textAlign1: 'end',
    textColor2: '#fff',
    fontSize2: '36px',
    textAlign2: 'end',
    descText: ['包你中獎', '包你健康', '包你幸福', '包你發財']
}

var fgcImgId = '';
var fgcImgSrc = '';
var fgcImgVal = '';
var textPosition = true;
// 關閉誘因
var incentiveWrap = $('#incentiveWrap');

function transferInputAndImg({imgSource, textColor1, textX1, textY1, fontSize1, textAlign1, textColor2, fontSize2, textAlign2, textXD1, textYD1}) {
    var url = location.href;
    var text = document.getElementById('text');
    var imageTarget = document.getElementById('imageTarget');
    var submit = document.getElementById('submit');
    // var clean = document.getElementsByName('fgc-group-temp');
    // var clean = document.getElementById('fgcRefresh');
    // $(".fgc-choice-temp input:checked")
    var downloadAnchor = document.getElementById('downloadAnchor');

    // 賦予參數
    var image = new Image();
    image.src = imgSource || 'card-2.jpg?01151406';
    var textColor = textColor || '#000000';
    var textX = textX || 0;
    var textY = textY || 50;
    var fontSize = fontSize || '48px';
    var textAlign = textAlign || 'start';

    var ouputFromImg = '';
    var winWt = window.innerWidth;


    // 將網址參數載入
    function loadUrlParam() {
        var ouputFromUrl = decodeUrl();
        // var ouputFromImg = decodeUrlImg();

        // 大網時 圖片縮小
        if (winWt > 1024) {
            // if (textPosition) {
            textX1 = textXD1;
            textY1 = textYD1;
            fontSize1 = '20px';
            // textPosition = false;
            // }
            drawText(ouputFromUrl, textColor1, textX1, textY1, fontSize1, textAlign1, textXD1, textYD1);
        }
        else {
            drawText(ouputFromUrl, textColor1, textX1, textY1, fontSize1, textAlign1, textXD1, textYD1);
        }

        drawText(ouputFromUrl, textColor2, fontSize2, textAlign2);
    }

    function loadToImg() {
        imageTarget.src = canvas.toDataURL("image/jpeg");
    }

    // 解析網址帶來的文字參數
    function decodeUrl() {
        if (url.indexOf('?') != -1) {
            var outputInUrl = new URL(location.href);
            var param = outputInUrl.searchParams.get('text');

            if (param) {
                var decodeValue = decodeURI(param);
                metaChange(decodeValue);
                return decodeValue;
            }
            ;
        }
        return '';
    }

    // 解析網址帶來的圖片參數
    function decodeUrlImg() {
        if (url.indexOf('?') != -1) {
            var outputInUrl = new URL(location.href);
            var paramImg = outputInUrl.searchParams.get('imgSrc');
            var decodeValueImg = '';
            if (paramImg) {
                decodeValueImg = decodeURI(paramImg);
                return decodeValueImg;
            }

            else {
                paramImg = 'card-2';
                decodeValueImg = decodeURI(paramImg);
                return decodeValueImg;
            }
            ;
        }
        return '';
    }

    // 修改上方meta
    function metaChange(urlparam) {
        var targetContent = urlparam ? (urlparam + '送您一份祝福') : '送您一份祝福';
        var metaOgTitle = document.querySelector('meta[property="og:title"]');
        var metaOgDescription = document.querySelector('meta[property="og:description"]');

        if (text.value) {
            targetContent = text.value + '送您一份祝福';
        }
        document.title = targetContent;
        metaOgTitle.content = targetContent;
        metaOgDescription.content = targetContent;

    }


    // 後續導入
    loadUrlParam();
    loadToImg();




    // clean.addEventListener('click', function () {
    //     for(var i = 0; i < clean.length; i++) {
    //         clean[i].checked = true;
    //         if(clean.checked == true) {
    //         }
    //     }
    // });
}


// 將input編譯成64位元碼(網址不能輸入中文需轉譯)
function encodeInput() {
    var url = location.href;

    // if (url.indexOf('&imgSrc') != -1) {
    //     url = url.split('&imgSrc')[0];
    // }
    if (url.indexOf('&text=') != -1) {
        url = url.split('&text=')[0];
    }
    if (url.indexOf('?openExternalBrowser=1') != -1) {
        url = url.split('?openExternalBrowser=1')[0];
    }
    var text = document.getElementById('text');
    var inputValue = text.value;
    var encodeValue = encodeURI(inputValue);

    var imgSourceSplit = transferInfo.imgSource.split('.')[0];

    // 將現行網址列轉換成編譯後結果(用於分享可直接抓網址)
    var state = {'userWords': inputValue};
    var finalUrl = encodeURI(url.split('&text=')[0] + '?openExternalBrowser=1&text=' + inputValue + '&imgSrc=' + imgSourceSplit);
    var fbUrl = url.split('&text=')[0] + encodeURIComponent('?openExternalBrowser=1&text=' + inputValue + '&imgSrc=' + imgSourceSplit);
    shareSocialChange(fbUrl);
    window.history.replaceState(state, '', finalUrl);
}

function shareSocialChange(inputUrl) {
    fbhtml_url = inputUrl || window.location.toString();
}


// 邊打字邊編譯



// 主要內容
function fgcMain() {

    var fgcMainInput = '';

    fgcMainInput += '<div class="share-block-two">';
    fgcMainInput += '<ul class="community__ico">';
    // 行動裝置語法
    if (navigator.userAgent.match(/android/i)) {
        fgcMainInput += '<li class="bg-line">';
        fgcMainInput += '<a href="javascript: void(window.open(&apos;etmall://share?url=&apos; .concat(encodeURIComponent(location.href)) ))" title="分享給 LINE 好友">';
        fgcMainInput += '</a></li>';
    }
    else {
        // 網頁版語法
        fgcMainInput += '<li class="bg-line">';
        fgcMainInput += '<a href="javascript: void(window.open(' + "'";
        fgcMainInput += 'https://lineit.line.me/share/ui?url=' + "'";
        fgcMainInput += ' .concat(encodeURIComponent(location.href)) ));" title="分享給 LINE 好友">';
        fgcMainInput += '</a></li>';
    }
    // fgcMainInput += '<li class="bg-line">';
    // fgcMainInput += '<a href="javascript: void(window.open(' + "'";
    // fgcMainInput += 'https://lineit.line.me/share/ui?url=' + "'";
    // fgcMainInput += ' .concat(encodeURIComponent(location.href)) ));" title="分享給 LINE 好友">';
    // fgcMainInput += '</a></li>';
    fgcMainInput += '<li class="bg-facebook">';
    fgcMainInput += '<a href="javascript:void(0);" onclick="window.open(' + "'";
    fgcMainInput += 'http://www.facebook.com/sharer/sharer.php?u=' + "'";
    fgcMainInput += '+window.location.toString()); return false;" title="分享給 Facebook 好友"></a>';
    fgcMainInput += '</li>';
    fgcMainInput += '</ul></div>';
    fgcMainInput += '</div>';
    fgcMainInput += '</div>';

    $("#fgcMainInput").append(fgcMainInput);
}

fgcMain();


// 大圖打開
$(document).on("click", ".open-bigPhoto", function () {
    var $openCloseBtn = '';
    var $overlayEvents = $(this).next();

    $overlayEvents.before('<div class="overlay-mask"></div>');

    // add close btn
    $openCloseBtn += ('<div class="close-icon-btn">');
    $openCloseBtn += ('<div class="close-icon close-icon-r"></div>');
    $openCloseBtn += ('<div class="close-icon close-icon-l"></div>');
    $openCloseBtn += ('</div>');
    $overlayEvents.before($openCloseBtn);

    $overlayEvents.fadeIn(200).addClass("overlay-open");
    $(".big--photo img").css("z-index", "100");

    $('body').css("overflow", "hidden");
})
$(document).on("click touch", ".close-icon-btn", function () {
    closeOverlay();
});
$(document).on("click touch", ".overlay-mask", function () {
    closeOverlay();
});
function closeOverlay() {
    $(".close-icon-btn").remove();
    $(".overlay-mask").remove().addClass('overlay-animate');
    $(".big--photo").removeClass("overlay-open").css('display', 'none');
    // $(".sp__visual").css("z-index", "");
    $('body').css("overflow", "");
}


