/*==================== Variables ====================*/
/* Constant */
const DURATION = {
	FAST: 150,
	FASTER: 200,
	STD: 300,
	NOR: 400,
	SLOWER: 500,
	SLOW: 600
};

/*==================== Initialize ====================*/
/**
 * 【程式進入點】
 * 項目名稱: Includes 載入器
 *
 * 說明:
 *    監聽所有 includes 的載入、並作同步處理，
 *    下載完成後進入 listenImagesLoading，
 *    監聽完成即進入 this.callback。
 *
 * 必填項目: includesList
 */
includesLoader({
	// filesRootPath: "./includes/",
	// filesExtension: ".html",
	callback: mainFunc,
	includesList: [
		{
			target: ".page-header",
			// rootPath: "./includes/",
			fileName: "_page-header"
			// extension: ".html",
			// callback: function() {}
		},
		{
			target: ".page-footer",
			fileName: "_page-footer"
		}
	]
});

/*==================================================*\
        Main Function
\*==================================================*/
function mainFunc() {
	/* window 事件: Resize & scroll */
	windowEvents();

	// $(".btn-draw").lightbox(() => {
	//   $("._slick").slick();
	// });

	/***** Start Coding Here *****/
	// setTimeout(function(){ 
	// 	// $('html').css('overflow-y', 'scroll');
	// 	$(".page-loading").fadeOut();
	// }, 2500);
	/* 收掉 .page-loading */
	transitionThenRemove({
		dom: $(".page-loading"),
		duration: DURATION.STD,
		callback: () => {
			console.log("%cBuild Completed!", logSafeStyle);
		}
	});

	// MENU
	$('.btn-menu').on('click', menuIn)
	function menuIn() {
		$('.menu').fadeIn();
	}
	$('.menu-close').on('click', menuOut)
	function menuOut() {
		$('.menu').fadeOut();
	}

	$('.menu li a').on('click', function(){
		menuOut();
		var targetId = $(this).data('pin');
		$('html, body').stop().animate({
			scrollTop: ($('.'+targetId).offset().top)
		},  500)
	})

	
	// if ($('.git-box').visible(true)) {
	// 	var gifUrl = $(this).data('gif');
	// 	console.log(gifUrl);
	// 	$(this).addClass('asd')
	// 	// The element is visible, do something
	// } else {
	// 	// The element is NOT visible, do something else
	// }
	// $('.git-box').visible(function(){
	// 	alert("456")
	// })

	// alert("3")
    $(window).on('load', function() {
        $(".slide-box").slick({
            dots: true,
            arrows: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '10vw'
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });

	$(".sec03 .slide-box").on('afterChange', function(){
		var gifUrl = $('.sec03 .slick-current .slick-gif').data('gif');
		console.log(gifUrl)
		// $(".sec03 .slick-current").siblings().find('.gif').fadeOut();
		$(".sec03 .slick-current .gif").show().attr('src', './images/gif/' + gifUrl + '.gif');
	});
	  

	$('html').scroll(function () {
		alert("111")
	})
	// $('.lb-close-btn').on('click', closelb);
	// function closelb() {
	// 	$('.lb-content').find('.lbblock').remove();
	// 	$('.lightbox').removeClass('show').fadeOut();
	// 	console.log('lightbox removed!');
	// }

	// $('.lbbtn').on('click', openlb);
	// function openlb() {
	// 	menuOut();
	// 	if($('.lightbox').hasClass('show')){
	// 		alert('there is')
	// 	}
	// 	var thislb = $(this).data('lb');

	// 	$('.lb-content').load('includes/lightbox/' + thislb + '.html', function(){
	// 		$('.lightbox').addClass('show').fadeIn().scrollTop(0);
	// 		console.log('lightbox loaded!');
	// 	});

	// }

}

/*==================================================*\
        window Events
\*==================================================*/
let isFirstTime = true;
function windowEvents() {
	// Window Resize
	$win.on("resize", _resize).resize();
	// Window Scroll
	$win.on("scroll", _scroll).scroll();
}

/*========== Window Resize ==========*/
function _resize() {
  	getSize();

	// 斷點偵測
	detectiveBreakpoint([
		{
			minimum: -1,
			mq: function() {}
		},
		{
			phoneMini: 320,
			mq: function() {}
		},
		{
			phone: 400,
			mq: function() {}
		},
		{
			phoneWide: 480,
			mq: function() {}
		},
		{
			phablet: 560,
			mq: function() {}
		},
		{
			tabletSmall: 640,
			mq: function() {}
		},
		{
			tablet: 768,
			mq: function() {}
		},
		{
			tabletWide: 1024,
			mq: function() {}
		},
		{
			notebook: 1366,
			mq: function() {}
		},
		{
			desktop: 1680,
			mq: function() {}
		}
	]);
}

function getSize() {
	winW = $win.width();
	winH = $win.height();
}

/*========== Window Scroll ==========*/
let nowPos;
var winH = $('html').height(),
slide1Top = $('.slide-1').offset().top - winH,
gif1Top = $('.gif-1').offset().top - winH,
gif2Top = $('.gif-2').offset().top - winH,
gif3Top = $('.gif-3').offset().top - winH,
gif4Top = $('.gif-4').offset().top - winH,
gif5Top = $('.gif-5').offset().top - winH;

function _scroll() {
	
	// getPos();
	var winTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
	//   viewscreen();
	console.log( "winH:"+ winH + ", gif2Top:" + winTop);
	if (winTop > gif1Top) {
		$(".gif-1 .gif").show();
	}
	if (winTop > gif2Top) {
		$(".gif-2 .gif").show();
	}
	if (winTop > gif3Top) {
		$(".gif-3 .gif").show();
	}
	if (winTop > gif4Top) {
		$(".gif-4 .gif").show();
	}
	if (winTop > gif5Top) {
		$(".gif-5 .gif").show();
	}
	if (winTop > slide1Top) {
		$(".slide-1 .box-1 .gif").show();
	}
	
	if (winTop > 200) {
		$(".btn-menu").css('opacity','0.45');
	}else{
		$(".btn-menu").css('opacity','1');
	}


}

function getPos() {
	nowPos = {
		x: $doc.scrollLeft(),
		y: $doc.scrollTop()
	};
}

/*==================================================*\
        Library
\*==================================================*/
/* 斷點偵測 (for window resize) */
let preBP = { minimum: -1 };
function detectiveBreakpoint(breakpoint) {
  	let nowBP = breakpoint[0];

	$.each(breakpoint, (idx, obj) => {
		const objName = Object.getOwnPropertyNames(obj)[0];
		const val = obj[objName];

		if (winW > val && val > nowBP[Object.getOwnPropertyNames(nowBP)[0]]) {
			nowBP = obj;
		}
	});

	if (
		Object.getOwnPropertyNames(nowBP)[0] ===
		Object.getOwnPropertyNames(preBP)[0]
	) {
		return false;
	}

	// 執行 Media Query
	mediaQuery(nowBP);
}

// 執行 Media Query
function mediaQuery(nowBP) {
	const nowBPName = Object.getOwnPropertyNames(nowBP)[0];
	console.log(`Breakpoint {${nowBPName}: ${nowBP[nowBPName]}}`);

	// 執行該斷點 Media Query
	if (!nowBP.hasOwnProperty("mq")) {
		throw new Error(`此斷點(↑)尚未設定 Media Query 之屬性 "mq"(function)`);
	} else if (typeof nowBP.mq !== "function") {
		throw new Error(`此中斷點之 Media Query 型別並非 "function`);
	} else {
		nowBP.mq();
	}

	preBP = nowBP;
}

