import { siblingRandom } from 'utils/js/build-random.js'
import { makeRandomIndexArray } from 'utils/js/build-random.js'


export var initRandomSelect = [makeElementRandom(), makeSelectRandom()];

function makeElementRandom(){
  var elementArray = Array.apply(null, document.querySelectorAll('#randomSelectWrap li'));
  var elementArrayLength = elementArray.length;
  var randomIndexArray = makeRandomIndexArray(elementArrayLength);

  // console.log(randomIndexArray);

  elementArray.forEach(function(el, index){
    el.style.order = randomIndexArray[index];

    if(randomIndexArray[index] % 2 === 0) {
      el.classList.add('odd');
    } else {
      el.classList.add('even');
    }
  });
}

function makeSelectRandom(){
  setInterval(addActive, 1000);
}

function addActive(){
  var elementArray = Array.apply(null, document.querySelectorAll('#randomSelectWrap li a'));
  var elementArrayLength = elementArray.length;

  elementArray.forEach(function(el){
    el.classList.remove('active');
  });
  
  elementArray[siblingRandom(elementArrayLength)].classList.add('active');
}