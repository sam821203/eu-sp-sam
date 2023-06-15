import { siblingRandom } from "utils/js/build-random.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initRandomW3m3 = [
  setInterval(function () {
    chooseRandomW3M3Item();
  }, 2000),
  ScrollEventW3M3(),
];

function chooseRandomW3M3Item() {
  var w3m3Items = Array.apply(null, document.querySelectorAll("#w3m3Wrap a"));
  var arrayAnimationClass = ["active", "active"];
  var chooseClassIndex = siblingRandom(
    arrayAnimationClass.length,
    "siblingRandomCheckW3M3AnimationIndex"
  );
  var chooseItemIndex = siblingRandom(w3m3Items.length);

  w3m3Items.forEach(function (item) {
    arrayAnimationClass.forEach(function (className) {
      item.classList.remove(className);
    });
  });
  w3m3Items[chooseItemIndex].classList.add(
    arrayAnimationClass[chooseClassIndex]
  );
}

// 滾動
function ScrollEventW3M3() {
  var scrollItem = document.getElementById("decorEventW3m3Left");
  var scrollItem2 = document.getElementById("decorEventW3m3Right");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.5);
    var pos = 100 + scrollPercentage * -100;
    // var pos2 = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      scrollItem2.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
      scrollItem2.classList.remove("active");
    }
  });
}
