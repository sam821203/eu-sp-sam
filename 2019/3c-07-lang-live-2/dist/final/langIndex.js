var data = [
    {
        date: "12",
        color: "#ffe02e",
        secondColor: '#fea219',
        title: ["與SAMSUNG美拍", "千萬別錯過這個時刻"],
        item: {
            href: "#a1",
            src: "../img/product_0812.png"
        },
        video: {
            src: "https://www.youtube.com/embed/pEmYYy3xWGk",
            img: "../img/video_0408.png"
        },
        thumbs: "../img/card_0812.png",
        marquee: ["蝦蝦姊：雖然已經很美但想要更美^_<", "鬍子哥：可是我更想看直播主用甚麼機型拍", "英媽媽：媽媽我更想知道19:00開播有沒有優惠"]
    }, {
        date: "13",
        color: "#ffe02e",
        secondColor: '#fea219',
        title: ["感受ASUS怪獸力", "ASUS系列商品等著你"],
        item: {
            href: "#a3",
            src: "../img/product_0813.png"
        },
        video: {
            src: "https://www.youtube.com/embed/pfmBglzD5NA",
            img: "../img/video_0409.png"
        },
        thumbs: "../img/card_0813.png",
        marquee: ["倫兄：想換手機了，電池一直沒電", "我用性能電力怪獸就沒事:-o", "威威：而且現在買還送我最想要的禮物"]
    }, {
        date: "14",
        color: "#ffe02e",
        secondColor: '#fea219',
        title: ["在SWITCH世界冒險", "跟著直播主玩起來"],
        item: {
            href: "#a5",
            src: "../img/product_0814.png"
        },
        video: {
            src: "https://www.youtube.com/embed/lv1URg6LAVQ",
            img: "../img/video_0410.png"
        },
        thumbs: "../img/card_0814.png",
        marquee: ["耀西：我是隻烏龜不是恐龍!", "奇諾比奧：不要打我~我是好人@@", "馬力歐：今天直播有好禮，我不要錯過你"]
    }, {
        date: "15",
        color: "#ffe02e",
        secondColor: '#fea219',
        title: ["ACER玩美風格隨我", "最強組合在此"],
        item: {
            href: "#a7",
            src: "../img/product_0815.png"
        },
        video: {
            src: "https://www.youtube.com/embed/7gEL5kW1jqc",
            img: "../img/video_0411.png"
        },
        thumbs: "../img/card_0815.png",
        marquee: ["純真：人生厭世，生無可戀⋯", "天使：大螢幕的視線，讓你看得更廣闊", "仙女：喇叭的音效使你沉靜下來慢慢思考"]
    }, {
        date: "16",
        color: "#ffe02e",
        secondColor: '#fea219',
        title: ["HUAWEI新機魅力", "不看不行，錯過可惜"],
        item: {
            href: "#a9",
            src: "../img/product_0816.png"
        },
        video: {
            src: "https://www.youtube.com/embed/scsBs5De3lY",
            img: "../img/video_0412.png"
        },
        thumbs: "../img/card_0816.png",
        marquee: ["納尼：新機搶先看！", "紅豆泥：我想看想看∼", "烘豆：指定商品買又送小禮物"]
    }
];

// 時間判定 Data
var responseObject = {
    "goodsIsOpen": [
        {
            "startTime": "2019/07/31 10:00",
            "endTime": "2019/08/16 23:59"
        },
    ]
}
// 時間判定
function checkTime(res) {
    var startTime = '';
    var endTime = '';
    var currentTime = new Date();
    var $conOrder = $(".title__date");

    for (var i = 0; i < res.goodsIsOpen.length; i++) {
        startTime = res.goodsIsOpen[i].startTime;
        endTime = res.goodsIsOpen[i].endTime;
        start = new Date(startTime.replace("-", "/"));
        end = new Date(endTime.replace("-", "/"));
        if (currentTime >= start && currentTime < end) {
        }
        else {
            $conOrder.remove();
        }
    }
}
checkTime(responseObject);

// page functions
// ==========================================================================
var gallerySliders = $('#gallerySliders');
var todaySliderIndex = 0;

// 輪播隨時間更換
function dateSwitchSlider() {
    var dateArray = [12, 13, 14, 15, 16];
    var today = new Date().getDate();
    var mathRandom = Math.floor(Math.random() * dateArray.length);

    todaySliderIndex = mathRandom;

    dateArray.forEach(function (el, index) {
        if (el === today) {
            // 開始後跳轉
            // gallerySliders.slick('slickGoTo', index);

            // 一load進來直接換
            todaySliderIndex = index;
        }
    });
}
dateSwitchSlider();

// 輪播點擊下一張function
function clckToNext() {
    gallerySliders.slick('slickNext');
}

// 輪播init
$('#gallerySliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: todaySliderIndex,
    fade: true,
    prevArrow: '#slickBtnPrev',
    nextArrow: '#slickBtnNext',
    asNavFor: '#galleryVideos',
});
$('#galleryVideos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: todaySliderIndex,
    cssEase: 'ease-in',
    fade: true,
    arrows: false,
    asNavFor: '#gallerySliders',
});

// 輪播當格新增左右兩個假圖，分別為前後兩張
var sliderImg = document.querySelectorAll('#gallerySliders .thumb__box img');
var arrayImgSrc = Array.apply(null, sliderImg).map(function (el, i) {
    return el.src;
});
for (var i = 0; i < arrayImgSrc.length; i++) {
    var prevImg = document.createElement('img');
    var nextImg = document.createElement('img');

    prevImg.alt = "介紹卡片";
    prevImg.classList.add("card--others");
    nextImg.alt = "介紹卡片";
    nextImg.classList.add("card--others");

    if (i == 0) prevImg.src = arrayImgSrc[arrayImgSrc.length - 1];
    else prevImg.src = arrayImgSrc[i - 1];

    sliderImg[i].parentElement.insertBefore(prevImg, sliderImg[i]);

    if (i == arrayImgSrc.length - 1) nextImg.src = arrayImgSrc[0];
    else nextImg.src = arrayImgSrc[i + 1];

    sliderImg[i].parentElement.appendChild(nextImg);
}

// 輪播掛上當格點一下可以下一張
for (var i = 0; i < arrayImgSrc.length; i++) {
    sliderImg[i].addEventListener('click', clckToNext);
}


var videos = document.querySelectorAll('.video--youtube');

videos.forEach(function (el) {
    var player;

    el.addEventListener('load', function () {
        onYouTubePlayerAPIReady(el.id);
    });
});

function onYouTubePlayerAPIReady(id) {
    player = new YT.Player(id, {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    var pauseButton1 = document.getElementById("slickBtnPrev");
    var pauseButton2 = document.getElementById("slickBtnNext");

    pauseButton1.addEventListener("click", function () {
        event.target.pauseVideo();
    });
    pauseButton2.addEventListener("click", function () {
        event.target.pauseVideo();
    });
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);