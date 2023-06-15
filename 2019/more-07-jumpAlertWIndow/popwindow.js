/**
 * Created by jing on 2019/6/27.
 */

$(function () {
    var isClick = true;
    var time = 2.5;

    $(document).on("click", "a.open-bigPhoto", function (e) {

        e.preventDefault();

        // 彈出視窗
        var $openCloseBtn = '';
        var $overlayEvents = $(this);
        var $body = $("body");
        var touchId = $(this).attr('data-dialog');

        if (isClick) {
            initDialog();
            isClick = false;
        }
        else {
            $(".overlay-mask").show();
            comparisonDialog();
            SettingzIndex("100", "hidden");
        }

        function comparisonDialog() {
            var targetId = $(".big--photo");
            targetId.each(function () {
                if (touchId == $(this).attr('id')) {
                    $(this).fadeIn(200).addClass("overlay-open");
                }
            });
        }

        function SettingzIndex(size, hidden) {
            // $(".sp__visual").css("z-index", size);
            $(".big--photo img").css("z-index", size);
            $("body").css("overflow", hidden);
        }

        function initDialog() {
            $body.prepend('<div id="overlay-mask" class="overlay-mask"></div>');

            $body.prepend($openCloseBtn);

            comparisonDialog();
            SettingzIndex("1000", "hidden");
        }
        // .END 彈出視窗

        // 看倒數幾秒要開
        var newHref = this.getAttribute('href');
        function showTime() {
            time -= 1;
            document.getElementById("countDown__num").innerHTML = Math.floor(time);

            if (time > 0) {
                setTimeout(showTime, 1000);
            }
            else if(time <= 0) {
                // location.href = newHref;
                console.log(newHref);
                document.getElementById("countDown__num").innerHTML = 0;
            }
        }

        showTime();

    });
});
