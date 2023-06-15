var calendarCell = document.querySelectorAll('.calendar__cell');
var promoBox = document.querySelectorAll('.promo__box');

promoBox.forEach(function (el, index) {
  el.classList.remove('now');
  el.id = ("promoBox" + (index + 1)).toString();
  checkDate(el);
  addCalendar(el, index);
});

function checkDate(el) {
  if (!el.dataset.dateStart || !el.dataset.dateEnd) return console.error('有活動的開始或結束日期沒填');

  var dateNow = new Date();
  // ===================================================
  // FIXME: 測試改日期用，正式請刪掉
  var dateNow = new Date('2019/12/12 10: 00');
  // ===================================================
  var dateStart = new Date(el.dataset.dateStart);
  var dateEnd = new Date(el.dataset.dateEnd);

  if (dateStart <= dateNow && dateNow < dateEnd) {
    el.classList.add('now');
    el.style.order = -1;
  }
}

function addCalendar(promoEl, index) {
  var spCalendar = document.getElementById('spCalendar');

  if (!spCalendar) return false;
  if (!promoEl.dataset.dateStart || !promoEl.dataset.dateEnd) return false;

  var calendarCell = Array.apply(null, spCalendar.querySelectorAll('.calendar__cell'));
  var dateStart = new Date(promoEl.dataset.dateStart).getDate();
  var dateEnd = new Date(promoEl.dataset.dateEnd).getDate();
  var cellIndexStart;
  var cellIndexEnd;
  var promoIndex = ('promo--' + (index + 1)).toString();

  calendarCell.forEach(function (el, index) {
    if (parseInt(el.innerText) == parseInt(dateStart)) {
      // el.classList.add(promoIndex);
      cellIndexStart = index;
    }
    if (parseInt(el.innerText) == parseInt(dateEnd)) {
      // el.classList.add(promoIndex);
      cellIndexEnd = index;
    }
  });

  for (var i = cellIndexStart; i <= cellIndexEnd; i++) {
    var promoAnchor = document.createElement('a');
    promoAnchor.href = ('#promoBox' + (index + 1)).toString();
    promoAnchor.classList.add('cell__anchor');
    promoAnchor.classList.add(promoIndex);
    calendarCell[i].append(promoAnchor);
  }
}