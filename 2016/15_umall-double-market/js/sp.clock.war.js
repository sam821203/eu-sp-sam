;(function ($) {

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

    var onAirItem = HomeInTime.Data.Content[0];

    

    var now = new Date();
    var hours = now.getHours();
    var nextHours = hours + 1; 

    var onAirHtml = '';

    onAirHtml += '<a href="http://www.u-mall.com.tw/Prod.aspx?sc=' + onAirItem.SaleCode + '" title="' + onAirItem.GOOD_NM + '" target="_blank">';
    onAirHtml += '   <div class="sp-clock__title">';
    onAirHtml += '       <i class="sp-clock-pink"><img src="icon_clock_pink.png" alt="ON AIR"></i>';
    onAirHtml += '       <span class="sp__pink-text">ON AIR</span>';
    onAirHtml += '       <span>' +  hours + ' : 00 </span>';
    onAirHtml += '   </div>';
    onAirHtml += '   <div class="sp-clock__box">';
    onAirHtml += '       <div class="sp-clokc__pic">';
    onAirHtml += '           <img src="' + getProdImgSrc(onAirItem.GOOD_ID, 'L') + '" width="240" height="240" alt="' + onAirItem.GOOD_NM + '">';
    onAirHtml += '       </div>';
    onAirHtml += '       <div class="sp-clock__info">';
    onAirHtml += '           <div class="sp-clock__name">' + onAirItem.GOOD_NM + '</div>';
    onAirHtml += '           <div class="sp-clock__sub-price">';
    onAirHtml += '               森活價 $';
    onAirHtml += '               <span>' + Sys_FormatNumber(onAirItem.CPRC) + '</span>';
    onAirHtml += '           </div>';
    onAirHtml += '           <div class="sp__price"> $ <span>' + Sys_FormatNumber( 
                                onAirItem.DiscountValue === '' ? onAirItem.PRC : onAirItem.DiscountValue ) +
                             '</span></div>';
    onAirHtml += '       </div>';
    onAirHtml += '   </div>';
    onAirHtml += '</a>';

    $('#spOnAir').html(onAirHtml);


    var noticeItem = HomeInTime.Data.Content[1];

    //console.log( hours + 1 );
    
    var noticeHtml = '';

    noticeHtml += '<a href="http://www.u-mall.com.tw/Prod.aspx?sc=' + noticeItem.SaleCode + '" title="' + noticeItem.GOOD_NM + '" target="_blank">';
    noticeHtml += '<div class="sp-clock__title">';
    noticeHtml += '    <i class="sp-clock-orange"><img src="icon_clock_orange.png" alt="強檔預告"></i>';
    noticeHtml += '    <span class="sp__orange-text">強檔預告</span>';
    noticeHtml += '    <span>' +  nextHours + ' : 00 </span>';
    noticeHtml += '</div>';
    noticeHtml += '<div class="sp-clock__box">';
    noticeHtml += '    <div class="sp-clokc__pic">';
    noticeHtml += '        <img src="' + getProdImgSrc( noticeItem.GOOD_ID, 'L' ) + '" width="240" height="240" alt="' + noticeItem.GOOD_NM + '">';
    noticeHtml += '    </div>';
    noticeHtml += '    <div class="sp-clock__info">';
    noticeHtml += '        <div class="sp-clock__name">' + noticeItem.GOOD_NM + '</div>';
    noticeHtml += '        <div class="sp-clock__sub-price">';
    noticeHtml += '            森活價 $';
    noticeHtml += '            <span>' + Sys_FormatNumber(noticeItem.CPRC) + '</span>';
    noticeHtml += '        </div>';
    noticeHtml += '        <div class="sp__price"> $ <span>' + Sys_FormatNumber( 
                                noticeItem.DiscountValue === '' ? noticeItem.PRC : noticeItem.DiscountValue ) + 
                           '</span></div>';
    noticeHtml += '    </div>';
    noticeHtml += '</div>';
    noticeHtml += '</a>';

    $('#spNotice').html(noticeHtml);

} (jQuery));