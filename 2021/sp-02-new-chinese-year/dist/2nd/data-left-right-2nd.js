// 倒數計時＆商品
var linkTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ["2021/2/10 10:00"],
  ["2021/1/9 15:00"],
  ["2021/1/9 18:00"],
  ["2021/1/9 21:00"],
  ["2021/1/10 12:00"],
  ["2021/1/10 15:00"],
  ["2021/1/10 18:00"],
  ["2021/1/10 21:00"],
  ["2021/1/10 22:00"],
  ["2021/1/16 12:00"],
  ["2021/1/16 15:00"],
  ["2021/1/16 18:00"],
  ["2021/1/16 21:00"],
  ["2021/1/17 12:00"],
  ["2021/1/17 15:00"],
  ["2021/1/17 18:00"],
  ["2021/1/17 21:00"],

  // 活動結束時間，需要新增插在這句前面
];
var linkData = [
  // 1/9
  {// 1200
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_6ea16938f20dc4b1f727d873ff266ee6',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_6ea16938f20dc4b1f727d873ff266ee6',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_6ea16938f20dc4b1f727d873ff266ee6&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC010912&islogin=1',
    toggleClass: true,
  },
  {// 1500
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_66ee8f4bd461b0a81acd2200d2b5f9be',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_66ee8f4bd461b0a81acd2200d2b5f9be',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_66ee8f4bd461b0a81acd2200d2b5f9be&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC010915&islogin=1',

  },
  {// 1800
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_2995e9978be7508dfafaf1559ca35cc9',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_2995e9978be7508dfafaf1559ca35cc9',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_2995e9978be7508dfafaf1559ca35cc9&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC010918&islogin=1',
  },
  {// 2100
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_60ecf69f44eb15b8f0a3ca6e651e708c',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_60ecf69f44eb15b8f0a3ca6e651e708c',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_60ecf69f44eb15b8f0a3ca6e651e708c&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC010921&islogin=1',
  },

  // 1/10
  {// 1200
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_e5e472fecf2c4d928e71dc998224c0a0',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_e5e472fecf2c4d928e71dc998224c0a0',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_e5e472fecf2c4d928e71dc998224c0a0&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011012&islogin=1',
  },
  {// 1500
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_e6f830bbdb5981e7d161538d298e8f3d',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_e6f830bbdb5981e7d161538d298e8f3d',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_e6f830bbdb5981e7d161538d298e8f3d&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011015&islogin=1',
  },
  {// 1800
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_f6936d18f344acffe919bc6210233ed6',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_f6936d18f344acffe919bc6210233ed6',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_f6936d18f344acffe919bc6210233ed6&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011018&islogin=1',
  },
  {// 2100
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_5b38a407f729a5d052481c62dd97942e',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_5b38a407f729a5d052481c62dd97942e',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_5b38a407f729a5d052481c62dd97942e&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011021&islogin=1',
  },
  {// 2200
    toggleClass: true,
    changeImg: true,
  },

  // 1/16
  {// 1200
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_a4a0f33e30819f4e1567ffd625115554',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_a4a0f33e30819f4e1567ffd625115554',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_a4a0f33e30819f4e1567ffd625115554&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011612&islogin=1',
    toggleClass: true,
  },
  {// 1500
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_dc9543071fe37a5f50e986130581159e',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_dc9543071fe37a5f50e986130581159e',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_dc9543071fe37a5f50e986130581159e&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011615&islogin=1',
  },
  {// 1800
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_129646ad5fafea472a52dee453e7aebe',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_129646ad5fafea472a52dee453e7aebe',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_129646ad5fafea472a52dee453e7aebe&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011618&islogin=1',
  },
  {// 2100
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_834007b1410e4b19121ae3dc0057b22a',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_834007b1410e4b19121ae3dc0057b22a',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_834007b1410e4b19121ae3dc0057b22a&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011621&islogin=1',
  },

  // 1/17
  {// 1200
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_698967f8807a4ede5dedfdc1aca8ec30',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_698967f8807a4ede5dedfdc1aca8ec30',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_698967f8807a4ede5dedfdc1aca8ec30&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011712&islogin=1',
  },
  {// 1500
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_6ed2d79f830cea317a1997ee6b288b8c',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_6ed2d79f830cea317a1997ee6b288b8c',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_6ed2d79f830cea317a1997ee6b288b8c&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011715&islogin=1',
  },
  {// 1800
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_08ab0b13f9709dc88218f5386fffc7ca',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_08ab0b13f9709dc88218f5386fffc7ca',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_08ab0b13f9709dc88218f5386fffc7ca&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011718&islogin=1',
  },
  {// 2100
    webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_801d33f687512020e07c90d123f5c53a',
    mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202012_801d33f687512020e07c90d123f5c53a',
    appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202012_801d33f687512020e07c90d123f5c53a&t=%E9%96%8B%E9%81%8B%E4%B9%9D%E5%AE%AE%E6%A0%BC011721&islogin=1',
  },
];

