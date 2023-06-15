// 客製化icon
fabric.Object.prototype.customiseCornerIcons({
  settings: {
    borderColor: 'black',
    cornerSize: 18,
    cornerShape: 'circle',
    cornerBackgroundColor: 'blue',
    cornerPadding: 10
  },
}, function () {
  canvas.renderAll()
});

// 客製化功能
// FIXME: 直接使用會有問題，是通過修改套件609行將「!alreadySelected」改成「alreadySelected」才能用，原因不明
fabric.Canvas.prototype.customiseControls({
  tr: {
    action: function(e, target){
      // 是文字才有刪除功能
      const textWrap = $('textWrap');

      if (this._activeObject.hasOwnProperty('text')) {
        this._removeAction(e, target);
      } 
      textWrap.style.visibility = 'visible'; // 顯示文字框
    },
    cursor: 'pointer'
  },
}, function () {
  canvas.renderAll()
});

const canvas = new fabric.Canvas('canvas', {
  width: 500,
  height: 500,
  backgroundColor: 'transparent' });

const $ = id => document.getElementById(id);
const foregroundSwitch = $('foregroundSwitch');
const canvasWrap = $('canvasWrap');
const textColor = $('textColor');

let movingImage;
let fileName;

canvasWrap.addEventListener('dragenter', stopChain, false);
canvasWrap.addEventListener('dragover', stopChain, false);
canvasWrap.addEventListener('drop', uploadFile, false);

foregroundSwitch.addEventListener('change', opacitySwitch);

// 填入顏色自動換背景色
textColor.addEventListener('keyup', function() {
  this.style.backgroundColor = this.value;
}, false);

// 新增文字
textSubmit.addEventListener('click', function(){
  // 因文字要顯示在邊框上，因此新增文字時將邊框半透明、背景調深(canvasWrap、foreground加上active)
  const canvasWrap = $('canvasWrap')
  const foreground = $('foreground');
  const foregroundSwitch = $('foregroundSwitch');
  let value = $('foregroundText').value;

  canvasWrap.classList.add('active');
  foreground.classList.add('active');
  foregroundSwitch.checked = 'checked';
  addText(value);
}, false);

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
  const textWrap = $('textWrap');
  const btnReadyToSave = $('btnReadyToSave');
  const foregroundPlaceholder = document.querySelector('#foreground span');

  const image = new fabric.Image(movingImage, {
    width: movingImage.naturalWidth,
    height: movingImage.naturalHeight,
    scaleX: 300 / movingImage.naturalWidth,
    scaleY: 300 / movingImage.naturalWidth, // 用寬等比例縮
    top: 100,
    left: 100, });

  canvas.discardActiveObject(); // 取消選取
  canvas.add(image);

  // 上載了圖就打開儲存按鈕與文字編輯區、關閉拖曳上傳功能(一次只給load一張圖)：移除「拖曳上傳」文字、移除eventListener
  canvasWrap.removeEventListener('drop', uploadFile, false); // 移除上傳的eventListener
  foregroundPlaceholder.remove();  //「拖曳上傳」移除文字
  textWrap.style.visibility = 'visible'; // 顯示文字框
  btnReadyToSave.hidden = ''; // 顯示儲存按鈕
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
    oImg.scaleToHeight(500);
    oImg.scaleToWidth(500);
    oImg.set({
      hoverCursor: 'default',
      selectable: false
    })
    canvas.add(oImg);
    canvas.discardActiveObject(); // 取消所有選取以放在最上層
    canvas.sendToBack(canvas.item(0)); // 商品調到最下面
    canvas.bringToFront(canvas.item(1)); // 文字調到最上面
  });
}

// 將儲存資訊寫入另一個按鈕並點下該按鈕
function saveImg(){
  const btnSaveImg = $('btnSaveImg');
  const alert = document.querySelector('.options__wrap .alert__wrap');

  btnSaveImg.href = canvas.toDataURL("image/jpeg");
  btnSaveImg.download = fileName + '_masked.jpg';
  btnSaveImg.click();
  alert.classList.add('active'); //儲存之後跳alert


  // 儲存完2秒後清除
  setTimeout(function(){
    location.reload();
  }, 2000);
  
}

// 新增文字
function addText(text, color) {
  const textWrap = $('textWrap');
  const textColor = $('textColor').value;
  const editText = new fabric.IText(text, {
    top: 250,
    left: 250,
    fill: textColor ? textColor : '#000', // 文字顏色抓textColor欄位
    fontSize: 40,
    fontFamily: 'Microsoft JhengHei, PMingLiU, sans-serif',
  })
  // 客製化右上icon(文字才有圖案)
  editText.customiseCornerIcons({
    tr: {
      icon: './files/cancel.svg'
    },
  }, function () {
    canvas.renderAll()
  });
  canvas.discardActiveObject(); // 取消所有選取以放在最上層
  canvas.add(editText);
  textWrap.style.visibility = 'hidden'; // 關閉文字框(一次只能一筆文字)
}
