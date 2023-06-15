
function checkDate() {
  var calendarCell = document.querySelectorAll('.calendar__cell');

  var dateNow = new Date().getDate();
  // ===================================================
  // FIXME: 測試改日期用，正式請刪掉
  // var dateNow = new Date('2019/12/2 10: 00').getDate();
  // console.log(dateNow);

  // ===================================================

  calendarCell.forEach(function(el, index){
    el.classList.remove('active');
    if(index === (dateNow - 1)) {
      el.classList.add('active');
    }
  });
}
checkDate();
