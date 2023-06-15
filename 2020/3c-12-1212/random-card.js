/**
 * Created by jing on 2020/12/4.
 */

checkAppOpen();
function checkAppOpen() {
    // var cardInfo = document.getElementById('cardInfo');
    // var carWrap = document.getElementById('cardWrap');

    makeSelectRandom();
    // TODO: dev用!isAPP()就可以在網頁看到，注意production版要改成isAPP()才行(關掉!驚嘆號)
    // if (!isApp()) {
    //     carWrap.classList.add('active');
    // } else {
    //     cardInfo.classList.add('active');
    // }
}
// =============================


// 卡片點擊翻開
// =============================
function addClick() {
    var cards = Array.apply(null, document.querySelectorAll('#randomSelectWrap > li'));
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            this.classList.add('active');
        });
    });
}
// =============================


function makeElementRandom(){
    var elementArray = Array.apply(null, document.querySelectorAll('#randomSelectWrap li'));
    var elementArrayLength = elementArray.length;
    var randomIndexArray = makeRandomIndexArray(elementArrayLength);

    // console.log(randomIndexArray);

}

function makeSelectRandom(){
    setInterval(addActive, 3000);
}

function addActive(){
    var elementArray = Array.apply(null, document.querySelectorAll('#randomSelectWrap li'));
    var elementArrayLength = elementArray.length;

    elementArray.forEach(function(el){
        el.classList.remove('active');
    });

    elementArray[siblingRandom(elementArrayLength)].classList.add('active');
}
function getRandom(length) {
    return Math.floor(Math.random() * length);
}
function siblingRandom(arrayLength){
    var selectedIndex = getRandom(arrayLength);

    while(selectedIndex === window.siblingRandomCheckNowIndex) {
        selectedIndex = getRandom(arrayLength);
    }

    window.siblingRandomCheckNowIndex = selectedIndex;
    // console.log(selectedIndex);

    return selectedIndex;
}

function makeRandomIndexArray(arrayLength){
    var originArray = [];
    var originIndex = 0;
    var randomArray = [];
    var randomIndex = 0;

    while(originIndex < arrayLength) {
        originArray.push(originIndex);
        originIndex++;
    }

    // console.log(originArray);

    while(randomIndex < arrayLength) {
        var randomElementIndex = getRandom(originArray.length);

        randomArray.push(
            originArray.splice(randomElementIndex, 1)[0]
        );
        randomIndex++;
    }

    // console.log(randomArray);

    return randomArray;
}