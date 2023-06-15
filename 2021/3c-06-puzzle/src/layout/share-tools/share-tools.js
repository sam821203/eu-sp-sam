/**
 * Created by jing on 2020/1/2.
 */
// <!-- Line 分享按鈕 -->

//<![CDATA[
(function () {
    // var img = "http://2.bp.blogspot.com/-tsIDMPhBx18/VPGxHZtjsnI/AAAAAAAALIU/1b_VO721HDw/s1600/line-share-button.png", // line 按鈕圖示
    // title = document.title,
    //     url = "http://" + location.hostname + location.pathname,
    var href_fb,href_line, html_fb, html_line;

    var fbID = document.getElementById("share__fb");
    // 行動裝置語法
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        href_fb = 'javascript: void(window.open(&apos;http://www.facebook.com/sharer/sharer.php?u=&apos; .concat(encodeURIComponent(location.href)) ))';
    }
    else {
        // 網頁版語法
        href_fb = 'javascript: void(window.open("http://www.facebook.com/sharer/sharer.php?u=" .concat(encodeURIComponent(location.href)) ));';
    }
    html_fb = "<a href='" + href_fb + "' title='分享到fackebook' class='share__btn btn--fb'><img src='fb--circle.png' alt='分享到fackebook'/></a>";
    fbID.innerHTML = html_fb;

    var lineID = document.getElementById("share__line");
    // 行動裝置語法
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        html_line = 'javascript: void(window.open(&apos;https://lineit.line.me/share/ui?url=&apos; .concat(encodeURIComponent(location.href)) ))';
    }
    else {
        // 網頁版語法
        html_line = 'javascript: void(window.open("https://lineit.line.me/share/ui?url=" .concat(encodeURIComponent(location.href)) ));';
    }
    html_line = "<a href='" + html_line + "' title='分享到LINE' class='share__btn btn--line'><img src='line--circle.png' alt='分享到LINE'/></a>";
    // console.log(document.getElementById("share__line"));
    lineID.innerHTML = html_line;
})();
