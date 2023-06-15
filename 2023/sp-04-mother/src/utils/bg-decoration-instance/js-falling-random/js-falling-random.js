function initFallingBackground() {
  new FallingImages();
}

const rootStyles = window.getComputedStyle(document.documentElement);

const windowWidth = document.body.clientWidth;


function FallingImages() {
  // 檢查是否有 random__layer，如果沒有則不執行
  if (document.querySelector(".falling-random .random__layer")) {

    if (windowWidth >= 960) {
      var imgNum = Number(rootStyles.getPropertyValue("--number")) || 20;
    } else {
      var imgNum = Number(rootStyles.getPropertyValue("--number")) || 14;
    }


    this.num = imgNum;
    this.init();
  }
}

FallingImages.prototype.init = function () {

  this.image = document.createElement("div");
  this.image.classList.add('falling-random-image');

  for (let i = 0; i < this.num; i++) {
    this.clone(i);
  }
};

FallingImages.prototype.clone = function (i) {
  const myContainer = document.querySelector(".random__layer");
  const imageClone = this.image.cloneNode(true);
  const imageStyle = imageClone.style;
  const regex = /[+-]?\d+(\.\d+)?/g;
  
  if (windowWidth >= 960) {
    var fSize = Number(rootStyles.getPropertyValue("--size")) || 22;
  } else {
    var fSize = Number(rootStyles.getPropertyValue("--size")) || 14;
  }
  // const fSize = fSizeResult;

  // 取得 :root 裡的變數屬性值
  const fSizeMin = Number(rootStyles.getPropertyValue("--size-min")) || 12;
  const animeDuration = Number(rootStyles.getPropertyValue("--time")) || 8;

  imageStyle.left = 100 * Math.random() + "%";
  imageStyle.width = Math.random() + 0.5 + "em";
  imageStyle.height = imageStyle.width;
  imageStyle.fontSize = fSize * Math.random() + fSizeMin + "px";
  imageStyle.animationDelay = 8 * Math.random() + "s";
  imageStyle.animationDuration = animeDuration * Math.random() + 6 + "s";

  // 根據圖片大小會判斷該圖片 blur 程度
  const blurValue = 2 - parseFloat(imageStyle.width.match(regex) * 2);

  imageStyle.filter = "blur(" + blurValue + "px)";

  if (i % 3 == 0) {
    imageClone.classList.add("is-rotateX");
  } else if (i % 5 == 0) {
    imageClone.classList.add("is-rotateY");
  } else if (i % 2 == 0) {
    imageClone.classList.add("is-rotateZ");
  }

  myContainer.appendChild(imageClone);

  imageClone.addEventListener("animationend", () => {
    imageClone.remove();
    this.clone(i);
  });
};

document.addEventListener("DOMContentLoaded", initFallingBackground);