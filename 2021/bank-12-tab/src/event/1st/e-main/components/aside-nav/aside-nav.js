export var initAside = [
  asideReady(),
  asideBtnReady(),
  overlayClick(),
];

function asideReady () {
  var asideNav = document.getElementById( 'asideNav' );
  var asideItems = Array.apply( null, asideNav.querySelectorAll( '.aside__box' ) );

  var bigContent = document.getElementById( 'bigContent' );
  var bankDetailItems = Array.apply( null, bigContent.querySelectorAll( '.bank__wrap' ) );

  asideItems.forEach( function ( el, index ) {
    var popElement = el.querySelector( '.js--pop' );

    // 因為會有a連結而非.js--pop的情況，需要排除所以用if判斷
    if ( !popElement ) return;

    popElement.addEventListener( 'click', function () {
      var bankName = el.dataset.bank;

      bankDetailItems.forEach( function ( bank ) {
        if ( bankName === bank.id ) {
          // 防止nav連點導致動畫越來越不一致，動畫期間禁止點擊
          asideNav.classList.add( 'disabled' );

          // 小網選了銀行就該移除active讓選單消失
          toggleActive();

          // aside亮燈需要由middle big打開處統一控制
          // moveActiveToItem( asideItems, index );
        }
      } );

      // 防止nav連點導致動畫越來越不一致，動畫期間禁止點擊
      setTimeout( function () {
        asideNav.classList.remove( 'disabled' );
      }, 300 );
    });
  } );
}

function asideBtnReady () {
  var btnFixed = document.getElementById( 'btnFixed' );

  btnFixed.addEventListener( 'click', toggleActive );
}

function toggleActive () {
  var btnFixed = document.getElementById( 'btnFixed' );
  var overlay = document.getElementById( 'overlay' );
  var asideWrap = document.getElementById( 'asideWrap' );

  btnFixed.classList.toggle( 'active' );
  overlay.classList.toggle( 'active' );
  asideWrap.classList.toggle( 'active' );
  document.body.classList.toggle( 'masked' );
}

function overlayClick () {
  var overlay = document.getElementById( 'overlay' );

  overlay.addEventListener( 'click', toggleActive);
}