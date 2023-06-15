// 注意複製時標點符號都不能少，少了會壞掉
// 區塊：大牌倒數
var dailyData = [
    // 3/17
    {
        'webLink': 'https://www.etmall.com.tw/p/127832',
        'mobileLink': 'https://m.etmall.com.tw/p/127832',
        'appLink': 'etmall://open?pgid=53&eid=127832',
        'linkTitle': '滿額送益生菌6入',
    },

    // 3/18
    {
        'webLink': 'https://media.etmall.com.tw/sp/8627/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/8627/m/index.html',
        'appLink': 'etmall://open?pgid=1&gd=2767937',
        'linkTitle': '消費登記抽Bip U智慧手錶',
    },

    // 3/19
    {
        'webLink': 'https://www.etmall.com.tw/c3/149775',
        'mobileLink': 'https://www.etmall.com.tw/c3/149775',
        'appLink': 'etmall://open?pgid=9&cd=149775',
        'linkTitle': '指定品多件優惠',
    },

    // 3/20
    {
        'webLink': 'https://www.etmall.com.tw/gp/111415',
        'mobileLink': 'https://www.etmall.com.tw/gp/111415',
        'appLink': 'etmall://open?pgid=65&eid=111415',
        'linkTitle': '獨家特談限定買一送一',
    },

    // 3/21
    {
        'webLink': 'https://media.etmall.com.tw/sp/8612/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/8612/m/index.html',
        'appLink': 'etmall://open?pgid=1&gd=2767937',
        'linkTitle': '消費登入送原廠好禮',
    },

    // 3/22
    {
        'webLink': 'https://www.etmall.com.tw/bs/53385',
        'mobileLink': 'https://www.etmall.com.tw/bs/53385',
        'appLink': 'etmall://open?pgid=54&sd=53385',
        'linkTitle': '春季廣告新降品',
    },

    // 3/23
    {
        'webLink': 'https://www.etmall.com.tw/gp/126529',
        'mobileLink': 'https://m.etmall.com.tw/gp/126529',
        'appLink': 'etmall://open?pgid=65&eid=126529',
        'linkTitle': '換季保養5折起',
    },

    // 3/24
    {
        'webLink': 'https://www.etmall.com.tw/gp/126755',
        'mobileLink': 'https://www.etmall.com.tw/gp/126755',
        'appLink': 'etmall://open?pgid=65&eid=126755',
        'linkTitle': '可愛造型隨身碟9折起',
    },

    // 3/25
    {
        'webLink': 'https://www.etmall.com.tw/c3/147828',
        'mobileLink': 'https://www.etmall.com.tw/c3/147828',
        'appLink': 'etmall://open?pgid=9&cd=147828',
        'linkTitle': '洗衣膠球',
    },

    // 3/26
    {
        'webLink': 'https://www.etmall.com.tw/p/126842',
        'mobileLink': 'https://www.etmall.com.tw/p/126842',
        'appLink': 'etmall://open?pgid=53&eid=126842',
        'linkTitle': '歐洲洗沐保養2折起',
    },

    // 3/27
    {
        'webLink': 'https://media.etmall.com.tw/sp/8511/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/8511/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f8511%2fm%2fapp.html',
        'linkTitle': '送商品卡',
    },

    // 3/28
    {
        'webLink': 'https://www.etmall.com.tw/c3/51433',
        'mobileLink': 'https://www.etmall.com.tw/c3/51433',
        'appLink': 'etmall://open?pgid=9&cd=51433',
        'linkTitle': '滿額送好禮',
    },

    // 3/29
    {
        'webLink': 'https://www.etmall.com.tw/i/2905614',
        'mobileLink': 'https://www.etmall.com.tw/i/2905614',
        'appLink': 'etmall://open?pgid=1&gd=2905614',
        'linkTitle': 'ANNA SUI 安娜蘇 SKY 綺幻飛行女性淡香水 75ML -網',
    },

    // 3/30
    {
        'webLink': 'https://media.etmall.com.tw/sp/8669/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/8669/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f8669%2fm%2fapp.html',
        'linkTitle': 'Cowayx3Mx大金',
    },
    // 3/31
    {
        'webLink': 'https://www.etmall.com.tw/p/110251',
        'mobileLink': 'https://www.etmall.com.tw/p/110251',
        'appLink': 'etmall://open?pgid=53&eid=110251',
        'linkTitle': '出清3折up',
    },
    // 4/01
    {
        'webLink': 'https://www.etmall.com.tw/gp/127703',
        'mobileLink': 'https://m.etmall.com.tw/gp/127703',
        'appLink': 'etmall://open?pgid=65&eid=127703',
        'linkTitle': '春季購物67折UP',
    },
    // 4/02
    {
        'webLink': 'https://www.etmall.com.tw/i/2782136',
        'mobileLink': 'https://www.etmall.com.tw/i/2782136',
        'appLink': 'etmall://open?pgid=1&gd=2782136',
        'linkTitle': '最高CP值27型IPS面板液晶螢幕',
    },
    // 4/03
    {
        'webLink': 'https://www.etmall.com.tw/c2/126763',
        'mobileLink': 'https://www.etmall.com.tw/c2/126763',
        'appLink': 'etmall://open?pgid=9&sd=31772&cd=126763',
        'linkTitle': '超值特賣',
    },
    // 4/04
    {
        'webLink': 'https://www.etmall.com.tw/gp/126400',
        'mobileLink': 'https://www.etmall.com.tw/gp/126400',
        'appLink': 'etmall://open?pgid=65&eid=126400',
        'linkTitle': '滿額三重送',
    },
    // 4/05
    {
        'webLink': 'https://www.etmall.com.tw/bs/140133',
        'mobileLink': 'https://www.etmall.com.tw/bs/140133',
        'appLink': 'etmall://open?pgid=54&sd=140133',
        'linkTitle': '質感家居小物',
    },
    // 4/06
    {
        'webLink': 'https://www.etmall.com.tw/i/2423766',
        'mobileLink': 'https://www.etmall.com.tw/i/2423766',
        'appLink': 'etmall://open?pgid=1&gd=2423766',
        'linkTitle': 'MJ相機包多款任選',
    },
];