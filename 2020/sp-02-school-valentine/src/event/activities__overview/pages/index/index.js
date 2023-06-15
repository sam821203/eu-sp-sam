// ==========================================================================
// import normal layout js modules
// ==========================================================================
import {globalPolyfill} from 'utils/js/polyfill'
import {notSupportIE9Alert} from 'utils/js/ie9-alert'
import {initLazyload} from 'vendors/js/lazyload'
import {initGobalUXItems} from 'utils/js/generate'
// import { makeParallaxDefault } from 'utils/js/parallax-scroll'
// import { makeParallaxBgDefault } from 'utils/js/parallax-scroll'

import * as share from 'layout/header_s2/share-tools/share-tools.js'
// ==========================================================================
// import components js modules
// ==========================================================================

import {initSliderSpecial} from 'event/activities__overview/pages/bn-special/bn-special.js'

new WOW().init();


$(document).ready(function () {

    //
    $("[id^='navbarAnchor']").each(function (index) {
        var navId;
        navId = $(this).attr("id", 'navbarAnchor_' + (index + 1) + '');
        //
        navDetailList(navId);
    });

    //
    function navDetailList(navId) {
        var navList = [];
        var navArray = [];

        navArray += navId.attr('id');

        navList += '<div class="anchor__title__wrap">';
        navList += '<ul id="navClick" class="anchor__ul">';

        //
        var selectNavIdAll = navId.nextAll("[data-title]");

        //
        $(selectNavIdAll).each(function (index, element) {
            //
            if ($(this).closest(".title__wrap").attr("data-title") == "stop") {
                return false;
            }
            //
            var dataTitleVal = $(this).attr("data-title");
            //
            if (dataTitleVal && dataTitleVal != "stop") {
                navList += ' <li><a href="#' + dataTitleVal + '">' + dataTitleVal + '</a></li>';
            }

        });
        navList += '</ul></div>';

        $(navId).empty();
        $(navId).append(navList);
    }

    var navBarHeight = document.querySelector(".navbar__anchor").offsetHeight * 1.5;

    function bindNav() {
        var arrSection = Array.apply(null, document.querySelectorAll("[data-title]"));
        var arrTitle = [];
        var navClickItems = Array.apply(null, document.querySelectorAll('#navClick a'));
        var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var targetIndex = 0;

        arrSection.forEach(function (el) {
            var valueEl = el.getAttribute("data-title");

            if (valueEl && valueEl !== "stop") arrTitle.push(el);
        });

        arrTitle.forEach(function (el, index) {
            if (docScrollTop - el.offsetTop + navBarHeight >= 0) {
                targetIndex = index;
            }
        });


        if (targetIndex === -1) return;
        navClickItems.forEach(function (el) {
            el.classList.remove("active");
        });
        navClickItems[targetIndex].classList.add("active");

        // active move in the screen middle
        var $winWt = $(document).width();
        var moveLeft = $("#navClick li").width() || 90;
        if ($(".active").length) {
            //
            var offsetLeft = moveLeft * (targetIndex) - $winWt / 3;
            $(".anchor__ul").stop().animate({
                scrollLeft: offsetLeft,
            });
        }
        ;
        // active move in the screen middle /.END
    }

    var later;
    $.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    $.throttle = function (func, wait) {
        var context, args, timeout, throttling, more, result;
        var whenDone = $.debounce(function () {
            more = throttling = false;
        }, wait);
        return function () {
            context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (more) func.apply(context, args);
                whenDone();
            };
            if (!timeout) timeout = setTimeout(later, wait);

            if (throttling) {
                more = true;
            } else {
                result = func.apply(context, args);
            }
            ;
            whenDone();
            throttling = true;
            return result;
        };
    };
    var bind__handler = $.throttle(function (e) {
        bindNav();
    }, 200);

    window.addEventListener('scroll', bind__handler);

    //
    $(document).on("click", "#navClick a", function (e) {
        var _href = $(this).attr("href").substr(1);
        var toElem = $('section[data-title="' + _href + '"]');
        var toTop = toElem.offset().top + 10;
        $("html, body").animate({scrollTop: toTop - navBarHeight});
        return false;
    });
});