// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var linkTime = [
    // 活動開始時間，需要新增插在這句後面，日期不能相同
    ["2020/06/16 12:00:00"],
    ["2020/06/17 12:00:00"],
    ["2020/06/18 12:00:00"],

    // 活動結束時間，需要新增插在這句前面
];
var linkData = [
    // 每次顯示三品，final輪(最後一輪顯示後)全露出。
    // 需要複製請連著"{},"整個區塊複製，限28中文字。
    // 第一輪露出
    {
        'webLink': '#note1',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F162&t=0616%20618_1%E5%85%83%E6%8A%98%E5%83%B9%E5%88%B8',
    },
    {
        'webLink': '#note2',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F163&t=0617%20618_1%E5%85%83%E6%8A%98%E5%83%B9%E5%88%B8',
    },
    {
        'webLink': '#note3',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F123&t=1231%2023%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
];