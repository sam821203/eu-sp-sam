function makeMarquee() {
  // TODO: 設定間隔時間(單位：秒)，設定完要去SASS設定
  var animateTime = 3.5; // suggest bottom value
  // var animateTime = 9; // suggest left value

  var boxText = document.querySelectorAll('#marqueeBox > .marquee__item');

  function marqueeAnimateRun() {
    boxText.forEach(function(el, index) {
      setTimeout(function() {
        boxText.forEach(function (el) {
          el.classList.remove('marquee__item--active');
        });
        el.classList.add('marquee__item--active')
      }, animateTime * 1000 * (index));
    });
  }
  marqueeAnimateRun();
  setInterval(marqueeAnimateRun, animateTime * boxText.length * 1000);
}

// 減量scroll show hide toggle
// ===========================================
var lastScrollPos = 0;
var ticking = false;

function marqueeCheck(lastScrollPos, checkHeight){
  var marquee = document.getElementById('marquee');
  
  if (lastScrollPos >= checkHeight ) {
    marquee.classList.remove('active');
  } else {
    marquee.classList.add('active');
  }
}

function marqueeScrollCheck(checkHeight){
  window.addEventListener('scroll', function () {
    lastScrollPos = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        marqueeCheck(lastScrollPos, checkHeight);
        ticking = false;
      });
    }
    ticking = true;
  });
}

export var initMarquee = [makeMarquee(), marqueeScrollCheck(1000)];
