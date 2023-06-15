const canvas = new fabric.Canvas('canvas', {
  width: 500,
  height: 500,
  backgroundColor: '#fff' });

const $ = id => document.getElementById(id);
const imageUploader = $('imageUploader');
const file = $('file');
const imgset = $('imgset');
const defaultImg = $('defaultImg');
const foregroundSwitch = $('foregroundSwitch');

let movingImage;
let imgDragOffset = {
  offsetX: 0,
  offsetY: 0 };

imageUploader.addEventListener('click', uploadFile, true);
file.addEventListener('change', handleFile);
canvas.on('drop', dropImg);

// defaultImg.addEventListener('mousedown', saveImg)
imgset.addEventListener('mousedown', loadProductImg);

foregroundSwitch.addEventListener('change', opacitySwitch);

// 上傳圖就點input
function uploadFile(e) {
  file.click();
}

// 拖曳放開時存圖片位置
function loadProductImg(e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    imgDragOffset.offsetX = e.clientX - e.target.offsetLeft;
    imgDragOffset.offsetY = e.clientY - e.target.offsetTop;
    movingImage = e.target;
  }
}

// 將上傳的圖片轉成img element
function handleFile() {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(this.files[0]);
  fileReader.onload = e => {
    // 圖片 base64
    const dataURL = e.target.result;
    const img = document.createElement('img');
    img.draggable = true;
    img.src = dataURL;
    img.click = saveImg;
    imgset.appendChild(img);
  };
}

// 將原始圖拖曳進canvas放開時存圖片位置
function dropImg(e) {
  const btnReadyToSave = $('btnReadyToSave');
  const { offsetX, offsetY } = e.e;
  const image = new fabric.Image(movingImage, {
    width: movingImage.naturalWidth,
    height: movingImage.naturalHeight,
    scaleX: 300 / movingImage.naturalWidth,
    scaleY: 300 / movingImage.naturalHeight,
    top: offsetY - imgDragOffset.offsetY,
    left: offsetX - imgDragOffset.offsetX });

  canvas.add(image);

  // 上載了圖就打開儲存按鈕
  btnReadyToSave.hidden = '';
  btnReadyToSave.onclick = function () {
    loadForegroundImg();
    setTimeout(function(){
      const btnSaveImg = $('btnSaveImg');
      let timeStamp = new Date().getTime();
      btnSaveImg.href = canvas.toDataURL("image/jpeg");
      btnSaveImg.download = 'etprod.' + timeStamp + '.jpg';
      btnSaveImg.click();
    }, 500);
  }
}

// 切換前景css透明度
function opacitySwitch(){
  const foreground = document.getElementById('foreground');

  if (foregroundSwitch.checked === true) foreground.style.opacity = 0.5;
  else foreground.style.opacity = 1;
}

// 存檔時將前景圖load進canvas一起存下來
function loadForegroundImg() {
  fabric.Image.fromURL('foreground.png', function (oImg) {
    oImg.scaleToHeight(500);
    oImg.scaleToWidth(500);
    oImg.set({
      hoverCursor: 'default',
      selectable: false
    })
    canvas.add(oImg);
    canvas.discardActiveObject(); // 取消選取
    canvas.sendToBack(canvas.item(0)); // 商品調到最下面
    canvas.bringToFront(oImg);
  });
}

