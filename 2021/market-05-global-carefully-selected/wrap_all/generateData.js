generateCountData();

function generateCountData() {
    var targetIndex = 0;
    var serverTime;

    // AJAX start，取得伺服器時間
    var xhr = new XMLHttpRequest();

    xhr.open('GET', location.href, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        var dataString = xhr.getResponseHeader('Date');
        serverTime = new Date(dataString).getTime();
    };
    // AJAX end

    for (var i = 0; i < breakTime.length - 1; i++) {
        countDownTimer();
    }

    var timer = setInterval(function () {
        countDownTimer();
    }, 1000);

    function countDownTimer() {
        if (!breakTime) return false;

        // 如果AJAX的server time還沒就先用local time，
        // 有server time了就取代之，並且每次+1000(countDownTimer每秒執行一次，每秒就會+1000毫秒)
        // 離線時因為沒有AJAX回傳，所以會一直使用local time，可以測試倒數後功能是否有成功。
        if (serverTime) {
            var timeNow = serverTime += 1000;
        } else {
            var timeNow = new Date().getTime();
        }

        var dataTime = breakTime[targetIndex];
        var targetTime = new Date(dataTime).getTime();
        var countDownTime = targetTime - timeNow;
        var seconds = Math.floor(countDownTime / 1000);
        var min = Math.floor(seconds / 60);
        var hour = Math.floor(min / 60);
        var day = Math.floor(hour / 24);

        hour %= 24;
        min %= 60;
        seconds %= 60;

        // all day plus back to hour
        // hour += day * 24;

        if (countDownTime <= 0) {
            day = 0
            hour = 0;
            min = 0;
            seconds = 0;

            targetIndex++;
            clearTimer(targetIndex, breakTime);
        }
        appendTime(day, hour, min, seconds);
    }

    function appendTime(day, hour, min, seconds) {
        var timer = document.getElementById('timer');
        // slice(-2) 是抓取最後兩個數值，情境是如果1-9會帶上0，顯示為01、02....
        // 但如果是10、11、....原本應該是010但slice(-2)追最後兩個數值 -> 10
        var timeData =
            '<span class="date day">' + ('' + day).slice(-2) + '</span>'+
            (hour > 99 ? '<span class="date date--hour date--out-range">99' : '<span class="date date--hour">' + ('0' + hour).slice(-2)) +
            '</span><span class="date date--min">' + ('0' + min).slice(-2) +
            '</span><span class="date date--seconds">' + ('0' + seconds).slice(-2) + '</span>';

        timer.innerHTML = timeData;
    }

    function clearTimer(targetIndex, breakTime) {
        if (targetIndex >= breakTime.length) {
            clearInterval(timer);
        }
    }
}

function delScript() {
    var data = document.getElementById('data');
    var generateData = document.getElementById('generateData');

    function destroyEl(el) {
        document.addEventListener('DOMContentLoaded', function () {
            el.parentElement.removeChild(el);
        })
    }

    destroyEl(data);
    destroyEl(generateData);
}
delScript();