// function moveActiveToItem ( arrayItems, itemIndex, activeClass ) {
//   var activeClass = activeClass || 'active';

//   arrayItems.forEach( function ( el ) {
//     el.classList.remove( activeClass );
//   } );

//   arrayItems[itemIndex].classList.add( activeClass );
// }

// function moveRadioChecked ( arrayRadio, itemIndex ) {
//   // console.log(itemIndex);

//   arrayRadio.forEach( function ( el ) {
//     el.setAttribute( 'checked', '' );
//   } );

//   arrayRadio[itemIndex].setAttribute( 'checked', 'checked' );
// }
var spaceValue;
var result = document.getElementById('result');
var resetButton = document.getElementById('resetButton');

var space = document.getElementsByName('space')[0];
var space01 = document.getElementsByName('space_01')[0];
// console.log(space);
// 平方公尺的value
var spaceSecond = document.getElementsByName('space')[1];
// console.log(spaceSecond);
var inputHeight = document.getElementsByName('inputHeight')[0];
var inputWidth = document.getElementsByName('inputWidth')[0];

var radioSections = Array.apply(null, document.querySelectorAll('.js-radio'));
var radioInputs = Array.apply(null, document.querySelectorAll('input[name="space"]'));

var inputSpace = Array.apply(null, document.querySelectorAll('.input--space'));



function setRadioChecked() {
  // console.log(radioSections[0]);
  // 抓兩個選項不同的值，坪數、公尺分開抓
  radioSections.forEach(function (el, index) {
    // console.log(el);

    el.addEventListener('click', function () {
      // console.log(el);
      // console.log(index);
      radioInputs[index].checked = true;
        // spaceValue = null;
        // calcSpaceValue(el);
    });

  });
}

setRadioChecked();

// 抓input裡的value
function inputCheckedValue() {

  radioSections.forEach(function (el) {

    el.addEventListener('change' ,function(){
      // console.log(el);
      // radioInputs[index].checked = true;
      // 空間坪數的value

      if ( space.checked ) {
        // alert('oh');
        inputHeight.value = '';
        inputWidth.value = '';

        spaceValue = space01.value;
        // console.log(spaceValue);
        // inputHeight.value = '';
      }

      if ( spaceSecond.checked ) { 

        space01.value = '';
        // console.log(inputHeight.value);
        // console.log(inputWidth.value);
        // console.log(inputHeight.value * inputWidth.value);
        var spaceHeight = inputHeight.value * 3.3 / 6;
        var spaceWidth = inputWidth.value * 3.3 / 6;
        var spaceFinalNumber = Math.round(spaceHeight * spaceWidth *100) / 100;
        // console.log(spaceHeight);
        // console.log(spaceFinalNumber);
        spaceValue = spaceFinalNumber;
      }

      // console.log(spaceValue);
    })
  });
  
}

inputCheckedValue();



// 不用迴圈，只需要把初始值productNumber reset就好。
var productNumber;
function calcCheckboxProduct() {
  var arrayCheckbox = Array.apply( null, document.querySelectorAll('input[name="env"]'));

  arrayCheckbox.forEach(function (el, index) {
    //TODO: 跑迴圈抓有幾個checkbox被勾選，並回傳乘積
      // console.log(el.length);
      if ( el.checked ){
        // console.log(typeof el.checked);
        
        // console.log(parseFloat(el.value));
        // checkedElementArray.push(parseFloat(el.value));
        // console.log(checkedElementArray);
        productNumber *= el.value;
        // console.log(productNumber);
      }
    // console.log(el);
  });

  // 先抓出值再click 輸出結果

}

function checkInputValue(){
  

}


//TODO: 兩個步驟分開計算，最後input出兩個值後再相乘

result.addEventListener('click', function(){
  outputResult();
});

resetButton.addEventListener('click', function (){
  clearResult()
});

// 兩顆按鈕動作分開
function outputResult() {

  // 判斷spaceValue的值
  if( !spaceValue ){
    alert('請輸入資料');
    return false; // stop the function
  }

  productNumber = 1;

  calcCheckboxProduct();
  
  // console.log(productNumber);
  // console.log(spaceValue * productNumber);

  var outputNumber = Math.round(spaceValue * productNumber * 450 / 860 * 100) /100;

  var textTop = document.getElementById('spaceValue1');
  textTop.innerHTML = '<p>空間大小為</p>' + '<span>' + spaceValue + ' 坪 </span>';

  var textBottom = document.getElementById('spaceValue2');
  textBottom.innerHTML = '<p>冷房能力</p>' + '<span>' + outputNumber + ' kw/h</span>' + '<p>以上</p>';
  
  var promoBlock = document.querySelector('.condition__3rd .promo__block');

  promoBlock.classList.add("active");

  resetClassName() //reset

  var promoItem = Array.apply(null, document.querySelectorAll('.promo__box .promo__item'));

    // console.log(promoItem[0]);
  if (outputNumber <= 3.6) {
    promoItem[0].classList.remove("item--hide")
  } else if(outputNumber > 3.6 && outputNumber <= 5.0) {
    promoItem[1].classList.remove("item--hide")
  }else if(outputNumber > 5 && outputNumber <= 7.2) {
    promoItem[2].classList.remove("item--hide")
  }else if(outputNumber >= 7.2) {
    promoItem[3].classList.remove("item--hide")
  }

}


function clearResult() {

  // 清掉value也要清掉變數
  spaceValue = null;

  var allInputs = Array.apply(null, document.querySelectorAll('input'));
  var inputSpace = Array.apply(null, document.querySelectorAll('.input--space'));
  // console.log(allInputs);
  allInputs.forEach(function (el){
    // el.value = '';
    el.checked=false;
  })

  inputSpace.forEach(function (el){
    el.value = '';
    // el.innerHTML='';
  })

  
  var promoBlock = document.querySelector('.condition__3rd .promo__block');

  promoBlock.classList.remove("active");

  resetClassName()
}



function resetClassName() {
  var promoItem = Array.apply(null, document.querySelectorAll('.promo__box .promo__item'));

  // var chooseItemIndex = siblingRandom( promoItem.length );


  promoItem.forEach(function (el){
    el.classList.add("item--hide");
  })
  
}


// showChooseItem();