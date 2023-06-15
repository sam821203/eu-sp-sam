;(function ($) {


    // 鐘點戰資料start
    var getProdImgSrc = function(GOODID, imgSize) {

        var SSL = 'http://www.u-mall.com.tw/';
        var GroupFolder = '';
        var GOODIDFolder = '';

        var ZeroArray = ['0', '0', '0', '0', '0'];
        if (GOODID.toString().length < 8) {
            GOODIDFolder = ZeroArray.slice(0, (8 - GOODID.toString().length)).join('') + GOODID;
        }
        GroupFolder = GOODIDFolder.substr(0, 5);
        return SSL + 'ProductImage/' + GroupFolder + '/' + GOODIDFolder + '/' + GOODID + '_' + imgSize + '.jpg';


    }

    var Sys_FormatNumber = function(strNumber) { //價錢三位數comma

        return strNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    }

    HomeInTime = HomeInTime.Data.Content[0];

    var now = new Date();

    now = now.getHours();

    var clockHtml = '';
    
    clockHtml += '<div class="sp__hours-pic l--left">';
    clockHtml += '     <div class="sp__discount"><span>' + HomeInTime.DiscountRate + '</span> <br> 折</div>';
    clockHtml += '          <div class="sp__product">';
    clockHtml += '               <a href="http://www.u-mall.com.tw/Prod.aspx?sc=' + HomeInTime.SaleCode + '" title="' + HomeInTime.GOOD_NM + '"><img src="' + getProdImgSrc(HomeInTime.GOOD_ID, 'L') + '" width="185" height="185" alt="' + HomeInTime.GOOD_NM + '"></a>';
    clockHtml += '          </div>';
    clockHtml += '     </div>';
    clockHtml += '     <div class="sp__hours-text l--left">';
    clockHtml += '          <div class="sp__times">' + now + ':00</div>';
    clockHtml += '               <div class="sp__name">';
    clockHtml += '                    <a href="http://www.u-mall.com.tw/Prod.aspx?sc=' + HomeInTime.SaleCode + '" title="' + HomeInTime.GOOD_NM + '">' + HomeInTime.GOOD_NM + '</a>';
    clockHtml += '               </div>';
    clockHtml += '          <div class="sp__sub-price">';
    clockHtml += '               <s>$' + Sys_FormatNumber(HomeInTime.CPRC) + '</s>';
    clockHtml += '          </div>';
    clockHtml += '          <div class="sp__price">';
    clockHtml += '            $ <span>' + Sys_FormatNumber(HomeInTime.PRC) + '</span>';
    clockHtml += '    </div>';
    clockHtml += '</div>';

    $('.sp__hours-war').html(clockHtml);


} (jQuery));