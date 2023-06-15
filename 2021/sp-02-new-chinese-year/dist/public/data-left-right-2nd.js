// 牛年行大運
var linkTime = [
    // 活動開始時間，需要新增插在這句後面，日期不能相同
    ["2021/2/10 10:00"],
    ["2021/2/10 12:00"],
    ["2021/2/10 14:00"],
    ["2021/2/10 16:00"],
    ["2021/2/10 18:00"],
    ["2021/2/10 20:00"],
    ["2021/2/10 22:00"],
    ["2021/2/11 00:00"],

    ["2021/2/11 10:00"],
    ["2021/2/11 12:00"],
    ["2021/2/11 14:00"],
    ["2021/2/11 16:00"],
    ["2021/2/11 18:00"],
    ["2021/2/11 20:00"],
    ["2021/2/11 22:00"],
    ["2021/2/12 00:00"],

    ["2021/2/12 10:00"],
    ["2021/2/12 12:00"],
    ["2021/2/12 14:00"],
    ["2021/2/12 16:00"],
    ["2021/2/12 18:00"],
    ["2021/2/12 20:00"],
    ["2021/2/12 22:00"],
    ["2021/2/13 00:00"],

    ["2021/2/13 10:00"],
    ["2021/2/13 12:00"],
    ["2021/2/13 14:00"],
    ["2021/2/13 16:00"],
    ["2021/2/13 18:00"],
    ["2021/2/13 20:00"],
    ["2021/2/13 22:00"],
    ["2021/2/14 00:00"],

    ["2021/2/14 10:00"],
    ["2021/2/14 12:00"],
    ["2021/2/14 14:00"],
    ["2021/2/14 16:00"],
    ["2021/2/14 18:00"],
    ["2021/2/14 20:00"],
    ["2021/2/14 22:00"],
    ["2021/2/15 00:00"],

    ["2021/2/15 10:00"],
    ["2021/2/15 12:00"],
    ["2021/2/15 14:00"],
    ["2021/2/15 16:00"],
    ["2021/2/15 18:00"],
    ["2021/2/15 20:00"],
    ["2021/2/15 22:00"],
    ["2021/2/16 00:00"],

    ["2021/2/16 10:00"],
    ["2021/2/16 12:00"],
    ["2021/2/16 14:00"],
    ["2021/2/16 16:00"],
    ["2021/2/16 18:00"],
    ["2021/2/16 20:00"],
    ["2021/2/16 22:00"],
    ["2021/2/17 00:00"],

    // 活動結束時間，需要新增插在這句前面
];
var linkData = [
    // 2/10
    {// 10:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_133dc3bd82e23a79168b927ecc976f63',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_133dc3bd82e23a79168b927ecc976f63',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_133dc3bd82e23a79168b927ecc976f63&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021010&islogin=1',
        // toggleClass: true,
    },
    {// 12:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_3538af6d8a0752285244818f08dbb9dd',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_3538af6d8a0752285244818f08dbb9dd',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_3538af6d8a0752285244818f08dbb9dd&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021012&islogin=1',

    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_7374cb63f28e39b0905cdf8d1ef96924',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_7374cb63f28e39b0905cdf8d1ef96924',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_7374cb63f28e39b0905cdf8d1ef96924&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021014&islogin=1',
    },
    {// 16:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_368318dab5847cede466ea33d2944f9b',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_368318dab5847cede466ea33d2944f9b',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_368318dab5847cede466ea33d2944f9b&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021016&islogin=1',
    },
    {// 18:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_63cdd18a5cfa347213bb5b181e227758',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_63cdd18a5cfa347213bb5b181e227758',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_63cdd18a5cfa347213bb5b181e227758&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021018&islogin=1',
    },
    {// 20:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_4869d3145d63fdd5229bd7e7247bc3a9',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_4869d3145d63fdd5229bd7e7247bc3a9',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_4869d3145d63fdd5229bd7e7247bc3a9&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021020&islogin=1',
    },
    {// 22:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1b9b1ab2a4edc09c3fca77c910545d47',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1b9b1ab2a4edc09c3fca77c910545d47',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_1b9b1ab2a4edc09c3fca77c910545d47&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021022',
    },

    // 2/11
    {// 00:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_35cf5720ddd3b3072c754422e69e4a28',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_35cf5720ddd3b3072c754422e69e4a28',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_35cf5720ddd3b3072c754422e69e4a28&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021024',
    },
    {// 10:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_2a37754c1bae0845f218a368574203fc',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_2a37754c1bae0845f218a368574203fc',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_2a37754c1bae0845f218a368574203fc&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021110&islogin=1',
    },
    {// 12:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_6c95e05d786c9535b388289d6854904b',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_6c95e05d786c9535b388289d6854904b',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_6c95e05d786c9535b388289d6854904b&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021112&islogin=1',
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_afeef20c75b42c07511209c07240fbc9',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_afeef20c75b42c07511209c07240fbc9',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_afeef20c75b42c07511209c07240fbc9&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021114&islogin=1',
    },
    {// 16:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_8d8802f6d9c9bb4711ca76c4fbb7262b',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_8d8802f6d9c9bb4711ca76c4fbb7262b',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_8d8802f6d9c9bb4711ca76c4fbb7262b&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021116&islogin=1',
    },
    {// 18:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1ec95686394bc397e4899bcac0264e56',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1ec95686394bc397e4899bcac0264e56',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_1ec95686394bc397e4899bcac0264e56&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021118&islogin=1',
    },
    {// 20:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_ba91a4cf7a887f3e302df741a55af040',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_ba91a4cf7a887f3e302df741a55af040',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_ba91a4cf7a887f3e302df741a55af040&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021120&islogin=1',
    },
    {// 22:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_2d97c4559a42a551b3a7f33c6107e645',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_2d97c4559a42a551b3a7f33c6107e645',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_2d97c4559a42a551b3a7f33c6107e645&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021122&islogin=1',
    },

    // 2/12
    {// 00:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_bf4bdc75ef77e0fb113e24ebbff74f35',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_bf4bdc75ef77e0fb113e24ebbff74f35',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_bf4bdc75ef77e0fb113e24ebbff74f35&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021124&islogin=1',
    },
    {// 10:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_843433b894e8661fd7855f07d09a8203',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_843433b894e8661fd7855f07d09a8203',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_843433b894e8661fd7855f07d09a8203&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021210&islogin=1',
    },
    {// 12:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_efe3bfd4ac68f9ad4b70ee174c7d8c7f',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_efe3bfd4ac68f9ad4b70ee174c7d8c7f',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_efe3bfd4ac68f9ad4b70ee174c7d8c7f&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021212&islogin=1',
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_ecd110c069d9719cb549b1b5f115b3d1',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_ecd110c069d9719cb549b1b5f115b3d1',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_ecd110c069d9719cb549b1b5f115b3d1&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021214&islogin=1',
    },
    {// 16:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_ddf9013519f0b0e440fc0c12e8cc8871',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_ddf9013519f0b0e440fc0c12e8cc8871',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_ddf9013519f0b0e440fc0c12e8cc8871&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021216&islogin=1',
    },
    {// 18:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_cba2c53fc9d70fad1355b8dd1de62db1',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_cba2c53fc9d70fad1355b8dd1de62db1',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_cba2c53fc9d70fad1355b8dd1de62db1&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021218&islogin=1',
    },
    {// 20:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_66d0fbb4d5ed3460502e05d67ea419ec',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_66d0fbb4d5ed3460502e05d67ea419ec',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_66d0fbb4d5ed3460502e05d67ea419ec&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021220&islogin=1',
    },
    {// 22:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1dbcc2ec6f4be13e4b0c6c8f16682d95',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1dbcc2ec6f4be13e4b0c6c8f16682d95',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_1dbcc2ec6f4be13e4b0c6c8f16682d95&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021222&islogin=1',
    },

    // 2/13
    {// 00:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_725e9f263e14e75beeb94cb372cbc264',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_725e9f263e14e75beeb94cb372cbc264',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_725e9f263e14e75beeb94cb372cbc264&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021224&islogin=1',
    },
    {// 10:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_86854c5123eccae2406cab99420a8f05',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_86854c5123eccae2406cab99420a8f05',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_86854c5123eccae2406cab99420a8f05&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021310&islogin=1',
    },
    {// 12:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0447f4de768d76bdb5d3830d43e658c7',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0447f4de768d76bdb5d3830d43e658c7',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_86854c5123eccae2406cab99420a8f05&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021310&islogin=1',
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_a72de959782518fe80668fdb180f4690',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_a72de959782518fe80668fdb180f4690',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_a72de959782518fe80668fdb180f4690&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021314&islogin=1',
    },
    {// 16:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_080702b95b23bf843d9ce7241d38a4f6',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_080702b95b23bf843d9ce7241d38a4f6',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_080702b95b23bf843d9ce7241d38a4f6&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021316&islogin=1',
    },
    {// 18:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_86080f9f41ab3752c298c8ee0411ea06',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_86080f9f41ab3752c298c8ee0411ea06',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_86080f9f41ab3752c298c8ee0411ea06&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021318&islogin=1',
    },
    {// 20:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_579b802ca2a3a3702f401fdd72e7e940',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_579b802ca2a3a3702f401fdd72e7e940',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_579b802ca2a3a3702f401fdd72e7e940&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021320&islogin=1',
    },
    {// 22:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1cd1199336db174e7a94a735eb9c491d',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_1cd1199336db174e7a94a735eb9c491d',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_1cd1199336db174e7a94a735eb9c491d&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021322&islogin=1',
    },

    // 2/14
    {// 00:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0870cdde4047584684c29ccbd5efa157',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0870cdde4047584684c29ccbd5efa157',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_0870cdde4047584684c29ccbd5efa157&t=%E6%96%B0%E6%98%A5%E5%88%AE%E5%8D%83%E8%90%AC%E7%B4%85%E5%8C%85021324&islogin=1',
    },
    {// 10:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_3b3b9c51f0873dccb1f85cc361fe2415',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_3b3b9c51f0873dccb1f85cc361fe2415',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_3b3b9c51f0873dccb1f85cc361fe2415&islogin=1',
    },
    {// 12:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_3af08a614e2d92c51e8dcc4a51ca5cc9',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_3af08a614e2d92c51e8dcc4a51ca5cc9',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_3af08a614e2d92c51e8dcc4a51ca5cc9&islogin=1',
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_145b2758af78ec99a17ca15574356028',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_145b2758af78ec99a17ca15574356028',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_145b2758af78ec99a17ca15574356028&islogin=1',
    },
    {// 16:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_05fe850f2607ea77b80c13b7e57bc5e3',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_05fe850f2607ea77b80c13b7e57bc5e3',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_05fe850f2607ea77b80c13b7e57bc5e3&islogin=1',
    },
    {// 18:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0e741578cc2f8efe6d45839932dac982',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0e741578cc2f8efe6d45839932dac982',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_0e741578cc2f8efe6d45839932dac982&islogin=1',
    },
    {// 20:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_634a772bd1bf01c3c9deea15e4a0d6b2',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_634a772bd1bf01c3c9deea15e4a0d6b2',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_634a772bd1bf01c3c9deea15e4a0d6b2&islogin=1',
    },
    {// 22:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_dd632ec51c57d11d0f8b44d31047be8a',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_dd632ec51c57d11d0f8b44d31047be8a',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_dd632ec51c57d11d0f8b44d31047be8a&islogin=1',
    },

    // 2/15
    {// 00:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_98a9be25c1508b125e3b6cae9641ed8d',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_98a9be25c1508b125e3b6cae9641ed8d',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_98a9be25c1508b125e3b6cae9641ed8d&islogin=1',
    },
    {// 10:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_00987cccd7eb2450ff88dd8e7722f03a',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_00987cccd7eb2450ff88dd8e7722f03a',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_00987cccd7eb2450ff88dd8e7722f03a&islogin=1',
    },
    {// 12:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_be66e4afeafe0f8f238d133f074ccf3a',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_be66e4afeafe0f8f238d133f074ccf3a',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_be66e4afeafe0f8f238d133f074ccf3a&islogin=1',
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_e7413a0991dcdac69f4d481dd18b421f',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_e7413a0991dcdac69f4d481dd18b421f',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_e7413a0991dcdac69f4d481dd18b421f&islogin=1',
    },
    {// 16:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_5c45b30e4d06951740754a09677e024c',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_5c45b30e4d06951740754a09677e024c',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_5c45b30e4d06951740754a09677e024c&islogin=1',
    },
    {// 18:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_47467f757c806ad1859093335da0e5f2',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_47467f757c806ad1859093335da0e5f2',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_47467f757c806ad1859093335da0e5f2&islogin=1',
    },
    {// 20:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_6d7b2865cd059335c2e7391ac68d5734',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_6d7b2865cd059335c2e7391ac68d5734',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_6d7b2865cd059335c2e7391ac68d5734&islogin=1',
    },
    {// 22:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_c82fc9c2e9db8d3400571764056294a8',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_c82fc9c2e9db8d3400571764056294a8',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_c82fc9c2e9db8d3400571764056294a8&islogin=1',
    },

    // 2/16
    {// 00:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_429da724983282e9b5ae75e8fca1ee1b',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_429da724983282e9b5ae75e8fca1ee1b',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_429da724983282e9b5ae75e8fca1ee1b&islogin=1',
    },
    {// 10:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_61b8b3f62bf33fe3f3445aaba12822ae',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_61b8b3f62bf33fe3f3445aaba12822ae',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_61b8b3f62bf33fe3f3445aaba12822ae&islogin=1',
    },
    {// 12:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_060e97f2f134ae5ebe57d913d61ab671',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_060e97f2f134ae5ebe57d913d61ab671',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_060e97f2f134ae5ebe57d913d61ab671&islogin=1',
    },
    {// 14:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0829cff109b3e7440bb7360288ee7f19',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_0829cff109b3e7440bb7360288ee7f19',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_0829cff109b3e7440bb7360288ee7f19&islogin=1',
    },
    {// 16:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_76befe7dc11484d9ad3129ea41544c81',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_76befe7dc11484d9ad3129ea41544c81',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_76befe7dc11484d9ad3129ea41544c81&islogin=1',
    },
    {// 18:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_8b415cba3329e723a5b51bca194b9102',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_8b415cba3329e723a5b51bca194b9102',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_8b415cba3329e723a5b51bca194b9102&islogin=1',
    },
    {// 20:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_b05fb89c085ec6b9e355dde2ed9148fb',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_b05fb89c085ec6b9e355dde2ed9148fb',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_b05fb89c085ec6b9e355dde2ed9148fb&islogin=1',
    },
    {// 22:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_9a95b2bca7d8c162838569d45fb60a3e',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_9a95b2bca7d8c162838569d45fb60a3e',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_9a95b2bca7d8c162838569d45fb60a3e&islogin=1',
    },

    // 2/17
    {// 00:00
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_655bc61eaed9f6bf9a814c198d49a9e2',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202102_655bc61eaed9f6bf9a814c198d49a9e2',
        appLink: 'etmall://open?pgid=43&url=hhttps%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202102_655bc61eaed9f6bf9a814c198d49a9e2&islogin=1',
    },
    // {// 2200
    //     toggleClass: true,
    //     changeImg: true,
    // },

];

