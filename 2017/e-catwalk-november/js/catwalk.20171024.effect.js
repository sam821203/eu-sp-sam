'use strict';
$(function(){
    function initializationFullPage() {
        var $mainWrap = $('#mainWrap');
        var bgColor = [
            '#f46d71', '#fdc0cd', '#fdc0cd', '#20140c', '#20140c', '#656782', '#656782', '#a19c93', '#a19c93',
            '#ffffff', '#ffffff', '#e2e2e2', '#e2e2e2', '#ffffff', '#ffffff', '#bab0a8', '#bab0a8', 
            '#cdcac1', '#cdcac1'
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