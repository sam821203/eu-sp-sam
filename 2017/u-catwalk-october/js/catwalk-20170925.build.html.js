'use strict';
$(function(){
    function buildMainProduct() {
        var $catwalkBox = $('#screen2 .catwalk__box');
        var productHtml = '';

        productHtml += '<div class="product__box">'
        productHtml +=    '<a href="#" class="product__btn" title="' + firstData.name + '">&#43;</a>'
        productHtml +=    '<a href="' + firstData.url + '" class="product__info" target="_blank" title="' + firstData.name + '">'
        productHtml +=        '<p class="product__name">' + firstData.name + '</p>'
        productHtml +=        '<p class="product__price">'
        productHtml +=            '<span class="product--txt">驚爆價 $</span>'
        productHtml +=            '<span class="product--price">' + firstData.price + '</span>'
        productHtml +=        '</p>'
        productHtml +=    '</a>'
        productHtml +='</div>'

        $catwalkBox.append(productHtml);
    }

    function buildOtherProduct() {

        var i, j;

        for (i = 0; i < 9; i++) {

            switch (i) {
                case 0:
                    var productHtml = '';

                    for (j = 0; j < otherData[0].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[0].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[0].data[j].url + '" class="product__info" target="_blank" title="' + otherData[0].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[0].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[0].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox4 = $('#screen4 .catwalk__box');

                    $catwalkBox4.append(productHtml);

                    break;

                case 1:
                    var productHtml = '';

                    for (j = 0; j < otherData[1].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[1].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[1].data[j].url + '" class="product__info" target="_blank" title="' + otherData[1].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[1].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[1].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox6 = $('#screen6 .catwalk__box');

                    $catwalkBox6.append(productHtml);

                    break;

                case 2:
                    var productHtml = '';

                    for (j = 0; j < otherData[2].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[2].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[2].data[j].url + '" class="product__info" target="_blank" title="' + otherData[2].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[2].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[2].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox8 = $('#screen8 .catwalk__box');

                    $catwalkBox8.append(productHtml);

                    break;

                case 3:
                    var productHtml = '';

                    for (j = 0; j < otherData[3].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[3].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[3].data[j].url + '" class="product__info" target="_blank" title="' + otherData[3].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[3].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[3].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox10 = $('#screen10 .catwalk__box');

                    $catwalkBox10.append(productHtml);

                    break;

                case 4:
                    var productHtml = '';

                    for (j = 0; j < otherData[4].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[4].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[4].data[j].url + '" class="product__info" target="_blank" title="' + otherData[4].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[4].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[4].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox12 = $('#screen12 .catwalk__box');

                    $catwalkBox12.append(productHtml);

                    break;
                
                case 5:
                    var productHtml = '';

                    for (j = 0; j < otherData[5].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[5].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[5].data[j].url + '" class="product__info" target="_blank" title="' + otherData[5].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[5].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[5].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox14 = $('#screen14 .catwalk__box');

                    $catwalkBox14.append(productHtml);

                    break;

                case 6:
                    var productHtml = '';

                    for (j = 0; j < otherData[6].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[6].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[6].data[j].url + '" class="product__info" target="_blank" title="' + otherData[6].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[6].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[6].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox16 = $('#screen16 .catwalk__box');

                    $catwalkBox16.append(productHtml);

                    break;

                case 7:
                    var productHtml = '';

                    for (j = 0; j < otherData[7].data.length; j++) {

                        productHtml += '<div class="product__box">'
                        productHtml += '<a href="#" class="product__btn" title="' + otherData[7].data[j].name + '">&#43;</a>'
                        productHtml += '<a href="' + otherData[7].data[j].url + '" class="product__info" target="_blank" title="' + otherData[7].data[j].name + '">'
                        productHtml += '<p class="product__name">' + otherData[7].data[j].name + '</p>'
                        productHtml += '<p class="product__price">'
                        productHtml += '<span class="product--txt">驚爆價 $</span>'
                        productHtml += '<span class="product--price">' + otherData[7].data[j].price + '</span>'
                        productHtml += '</p>'
                        productHtml += '</a>'
                        productHtml += '</div>'

                    }

                    var $catwalkBox18 = $('#screen18 .catwalk__box');

                    $catwalkBox18.append(productHtml);

                    break;

            }

        }

    }

    function buildIframeTemplate() {

        var timeStamp = new Date().getTime();

        var i, j;

        for( i = 0; i < iframeData.length; i++ ) {
            
            switch(i) {
                case 0:
                    $('#screen3').find('iframe').attr('src', iframeData[0].url + '?' + timeStamp );
                    break;
                case 1:
                    $('#screen5').find('iframe').attr('src', iframeData[1].url + '?' + timeStamp );
                    break;
                case 2:
                    $('#screen7').find('iframe').attr('src', iframeData[2].url + '?' + timeStamp );
                    break;
                case 3:
                    $('#screen9').find('iframe').attr('src', iframeData[3].url + '?' + timeStamp );
                    break;
                case 4:
                    $('#screen11').find('iframe').attr('src', iframeData[4].url + '?' + timeStamp );
                    break;
                case 5:
                    $('#screen13').find('iframe').attr('src', iframeData[5].url + '?' + timeStamp );
                    break;
                case 6:
                    $('#screen15').find('iframe').attr('src', iframeData[6].url + '?' + timeStamp );
                    break;
                case 7:
                    $('#screen17').find('iframe').attr('src', iframeData[7].url + '?' + timeStamp );
                    break;
                case 8:
                    $('#screen19').find('iframe').attr('src', iframeData[8].url + '?' + timeStamp );
                    break;
                
            }


        }

    }

    buildMainProduct();
    buildOtherProduct();
    buildIframeTemplate();
});