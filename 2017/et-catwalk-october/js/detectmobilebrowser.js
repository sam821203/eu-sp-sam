function detectmob() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        window.location.replace("http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102089/m.html");
    }
}
detectmob();