export var initBuildTab = buildTab();

function buildTab(){
  var tabBox = document.getElementById('tabBox');
  var tabItems = tabBox.querySelectorAll('.tab__item');
  var contentBlock = document.getElementById('contentBlock');
  var contentBox = contentBlock.querySelectorAll('.content__box');
  var dateNow = dateCheck() - 1; // change date to zero start

  if (tabItems.length !== contentBox.length) {
    console.error('Tab Item數量與Content Box數量不符');
    return false;
  }

  tabItems.forEach(function (el, index) {
    if (index === dateNow) {
      addActive(tabItems, dateNow);
      addActive(contentBox, index);
    }

    function clickActive() {
        addActive(tabItems, index);
        addActive(contentBox, index);
    }
    if(el.addEventListener){
        el.addEventListener('click', clickActive,false);
    }
    else if(el.attachEvent) {
        el.addEventListener('onclick', clickActive);

    }
  });
}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove('active');
  });
  arrayElementIn[elementIndex].classList.add('active');
}

function dateCheck(){
  var date = new Date().getDate();
  return date;
}