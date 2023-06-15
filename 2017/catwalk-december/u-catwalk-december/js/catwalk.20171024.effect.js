'use strict';
$(function(){
    function initializationFullPage() {
        var $mainWrap = $('#mainWrap');
        var bgColor = [
            '#e2e4ea', '#e2e4ea', '#e7e7f0', '#ffffff', '#ffffff', '#f7f9fb', '#f7f9fb', '#ada0a8', '#ada0a8',
            '#ffffff', '#ffffff', '#a7baef', '#a7baef', '#eeebec', '#eeebec', '#d2cfce', '#d2cfce', 
            '#f0f2f6', '#f0f2f6'
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