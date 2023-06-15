// 預設24小時制(傳入第一個參數是12就會切換成12小時制)，可以傳入第二個參數是星期的格式陣列
export function getClock(sessionSwitch, arraywWeekFormat) {
  var date = new Date();
  var month = date.getMonth(); // 0 - 11
  var day = date.getDate(); // 1 - 31
  var week = date.getDay(); // 0 - 6
  var hour = date.getHours(); // 0 - 23
  var min = date.getMinutes(); // 0 - 59
  var sec = date.getSeconds(); // 0 - 59
  var session = "AM";
  var wordWeek = arraywWeekFormat || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // if 要12小時
  if (typeof sessionSwitch === "12") {
    if (hour == 0) {
      hour = 12;
    }
    if (hour > 12) {
      hour = hour - 12;
      session = "PM";
    }

  } else {
    if (hour > 12) {
      session = "PM";
    }
  }

  hour = (hour < 10) ? "0" + hour : hour;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  return {
    'month': month + 1,
    'day': day,
    'week': wordWeek[week],
    'hour': hour,
    'min': min,
    'sec': sec,
    'session': session,
  };
}