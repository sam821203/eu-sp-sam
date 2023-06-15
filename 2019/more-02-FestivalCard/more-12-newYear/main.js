// 初始化參數
var transferInfo = {
    imgSource: 'card-1.jpg',
    textColor1: '#5d5d5d',
    textX1: 140,
    textY1: 1130,
    textXD1: 50,
    textYD1: 450,
    fontSize1: '56px',
    textAlign1: 'left',
    textColor2: '#fff',
    fontSize2: '36px',
    textAlign2: 'left',
    descText: ['包你中獎', '包你健康', '包你幸福', '包你發財']
}

var fgcImgId = '';
var fgcImgSrc = '';
var fgcImgVal = '';
var textPosition = true;

function transferInputAndImg({imgSource, textColor1, textX1, textY1, fontSize1, textAlign1, textColor2, fontSize2, textAlign2, textXD1, textYD1}) {
    var url = location.href;
    var text = document.getElementById('text');
    var imageTarget = document.getElementById('imageTarget');
    var submit = document.getElementById('submit');
    // var clean = document.getElementsByName('fgc-group-temp');
    // var clean = document.getElementById('fgcRefresh');
    // $(".fgc-choice-temp input:checked")
    var downloadAnchor = document.getElementById('downloadAnchor');
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    // 賦予參數
    var image = new Image();
    image.src = imgSource || 'card-1.jpg';
    var textColor = textColor || '#000000';
    var textX = textX || 0;
    var textY = textY || 50;
    var fontSize = fontSize || '48px';
    var textAlign = textAlign || 'start';

    var ouputFromImg = '';
    var winWt = window.innerWidth;

    // core canvas 繪圖
    function drawImage(imgTags) {
        var w = imgTags.width,
            h = imgTags.height;

        // 大網時 圖片縮小
        if (winWt > 1024) {
            w = w * 0.4;
            h = h * 0.4;
        }

        canvas.width = w;
        canvas.height = h;
        context.drawImage(imgTags, 0, 0, w, h);
    }

    // core canvas 加入文字
    function drawText(textSource, textColor, textX, textY, fontSize, textAlign) {
        var fontInfo = fontSize + ' ' + 'PingFangTC-regular, Roboto, "LiHei Pro", "Source Han Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, "Microsoft JhengHei", sans-serif';
        context.font = fontInfo;
        // context.fillStyle = "rgba(0,0,0,.5)";
        // context.fillRect(260, 445, 260, 50);
        context.fillStyle = textColor;
        context.fillText(textSource, textX, textY);
        context.textAlign = textAlign;
    }

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
                paramImg = 'card-1';
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
    drawImage(image);
    loadUrlParam();
    loadToImg();


    // 初始導入
    window.addEventListener('load', function () {
        if (decodeUrlImg()) {
            image = new Image();
            ouputFromImg = decodeUrlImg() + '.jpg';
            image.src = ouputFromImg;

            image.addEventListener('load', function () {
                drawImage(this);
                loadUrlParam();
                loadToImg();
            });
        }
    });


    // input偵測輸入時重繪先載入預設圖(清除舊input資料)、加入input資料、改變網頁title
    text.addEventListener('input', function () {
        drawImage(image);
        drawText(text.value, textColor1, textX1, textY1, fontSize1, textAlign1, textXD1, textYD1);
        drawText(text.value, textColor2, fontSize2, textAlign2);
        loadToImg();
        metaChange();
    });


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

    transferInfo.imgSource = fgcImgSrc;
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
function textListener() {
    text.addEventListener('input', function () {
        encodeInput();
    });
}


// 主要內容
function fgcMain() {
    var fgcMainCard = '';
    fgcMainCard += '<canvas id="canvas" width="100" height="100" hidden></canvas>';
    fgcMainCard += '<img src="" alt="" id="imageTarget">';

    var fgcMainInput = '';
    // fgcMainInput += '<input id="text" maxlength="7" class="input-box" type="text" placeholder="輸入您的大名傳送祝福">';
    fgcMainInput += '<div class="input-outer">';
    fgcMainInput += '<div class="input-group">';
    fgcMainInput += '<div class="input-block">';
    fgcMainInput += '<input id="text" maxlength="11" class="input-box" type="text" placeholder="輸入您的大名傳送祝福">';
    fgcMainInput += '</div>';

    fgcMainInput += '<div class="share-block">';
    fgcMainInput += '<ul class="community__ico">';
    fgcMainInput += '<li class="bg-line">';
    fgcMainInput += '<a href="javascript: void(window.open(' + "'";
    fgcMainInput += 'https://lineit.line.me/share/ui?url=' + "'";
    fgcMainInput += ' .concat(encodeURIComponent(location.href)) ));" title="分享給 LINE 好友">';
    fgcMainInput += '</a></li>';
    fgcMainInput += '<li class="bg-facebook">';
    fgcMainInput += '<a href="javascript:void(0);" onclick="window.open(' + "'";
    fgcMainInput += 'http://www.facebook.com/sharer/sharer.php?u=' + "'";
    fgcMainInput += '+fbhtml_url); return false;" title="分享給 Facebook 好友"></a>';
    fgcMainInput += '</li>';
    fgcMainInput += '</ul></div>';
    fgcMainInput += '</div>';
    fgcMainInput += '</div>';

    $("#fgcＭainCard").append(fgcMainCard);
    $("#fgcMainInput").append(fgcMainInput);
}

fgcMain();
// 文字即時同步
textListener();
transferInputAndImg(transferInfo);


