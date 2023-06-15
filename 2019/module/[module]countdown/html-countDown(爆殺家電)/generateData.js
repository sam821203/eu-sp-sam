function generateCountData() {
    var targetIndex = 0;

    for (var i = 0; i < breakTime.length - 1; i++) {
        countDownTimer();
    }

    var timer = setInterval(function () {
        countDownTimer();
    }, 1000);

    function countDownTimer() {
        if (!breakTime) return false;

        var timeNow = new Date().getTime();
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
        hour += day * 24;

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

        var timeData =
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
generateCountData();

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