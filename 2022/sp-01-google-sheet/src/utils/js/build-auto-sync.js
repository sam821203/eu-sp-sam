import {buildProductNumberLink} from 'utils/js/build-link.js'
import {buildProductNumberImg} from 'utils/js/build-image.js'

// 動態填入資料(連結有build-link.js支援因此這邊只有填入a tag後引用該function填入連結)
// 可以給custom陣列： customArray = [imgSrcKey, altKey, nameKey, priceKey, textKey, sliderLiClass, sliderImgLazyLoadClass, [sliderLazyLoadIndicatorClass1, sliderLazyLoadIndicatorClass2]]
// 決定要抓data中何種屬性當作目標連結，注意因為是陣列，順序要對，如果屬性不對會在console中報錯
// 最後會return包好的li element，可另外填入需要的ul element中
export function buildAutoSync(dataSource, customObject) {
  // 填連結確認來源是銷編且有填
  var dataSource = dataSource || {};
  var targetAnchor = targetAnchor || {};
  // console.log(dataSource);
  var isLazyLoad = isLazyLoad || false;
  var isAutoSync = isAutoSync || true;


  if(typeof customObject === 'object' && customObject !== null) {
    // 設定分兩類，第一類在決定生成的內容
    var outerTag = customObject.outerTag || 'li';
    var isSlider = customObject.isSlider || true;

    // 第二類在決定要抓data的何種key裡的值，此類屬性結尾會帶'key'
    var productNumberKey = customObject.productNumberKey || 'productNumber';
    var nameKey = customObject.namekey || 'name';
    var priceKey = customObject.pricekey || 'price';
    var textKey = customObject.textkey || 'text';
  
    // console.log(imgSrcKey, altKey, nameKey, priceKey, textKey, sliderLiClass, sliderImgLazyLoadClass, [sliderLazyLoadIndicatorClass1, sliderLazyLoadIndicatorClass2]);

  } else {
    var outerTag = 'li';
    var isSlider = true; // 預設要給輪播，會帶上輪播的className

    var productNumberKey = 'productNumber';
    var nameKey = 'name';
    var priceKey = 'price';
    var textKey = 'text';
  }

  if(isSlider) {
    var sliderClass = 'swiper-slide';
    var isSliderLazyLoad = true; // 預設輪播開啟lazyload

    if(isSliderLazyLoad) {
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

  var outerElement = document.createElement(outerTag);
  var anchorElement = document.createElement('a');
  var imgElement = document.createElement('img');
  // var nameElement = document.createElement('span');
  // var priceElement = document.createElement('span');

  // 建立auto-sync api tag
  var customNameTag = document.createElement('custom');
  var customPriceTag = document.createElement('custom');
  customNameTag.setAttribute('tag', 'GOOD_NAME');
  customNameTag.setAttribute('goodid', dataSource[productNumberKey]);
  customPriceTag.setAttribute('tag', 'GOOD_SALEPRC');
  customPriceTag.setAttribute('goodid', dataSource[productNumberKey]);


  buildProductNumberLink(dataSource, anchorElement, customLinkArray);
  buildProductNumberImg(dataSource, imgElement, isLazyLoad);

  outerElement.classList.add(sliderClass);
  if(isLazyLoad) imgElement.classList.add(sliderImgLazyLoadClass);

  // sliderNameElement.innerHTML = dataSource[nameKey];

  // 如果是text就填text，如果是金額再判斷可否自動補三位逗號(IE11會，IE10不會)
  // sliderPriceElement.innerHTML = (function(){
  //   // 如果是text就填text
  //   if(isText) return dataSource[textKey]; 

  //   // 如果會補三位逗號(IE>=11)
  //   if(Number.prototype.toLocaleString) {
  //     // 當被填入"1,000"或是促銷文案時轉換數字會回報NaN，直接回傳
  //     if (isNaN(Number(dataSource[priceKey]))) return dataSource[priceKey];

  //     // 注意如果不填數值price=""時Number("")會轉成0因此畫面會呈現$0，而數值不填應該是把price這行移除，
  //     // 因此可以達到警示效果(此行未刪)，和價錢不該為零(price=0)一樣能警告價格不正確
  //     else return Number(dataSource[priceKey]).toLocaleString();

  //   } else return dataSource[priceKey]; // IE10直接return
  // })();
  


  // 設定CSS用結構
  var productWrap = document.createElement('div');
  var productImgWrap = document.createElement('div');
  var productNameWrap = document.createElement('div');
  var productPriceWrap = document.createElement('div');

  productWrap.classList.add('product');
  productWrap.classList.add('product--dynamic');
  productImgWrap.classList.add('product__img');
  productNameWrap.classList.add('product__name');
  productPriceWrap.classList.add('product__price');



  // 把產出來的outer開頭element丟進外面的div wrap
  productImgWrap.appendChild(imgElement);
  
  // name內加入auto sync的custom tag
  productNameWrap.appendChild(customNameTag);
  
  productPriceWrap.innerHTML = isText ? '<span></span>' : '<span>$</span><span></span>'; // 是text就不填$符號

  if(!isText) {
    // price的span內加入auto sync的custom tag
    var priceSpan = productPriceWrap.querySelector('span:last-child');
    priceSpan.appendChild(customPriceTag);
  }

  if(isLazyLoad) {
    var lazyLoadIndicator = document.createElement('div');

    lazyLoadIndicator.classList.add(sliderLazyLoadIndicatorClass1);
    lazyLoadIndicator.classList.add(sliderLazyLoadIndicatorClass2);
    productImgWrap.appendChild(lazyLoadIndicator);
  }

  // 再用產出來的a把全部的wrap包起來
  anchorElement.appendChild(productImgWrap);
  anchorElement.appendChild(productNameWrap);
  anchorElement.appendChild(productPriceWrap);

  // 把a塞在最外層的wrap，再把wrap塞在li內
  productWrap.appendChild(anchorElement);
  outerElement.appendChild(productWrap);

  // 最後補上檢察機制，如果img圖片load不出來，則整個li display none，輪播就不會顯示這個li
  // 此檢查機制必須是沒有lazyload才可以開啟
  if(isLazyLoad) {

    return outerElement;
  } else {
    function imgErrorHandler() {
      outerElement.style.display = 'none';
    }
  
    imgElement.addEventListener('error', imgErrorHandler);
  
    return outerElement;
  }
}
