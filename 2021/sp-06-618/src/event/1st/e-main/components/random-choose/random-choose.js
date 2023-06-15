import { siblingRandom } from 'utils/js/build-random.js'

export var initPromo = [
  shuffleCards(),
];

function shuffleCards () {
  var arrayCards = Array.apply( null, document.querySelectorAll( '#cardBox li' ) );
  var chooseCardIndex1 = siblingRandom( arrayCards.length, 'siblingRandomChooseCardsIndex' );
  var chooseCardIndex2 = siblingRandom( arrayCards.length, 'siblingRandomChooseCardsIndex' );
  var chooseCardIndex3 = siblingRandom( arrayCards.length, 'siblingRandomChooseCardsIndex' );
  while(chooseCardIndex3 === chooseCardIndex1 || chooseCardIndex3 === chooseCardIndex2) {
    chooseCardIndex3 = siblingRandom( arrayCards.length, 'siblingRandomChooseCardsIndex' );
  }
  var arrayChooseIndex = [chooseCardIndex1, chooseCardIndex2, chooseCardIndex3];

  arrayChooseIndex.forEach( function ( el ) {
    arrayCards[el].classList.add('active');
  } );
  showChoose();
}
function turnAnswer ( number ) {
  if ( number == 0 ) {
    return 1;
  } else if ( number == 1 ) {
    return 2;
  } else if ( number == 2 ) {
    return 0;
  }
}

function showChoose() {
  var arrayBtnChoose = Array.apply( null, document.querySelectorAll( '#btnChooseBox a' ) );
  var arrayLines = Array.apply( null, document.querySelectorAll( '#chooseLineBox .line__box' ) );
  var arrayCards = Array.apply( null, document.querySelectorAll( '#cardBox .active' ) );
  var btnLine = document.querySelector( '#chooseLineBox .line__btn' );


  arrayBtnChoose.forEach( function (el, index) {
    el.addEventListener( 'click', function ( e ) {
      e.preventDefault();
      btnLine.style.display = 'none';
      var chooseLineBox = arrayLines[index];
      var chooseCard = arrayCards[turnAnswer( index )];
      var chooseCardItem = chooseCard.querySelector( '.card__item' );

      chooseLineBox.classList.add( 'active' );

      setTimeout( function () {
        chooseCardItem.classList.add( 'active' );
      }, 1800 );

      closeClick();
    })
  });
}

function closeClick () {
  var arrayBtnChoose = Array.apply( null, document.querySelectorAll( '#btnChooseBox a' ) );

  arrayBtnChoose.forEach( function ( el ) {
    el.parentNode.removeChild( el );
  });
}
