// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var linkTime = [
    // 活動開始時間，需要新增插在這句後面，日期不能相同
    ["2020/5/5 12:12:00"],
    ["2020/5/6 12:12:00"],
    ["2020/5/7 12:12:00"],
    // 活動結束時間，需要新增插在這句前面
];
var linkData = [
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F150&t=0401%2044%E6%BF%80%E6%90%B6_1%E6%8A%98%E5%83%B9%E5%88%B8',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F151&t=0402%2044%E6%BF%80%E6%90%B6_1%E6%8A%98%E5%83%B9%E5%88%B8',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F152&t=0403%2044%E6%BF%80%E6%90%B6_1%E6%8A%98%E5%83%B9%E5%88%B8',
    },
];

var imgTime = [
    // 換圖開始時間，需要新增插在這句後面，日期不能相同
    ["2020/5/5 10:00:00"],
    ["2020/5/6 10:00:00"],
    ["2020/5/7 10:00:30"],
    // 活動結束時間，需要新增插在這句前面
];

var imgData = [
    'promo-6-pic-1.png',
    'promo-6-pic-2.png',
    'promo-6-pic-3.png',
];