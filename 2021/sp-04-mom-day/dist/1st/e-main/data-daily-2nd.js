// 注意複製時標點符號都不能少，少了會壞掉
// 區塊：超級大牌
var dailyData = [
    // 4/23
    {
        'webLink': 'https://www.etmall.com.tw/gp/129855',
        'mobileLink': 'https://m.etmall.com.tw/gp/129855',
        'appLink': 'etmall://open?pgid=65&eid=129855',
        'linkTitle': '春季購物節75折起',
    },

    // 4/24
    {
        'webLink': 'https://www.etmall.com.tw/i/2908103',
        'mobileLink': 'https://www.etmall.com.tw/i/2908103',
        'appLink': 'etmall://open?pgid=1&gd=2908103',
        'linkTitle': 'msi微星 GL65 10SCSK-088TW 電競筆電 15吋/i7-10875H/8G/1T+256G SSD/GTX1650Ti/W10',
    },

    // 4/25
    {
        'webLink': 'https://www.etmall.com.tw/p/123277',
        'mobileLink': 'https://www.etmall.com.tw/p/123277',
        'appLink': 'etmall://open?pgid=53&eid=123277',
        'linkTitle': '$1元牛排限時搶購',
    },

    // 4/26
    {
        'webLink': 'https://www.etmall.com.tw/gp/129700',
        'mobileLink': 'https://www.etmall.com.tw/gp/129700',
        'appLink': 'etmall://open?pgid=65&eid=129700',
        'linkTitle': '佐登妮絲 寵愛女人 滿額贈四好禮',
    },

    // 4/27
    {
        'webLink': 'https://www.etmall.com.tw/c3/133050',
        'mobileLink': 'https://www.etmall.com.tw/c3/133050',
        'appLink': 'etmall://open?pgid=8&cd=133050',
        'linkTitle': '獨家組合↘台灣製雙鋼印醫療口罩100片(不挑色)+MyCard 10000點 點數卡',
    },

    // 4/28
    {
        'webLink': 'https://www.etmall.com.tw/c3/60467',
        'mobileLink': 'https://www.etmall.com.tw/c3/60467',
        'appLink': 'etmall://open?pgid=9&sd=7&cd=60467',
        'linkTitle': 'OSIM uCozy 3D 暖摩枕OS-288',
    },

    // 4/29
    {
        'webLink': 'https://www.etmall.com.tw/gp/112091',
        'mobileLink': 'https://m.etmall.com.tw/gp/112091',
        'appLink': 'etmall://open?pgid=65&eid=112091',
        'linkTitle': '年中慶禮盒超值價',
    },

    // 4/30
    {
        'webLink': 'https://www.etmall.com.tw/np/65333',
        'mobileLink': 'https://www.etmall.com.tw/np/65333',
        'appLink': 'etmall://open?pgid=65&eid=65333',
        'linkTitle': 'COACH & Michael Kors 經典時尚',
    },

    // 5/01
    {
        'webLink': 'https://www.etmall.com.tw/p/128856',
        'mobileLink': 'https://www.etmall.com.tw/p/128856',
        'appLink': 'etmall://open?pgid=53&eid=128856',
        'linkTitle': 'KERASYS可瑞絲★滿額贈好禮',
    },

    // 5/02
    {
        'webLink': 'https://media.etmall.com.tw/sp/8916/m/index.html',
        'mobileLink': 'https://media.etmall.com.tw/sp/8916/m/index.html',
        'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f8916%2fm%2fapp.html&t=%e9%8d%8b%e5%af%b6%e5%af%b5%e6%84%9b%e5%aa%bd%e5%92%aa%e6%ba%ab%e9%a6%a8%e7%8d%bb%e7%a6%ae%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9',
        'linkTitle': '寵愛媽咪 滿額贈鍋',
    },

    // 5/03
    {
        'webLink': 'https://www.etmall.com.tw/p/129857',
        'mobileLink': 'https://m.etmall.com.tw/p/129857',
        'appLink': 'etmall://open?pgid=53&eid=129857',
        'linkTitle': '一家人寵愛媽咪獻好禮',
    },

    // 5/04
    {
        'webLink': 'https://www.etmall.com.tw/gp/104158',
        'mobileLink': 'https://www.etmall.com.tw/gp/104158',
        'appLink': 'etmall://open?pgid=65&eid=104158',
        'linkTitle': '純棉內著7折up 買就送洗衣精',
    },

    // 5/05
    {
        'webLink': 'https://www.etmall.com.tw/gp/104538',
        'mobileLink': 'https://www.etmall.com.tw/gp/104538',
        'appLink': 'etmall://open?pgid=65&eid=104538',
        'linkTitle': '京城之霜獨家特談組38折up',
    },

    // 5/06
    {
        'webLink': 'https://www.etmall.com.tw/gp/111582',
        'mobileLink': 'https://www.etmall.com.tw/gp/111582',
        'appLink': 'etmall://open?pgid=65&eid=111582',
        'linkTitle': '護膝/護腰/★三重送↘1日領券再8折',
    },
    // 5/07
    {
        'webLink': 'https://www.etmall.com.tw/p/129782',
        'mobileLink': 'https://m.etmall.com.tw/p/129782',
        'appLink': 'etmall://open?pgid=53&eid=129782',
        'linkTitle': 'GO健康 好購5折起★下單再送梅日C體驗',
    },
    // 5/08
    {
        'webLink': 'https://www.etmall.com.tw/c3/126764',
        'mobileLink': 'https://www.etmall.com.tw/c3/126764',
        'appLink': 'etmall://open?pgid=9&sd=31772&cd=126764',
        'linkTitle': '健走科技頂級舒適',
    },
    // 5/09
    {
        'webLink': 'https://www.etmall.com.tw/i/2948399',
        'mobileLink': 'https://www.etmall.com.tw/i/2948399',
        'appLink': 'etmall://open?pgid=1&gd=2948399',
        'linkTitle': 'Kanebo 佳麗寶 COFFRET DOR水光我型口紅(送水漾迷你口紅)',
    },
    // 5/10
    {
        'webLink': 'https://www.etmall.com.tw/p/128916',
        'mobileLink': 'https://www.etmall.com.tw/p/128916',
        'appLink': 'etmall://open?pgid=53&eid=128916',
        'linkTitle': '指定商品+$1帶走茶尋味4入',
    },
];