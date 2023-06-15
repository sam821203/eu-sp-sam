import {getScrollPercentage} from 'utils/js/scroll.js'

export var initScrollBnSpecial = scrollBnSpecial();

function scrollBnSpecial() {
  var scrollItem = document.getElementById('decoBnSpecial');
  var childItem = scrollItem.querySelector('.title__decoration');

  window.addEventListener("scroll", function () {
    var scrollPercentageItem = getScrollPercentage(scrollItem, 0, 0.6);
    var scrollPercentageChild = getScrollPercentage(childItem, 0, 0.4);

    var width = scrollPercentageItem;
    var posItem = 100 + scrollPercentageItem * -100;
    var posChild = 150 + scrollPercentageChild * -150;

    scrollItem.style.transform = 'translateY(' + posItem + 'px)';
    childItem.style.transform = 'scale(' + width + ')' + 'translateY(' + posChild + '%)';

    if (scrollPercentageChild === 1) {
      childItem.classList.add('active');
      scrollItem.classList.add('zIndex__base');
    } else {
      childItem.classList.remove('active');
      scrollItem.classList.remove('zIndex__base');
    }
  });
}