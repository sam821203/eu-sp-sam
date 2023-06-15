// 牛年行大運
var linkTime = [
    // 活動開始時間，需要新增插在這句後面，日期不能相同


    ["2021/4/2 11:00"],
    ["2021/4/2 14:00"],
    ["2021/4/2 17:00"],
    ["2021/4/2 21:00"],

    ["2021/4/3 11:00"],
    ["2021/4/3 14:00"],
    ["2021/4/3 17:00"],
    ["2021/4/3 21:00"],

    ["2021/4/4 11:00"],
    ["2021/4/4 14:00"],
    ["2021/4/4 17:00"],
    ["2021/4/4 21:00"],

    ["2021/4/5 11:00"],
    ["2021/4/5 14:00"],
    ["2021/4/5 17:00"],
    ["2021/4/5 21:00"],

    // 活動結束時間，需要新增插在這句前面
];
var linkData = [
    // 4/2
    {// 11:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_8a34c6d440f37218a922666294ef8a1d',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_8a34c6d440f37218a922666294ef8a1d',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_8a34c6d440f37218a922666294ef8a1d&islogin=1',
        // toggleClass: true,
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_426dfd249ec8fe4ba8e3fc3fdcc39d77',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_426dfd249ec8fe4ba8e3fc3fdcc39d77',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_426dfd249ec8fe4ba8e3fc3fdcc39d77&islogin=1',

    },
    {// 17:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_966c831bf835d9be31f472cf783e2de2',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_966c831bf835d9be31f472cf783e2de2',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_966c831bf835d9be31f472cf783e2de2&islogin=1',
    },
    {// 21:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_646d8196e5059d75cbb6060a4f5a5831',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_646d8196e5059d75cbb6060a4f5a5831',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_646d8196e5059d75cbb6060a4f5a5831&islogin=1',
    },

    // 4/3
    {// 11:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_15d072b34d879d42ad5de35842c55d7f',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_15d072b34d879d42ad5de35842c55d7f',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_15d072b34d879d42ad5de35842c55d7f&islogin=1',
        // toggleClass: true,
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_a0a5bd87cbbc6eb61c073f45af250af0',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_a0a5bd87cbbc6eb61c073f45af250af0',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_a0a5bd87cbbc6eb61c073f45af250af0&islogin=1',

    },
    {// 17:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_9d24a6f412d55430ac72ed316b46c436',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_9d24a6f412d55430ac72ed316b46c436',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_9d24a6f412d55430ac72ed316b46c436&islogin=1',
    },
    {// 21:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_d4f1543d697fbd3095ee25101db0202f',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_d4f1543d697fbd3095ee25101db0202f',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_d4f1543d697fbd3095ee25101db0202f&islogin=1',
    },

    // 4/4
    {// 11:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_b3b0dbbffc431e7eec25811b00ae72e6',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_b3b0dbbffc431e7eec25811b00ae72e6',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_b3b0dbbffc431e7eec25811b00ae72e6&islogin=1',
        // toggleClass: true,
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_0ac1be7e7157068e46711964ed539aee',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_0ac1be7e7157068e46711964ed539aee',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_0ac1be7e7157068e46711964ed539aee&islogin=1',

    },
    {// 17:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_7ece6c4552088f18fc0b371c5bc03524',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_7ece6c4552088f18fc0b371c5bc03524',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_7ece6c4552088f18fc0b371c5bc03524&islogin=1',
    },
    {// 21:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_7f365f776a90702ca1ef82432b62dd30',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_7f365f776a90702ca1ef82432b62dd30',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_7f365f776a90702ca1ef82432b62dd30&islogin=1',
    },

    // 4/5
    {// 11:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_fa6682e8024b3579ef1b7abaa01cb989',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_fa6682e8024b3579ef1b7abaa01cb989',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_fa6682e8024b3579ef1b7abaa01cb989&islogin=1',
        // toggleClass: true,
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_e4e0dc01bcd47a2ac9d7d141883568a6',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_e4e0dc01bcd47a2ac9d7d141883568a6',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_e4e0dc01bcd47a2ac9d7d141883568a6&islogin=1',

    },
    {// 17:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_40369c9822e94446e688768310e0680e',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_40369c9822e94446e688768310e0680e',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_40369c9822e94446e688768310e0680e&islogin=1',
    },
    {// 21:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_4c7f6e3aeee95ab4e1b63c25e7196f38',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202103_4c7f6e3aeee95ab4e1b63c25e7196f38',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202103_4c7f6e3aeee95ab4e1b63c25e7196f38&islogin=1',
    },

];

