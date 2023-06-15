// 倒數計時＆商品
var linkTime = [
    // 活動開始時間，需要新增插在這句後面，日期不能相同
    ["2020/12/09 10:12"],
    ["2020/12/09 12:12"],
    ["2020/12/09 14:12"],
    ["2020/12/09 16:12"],
    ["2020/12/09 18:12"],
    ["2020/12/09 20:12"],
    ["2020/12/09 22:12"],
    ["2020/12/10 10:12"],
    ["2020/12/10 12:12"],
    ["2020/12/10 14:12"],
    ["2020/12/10 16:12"],
    ["2020/12/10 18:12"],
    ["2020/12/10 20:12"],
    ["2020/12/10 22:12"],
    ["2020/12/11 10:12"],
    ["2020/12/11 12:12"],
    ["2020/12/11 14:12"],
    ["2020/12/11 16:12"],
    ["2020/12/11 18:12"],
    ["2020/12/11 20:12"],
    ["2020/12/11 22:12"],
    ["2020/12/12 10:12"],
    ["2020/12/12 12:12"],
    ["2020/12/12 14:12"],
    ["2020/12/12 16:12"],
    ["2020/12/12 18:12"],
    ["2020/12/12 20:12"],
    ["2020/12/12 22:12"],
    ["2020/12/13 10:12"],
    ["2020/12/13 12:12"],
    ["2020/12/13 14:12"],
    ["2020/12/13 16:12"],
    ["2020/12/13 18:12"],
    ["2020/12/13 20:12"],
    ["2020/12/13 22:12"],

    // 活動結束時間，需要新增插在這句前面
];
var linkData = [
    // 2020/12/09 10:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_154e738d626bade4bc9df6ac4bb5be11',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_154e738d626bade4bc9df6ac4bb5be11',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_154e738d626bade4bc9df6ac4bb5be11&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512091012&islogin=1',
    },
    // 2020/12/09 12:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_137ab7584422273d72d5167a692ce08d',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_137ab7584422273d72d5167a692ce08d',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_137ab7584422273d72d5167a692ce08d&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512091212&islogin=1',
    },
    // 2020/12/09 14:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_55504ca27722bc1d10e7295f3c0f8f56',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_55504ca27722bc1d10e7295f3c0f8f56',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_55504ca27722bc1d10e7295f3c0f8f56&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512091412&islogin=1',
    },
    // 2020/12/09 16:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_3d1a680bc895d2271785b80705c8d936',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_3d1a680bc895d2271785b80705c8d936',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_3d1a680bc895d2271785b80705c8d936&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512091612&islogin=1',
    },
    // 2020/12/09 18:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_a9ecc6137fd77b23989c5cd361cd07d8',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_a9ecc6137fd77b23989c5cd361cd07d8',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_a9ecc6137fd77b23989c5cd361cd07d8&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512091812&islogin=1',
    },
    // 2020/12/09 20:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_9203a054c017dd7755fea4c149f8af3d',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_9203a054c017dd7755fea4c149f8af3d',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_9203a054c017dd7755fea4c149f8af3d&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512092012&islogin=1',
    },
    // 2020/12/09 22:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_aec7117025c3f69e4c920336ad2fb5a5',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_aec7117025c3f69e4c920336ad2fb5a5',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_aec7117025c3f69e4c920336ad2fb5a5&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512092212&islogin=1',
    },

    // 2020/12/10 10:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_4d298dbecd98d82eee70c790426b1a57',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_4d298dbecd98d82eee70c790426b1a57',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_4d298dbecd98d82eee70c790426b1a57&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512101012&islogin=1',
    },
    // 2020/12/10 12:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_241ac076b72db780b4f2d3e2a7db15e2',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_241ac076b72db780b4f2d3e2a7db15e2',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_241ac076b72db780b4f2d3e2a7db15e2&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512101212&islogin=1',
    },
    // 2020/12/10 14:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_ca3aac40884528ee5b33ffb3861f8b4a',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_ca3aac40884528ee5b33ffb3861f8b4a',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_ca3aac40884528ee5b33ffb3861f8b4a&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512101412&islogin=1',
    },
    // 2020/12/10 16:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_7856f63c0d74a8b8ffcce073c1ae5415',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_7856f63c0d74a8b8ffcce073c1ae5415',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_7856f63c0d74a8b8ffcce073c1ae5415&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512101612&islogin=1',
    },
    // 2020/12/10 18:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_0ddcb8ebef684f0b65fc1ee2558793bf',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_0ddcb8ebef684f0b65fc1ee2558793bf',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_0ddcb8ebef684f0b65fc1ee2558793bf&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512101812&islogin=1',
    },
    // 2020/12/10 20:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_2215b3c148d7f26e4c4de73303bbd7f0',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_2215b3c148d7f26e4c4de73303bbd7f0',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_2215b3c148d7f26e4c4de73303bbd7f0&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512102012&islogin=1',
    },
    // 2020/12/10 22:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_336e9c1275959cf1bc35a857c59ab58b',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_336e9c1275959cf1bc35a857c59ab58b',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_336e9c1275959cf1bc35a857c59ab58b&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512102212&islogin=1',
    },

    // 2020/12/11 10:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_d5bf8de1a6c69902946e5bebd0efca02',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_d5bf8de1a6c69902946e5bebd0efca02',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_d5bf8de1a6c69902946e5bebd0efca02&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512111012&islogin=1',
    },
    // 2020/12/11 12:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_402de3cf3fdbe1d785db9c97c1a0d862',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_402de3cf3fdbe1d785db9c97c1a0d862',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_402de3cf3fdbe1d785db9c97c1a0d862&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512111212&islogin=1',
    },
    // 2020/12/11 14:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_4251320aade07fb6649a50ef5a80aedc',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_4251320aade07fb6649a50ef5a80aedc',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_4251320aade07fb6649a50ef5a80aedc&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512111412&islogin=1',
    },
    // 2020/12/11 16:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_e91a47828a2deefedde6757cd5380c79',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_e91a47828a2deefedde6757cd5380c79',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_e91a47828a2deefedde6757cd5380c79&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512111612&islogin=1',
    },
    // 2020/12/11 18:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_ee2fa1e4e92d4133bc33fad216753f59',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_ee2fa1e4e92d4133bc33fad216753f59',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_ee2fa1e4e92d4133bc33fad216753f59&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512111812&islogin=1',
    },
    // 2020/12/11 20:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_78c85a9e39d3c86d9726923fb19ecc9b',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_78c85a9e39d3c86d9726923fb19ecc9b',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_78c85a9e39d3c86d9726923fb19ecc9b&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512112012&islogin=1',
    },
    // 2020/12/11 22:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_78bfe10387f9e5033439f14bc060ab20',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_78bfe10387f9e5033439f14bc060ab20',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_78bfe10387f9e5033439f14bc060ab20&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512112212&islogin=1',
    },

    // 2020/12/12 10:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_393735d90332b2c135ec7d3b73de3084',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_393735d90332b2c135ec7d3b73de3084',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_393735d90332b2c135ec7d3b73de3084&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512121012&islogin=1',
    },
    // 2020/12/12 12:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_5612cbb7679d8a3dce158afb36079bf4',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_5612cbb7679d8a3dce158afb36079bf4',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_5612cbb7679d8a3dce158afb36079bf4&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512121212&islogin=1',
    },
    // 2020/12/12 14:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_4e99e202b730f5b9d6d1f0c7c0f75a4a',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_4e99e202b730f5b9d6d1f0c7c0f75a4a',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_4e99e202b730f5b9d6d1f0c7c0f75a4a&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512121412&islogin=1',
    },
    // 2020/12/12 16:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_563e1bbbc9afdd1753ef564ff0e46ca5',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_563e1bbbc9afdd1753ef564ff0e46ca5',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_563e1bbbc9afdd1753ef564ff0e46ca5&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512121612&islogin=1',
    },
    // 2020/12/12 18:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_aaa795f4b2d043e806fee7d721e3e439',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_aaa795f4b2d043e806fee7d721e3e439',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_aaa795f4b2d043e806fee7d721e3e439&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512121812&islogin=1',
    },
    // 2020/12/12 20:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_ec2df828968e739931cfa5aa685a2f3d',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_ec2df828968e739931cfa5aa685a2f3d',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_ec2df828968e739931cfa5aa685a2f3d&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512122012&islogin=1',
    },
    // 2020/12/12 22:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_3d845d3f42d033d0f25ea72d22c541f5',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_3d845d3f42d033d0f25ea72d22c541f5',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_3d845d3f42d033d0f25ea72d22c541f5&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512122212&islogin=1',
    },

    // 2020/12/13 10:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_cb348458d76c0a348ca9bb2feb1cd0f4',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_cb348458d76c0a348ca9bb2feb1cd0f4',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_cb348458d76c0a348ca9bb2feb1cd0f4&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512131012&islogin=1',
    },
    // 2020/12/13 12:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_bb1c5836ad29a85aa1647491a89dd6cc',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_bb1c5836ad29a85aa1647491a89dd6cc',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_bb1c5836ad29a85aa1647491a89dd6cc&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512131212&islogin=1',
    },
    // 2020/12/13 14:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_7b3db6339fa23352a0e2d953035e0be3',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_7b3db6339fa23352a0e2d953035e0be3',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_7b3db6339fa23352a0e2d953035e0be3&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512131412&islogin=1',
    },
    // 2020/12/13 16:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_de2f149b8a36d69f722dfb4cac1f6feb',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_de2f149b8a36d69f722dfb4cac1f6feb',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_de2f149b8a36d69f722dfb4cac1f6feb&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512131612&islogin=1',
    },
    // 2020/12/13 18:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_8c1460dc62bba8b9d8abac9f34db7a91',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_8c1460dc62bba8b9d8abac9f34db7a91',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_8c1460dc62bba8b9d8abac9f34db7a91&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512131812&islogin=1',
    },
    // 2020/12/13 20:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_8107016fb6cc55fb7a374b91a69df92f',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_8107016fb6cc55fb7a374b91a69df92f',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_8107016fb6cc55fb7a374b91a69df92f&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512132012&islogin=1',
    },
    // 2020/12/13 22:12
    {
        webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_f44c16ff9d0917275e8040da4a276161',
        mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_f44c16ff9d0917275e8040da4a276161',
        appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_f44c16ff9d0917275e8040da4a276161&t=%E9%9B%9912%E7%84%A1%E6%95%B5%E7%B4%85%E5%8C%8512132212&islogin=1',
    },
];