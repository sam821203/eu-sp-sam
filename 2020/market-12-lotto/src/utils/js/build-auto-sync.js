import { isDataSource } from 'utils/js/check-data.js'
import { buildProductNumberLink } from 'utils/js/build-link-by-number.js'
import {buildProductNumberImg} from 'utils/js/build-image-by-number.js'
import { detectStringOrArray } from 'utils/js/detect.js'

// 動態填入資料(連結有build-link.js支援因此這邊只有填入a tag後引用該function填入連結)
// 可以給custom陣列： customArray = [imgSrcKey, altKey, nameKey, priceKey, textKey, sliderLiClass, sliderImgLazyLoadClass, [sliderLazyLoadIndicatorClass1, sliderLazyLoadIndicatorClass2]]
// 決定要抓data中何種屬性當作目標連結，注意因為是陣列，順序要對，如果屬性不對會在console中報錯
// 最後會return包好的li element，可另外填入需要的ul element中

// 指令集：outerTag isAutoSync isSlider isLazyLoad isSliderLazyLoad sliderClass isSliderLazyLoad
// sliderImgLazyLoadClass sliderLazyLoadIndicatorClass imgLazyLoadClass lazyLoadIndicatorSrc
// 
export function buildAutoSync(dataSource, customObject) {

  // 確認有無data
  isDataSource(dataSource);

  // 設定分兩類，第一類在決定要抓data的何種key裡的值，此類屬性結尾會帶'key'
  var productNumberKey = customObject.productNumberKey || 'productNumber';
  var nameKey = customObject.namekey || 'name';
  var priceKey = customObject.pricekey || 'price';
  var textKey = customObject.textkey || 'text';

  // 設定分兩類，第二類在決定生成的內容
  // 布林值直接寫|| true會都被轉true，所以得規範是undefined時的預設值
  var outerTag = customObject.outerTag || 'li';
  var isAutoSync = (customObject.isAutoSync === undefined) ? true : customObject.isAutoSync;
  var isSlider = (customObject.isSlider === undefined) ? true : customObject.isSlider;
  var isLazyLoad = (customObject.isLazyLoad === undefined) ? false : customObject.isLazyLoad;
  
  // ============================== slider 設定 start ===================================
  if(isSlider) {
    var sliderClass = customObject.sliderClass;
    var isSliderLazyLoad = (customObject.isSliderLazyLoad === undefined) ? true : customObject.isSliderLazyLoad // 預設輪播開啟lazyload

    var sliderClassArray = detectStringOrArray(sliderClass, 'swiper-slide', 'sliderClass格式不正確', true);
    
    if(isSliderLazyLoad) {
      // 客製化的lazyloadClass與indicatorClass(小黑圈)
      var sliderImgLazyLoadClass = customObject.sliderImgLazyLoadClass;
      var sliderLazyLoadIndicatorClass = customObject.sliderLazyLoadIndicatorClass;

      // 檢測上面兩個變數
      var sliderImgLazyLoadClassArray = detectStringOrArray(sliderImgLazyLoadClass, null, 'sliderImgLazyLoadClass格式不正確', true);
      var sliderLazyLoadIndicatorClassArray = detectStringOrArray(sliderLazyLoadIndicatorClass, null, 'sliderLazyLoadIndicatorClass格式不正確', true);

      // 預設要加上的class
      var defaultImgLazyLoadClassArray = ['swiper-lazy'];
      var defaultIndicatorLazyLoadClassArray = ['swiper-lazy-preloader', 'swiper-lazy-preloader-black'];

      // 把預設的與客製的加在一起
      defaultImgLazyLoadClassArray.forEach(function(el) {
        sliderImgLazyLoadClassArray.push(el);
      });
      defaultIndicatorLazyLoadClassArray.forEach(function(el) {
        sliderLazyLoadIndicatorClassArray.push(el);
      });

    // lazyload和swiper slide自己的lazyload互斥，所以有sliderLazyload就不開正常的lazyload
    } else if(isLazyLoad) {
      var imgLazyLoadClass = customObject.imgLazyLoadClass;
      var lazyLoadIndicatorSrc = customObject.lazyLoadIndicatorSrc || '1x1_low.png';

      var imgLazyLoadClassArray = detectStringOrArray(imgLazyLoadClass, null, 'imgLazyLoadClass格式不正確', true);
      var defaultImgLazyLoadClass =  'lazyload';

      imgLazyLoadClassArray.push(defaultImgLazyLoadClass);
    }
  }
  // ============================== slider 設定 end ===================================

  // ============================== 建立圖片與lazyload start ===========================
  // 因為外框也要建立slider(如果有)的class，因此在此區一併判斷
  var outerElement = document.createElement(outerTag);
  var imgElement = document.createElement('img');

  if(isSliderLazyLoad || isLazyLoad) {
    var lazyLoadIndicator = document.createElement('div'); // 如果有lazyload就要做indicator

    imgElement.dataset.src = buildProductNumberImg(dataSource)[0];
    imgElement.alt = '';// lazyload時不填alt防叉燒包
  } else {
    imgElement.src = buildProductNumberImg(dataSource)[0];
    imgElement.alt = buildProductNumberImg(dataSource)[1];
  }

  if(isSliderLazyLoad) {
    sliderImgLazyLoadClassArray.forEach(function(el) {
      imgElement.classList.add(el);
    });
    
    sliderLazyLoadIndicatorClassArray.forEach(function(el) {
      lazyLoadIndicator.classList.add(el);
    });
  } else if(isLazyLoad) {
    imgLazyLoadClassArray.forEach(function(el) {
      imgElement.classList.add(el);
    });
    imgElement.src = lazyLoadIndicatorSrc;
  }
  // console.log(buildProductNumberImg(dataSource));

  sliderClassArray.forEach(function(el) {
    outerElement.classList.add(el);
  });
  // ============================== 建立圖片與lazyload end ===========================

  // ============================== 建立連結 start ===================================
  var anchorElement = document.createElement('a');

  anchorElement.href = buildProductNumberLink(dataSource)[0];
  anchorElement.title = buildProductNumberLink(dataSource)[1];
  // console.log(buildProductNumberLink(dataSource));
  // ============================== 建立連結 end =====================================

  // ======================== 建立auto-sync api tag start ============================
  var customNameTag = document.createElement('custom');
  var customPriceTag = document.createElement('custom');
  customNameTag.setAttribute('tag', 'GOOD_NAME');
  customNameTag.setAttribute('goodid', dataSource[productNumberKey]);
  customPriceTag.setAttribute('tag', 'GOOD_SALEPRC');
  customPriceTag.setAttribute('goodid', dataSource[productNumberKey]);
  // ======================== 建立auto-sync api tag end ============================


  // 如果沒有price有text的話，則建立isText flag做之後判定用
  if(dataSource.hasOwnProperty(textKey) && !dataSource.hasOwnProperty(priceKey)) {
    var isText = true;
  }

  // var nameElement = document.createElement('span');
  // var priceElement = document.createElement('span');

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
  

  // ======================== 組裝 tag start ============================
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
  if(isSliderLazyLoad) productImgWrap.appendChild(lazyLoadIndicator);
  
  // name內加入auto sync的custom tag
  productNameWrap.appendChild(customNameTag);
  
  productPriceWrap.innerHTML = isText ? '<span></span>' : '<span>$</span><span></span>'; // 是text就不填$符號

  if(!isText) {
    // price的span內加入auto sync的custom tag
    var priceSpan = productPriceWrap.querySelector('span:last-child');
    priceSpan.appendChild(customPriceTag);
  }

  // 再用產出來的a把全部的wrap包起來
  anchorElement.appendChild(productImgWrap);
  anchorElement.appendChild(productNameWrap);
  anchorElement.appendChild(productPriceWrap);

  // 把a塞在最外層的wrap，再把wrap塞在li內
  productWrap.appendChild(anchorElement);
  outerElement.appendChild(productWrap);
  // ======================== 組裝 tag end ============================

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
