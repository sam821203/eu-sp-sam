// 設定連結網址(不需要的網址需要移除內容)
var promoLink = 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1103045/index.html';
var mobileLink = 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1103045/m.html';
var appLink = '';

mobileLink ? mobileLink : promoLink;
appLink ? appLink : promoLink;

spTimeLimit();

function initIcon() {
    // 判斷 app-view | web-view
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)|Android.*(wv|.0.0.0))/gi.test(navigator.userAgent);

    // app ? not app
    if (isUiWebview) {
        iconFloat(appLink);
    }
    else {
        window.addEventListener('load', isWinWt);
        window.addEventListener('resize', isWinWt);
    }
}

// core
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
        // elParent.style.zIndex = '0';

        if (elParent === parent) {
            var style = {
                'top': posY ? (posY + 'px') : 0,
                'left': posX ? (posX + 'px') : 'auto',
            };
        } else if (elParent.firstChild === headerWrap) {
            var style = {
                'display': 'inline',
                'top': posY ? (posY + 'px') : 'auto',
                'left': posX ? (posX + 'px') : 'calc(50% + 630px - 15px)',
                'right': posX ? (posX + 'px') : 'auto',
                'transform': 'translateX(-100%)',
            }
        } else {
            var style = {
                'display': 'inline',
                'top': posY ? (posY + 'px') : 0,
                'left': posX ? (posX + 'px') : 'calc(50% + 630px - 15px)',
                'right': posX ? (posX + 'px') : 'auto',
                'transform': 'translateX(-100%)',
            }
        }

        var styleContent = '';

        for (var attr in style) {
            styleContent += attr + ':' + style[attr] + ';';
        }
        tag.setAttribute('style', styleContent);
    }
    var parent = document.getElementById('iconHome');
    var headerWrap = document.getElementById('headerWrap');
    var tableParent = document.getElementsByTagName('table')[0];
    var body = document.body;
    var tag = document.createElement('a');
    tag.href = href ? href : promoLink;

    var script = document.getElementById('scriptIconFloat');
    var timeStamp = '?' + new Date().getDate() + new Date().getMinutes();
    var scriptLink = script.src;
    var imgSrc = scriptLink.split('float-icon.js')[0] + 'float-icon.png' + timeStamp;
    var imgSrcMobile = scriptLink.split('float-icon.js')[0] + 'float-icon-mobile.png' + timeStamp;
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

    // 判斷進入時有什麼值加上的這個浮水印
    if (parent) {
        parent.insertBefore(tag, parent.firstChild);
        addStyle(parent);
    } else if (headerWrap) {
        body.insertBefore(tag, headerWrap.nextSibling);
        addStyle(body);
    } else if (tableParent) {
        tableParent.insertBefore(tag, tableParent.firstChild);
        addStyle(tableParent);
    } else {
        body.insertBefore(tag, body.firstChild);
        addStyle(body);
    }
}

// add genaral style in style tag
function addMedia() {
    var media = '.icon-float{position: absolute;z-index: 50;right: 15px;}.float-icon--mobile{display: none;}@media screen and (max-width: 1240px){.icon-float{position: static;}.float-icon{display: none;}.float-icon--mobile{display: block; width: 100%;}';
    var mediaNode = document.createTextNode(media);
    var meidaStyle = document.createElement('style');
    meidaStyle.appendChild(mediaNode);
    document.head.appendChild(meidaStyle);
}

// decide screen size
function isWinWt() {
    var winWt = document.body.clientWidth;

    if (winWt >= 1260) {
        // web
        iconFloat();
    }
    else {
        // mobile
        iconFloat(mobileLink);
    }
}

// time limit
function spTimeLimit(srcDefault, srcChange1, srcChange2) {
    var promoMonth = 11;

    var dateNowMonth = new Date().getMonth();
    var dateNowDate = new Date().getDate();
    var dateNowHours = new Date().getHours();
    var script = document.getElementById('scriptIconFloat');

    if(script) {
        if(dateNowMonth === (promoMonth - 1)) {
            switch (dateNowDate) {
                case 4:
                case 7:
                    switch (dateNowHours) {
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                            addMedia();
                            initIcon();
                            break;
                        default:
                            script.parentElement.removeChild(script);
                            break;
                    }
                    break;
                case 11:
                    addMedia();
                    initIcon();
                    break;
                default:
                    script.parentElement.removeChild(script);
                    break;
            }
        }
    } else {
        script.parentElement.removeChild(script);
    }
}   
