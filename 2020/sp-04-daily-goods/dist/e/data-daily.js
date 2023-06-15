// 注意複製時標點符號都不能少，少了會壞掉
// 每天三樣，第一個填活動大小網app網址、第二三個提品填銷編

var dailyData = [
    // 4/6
     [
        {
            'webLink': 'https://www.etmall.com.tw/np/92817',
            'mobileLink': '',
             'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202003%2fSP_1115115%2fm%2fapp.html&t=%e6%b8%ac%e8%a9%a6%e5%b0%81%e5%8c%85%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2471413',
        '2532340',
    ],
    // 4/7
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115097/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115097%2fm%2fapp.html&t=%e9%a3%9f%e5%9c%a8%e5%ae%89%e5%bf%835%e6%8a%98UP%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2326831',
        '2520090',
    ],
    // 4/8
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115081/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115081%2fm%2fapp.html&t=%e6%88%b0%e7%96%ab%e4%b8%8d%e5%87%ba%e9%96%80+%e5%81%a5%e5%ba%b7%e9%80%81%e5%88%b0%e5%ae%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2506928',
        '2427891',
    ],
    // 4/9
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115149/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115149%2fm%2fapp.html',
        },
        '2576513',
        '2579201',
    ],
    // 4/10
    [
        {
            'webLink': 'https://www.etmall.com.tw/np/92817',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202003%2fSP_1115115%2fm%2fapp.html&t=%e6%b8%ac%e8%a9%a6%e5%b0%81%e5%8c%85%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2512197',
        '2491928',
    ],
    // 4/11
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115081/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115081%2fm%2fapp.html&t=%e6%88%b0%e7%96%ab%e4%b8%8d%e5%87%ba%e9%96%80+%e5%81%a5%e5%ba%b7%e9%80%81%e5%88%b0%e5%ae%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2491791',
        '2291145',
    ],
    // 4/12
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202003/SP_1115143/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202003%2fSP_1115143%2fm%2fapp.html',
        },
        '2538270',
        '2578876',
    ],
    // 4/13
    [
        {
            'webLink': 'https://www.etmall.com.tw/np/92817',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202003%2fSP_1115115%2fm%2fapp.html&t=%e6%b8%ac%e8%a9%a6%e5%b0%81%e5%8c%85%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2471413',
        '2532340',
    ],
    // 4/14
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115097/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115097%2fm%2fapp.html&t=%e9%a3%9f%e5%9c%a8%e5%ae%89%e5%bf%835%e6%8a%98UP%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2326831',
        '2520090',
    ],
    // 4/15
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115081/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115081%2fm%2fapp.html&t=%e6%88%b0%e7%96%ab%e4%b8%8d%e5%87%ba%e9%96%80+%e5%81%a5%e5%ba%b7%e9%80%81%e5%88%b0%e5%ae%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2506928',
        '2427891',
    ],
    // 4/16
    [
        {
            'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115149/w/index.html',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115149%2fm%2fapp.html',
        },
        '2576513',
        '2579201',
    ],
    // 4/17
    [
        {
            'webLink': 'https://www.etmall.com.tw/np/92817',
            'mobileLink': '',
            'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202003%2fSP_1115115%2fm%2fapp.html&t=%e6%b8%ac%e8%a9%a6%e5%b0%81%e5%8c%85%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2',
        },
        '2512197',
        '2491928',
    ],
];