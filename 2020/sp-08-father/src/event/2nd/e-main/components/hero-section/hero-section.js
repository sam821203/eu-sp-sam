import { isMonth } from 'utils/js/detect.js'

export  var initHero = checkDateHero();

function checkDateHero() {
  var heroTitleImg = document.getElementById('heroTitle');
  if(isMonth(7)) heroTitleImg.src='title-prev.png';
  heroTitleImg.style.opacity = 1;
}