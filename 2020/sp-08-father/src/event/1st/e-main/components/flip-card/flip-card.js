
export var initFlipCard = [cardClickActive(), cardShine()];

// 卡片點擊翻開
// =============================
function cardClickActive() {
  var cards = Array.apply(null, document.querySelectorAll('#cardBox .card__item'));

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      this.classList.add('active');
    });
  });
}

function cardShine() {
  var cardBacks = Array.apply(null, document.querySelectorAll('#cardBox .card__back'));
  var index = 0;

  function addActive(){
    cardBacks.forEach(function(el){
      el.classList.remove('active');
    })

    cardBacks[index].classList.add('active');
    
    if(index === 7) index = 0;
    else index++;
  }

  setInterval(addActive, 1000);
}
