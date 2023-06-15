// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var linkTime = [
    // 活動開始時間，需要新增插在這句後面，日期不能相同
    // 12/31
    ["2019/12/31 01:01:00"],
    ["2019/12/31 07:01:00"],
    ["2019/12/31 11:01:00"],
    // 01/01
    ["2020/01/01 01:01:00"],
    ["2020/01/01 07:01:00"],
    ["2020/01/01 11:01:00"],
    // 01/02
    ["2020/01/02 01:01:00"],
    ["2020/01/02 07:01:00"],
    ["2020/01/02 11:01:00"],

    // 活動結束時間，需要新增插在這句前面
];
var linkData = [
    // 每次顯示三品，final輪(最後一輪顯示後)全露出。
    // 需要複製請連著"{},"整個區塊複製，限28中文字。
    // 第一輪露出
    // 12/31
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F121&t=1231%2013%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F122&t=1231%2019%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F123&t=1231%2023%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    // 01/01
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F124&t=0101%2013%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F125&t=0101%2019%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F126&t=0101%2023%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    // 01/02
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F127&t=0102%2013%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F128&t=0102%2019%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
    {
        'webLink': '#note',
        'mobileLink': '#note',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F129&t=0102%2023%3A01%20%E5%A3%B9%E5%9C%93%E8%AE%8A%E5%8D%83%E5%85%83',
    },
];