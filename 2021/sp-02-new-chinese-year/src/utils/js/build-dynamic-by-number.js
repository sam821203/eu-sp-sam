import { isDataSource } from 'utils/js/check-data.js'
import { detectStringOrArray } from 'utils/js/detect.js'
import { buildProductNumberLink } from 'utils/js/build-link-by-number.js'
import { buildProductNumberImg } from 'utils/js/build-image-by-number.js'
import { buildIfNeedAutoSync } from 'utils/js/build-auto-sync.js'

// ============================== 說明文件 start ===================================
// 此為新的依銷編建立動態資料，可建立出「1. a連結」，內含完整「2. 商品圖」、「3. 商品名稱」、「4. 價格或促銷字」結構
// 「商品名稱」、「價格」兩樣可設定根據組版api自動更新、變價(因此在離線檔不預填的話將沒有名稱價格，但過組版上傳後正常)
// 搭配check-data.js檢查格式、build-link-by-number.js產生連結、build-image-by-number.js產生圖片、build-auto-sync.js執行品名價格判斷、build-name-price-by-number.js執行線上更新的品名價格建立、build-name-price.js執行非線上更新的品名價格建立，連這隻JS總共有七隻JS建立起這個功能。(舊版只有三隻JS)

// data內只要給陣列內含銷編即可，陣列item可使用number、字串、物件皆吃
// (e.g. [1234567, "2345678", {productNumber: 1234567}]皆可)

// data內若有客製化想改變連結位置、商品名稱、價格或是促銷字只要給物件內含想改變的即可，但注意會失去自動更新的能力
// e.g. [{productNumber: 1234567, name: "這品超棒", text: "驚喜價"}, 2345678] 第一項就會改填給予的內容
// 注意客製化連結分成「webLink、mobileLink、appLink」三種，若沒有填app會預設是小網、沒有填小網就會預設是大網

// 可以給custom物件設定客製化選項，注意custom物件是在自己的js中另外設定一包物件傳進去，不要混進data陣列中

// ======== 以下為customObject客製物件內的指令介紹 ========

// 指令分成兩大類，第一大類是各種與自己js中有關的流程設定，與dataSource較無關，有12種：
// outerTag、isLazyLoad、imgLazyLoadClass、lazyLoadIndicatorSrc、
// isSlider、sliderClass、isSliderLazyLoad、sliderImgLazyLoadClass、sliderLazyLoadIndicatorClass、
// isAutoSync、isNameAutoSync、isPriceAutoSync

// 第一大類指令說明：
// outerTag：決定a tag外面那層container要包什麼，預設'li'

// isLazyLoad：決定是否lazyload，將img tag的src改成data-src，預設false(和isSliderLazyLoad互斥不要一起開)，並且打開了imgLazyLoadClass、lazyLoadIndicatorClass功能設定才有用
// imgLazyLoadClass：設定img tag給lazyLoad的className，可用字串或陣列，預設'lazyload'
// lazyLoadIndicatorSrc：設定lazyload時預設的src檔案名稱(專圈小圖示)，預設'1x1_low.png'

// isSlider：決定是否是slider結構，打開時sliderClass、isSliderLazyLoad功能設定才有用
// sliderClass：決定outerTag上加的className，可用字串或陣列，會把className全部加上去，預設'swiper-slide'
// isSliderLazyLoad：決定是否要開啟輪播的lazyLoad功能，打開後會把src的資料轉到data-src，並且sliderImgLazyLoadClass、sliderLazyLoadIndicatorClass功能設定才有用
// sliderImgLazyLoadClass：設定img tag給lazyLoad的className，可用字串或陣列，預設'swiper-lazy'
// sliderLazyLoadIndicatorClass：loadIndicator(圖片出來前轉圈圈那個)的className，可用字串或陣列，預設'swiper-lazy-preloader'、'swiper-lazy-preloader-black'兩個className

// isAutoSync：決定是否要將品名(name)、價格(price)是否依據銷編跟線上同步，預設是'auto'，會根據dataSource的內容自動判斷是否要自動更新(如果陣列中該item有手動更新的條件如name、price、text)，則該item不更新。如果設定成'all'則會忽略item中任何設定，直接強制根據銷編線上更新。如果是'none'、'false'或false(布林值)，則全部手動更新。關閉後isNameAutoSync、isPriceAutoSync才會有效。
// isNameAutoSync：當isAutoSync關閉時打開此項會強制線上更新name
// isPriceAutoSyn：當isAutoSync關閉時打開此項會強制線上更新price

// 第二大類為控制抓取dataSource時的鍵值(key)為何，可根據不同api或是不同來源轉化要抓取的值，有9種，都會用Key結尾
// 第二大類指令說明：
// productNumberKey：決定銷售編號的鍵值為何，預設'productNumberKey'(e.g. 設定productNumberKey: aaa的話就會到data[aaa]內抓銷編，以下Key結尾的都是如此)

