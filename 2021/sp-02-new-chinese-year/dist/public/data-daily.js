// 注意複製時標點符號都不能少，少了會壞掉
// 區塊：最牛品牌
var dailyData = [
    // 1/19
    {
        'webLink': 'https://media.etmall.com.tw/sp/7692/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7692/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7692%2fm%2fapp.html',
        'linkTitle': '大嬸婆 圓滿團圓年菜10件組(東森獨家送冰糖酒粕滷豬腳)',
    },

    // 1/20
    {
        'webLink': 'https://www.etmall.com.tw/gp/123187',
        'mobileLink': 'https://www.etmall.com.tw/gp/123187',
        'appLink': 'etmall://open?pgid=65&eid=123187',
        'linkTitle': '牛轉新春67折起',
    },

    // 1/21
    {
        'webLink': 'https://media.etmall.com.tw/sp/7911/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7911/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7911%2fm%2fapp.html',
        'linkTitle': 'dyson回饋5%東森幣',
    },

    // 1/22
    {
        'webLink': 'https://www.etmall.com.tw/gp/119112',
        'mobileLink': 'https://www.etmall.com.tw/gp/119112',
        'appLink': 'etmall://open?pgid=65&eid=119112',
        'linkTitle': '【JORDON 橋登】 GORE-TEX長版時尚風衣 ',
    },

    // 1/23
    {
        'webLink': 'https://www.etmall.com.tw/p/121733',
        'mobileLink': 'https://www.etmall.com.tw/p/121733',
        'appLink': 'etmall://open?pgid=53&eid=121733',
        'linkTitle': 'MAC x MAKE UP FOR EVER人氣底妝霸主!',
    },

    // 1/24
    {
        'webLink': 'https://media.etmall.com.tw/sp/7707/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7707/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7707%2fm%2fapp.html',
        'linkTitle': '滿額贈超商電子禮券',
    },

    // 1/25
    {
        'webLink': 'https://media.etmall.com.tw/sp/7817/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7817/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7817%2fm%2fapp.html',
        'linkTitle': 'LooCa抽福氣好禮',
    },

    // 1/26
    {
        'webLink': 'https://www.etmall.com.tw/gp/108079',
        'mobileLink': 'https://m.etmall.com.tw/gp/108079',
        'appLink': 'etmall://open?pgid=65&eid=108079',
        'linkTitle': '白蘭氏獨家限量7折up',
    },

    // 1/27
    {
        'webLink': 'https://media.etmall.com.tw/sp/7544/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7544/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7544%2fm%2fapp.html',
        'linkTitle': '日立指定品送餐券',
    },

    // 1/28
    {
        'webLink': 'https://media.etmall.com.tw/sp/7613/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7613/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7613%2fm%2fapp.html&t=%e5%ba%b7%e5%af%a7%e5%9c%98%e5%9c%93%e6%99%82%e5%88%bb3%e6%8a%98%e8%b5%b7%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9',
        'linkTitle': '(東森獨家)【美國康寧 CORELLE】 9件式餐盤組 均一價',
    },

    // 1/29
    {
        'webLink': 'https://www.etmall.com.tw/gp/122057',
        'mobileLink': 'https://www.etmall.com.tw/gp/122057',
        'appLink': 'etmall://open?pgid=65&eid=122057',
        'linkTitle': 'suisai淨透酵素粉新年3件優惠組',
    },

    // 1/30
    {
        'webLink': 'https://media.etmall.com.tw/sp/7979/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7979/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7979%2fm%2fapp.html&t=OPPO+%e9%96%8b%e8%b3%a3%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9',
        'linkTitle': 'Reno5 Pro',
    },

    // 1/31
    {
        'webLink': 'https://www.etmall.com.tw/gp/12254',
        'mobileLink': 'https://www.etmall.com.tw/c3/137524',
        'appLink': 'etmall://open?pgid=9&sd=7&cd=137524',
        'linkTitle': 'TAKASIMA高島 迎新好運抽',
    },

    // 2/01
    {
        'webLink': 'https://www.etmall.com.tw/p/121399',
        'mobileLink': 'https://www.etmall.com.tw/p/121399',
        'appLink': 'etmall://open?pgid=53&eid=121399',
        'linkTitle': '箱購鈔省↘57折起',
    },
    // 2/02
    {
        'webLink': 'https://media.etmall.com.tw/sp/7261/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/7261/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f7261%2fm%2fapp.html',
        'linkTitle': '指定滿額抽除濕機',
    },
];