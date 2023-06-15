// products cycle and logos cycle

;(function ($) {
function bulidCycleImg() {
    var $productSlider = $('#productSlider');


    var linkUrl = [
                        "//www.etmall.com.tw/i/1887557",

                        "//www.etmall.com.tw/i/1900001",

                        "//www.etmall.com.tw/i/1744738",

                        "//www.etmall.com.tw/i/1899605",
                        
                        "//www.etmall.com.tw/i/1785767",
                        
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

