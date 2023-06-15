// 注意複製時標點符號都不能少，少了會壞掉
// 區塊：大牌倒數
var dailyData = [
    // 4/07
    {
        'webLink': 'https://www.etmall.com.tw/bc3/124267',
        'mobileLink': 'https://www.etmall.com.tw/bc3/124267',
        'appLink': 'etmall://open?pgid=9&cd=124267',
        'linkTitle': '石墨烯的專家 給母親最好的',
    },

    // 4/08
    {
        'webLink': 'https://www.etmall.com.tw/p/129301',
        'mobileLink': 'https://m.etmall.com.tw/p/129301',
        'appLink': 'etmall://open?pgid=53&eid=129301',
        'linkTitle': '愛媽咪 送好禮',
    },

    // 4/09
    {
        'webLink': 'https://www.etmall.com.tw/i/2667978',
        'mobileLink': 'https://www.etmall.com.tw/i/2667978',
        'appLink': 'etmall://open?pgid=1&gd=2667978',
        'linkTitle': '限時活動雙重送!!!mooInk Pro 10.3吋電子書閱讀器 (搭贈mooInk折疊保護皮套)',
    },

    // 4/10
    {
        'webLink': 'https://www.etmall.com.tw/gp/115133',
        'mobileLink': 'https://www.etmall.com.tw/gp/115133',
        'appLink': 'etmall://open?pgid=65&eid=115133',
        'linkTitle': '母親節精選',
    },

    // 4/11
    {
        'webLink': 'https://www.etmall.com.tw/gp/129492',
        'mobileLink': 'https://www.etmall.com.tw/gp/129492',
        'appLink': 'etmall://open?pgid=65&eid=129492',
        'linkTitle': 'StriVectin 皺效奇蹟 滿額送2好禮',
    },

    // 4/12
    {
        'webLink': 'https://www.etmall.com.tw/i/2800745',
        'mobileLink': 'https://www.etmall.com.tw/i/2800745',
        'appLink': 'etmall://open?pgid=1&gd=2800745',
        'linkTitle': '【u-ta】迷你單軸穩定器藍牙自拍三腳架L08(穩拍必備)-網',
    },

    // 4/13
    {
        'webLink': 'https://www.etmall.com.tw/p/57685',
        'mobileLink': 'https://www.etmall.com.tw/p/57685',
        'appLink': 'etmall://open?pgid=53&eid=57685',
        'linkTitle': '滿$699贈古早味雙蔥細麵乙袋',
    },

    // 4/14
    {
        'webLink': 'https://www.etmall.com.tw/gp/126322',
        'mobileLink': 'https://m.etmall.com.tw/gp/126322',
        'appLink': 'etmall://open?pgid=65&eid=126322',
        'linkTitle': '船井感恩母親節 好禮送 限時75折up',
    },

    // 4/15
    {
        'webLink': 'https://www.etmall.com.tw/i/2979583',
        'mobileLink': 'https://www.etmall.com.tw/i/2979583',
        'appLink': 'etmall://open?pgid=1&gd=2979583',
        'linkTitle': 'Vivo X60 _6.56吋八核心智慧5G手機(8G+128G)',
    },

    // 4/16
    {
        'webLink': 'https://www.etmall.com.tw/c3/56237',
        'mobileLink': 'https://www.etmall.com.tw/c3/56237',
        'appLink': 'etmall://open?pgid=9&sd=7&cd=56237',
        'linkTitle': 'tokuyo mini 玩美椅 Pro 按摩沙發按摩椅 TC-296',
    },

    // 4/17
    {
        'webLink': 'https://www.etmall.com.tw/gp/129134',
        'mobileLink': 'https://www.etmall.com.tw/gp/129134',
        'appLink': 'etmall://open?pgid=65&eid=129134',
        'linkTitle': '全品牌聯慶母親節暖身三重送',
    },

    // 4/18
    {
        'webLink': 'https://www.etmall.com.tw/i/2964253',
        'mobileLink': 'https://www.etmall.com.tw/i/2964253',
        'appLink': 'etmall://open?pgid=1&gd=2964253',
        'linkTitle': '【Amazfit 華米】2021升級版T-Rex Pro軍規認證智能運動智慧手錶',
    },

    // 4/19
    {
        'webLink': 'https://www.etmall.com.tw/gp/122866',
        'mobileLink': 'https://www.etmall.com.tw/gp/122866',
        'appLink': 'etmall://open?pgid=65&eid=122866',
        'linkTitle': 'Georg Jensen母親節精選',
    },

    // 4/20
    {
        'webLink': 'https://www.etmall.com.tw/gp/108079',
        'mobileLink': 'https://m.etmall.com.tw/gp/108079',
        'appLink': 'etmall://open?pgid=65&eid=108079',
        'linkTitle': '精選熱銷top↘7折up',
    },
    // 4/21
    {
        'webLink': 'https://www.etmall.com.tw/i/2767945',
        'mobileLink': 'https://www.etmall.com.tw/i/2767945',
        'appLink': 'etmall://open?pgid=1&gd=2767945',
        'linkTitle': 'Apple Watch Series 6(GPS)44mm金色鋁金屬錶殼+粉沙色運動錶帶',
    },
    // 4/22
    {
        'webLink': 'https://www.etmall.com.tw/c3/149423',
        'mobileLink': 'https://www.etmall.com.tw/c3/149423',
        'appLink': 'etmall://open?pgid=8&cd=149423',
        'linkTitle': '買就送City Café',
    },
    // 4/23
    {
        'webLink': 'https://www.etmall.com.tw/gp/129855',
        'mobileLink': 'https://m.etmall.com.tw/gp/129855',
        'appLink': 'etmall://open?pgid=65&eid=129855',
        'linkTitle': '春季購物節75折起',
    },
];