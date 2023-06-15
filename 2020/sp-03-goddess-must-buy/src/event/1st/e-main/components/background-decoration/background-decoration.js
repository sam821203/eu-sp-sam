import { detectWindowWidth } from 'utils/js/detect.js'

function makeParallax() {
  var bgDecoration = document.getElementById('bgDecoration');
  var parallaxInstance = new Parallax(bgDecoration);
}

function readyParallax() {
  detectWindowWidth(960, makeParallax, null);
  window.addEventListener('resize', function () {
    detectWindowWidth(960, makeParallax, null);
  });
}
export var initParallax = requestAnimationFrame(readyParallax);
