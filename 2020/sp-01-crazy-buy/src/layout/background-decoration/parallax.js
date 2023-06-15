import { detectWindowWidth } from 'utils/js/detect.js'

function makeParallax() {
  var bgDecoration = document.getElementById('bgDecoration');
  var bgItem = document.querySelector('#bgDecoration > .decoration__item');
  var bgItemImg = document.querySelector('#bgDecoration > .decoration__item > img');
  var imgDecoration = document.createElement('img');
  imgDecoration.src = 'background-decoration.png';
  if (!bgItemImg) bgItem.appendChild(imgDecoration);

  var parallaxInstance = new Parallax(bgDecoration);
}

function readyParallax() {
  detectWindowWidth(1260, makeParallax, null);
  window.addEventListener('resize', function(){
    detectWindowWidth(1260, makeParallax, null);
  });
}
export var initParallax = requestAnimationFrame(readyParallax);
