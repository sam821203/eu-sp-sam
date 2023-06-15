import { siblingRandom } from "utils/js/build-random.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initRandomW3m3 = [
  setInterval(function () {
    chooseRandomW3M3Item();
  }, 2000),
  scrollEventW3M3(),
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
function scrollEventW3M3() {
  var scrollItem = document.getElementById("decorEventW3m3Left");
  var scrollItem2 = document.getElementById("decorEventW3m3Left2");
  var scrollItem3 = document.getElementById("decorEventW3m3Right");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.5);
    var pos = 140 + scrollPercentage * -140;
    var pos2 = 200 + scrollPercentage * -200;
    // var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateX(-' + pos + '%)';
    scrollItem2.style.transform = 'translateX(-' + pos2 + '%)';
    scrollItem3.style.transform = 'translateX(' + pos + '%)';
    // scrollItem2.style.transform = 'scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
    }
  });
}
