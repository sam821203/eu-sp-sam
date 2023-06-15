import { siblingRandom } from "utils/js/build-random.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initRandomW3m32 = [
  setInterval(function () {
    chooseRandomW3M32Item();
  }, 2000),
  scrollEventW3M32(),
];

function chooseRandomW3M32Item() {
  var w3m32Items = Array.apply(null, document.querySelectorAll("#w3m32Wrap a"));
  var arrayAnimationClass = ["active", "active"];
  var chooseClassIndex = siblingRandom(
    arrayAnimationClass.length,
    "siblingRandomCheckW3M32AnimationIndex"
  );
  var chooseItemIndex = siblingRandom(w3m32Items.length);

  w3m32Items.forEach(function (item) {
    arrayAnimationClass.forEach(function (className) {
      item.classList.remove(className);
    });
  });
  w3m32Items[chooseItemIndex].classList.add(
    arrayAnimationClass[chooseClassIndex]
  );
}

// 滾動
function scrollEventW3M32() {
  var scrollItem = document.getElementById("decorEventW3m32Left");
  var scrollItem2 = document.getElementById("decorEventW3m32Right");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.2);
    var pos = 100 + scrollPercentage * -100;
    // var pos2 = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform =" translateX(" + pos + "%) scale(" + value + ")";
    // scrollItem.style.opacity = value;

    // scrollItem2.style.transform = " translateX(-" + pos + "%) scale(" + value + ")";
    // scrollItem2.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      scrollItem2.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
      scrollItem2.classList.remove("active");
    }
  });
}
