// 初始化參數
var transferInfo = {
    imgSource: 'card-1.jpg',
    textColor1: '#fff',
    textX1: 390,
    textY1: 895,
    fontSize1: '48px',
    textAlign1: 'right',
    textColor2: '#c7a95b',
    textX2: 650,
    textY2: 1428,
    fontSize2: '60px',
    textAlign2: 'center',
}

function transferInputAndImg({imgSource, textColor1, textX1, textY1, fontSize1, textAlign1, textColor2, textX2, textY2, fontSize2, textAlign2}) {
    var url = location.href;
    var text = document.getElementById('text');
    var imageTarget = document.getElementById('imageTarget');
    var submit = document.getElementById('submit');
    var clean = document.getElementById('clean');
    var downloadAnchor = document.getElementById('downloadAnchor');
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    // 賦予參數
    var image = new Image();
    image.src = imgSource || 'target.jpg';
    var textColor = textColor || '#000000';
    var textX = textX || 0;
    var textY = textY || 50;
    var fontSize = fontSize || '48px';
    var textAlign = textAlign || 'start';

    // core canvas 繪圖
    function drawImage(imgSource) {
        var w = imgSource.width,
            h = imgSource.height;

        console.log(imgSource)
        console.log(w)
        console.log(h)
        canvas.width = w;
        canvas.height = h;
        context.drawImage(imgSource, 0, 0, w, h);
    }

    // core canvas 加入文字
    function drawText(textSource, textColor, textX, textY, fontSize, textAlign) {
        var fontInfo = fontSize + ' ' + 'PingFangTC-regular, sans-serif';
        context.font = fontInfo;
        context.fillStyle = textColor;
        context.fillText(textSource, textX, textY);
        context.textAlign = textAlign;
    }

    // 將網址參數載入
    function loadUrlParam() {
        var ouputFromUrl = decodeUrl();

        drawText(ouputFromUrl, textColor1, textX1, textY1, fontSize1, textAlign1);
        drawText(ouputFromUrl, textColor2, textX2, textY2, fontSize2, textAlign2);
    }

    function loadToImg() {
        imageTarget.src = canvas.toDataURL("image/jpeg");
        console.log(imageTarget);
    }

    // 解析網址帶來的餐數
    function decodeUrl() {
        if (url.indexOf('?') != -1) {
            var outputInUrl = new URL(location.href);
            var param = outputInUrl.searchParams.get('text');

            if (param) {
                var decodeValue = decodeURI(param);
                metaChange(decodeValue);

                return decodeValue;

            } else return '';
        }
        return '';
    }

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

    window.addEventListener('load', function () {
        drawImage(image);
        loadUrlParam();
        loadToImg();
    });

    // submit時重繪先載入預設圖(清除舊input資料)、加入input資料、改變網頁title
    // submit.addEventListener('click', function(){
    //   drawImage(image);
    //   if (text.value) {
    //     drawText(text.value, textColor1, textX1, textY1, fontSize1, textAlign1);
    //     drawText(text.value, textColor2, textX2, textY2, fontSize2, textAlign2);
    //     loadToImg();
    //     metaChange();
    //   }
    // });
    // input偵測輸入時重繪先載入預設圖(清除舊input資料)、加入input資料、改變網頁title
    text.addEventListener('input', function () {
        drawImage(image);
        drawText(text.value, textColor1, textX1, textY1, fontSize1, textAlign1);
        drawText(text.value, textColor2, textX2, textY2, fontSize2, textAlign2);
        loadToImg();
        metaChange();
    });

    // clean.addEventListener('click', function(){
    //   var originUrl = url.split('?text=')[0];
    //   window.history.replaceState('','', originUrl);
    //   text.value = '';
    //   drawImage(image);
    //   loadToImg();
    // });

    // downloadAnchor.addEventListener('click', function(){
    //   this.href= canvas.toDataURL("image/jpeg");
    // });
}
transferInputAndImg(transferInfo);

// 將input編譯成64位元碼(網址不能輸入中文需轉譯)
function encodeInput() {
    var url = location.href;

    if (url.indexOf('?text=') != -1) {
        url = url.split('?text=')[0];
    }
    if (url.indexOf('?openExternalBrowser=1') != -1) {
        url = url.split('?openExternalBrowser=1')[0];
    }
    var text = document.getElementById('text');
    var inputValue = text.value;
    var encodeValue = encodeURI(inputValue);

    // 將現行網址列轉換成編譯後結果(用於分享可直接抓網址)
    var state = {'userWords': inputValue};
    var finalUrl = encodeURI(url.split('?text=')[0] + '?openExternalBrowser=1&text=' + inputValue);
    var fbUrl = url.split('?text=')[0] + encodeURIComponent('?openExternalBrowser=1&text=' + inputValue);
    shareSocialChange(fbUrl);
    window.history.replaceState(state, '', finalUrl);
}

function shareSocialChange(inputUrl) {
    // var lineBtn = document.querySelector('iframe.line-it-button');
    // lineBtn.dataset.url = location.href;
    // console.log(fbhtml_url);
    fbhtml_url = inputUrl || window.location.toString();
    // console.log('fb:'+fbhtml_url);
}


// 邊打字邊編譯
text.addEventListener('input', function () {
    encodeInput();
});