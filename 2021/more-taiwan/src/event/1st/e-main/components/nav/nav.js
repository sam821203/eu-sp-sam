export var buildNav = navReady();

function navReady () {
  if(!dataTaiwan) return false;

  var navWrap = document.getElementById( 'navWrap' );

  dataTaiwan.forEach( function ( el, index ) {
    var navItem = document.createElement( 'li' );

    navItem.classList.add( 'nav__item' );
    navItem.innerHTML = el.zoneName;
    navWrap.appendChild( navItem );

  } );
}
