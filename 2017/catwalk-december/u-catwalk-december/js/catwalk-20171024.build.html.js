'use strict';
$(function(){

    function buildItemHtml(aryIndex, sectionIndexSelect) {
        var j;
        var productHtml = '';

        for (j = 0; j < visualItemData[aryIndex].data.length; j++) {

            productHtml += '<div class="product__box">'
            productHtml += '<a href="#" class="product__btn" title="' + visualItemData[aryIndex].data[j].name + '">&#43;</a>'
            productHtml += '<a href="' + visualItemData[aryIndex].data[j].url + '" class="product__info" target="_blank" title="' + visualItemData[aryIndex].data[j].name + '">'
            productHtml += '<p class="product__name">' + visualItemData[aryIndex].data[j].name + '</p>'
            productHtml += '<p class="product__price">'
            productHtml += '<span class="product--txt">驚爆價 $</span>'
            productHtml += '<span class="product--price">' + visualItemData[aryIndex].data[j].price + '</span>'
            productHtml += '</p>'
            productHtml += '</a>'
            productHtml += '</div>'

        }

        var $catwalkBox = $(sectionIndexSelect);

        $catwalkBox.append(productHtml);
    }


    function buildItemOnVisual() {

        var i, j;

        for (i = 0; i < 10; i++) {

            switch (i) {
                case 0:
                    break;

                case 1:
                    buildItemHtml(0, '#section4 .content__wrap');
                    break;

                case 2:
                    buildItemHtml(1, '#section6 .content__wrap');
                    break;

                case 3:
                    buildItemHtml(2, '#section8 .content__wrap');
                    break;

                case 4:
                    buildItemHtml(3, '#section10 .content__wrap');
                    break;
                
                case 5:
                    buildItemHtml(4, '#section12 .content__wrap');
                    break;

                case 6:
                    buildItemHtml(5, '#section14 .content__wrap');
                    break;

                case 7:
                    buildItemHtml(6, '#section16 .content__wrap');
                    break;
                case 8:
                    buildItemHtml(7, '#section18 .content__wrap');
                break;

            }

        }

    }

    function buildIframeTemplate() {

        var timeStamp = new Date().getTime();
        var i, j, k;

        var iframeTemplate = '';
        var storeIframeAry = [];
       

        for (i = 0; i  < iframeData.length; i++) {

            iframeTemplate = '<iframe src="' + iframeData[i].url + '?' + timeStamp + '" width="1260" height="876" marginwidth="0" marginheight="0" scrolling="No" frameborder="0"></iframe>';
        
            storeIframeAry.push(iframeTemplate);

        }
 

        for (j = 3; j < 21 ; j += 2) {
            switch(j) {
                case 3: 
                    $('#section3').find('.content__wrap').append(storeIframeAry[0])
                break;

                case 5: 
                    $('#section5').find('.content__wrap').append(storeIframeAry[1])
                break;

                case 7: 
                    $('#section7').find('.content__wrap').append(storeIframeAry[2])
                break;

                case 9: 
                    $('#section9').find('.content__wrap').append(storeIframeAry[3])
                break;

                case 11: 
                    $('#section11').find('.content__wrap').append(storeIframeAry[4])
                break;

                case 13: 
                    $('#section13').find('.content__wrap').append(storeIframeAry[5])
                break;

                case 15: 
                    $('#section15').find('.content__wrap').append(storeIframeAry[6])
                break;

                case 17: 
                    $('#section17').find('.content__wrap').append(storeIframeAry[7])
                break;

                case 19: 
                    $('#section19').find('.content__wrap').append(storeIframeAry[8])
                break;
            }
        }

    }

    buildIframeTemplate();
    buildItemOnVisual();
});