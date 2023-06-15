var basicScrollTop = function () {

    // The button
    var btnTop = document.querySelector('#goTop');
    // Reveal the button
    var btnReveal = function () {
        var position = document.querySelector('#position');
        position.innerHTML = window.scrollY + 'px';
        if (window.scrollY >= 300) {
            btnTop.classList.add('is-visible');
        } else {
            btnTop.classList.remove('is-visible');
        }
    }
    // Smooth scroll top
    var TopscrollTo = function () {
        if (window.scrollY != 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 100);
                TopscrollTo();
            }, 0);
        }
    }
    // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);


};


var goTopHtml = '';
// goTopHtml += '<div class="hhh"></div>';
goTopHtml += '<span id="pageYOffset" class="pageYOffset">';
goTopHtml += 'window.scrollY = <span id="position">0px</span></span>';
goTopHtml += '<button id="goTop" class="goTop">';
goTopHtml += '<i class="fas fa-arrow-up" style="font-size: 20px;"></i>';
goTopHtml += '</button>';
// document.body.innerHTML = goTopHtml;

document.getElementById("goTopWrap").innerHTML = goTopHtml;
basicScrollTop();


