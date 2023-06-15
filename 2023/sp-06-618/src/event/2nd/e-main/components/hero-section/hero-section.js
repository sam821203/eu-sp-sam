import { getScrollPercentage } from "utils/js/scroll.js";
export var initHero = [
  scrollHero(),
];

// 滾動
function scrollHero() {
  if(window.innerWidth < 960) return false;

  const scrollItems = Array.apply(null, document.querySelectorAll('.fg'));
  const posItems = [0.15, 0.2, 0.6];  

  window.addEventListener('scroll', () => {
    scrollItems.forEach( (el, index) => {
      let scrollTop = Math.floor(posItems[index] * window.scrollY);

      el.style.top =  scrollTop + 'px';
    });
  });
}
