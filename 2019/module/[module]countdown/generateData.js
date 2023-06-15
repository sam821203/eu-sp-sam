generateCountData();
// generateCountData("dev");

function generateCountData(dev){
  var targetIndex = 0;
  var serverTime;
  var diffTime;
  var localTime = new Date().getTime();
  var isDev = dev || false;

  if(!isDev) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', location.href, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      var dataString = xhr.getResponseHeader('Date');
      serverTime = new Date(dataString).getTime();
      diffTime = localTime - serverTime;
    };
  }

  for(var i=0; i< breakTime.length - 1 ; i++) {
    countDownTimer();
  }
  
  var timer = setInterval(function(){
                countDownTimer();
              }, 1000);

  function countDownTimer() {
    if(!breakTime) return false;


    if(serverTime) {
      // console.log(serverTime);
      var browserTime = new Date().getTime();
      var timeNow = browserTime - diffTime;     
    } else {
      // console.log('no server time');
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
    hour += day * 24;

    if(countDownTime <= 0) {
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
    (hour>99?'<span class="date date--hour date--out-range">99':'<span class="date date--hour">' + ('0' + hour).slice(-2)) + 
    '</span><span>:</span><span class="date date--min">' + ('0' + min).slice(-2) + 
    '</span><span>:</span><span class="date date--seconds">' + ('0' + seconds).slice(-2) + '</span>';

    timer.innerHTML = timeData;
  }

  function clearTimer(targetIndex, breakTime) {
    if(targetIndex >= breakTime.length) {
      clearInterval(timer);
    }
  }
}

function delScript(){
  var data = document.getElementById('data');
  var generateData = document.getElementById('generateData');

  function destroyEl(el) {
    document.addEventListener('DOMContentLoaded', function(){
      el.parentElement.removeChild(el);
    })  
  }
  destroyEl(data);
  destroyEl(generateData);  
}
delScript();