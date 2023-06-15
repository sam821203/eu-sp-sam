'use strict';
$(function(){
    function initializationFullPage() {
        var $mainWrap = $('#mainWrap');
        var bgColor = [
            '#948077', '#191919', '#191919', '#e2e4e2', '#e2e4e2', '#e5e5ed', '#e5e5ed', '#95959b', '#95959b',
            '#efeeec', '#efeeec', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#eeeff4', '#eeeff4', 
            '#c51515', '#c51515'
        ];
        var anchors = [
            'screen1', 'screen2', 'screen3', 'screen4', 'screen5', 'screen6', 'screen7', 'screen8', 'screen9', 'screen10',
            'screen11', 'screen12', 'screen13', 'screen14', 'screen15', 'screen16', 'screen17', 'screen18', 'screen19'
        ];

        $mainWrap.fullpage({
            verticalCentered: false,
            sectionSelector: '.section__wrap',
            scrollingSpeed: 1000,
            'navigation': true,
            'navigationPosition': 'right',
            'sectionsColor': bgColor, 
            anchors: anchors,
            menu: '#menu',        
        });
    }
    initializationFullPage();

});