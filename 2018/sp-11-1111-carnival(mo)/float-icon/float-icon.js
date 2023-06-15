// 設定連結網址
var promoLink = '';
var mobileLink = '';
var appLink = '';

function iconFloat(href, posX, posY) {
    function oldIconCheck() {
        var oldIcon = document.getElementById('iconFloat');

        if (oldIcon) {
            oldIcon.parentNode.removeChild(oldIcon);
        }
    }

    oldIconCheck();

    function addStyle(elParent) {
        elParent.style.position = 'relative';
        elParent.style.zIndex = '0';

        if (elParent === parent) {
            var style = {
                'top': posX ? (posX + 'px') : 0,
                'left': posY ? (posY + 'px') : 'auto',
            };
        } else {
            var style = {
                'display': 'inline',
                'top': posX ? (posX + 'px') : 0,
                'left': posY ? (posY + 'px') : 'calc(50% + 630px - 15px)',
                'right': posY ? (posY + 'px') : 'auto',
                'transform': 'translateX(-100%)',
            }
        }

        var styleContent = '';

        for (var attr in style) {
            styleContent += attr + ':' + style[attr] + ';';
        }
        tag.setAttribute('style', styleContent);
    }

    function addMedia() {
        var media = '.icon-float{position: absolute;z-index: 50;right: 15px;}.float-icon--mobile{display: none;}@media screen and (max-width: 1240px){.icon-float{position: static;}.float-icon{display: none;}.float-icon--mobile{display: block; width: 100%;}';
        var mediaNode = document.createTextNode(media);
        var meidaStyle = document.createElement('style');
        meidaStyle.appendChild(mediaNode);
        document.head.appendChild(meidaStyle);
    }

    addMedia();

    var parent = document.getElementById('iconHome');
    var tableParent = document.getElementsByTagName('table')[0];
    var body = document.body;
    var tag = document.createElement('a');
    tag.href = href ? href : promoLink;

    var script = document.getElementById('scriptIconFloat');
    var scriptLink = script.src;
    var imgSrc = scriptLink.split('float-icon.js')[0] + 'float-icon.png';
    var imgSrcMobile = scriptLink.split('float-icon.js')[0] + 'float-icon-mobile.png';
    var imgInTag = document.createElement('img');
    var imgMobileInTag = document.createElement('img');
    imgInTag.src = imgSrc;
    imgInTag.className = 'float-icon';
    imgInTag.style = 'width: auto;';
    imgMobileInTag.src = imgSrcMobile;
    imgMobileInTag.className = 'float-icon--mobile';
    tag.appendChild(imgInTag);
    tag.appendChild(imgMobileInTag);
    tag.id = 'iconFloat';
    tag.className = 'icon-float';

    // 判斷進入時有什麼值加上的這個浮水標
    if (parent) {
        parent.insertBefore(tag, parent.firstChild);
        addStyle(parent);
    } else if (tableParent) {
        tableParent.insertBefore(tag, tableParent.firstChild);
        addStyle(tableParent);
    } else {
        body.insertBefore(tag, body.firstChild);
        addStyle(body);
    }
}
iconFloat();


// 判斷 app-view | web-view
var winWt = document.body.clientWidth;
var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)|Android.*(wv|.0.0.0))/gi.test(navigator.userAgent);

// mobile ? not mobile
if (isUiWebview) {
    // app URL
    iconFloat(appLink);
}
else {
    isWinWt();
}

// decide screen size
function isWinWt() {
    if (winWt > 1240) {
        // pc URL
        iconFloat();
    }
    else {
        // mobile URL
        iconFloat(mobileLink);
    }
}