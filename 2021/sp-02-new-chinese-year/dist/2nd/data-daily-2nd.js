// 注意複製時標點符號都不能少，少了會壞掉
// 區塊：最牛品牌
var dailyData = [
    // 2/02
    {
        'webLink': 'https://media.etmall.com.tw/sp/7261/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7261/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7261%2fm%2fapp.html',
        'linkTitle': '象印 指定滿額抽除濕機',
    },

    // 2/03
    {
        'webLink': 'https://media.etmall.com.tw/sp/7932/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7932/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7932%2fm%2fapp.html',
        'linkTitle': '【盛香珍】堅果三重奏710g(莓好綜合果+綜合纖果+無調味綜合果)',
    },
    // 2/04
    {
        'webLink': '"https://www.etmall.com.tw/gp/112091',
        'mobileLink': 'https://m.etmall.com.tw/gp/112091"',
        'appLink': 'etmall://open?pgid=65&eid=112091',
        'linkTitle': '華齊堂年節禮盒優惠中',
    },
    // 2/05
    {
        'webLink': 'https://www.etmall.com.tw/i/2001985',
        'mobileLink': 'https://www.etmall.com.tw/i/2001985',
        'appLink': 'etmall://open?pgid=1&gd=2001985',
        'linkTitle': 'ACER 32型VA 4K液晶螢幕 ET322QK 送熱壓三明治鬆餅機',
    },
    // 2/06
    {
        'webLink': 'https://www.etmall.com.tw/gp/104158',
        'mobileLink': 'https://www.etmall.com.tw/gp/104158',
        'appLink': 'etmall://open?pgid=65&eid=104158',
        'linkTitle': '三花內著抗寒',
    },
    // 2/07
    {
        'webLink': '"https://www.etmall.com.tw/p/123447',
        'mobileLink': 'https://m.etmall.com.tw/p/123447"',
        'appLink': 'etmall://open?pgid=53&eid=123447',
        'linkTitle': '葡萄王迎新5折起豪禮雙重送',
    },

    // 2/08
    {
        'webLink': 'https://www.etmall.com.tw/gp/119984',
        'mobileLink': 'https://www.etmall.com.tw/gp/119984',
        'appLink': 'etmall://open?pgid=1&gd=119984',
        'linkTitle': '【加送好禮】Apacer 宇瞻 AH334 Kitty X Line 32GB 派對聯名碟 -加送雙層玻璃杯(款式隨機)',
    },
    // 2/09
    {
        'webLink': 'https://www.etmall.com.tw/c3/135930',
        'mobileLink': 'https://www.etmall.com.tw/c3/135930',
        'appLink': 'etmall://open?pgid=9&sd=5&cd=135930',
        'linkTitle': 'TROMSO-戶外植絨橡膠厚實刮泥地墊_大45x75cm 多款任選-網',
    },
    // 2/10
    {
        'webLink': 'https://www.etmall.com.tw/p/122846',
        'mobileLink': 'https://www.etmall.com.tw/p/122846',
        'appLink': 'etmall://open?pgid=53&eid=122846',
        'linkTitle': 'BIOCROWN百匡滿490贈輕奢養顏潔淨組',
    },
    // 2/11
    {
        'webLink': 'https://www.etmall.com.tw/i/2715335',
        'mobileLink': 'https://www.etmall.com.tw/i/2715335',
        'appLink': 'etmall://open?pgid=1&gd=2715335',
        'linkTitle': 'SONY WH-1000XM4 無線藍牙降噪耳罩式耳機',
    },
    // 2/12
    {
        'webLink': 'https://www.etmall.com.tw/i/2780433',
        'mobileLink': 'https://www.etmall.com.tw/i/2780433',
        'appLink': 'etmall://open?pgid=1&gd=2780433',
        'linkTitle': 'Jcode真愛密碼金飾 愛鍊黃金耳環',
    },

    // 2/13
    {
        'webLink': 'https://www.etmall.com.tw/gp/123448',
        'mobileLink': 'https://m.etmall.com.tw/gp/123448',
        'appLink': 'etmall://open?pgid=65&eid=123448',
        'linkTitle': '牛年搶纖購69折起',
    },
    // 2/14
    {
        'webLink': 'https://www.etmall.com.tw/i/2872041',
        'mobileLink': 'https://www.etmall.com.tw/i/2872041',
        'appLink': 'etmall://open?pgid=1&gd=2872041',
        'linkTitle': 'Apple Watch SE',
    },
    // 2/15
    {
        'webLink': 'https://www.etmall.com.tw/c3/92422',
        'mobileLink': 'https://www.etmall.com.tw/c3/92422',
        'appLink': 'etmall://open?pgid=9&cd=92422',
        'linkTitle': '馬牌 好禮給你 買指定輪胎獨家送臭氧除菌機',
    },
    // 2/16
    {
        'webLink': 'https://www.etmall.com.tw/gp/115686',
        'mobileLink': 'https://www.etmall.com.tw/gp/115686',
        'appLink': 'etmall://open?pgid=65&eid=115686',
        'linkTitle': '大金買就送掛燙機',
    },
    // 2/17
    {
        'webLink': 'https://www.etmall.com.tw/gp/113734',
        'mobileLink': 'https://www.etmall.com.tw/gp/113734',
        'appLink': 'etmall://open?pgid=65&eid=113734',
        'linkTitle': '日本MARUFUKU蠶絲內衣8件組',
    },
];