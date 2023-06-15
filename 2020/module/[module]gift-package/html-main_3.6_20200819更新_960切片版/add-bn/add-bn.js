// 設定連結網址(不需要的網址需要移除內容)
var promoLink = 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1103021/index.html';
var mobileLink = 'https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1103021/m.html';
var appLink = 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1103021%2fapp.html&t=%E7%A9%BA%E5%8C%85%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2';

mobileLink ? mobileLink : promoLink;
appLink ? appLink : promoLink;

addMedia();
initAdd();
// ==========================================================================
function initAdd() {
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
    if (isUiWebview) {
        addBn(appLink);
    }
    else {
        window.addEventListener('load', isWinWt);
        window.addEventListener('resize', isWinWt);
    }
}

// core
function addBn(href, posX, posY) {
    function oldBnCheck() {
        var oldBn = document.getElementById('addBn');

        if (oldBn) {
            oldBn.parentNode.removeChild(oldBn);
        }
    }

    oldBnCheck();

    var parent = document.getElementById('barHome');
    var headerWrap = document.getElementById('headerWrap');
    var tableParent = document.getElementsByTagName('table')[0];
    var body = document.body;
    var tag = document.createElement('a');
    tag.href = href ? href : promoLink;

    var script = document.getElementById('scriptAddBn');
    var timeStamp = '?' + new Date().getDate() + new Date().getMinutes();
    var scriptLink = script.src;
    var imgSrc = scriptLink.split('add-bn.js')[0] + 'add-bn.jpg' + timeStamp;
    // ==== diff other and ie ====
    var wrapBgUrl = 'background: center 0 url(' + imgSrc + ');';
    var wrapBgUrlIE = 'center 0 url(' + imgSrc + ');';
    // ===========================
    var wrapBg
    var imgSrcMobile = scriptLink.split('add-bn.js')[0] + 'add-bn-mobile.jpg' + timeStamp;
    var imgWrap = document.createElement('div');
    var imgMobileInTag = document.createElement('img');
    imgWrap.className = 'add-bn--web';
    // ==== diff other and ie ====
    imgWrap.style = wrapBgUrl;
    imgWrap.style.background = wrapBgUrlIE
    // ===========================
    imgWrap.style.height = '100px'; // add-bn.jpg's height
    imgMobileInTag.src = imgSrcMobile;
    imgMobileInTag.className = 'add-bn--mobile';
    tag.appendChild(imgWrap);
    tag.appendChild(imgMobileInTag);
    tag.id = 'addBn';
    tag.className = 'add-bn';

    if (parent) {
        parent.insertBefore(tag, parent.firstChild);
    } else if (headerWrap) {
        body.insertBefore(tag, headerWrap.nextSibling);
    } else {
        body.insertBefore(tag, body.firstChild);
    }
}

function addMedia() {
    var media = '.add-bn--web{width: 100%;}.add-bn--mobile{display: none;}@media screen and (max-width: 1240px){.add-bn--web{display: none;}.add-bn--mobile{display: block; width: 100%;}';
    var mediaNode = document.createTextNode(media);
    var meidaStyle = document.createElement('style');
    meidaStyle.appendChild(mediaNode);
    document.head.appendChild(meidaStyle);
}

function isWinWt() {
    var winWt = document.body.clientWidth;

    if (winWt >= 1260) {
        addBn();
    }
    else {
        addBn(mobileLink);
    }
}   
