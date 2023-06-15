function detectmob() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        window.location.replace("http://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100786/m.html");
    }
}
detectmob();