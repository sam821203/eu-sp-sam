export var buildMap = mapReady();

function mapReady () {
  if(!dataTaiwan) return false;

  dataTaiwan.forEach( function ( el ) {
    var svg = document.getElementById( 'svgTaiwan' );
    var mapTaiwan = svg.getElementById( 'mapTaiwan' );

    if ( el.mapId ) {
      var pathId = '#' + el.mapId;
      var svgMapBlock = mapTaiwan.querySelector( pathId );

      svgMapBlock.parentNode.classList.add( 'js-hover-active' );
      svgMapBlock.setAttribute( 'data-city', el.zoneName );
    }
  });
}
