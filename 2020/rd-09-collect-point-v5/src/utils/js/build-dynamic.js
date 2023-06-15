import {buildProductNumberLink} from 'utils/js/build-link.js'
import {buildProductNumberImg} from 'utils/js/build-image.js'

// 動態填入資料(連結有build-link.js支援因此這邊只有填入a tag後引用該function填入連結)
// 可以給custom陣列： customArray = [imgSrcKey, altKey, nameKey, priceKey, textKey, sliderLiClass, sliderImgLazyLoadClass, [sliderLazyLoadIndicatorClass1, sliderLazyLoadIndicatorClass2]]
// 決定要抓data中何種屬性當作目標連結，注意因為是陣列，順序要對，如果屬性不對會在console中報錯
// 最後會return包好的li element，可另外填入需要的ul element中
export function buildDynamicSliderLiElement(dataSource, isLazyLoad, customDynamicArray, customLinkArray) {
  // 填連結確認來源是銷編且有填
  var dataSource = dataSource || {};
  var targetAnchor = targetAnchor || {};
  // console.log(dataSource);
  var isLazyLoad = isLazyLoad || false;

  if (Array.isArray(customDynamicArray)) {
    var nameKey = customDynamicArray[2] ? customDynamicArray[2] : 'name';
    var priceKey = customDynamicArray[3] ? customDynamicArray[3] : 'price';
    var textKey = customDynamicArray[4] ? customDynamicArray[4] : 'text';
  
    // 預設是swiper 
    var sliderLiClass = customDynamicArray[5] ? customDynamicArray[5] : 'swiper-slide';
    if(isLazyLoad) {
      var sliderImgLazyLoadClass = customDynamicArray[6] ? customDynamicArray[6] : 'swiper-lazy';
      var sliderLazyLoadIndicatorClass1 = customDynamicArray[7] ? customDynamicArray[7][0] : 'swiper-lazy-preloader';
      var sliderLazyLoadIndicatorClass2 = customDynamicArray[7] ? customDynamicArray[7][1] : 'swiper-lazy-preloader-black';
    }
    // console.log(imgSrcKey, altKey, nameKey, priceKey, textKey, sliderLiClass, sliderImgLazyLoadClass, [sliderLazyLoadIndicatorClass1, sliderLazyLoadIndicatorClass2]);

  } else {
    var nameKey = 'name';
    var priceKey = 'price';
    var textKey = 'text';
    var sliderLiClass = 'swiper-slide';
    if(isLazyLoad) {
      var sliderImgLazyLoadClass = 'swiper-lazy';
      var sliderLazyLoadIndicatorClass1 = 'swiper-lazy-preloader';
      var sliderLazyLoadIndicatorClass2 = 'swiper-lazy-preloader-black';
    }
  }

  // 如果沒有外來build-link的customArray，則自己建立
  // 把build-link中預設的title屬性'linkTitle'改成這邊的商品名'name'
  var customLinkArray = customLinkArray || [,,,,'name'];

  // 如果沒有price有text的話，則建立isText flag做之後判定用
  if(dataSource.hasOwnProperty(textKey) && !dataSource.hasOwnProperty(priceKey)) {
    var isText = true;
  }

  var sliderLiElement = document.createElement('li');
  var sliderAnchorElement = document.createElement('a');
  var sliderImgElement = document.createElement('img');
  var sliderNameElement = document.createElement('span');
  var sliderPriceElement = document.createElement('span');

  buildProductNumberLink(dataSource, sliderAnchorElement, customLinkArray);
  buildProductNumberImg(dataSource, sliderImgElement, isLazyLoad);
  
  if(isLazyLoad) sliderImgElement.classList.add(sliderImgLazyLoadClass);

  sliderNameElement.innerHTML = dataSource[nameKey];
  sliderPriceElement.innerHTML = isText ? dataSource[textKey] : dataSource[priceKey]; // 如果是text就填text
  sliderLiElement.classList.add(sliderLiClass);

  // 設定CSS用結構
  var sliderWrap = document.createElement('div');
  var productImgWrap = document.createElement('div');
  var productNameWrap = document.createElement('div');
  var productPriceWrap = document.createElement('div');

  sliderWrap.classList.add('product');
  sliderWrap.classList.add('product--dynamic');
  productImgWrap.classList.add('product__img');
  productNameWrap.classList.add('product__name');
  productPriceWrap.classList.add('product__price');

  // 把產出來的slider開頭element丟進外面的div wrap
  productImgWrap.appendChild(sliderImgElement);
  productNameWrap.appendChild(sliderNameElement);
  productPriceWrap.innerHTML = isText ? '<span></span>' : '<span>$</span>'; // 是text就不填$符號
  productPriceWrap.appendChild(sliderPriceElement);

  if(isLazyLoad) {
    var lazyLoadIndicator = document.createElement('div');

    lazyLoadIndicator.classList.add(sliderLazyLoadIndicatorClass1);
    lazyLoadIndicator.classList.add(sliderLazyLoadIndicatorClass2);
    productImgWrap.appendChild(lazyLoadIndicator);
  }

  // 再用產出來的a把全部的wrap包起來
  sliderAnchorElement.appendChild(productImgWrap);
  sliderAnchorElement.appendChild(productNameWrap);
  sliderAnchorElement.appendChild(productPriceWrap);

  // 把a塞在最外層的wrap，再把wrap塞在li內
  sliderWrap.appendChild(sliderAnchorElement);
  sliderLiElement.appendChild(sliderWrap);

  // 最後補上檢察機制，如果img圖片load不出來，則整個li display none，輪播就不會顯示這個li
  // 此檢查機制必須是沒有lazyload才可以開啟
  if(isLazyLoad) {

    return sliderLiElement;
  } else {
    function imgErrorHandler() {
      sliderLiElement.style.display = 'none';
    }
  
    sliderImgElement.addEventListener('error', imgErrorHandler);
  
    return sliderLiElement;
  }
}
