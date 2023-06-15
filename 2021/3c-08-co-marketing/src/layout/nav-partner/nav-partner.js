export var initNavPartner = navClickActive();

function navClickActive () {
  var appListModified = false;
  var navPartnerItems = document.querySelectorAll('#navPartner > li');
  var navPartnerAnchors = document.querySelectorAll('#navPartner a');
  var subNav = document.querySelector('#subNav');
  var subListItems = document.querySelectorAll( '.sub-nav__list' );

  // a連結停止跳轉
  navPartnerAnchors.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  // nav item點擊時加上active、對應sub nav加上active
  navPartnerItems.forEach(function (el, index) {
    el.addEventListener('click', function () {
      navPartnerItems.forEach(function (el) {
        el.classList.remove('active');
      });
      subListItems.forEach(function (el) {
        el.classList.remove('active');
      });

      el.classList.add('active');
      subNav.classList.add('sticky');
      subListItems[index].classList.add('active');
      // 修正點擊內容往下推
      document.body.style.backgroundPositionY = subNav.clientHeight + 'px';
      appListModified = true;

    });
  });

  window.addEventListener('scroll', function () {
    if (appListModified) {
      subNav.classList.remove('sticky');
      appListModified = false;
    }
  });
}