// webLinkKey：決定大網連結的鍵值為何，沒有預設值
// mobileLinkKey：決定小網連結的鍵值為何，預設為大網連結的值
// appLinkKey：決定app連結的鍵值為何，預設為小網連結的值
// 也就是如果只有設大網的值，小網就會是大網的值，app就會是小網也就是大網的值

// imgSrcKey：決定圖片來源(img src)的鍵值為何，預設為'imgSrc'
// altKey：決定圖片alt的鍵值為何，預設為'name'

// nameKey：決定非自動時品名的鍵值為何，預設為'name'
// priceKey：決定非自動時價格的鍵值為何，預設為'price'
// textKey：決定非自動時促銷字的鍵值為何，預設為'text'
// text和price的差別是price前面會自動帶上$符號，同時存在時text優先(會沒有$符號並且值是text的)

// ============================== 說明文件 end ===================================

export function buildDynamicAutoSync(dataSource, customObject) {

  // 確認有無data
  isDataSource(dataSource, customObject);

  // 設定分兩類，第一類與dataSource相關，決定要抓data的何種key裡的值，此類屬性結尾會帶「key」
  // 設定分兩類，第二類與dataSource無關，決定生成的內容，開關會以「is」開頭，其餘則是填入的tag、class設定
  // 布林值直接寫|| true會都被轉true，所以得規範是undefined時的預設值
  var customObject = customObject || {};
  var outerTag = customObject.outerTag || 'li' || 'div';
  var isLazyLoad = (customObject.isLazyLoad === undefined) ? false : customObject.isLazyLoad;
  var isSlider = (customObject.isSlider === undefined) ? true : customObject.isSlider;


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

    imgElement.dataset.src = buildProductNumberImg(dataSource, customObject)[0];
    imgElement.alt = '';// lazyload時不填alt防叉燒包
  } else {
    imgElement.src = buildProductNumberImg(dataSource, customObject)[0];
    imgElement.alt = buildProductNumberImg(dataSource, customObject)[1];
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
  // console.log(buildProductNumberImg(dataSource, customObject));

  sliderClassArray.forEach(function(el) {
    outerElement.classList.add(el);
  });
  // ============================== 建立圖片與lazyload end ===========================

  // ============================== 建立連結 start ===================================
  var anchorElement = document.createElement('a');

  anchorElement.href = buildProductNumberLink(dataSource, customObject)[0];
  anchorElement.title = buildProductNumberLink(dataSource, customObject)[1];
  // console.log(buildProductNumberLink(dataSource, customObject));
  // ============================== 建立連結 end =====================================

  // ======================== 建立auto-sync api tag start ============================
  var nameElement;
  var priceElement;

  // 注意buildIfNeedAutoSync是回傳tag出來，所以直接用變數裝即可，外層要用container.appendChild裝它
  // isText是給後續判斷是否要做出$字號用
  nameElement = buildIfNeedAutoSync(dataSource, customObject)[0];
  priceElement = buildIfNeedAutoSync(dataSource, customObject)[1];

  var isText = buildIfNeedAutoSync(dataSource, customObject)[2];
  // ======================== 建立auto-sync api tag end ============================

  // ======================== 組裝 tag start ============================
  // 設定CSS用結構
  var productWrap = document.createElement( 'div' );
  var productBlock = document.createElement( 'div' );
  var productImgWrap = document.createElement( 'div' );
  var productTextWrap = document.createElement( 'div' );
  var productNameWrap = document.createElement( 'div' );
  var productPriceWrap = document.createElement( 'div' );

  productWrap.classList.add( 'product' );
  productWrap.classList.add( 'product--dynamic' );
  productBlock.classList.add( 'product__block' );
  productImgWrap.classList.add( 'product__img' );
  productTextWrap.classList.add( 'product__text' );
  productNameWrap.classList.add( 'product__name' );
  productPriceWrap.classList.add( 'product__price' );

  // 把產出來的outer開頭element丟進外面的div wrap
  productImgWrap.appendChild(imgElement);
  if(isSliderLazyLoad) productImgWrap.appendChild(lazyLoadIndicator);

  // 填入nameElement
  productNameWrap.appendChild(nameElement);

  // 填入priceElement
  if(isText) {
    productPriceWrap.appendChild(priceElement);
  } else {
    var priceSign = document.createElement('span');

    priceSign.innerHTML = '$';
    productPriceWrap.appendChild(priceSign);
    productPriceWrap.appendChild(priceElement);
  }

  // 把文字層包起來方便flex做橫式排版
  productTextWrap.appendChild(productNameWrap);
  productTextWrap.appendChild( productPriceWrap );

  // 用產block層把圖片和文字的wrap包起來
  productBlock.appendChild(productImgWrap);
  productBlock.appendChild( productTextWrap );

  // 再用產出來的a把block層包起來
  anchorElement.appendChild(productBlock);

  // 把a塞在最外層的wrap，再把wrap塞在li內
  productWrap.appendChild(anchorElement);
  outerElement.appendChild(productWrap);
  // ======================== 組裝 tag end ============================


  // ======================== final test start ============================
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
  // ======================== final test end ============================
}
