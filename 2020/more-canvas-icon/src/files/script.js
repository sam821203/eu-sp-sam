// width、height由不同index.html控制
const canvas = new fabric.Canvas('canvas', {
  width: bannerWidth,
  height: bannerHeight,
  backgroundColor: 'transparent' });

const $ = id => document.getElementById(id);
const foregroundSwitch = $('foregroundSwitch');
const canvasWrap = $('canvasWrap');

let movingImage;
let fileName;

canvasWrap.addEventListener('dragenter', stopChain, false);
canvasWrap.addEventListener('dragover', stopChain, false);
canvasWrap.addEventListener('drop', uploadFile, false);


// 取消瀏覽器預設功能
function stopChain(e){
    e.preventDefault();
    e.stopPropagation();
    return false; 
}

// 拖曳上傳
function uploadFile(e) {
  e.preventDefault();
  e.stopPropagation();

  const files = e.dataTransfer.files;
  const fileReader = new FileReader();
  fileReader.readAsDataURL(files[0]);
  fileName = files[0].name.split(/\.(png|svg|jpe?g|gif)$/)[0];
  fileReader.onload = e => {
    // 圖片 base64
    const dataURL = e.target.result;
    const img = document.createElement('img');
    img.src = dataURL;
    movingImage = img;
    setTimeout(function(){
      dropImg(e);
    }, 0);

  };
}

// 將原始圖load進canvas
function dropImg(e) {
  const canvasWrap = $('canvasWrap');
  const btnReadyToSave = $('btnReadyToSave');
  const foregroundPlaceholder = document.querySelector('#foreground span');

  const image = new fabric.Image(movingImage, {
    width: movingImage.naturalWidth,
    height: movingImage.naturalHeight,
    top: 0,
    left: 0, });

  canvasWrap.style.pointerEvents = 'none'; // 避免拖曳到banner
  canvas.discardActiveObject(); // 取消選取
  canvas.add(image);

  // 上載了圖就打開儲存按鈕與文字編輯區、關閉拖曳上傳功能(一次只給load一張圖)：移除「拖曳上傳」文字、移除eventListener
  canvasWrap.removeEventListener('drop', uploadFile, false); // 移除上傳的eventListener
  foregroundPlaceholder.remove();  //「拖曳上傳」移除文字
  btnReadyToSave.classList.add('active'); // 顯示儲存按鈕
  btnReadyToSave.onclick = function () {
    loadForegroundImg();
    setTimeout(saveImg, 500);
  }
}

// ======== 底下function區 ========

// 切換前景css透明度
function opacitySwitch(){
  const canvasWrap = $('canvasWrap')
  const foreground = $('foreground');

  if (foregroundSwitch.checked === true) {
    canvasWrap.classList.add('active');
    foreground.classList.add('active');
  } else {
    canvasWrap.classList.remove('active');
    foreground.classList.remove('active');
  }
}

// 存檔時將前景圖load進canvas一起存下來
function loadForegroundImg() {
  fabric.Image.fromURL('foreground.png', function (oImg) {
    // 激搶CI寬高與定位
    oImg.scaleToWidth(95);
    oImg.scaleToHeight(90);
    oImg.set({
      top: 0,
      left: 0,
      hoverCursor: 'default',
      selectable: false
    })
    canvas.add(oImg);
    canvas.discardActiveObject(); // 取消所有選取以放在最上層
    canvas.sendToBack(canvas.item(0)); // 商品調到最下面
    // canvas.bringToFront(canvas.item(1)); // 文字調到最上面
  });
}

// 將儲存資訊寫入另一個按鈕並點下該按鈕
function saveImg(){
  const btnSaveImg = $('btnSaveImg');
  const alert = document.querySelector('.options__wrap .alert__wrap');
  
  btnSaveImg.href = canvas.toDataURL({
    format: 'jpeg',
    quality: bannerQuality,
  });
  btnSaveImg.download = fileName + '_masked.jpg';
  btnSaveImg.click();
  alert.classList.add('active'); //儲存之後跳alert


  // 儲存完2秒後清除
  setTimeout(function(){
    location.reload();
  }, 2000);
  
}
