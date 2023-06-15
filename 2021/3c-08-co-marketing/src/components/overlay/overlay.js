function makeOverlay () {
  var overlayMask = document.getElementById('overlayMask');

  // TODO: custom: body點了也能關閉(因btnClose在Body內，所以開body時不用開btn也有效)，兩者交換註解即可切換一般廣告蓋板/沒連結蓋板
  // var btnClose = document.getElementById('btnClose');
  var overlayBody = document.getElementById('overlayBody');


  clickClose(overlayMask);

  // TODO: custom: body點了也能關閉(因btnClose在Body內，所以開body時不用開btn也有效)，兩者交換註解即可回到一般廣告蓋板/沒連結蓋板
  // clickClose(btnClose);
  clickClose(overlayBody);

  setTimeout(closeOverlay, 7000);
}

function closeOverlay(){
  var overlayWrap = document.getElementById('overlayWrap');

  overlayWrap.style.display = 'none';
}

function clickClose(el){
  el.addEventListener('click', closeOverlay);
}


export var initOverlay = makeOverlay();
