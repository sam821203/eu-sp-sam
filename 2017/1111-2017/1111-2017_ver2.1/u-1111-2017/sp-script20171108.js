// products cycle and logos cycle

;(function ($) {
function bulidCycleImg() {
    var $productSlider = $('#productSlider');


    var linkUrl = [
                        "http://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=63380&sc=02164007",

                        "http://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=93722&sc=02176957",

                        "http://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=107648&sc=02000421",

                        "http://www.u-mall.com.tw/Prod?nm=&sid=34980&cid=108547&sc=02176561",
                        
                        "http://www.u-mall.com.tw/Prod?nm=&sid=34980&cid=50322&sc=02055804",
                        
                        ];

        var cycleHtml = '';

        for (var i = 0; i < linkUrl.length; i++) {

            cycleHtml += '<a href="'+ linkUrl[i] + '"><img src="img/product/product_img'+ (i + 1) + '.jpg" alt=""></a>';

        }

        $productSlider.append(cycleHtml);
}    
bulidCycleImg();


function bulidCycleLogo() {
    var $logoContainer = $('#logoContainer');
    var groupHtml = '';
    var logoHtml = '';
    
    for (var i = 0; i < 4; i++) {
        groupHtml = '';
        groupHtml += '<a class="logo-group" href="a' + (i + 1) + '"></a>';
        $logoContainer.append(groupHtml);
        logoHtml = '';
        for (var j = 1; j <= 5; j++) {
            var k = j + i * 5;
            logoHtml += '<img src="img/logo/product_logo'+ k + '.jpg" alt="">';
        }
        var $logoGroup = $('.logo-group:last-child');
        $logoGroup.append(logoHtml);
        ;
    }  
}    
bulidCycleLogo();
} (jQuery));

