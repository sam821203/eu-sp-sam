export default function spTimeLimit(changeAnchorID, changeImg, dateLimit, srcChange, hrefChange) {
    var dateLimit = new Date(dateLimit);
    var dateNow = new Date();
    var changeAnchor = document.getElementById(changeAnchorID) || document.getElementById("changeAnchor");
    var changeImg = document.getElementById(changeImg) || document.getElementById("changeImg");

    if (changeAnchor && changeImg) {
        if (dateNow > dateLimit) {
            // TODO: js替換的img不會經過webpack轉出來，因此要記得手動丟到assets/img資料夾另外轉出
            var srcChange = srcChange || 'img/2-Button_01-over.png';
            var hrefChange = hrefChange || 'javascript:void(0)';
            changeImg.style.opacity = 0;
            changeImg.setAttribute('src', srcChange);
            changeAnchor.setAttribute('href', hrefChange);
            changeAnchor.style.cursor = 'default';
            // turn off hover style
            changeAnchor.style.filter = 'brightness(100%)';
        }
    }
    setTimeout(function () {
        changeImg.style.opacity = 1;
    }, 0);
}

// old period-time-change switch
export function spTimeLimitRange(srcDefault, srcChange) {
    var promoMonth = 7;

    var dateNowMonth = new Date().getMonth();
    var dateNowDate = new Date().getDate();
    var changeAnchor = document.getElementById("changeAnchor");
    var changeImg = document.getElementById("changeImg");
    var hrefDefault = 'javascript:void(0)';
    var srcDefault = srcDefault || 'src/assets/img/2-Button_01-over.png';
    var srcChange = srcChange || 'src/assets/img/2-Button_01.png';

    if (changeAnchor && changeImg) {
        if (dateNowMonth === (promoMonth - 1)) {
            var hrefChange = changeAnchor.href;
            changeAnchor.style.opacity = 0;
            changeImg.style.opacity = 0;

            switch (dateNowDate) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    changeAnchor.setAttribute('href', hrefChange);
                    changeImg.setAttribute('src', srcChange);
                    break;
                default:
                    changeAnchor.setAttribute('href', hrefDefault);
                    changeImg.setAttribute('src', srcDefault);
            }
        }

        setTimeout(function () {
            changeAnchor.style.opacity = 1;
            changeImg.style.opacity = 1;
        }, 0);
    }
}
