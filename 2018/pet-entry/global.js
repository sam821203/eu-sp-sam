function reloadAnimation(){
  var btnReload = document.getElementById('btnReload');
  btnReload.addEventListener('click', function(){
    this.classList.add('active');
    var timer = setTimeout(function(){
      btnReload.classList.remove('active');
      clearTimeout(timer);
    }, 500);
    
  })
}
reloadAnimation();

function preSendData() {
  var btnCta = document.getElementById('btnCta');
  var userName = document.getElementById('userName');
  var ticketNumber = document.getElementById('ticketNumber');
  var userPrice = document.getElementById('userPrice');
  var vcCode = document.getElementById('vcCode');

    // 假驗證重複，為了show重複overlay，四個視窗輸入值後重複送出就會跳假驗證
    var checkName;
    var checkNumber;
    var checkPrice;
    var checkVc;

  btnCta.addEventListener('click', function(){
    var allErrMsg = document.getElementsByClassName('error-msg');

    for(var i=0; i<allErrMsg.length; i++) {
      allErrMsg[i].style.display = 'none';
    }

    // 假驗證重複，為了show重複 overlay，四個視窗輸入值後重複送出就會跳假驗證
    if (!(checkName && checkNumber && checkPrice && checkVc)) {
      checkName = checkInput(userName, 'errorName');
      checkNumber = checkInput(ticketNumber, 'errorNumber');
      checkPrice = checkInput(userPrice, 'errorPrice');
      checkVc = checkInput(vcCode, 'errorVc');          
    } else {
      var infoSuccess = document.getElementById('infoSuccess');
      var infoFailure = document.getElementById('infoFailure');
      infoSuccess.style.display = 'none';
      infoFailure.style.display = 'block';
    }

    // 此為正式check的code，正式時刪除上面兩段把這段註解打開
    // var checkName = checkInput(userName, 'errorName');
    // var checkNumber = checkInput(ticketNumber, 'errorNumber');
    // var checkPrice = checkInput(userPrice, 'errorPrice');
    // var checkVc = checkInput(vcCode, 'errorVc');
    if(checkName && checkNumber && checkPrice && checkVc) {
      sendData();
    }
  }, false);
}
preSendData();

function checkInput(el, errorId) {
  if (el.value === '') {
    var errMsg = document.getElementById(errorId);
    errMsg.style.display = 'block';
    return false;
  } else {
    return true;
  }
}

function sendData() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
  overlay.addEventListener('click', function(){
    this.style.display = 'none';
  }, false);
}