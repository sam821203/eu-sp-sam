export var initBuildTab = buildTab();

function buildTab() {
    var tabBox = document.getElementById('tabBox');
    var tabItems = tabBox.querySelectorAll('.tab__item');
    var contentBlock = document.getElementById('contentBlock');
    var contentBox = contentBlock.querySelectorAll('.content__box');
    var dateNow = dateCheck() - 1; // change date to zero start

    if (tabItems.length !== contentBox.length) {
        console.error('Tab Item數量與Content Box數量不符');
        return false;
    }

    tabItems.forEach(function (el, index) {
        if (index === dateNow) {
            addActive(tabItems, dateNow);
            addActive(contentBox, index);
        }

        function clickActive() {
            addActive(tabItems, index);
            addActive(contentBox, index);
        }

        if (el.addEventListener) {
            el.addEventListener('click', clickActive, false);
        }
        else if (el.attachEvent) {
            el.addEventListener('onclick', clickActive);

        }
    });


    var tabBoxG2 = document.getElementById('tabBox_group2');
    var tabItemsG2 = tabBoxG2.querySelectorAll('.tab__item_group2');
    var contentBlockG2 = document.getElementById('contentBlock_group2');
    var contentBoxG2 = contentBlockG2.querySelectorAll('.content__box_group2');
    var dateNowG2 = dateCheck() - 1; // change date to zero start
    if (tabItemsG2.length !== contentBoxG2.length) {
        console.error('Tab Item數量與Content Box數量不符');
        return false;
    }

    tabItemsG2.forEach(function (el, index) {
        if (index === dateNowG2) {
            addActive(tabItemsG2, dateNow);
            addActive(contentBoxG2, index);
        }

        function clickActive() {
            addActive(tabItemsG2, index);
            addActive(contentBoxG2, index);
        }

        if (el.addEventListener) {
            el.addEventListener('click', clickActive, false);
        }
        else if (el.attachEvent) {
            el.addEventListener('onclick', clickActive);

        }
    });
}

function addActive(arrayElementIn, elementIndex) {
    arrayElementIn.forEach(function (el) {
        el.classList.remove('active');
    });
    arrayElementIn[elementIndex].classList.add('active');
}

function dateCheck() {
    var date = new Date().getDate();
    return date;
}