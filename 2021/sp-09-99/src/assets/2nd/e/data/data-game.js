// 遊戲切換
var linkTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ['2021/9/4  00:00'],
  ['2021/9/5  00:00'],
  
  // 活動結束時間，需要新增插在這句前面
];
// 可以換圖，填入changeImg：圖片編號
var linkData = [
  // 6/5
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/73170ccf28d61645386afe56097c3435',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/73170ccf28d61645386afe56097c3435',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F73170ccf28d61645386afe56097c3435&tb=0',
    changeImg: 0,
  },
  // 6/6
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/98b324154d58b09e57f862340849ce3c',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/98b324154d58b09e57f862340849ce3c',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F98b324154d58b09e57f862340849ce3c&tb=0',
    changeImg: 0,
  },
  // 6/7
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/8e5ec9c0416b80fc51568c19dd9b8eb8',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/8e5ec9c0416b80fc51568c19dd9b8eb8',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F8e5ec9c0416b80fc51568c19dd9b8eb8&tb=0',
    changeImg: 0,
  },
  // 6/8
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/bb7408c1ddcd03e66c2e51c2bb3ce8b9',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/bb7408c1ddcd03e66c2e51c2bb3ce8b9',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2Fbb7408c1ddcd03e66c2e51c2bb3ce8b9&tb=0',
    changeImg: 0,
  },
  // 6/9
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/599f5c13a055cdf32823ced6e9dc4afc',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/599f5c13a055cdf32823ced6e9dc4afc',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F599f5c13a055cdf32823ced6e9dc4afc&tb=0',
    changeImg: 0,
  },
  // 6/12
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/f5a2d01310af546cd2eb4ff05fa253b6',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/f5a2d01310af546cd2eb4ff05fa253b6',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2Ff5a2d01310af546cd2eb4ff05fa253b6&tb=0',
    changeImg: 0,
  },
  // 6/13
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/7a9e6142315e54a9f800ea0052e8030e',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/7a9e6142315e54a9f800ea0052e8030e',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F7a9e6142315e54a9f800ea0052e8030e&tb=0',
    changeImg: 0,
  },
  // 6/14
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/596582278513531cffc70b21a6f02e8d',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/596582278513531cffc70b21a6f02e8d',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F596582278513531cffc70b21a6f02e8d&tb=0',
    changeImg: 0,
  },
  // 6/18
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/142c4713f225801a0273dcf1324f6b0d',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/142c4713f225801a0273dcf1324f6b0d',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F142c4713f225801a0273dcf1324f6b0d&tb=0',
    changeImg: 0,
  },
  // 6/19
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/cb21f54990dbb1e7abceb121fa23074a',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/cb21f54990dbb1e7abceb121fa23074a',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2Fcb21f54990dbb1e7abceb121fa23074a&tb=0',
    changeImg: 0,
  },
  // 6/20
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/b9922204b351ba0522c69e05bfa71fab',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/b9922204b351ba0522c69e05bfa71fab',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2Fb9922204b351ba0522c69e05bfa71fab&tb=0',
    changeImg: 0,
  },
  // 6/21
  {
    webLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/b535e97ac09b65ace8ebe218bee5022a',
    mobileLink:
      'https://www.etmall.com.tw/Activity/dl/LuckyDraw/b535e97ac09b65ace8ebe218bee5022a',
    appLink:
      'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2Fb535e97ac09b65ace8ebe218bee5022a&tb=0',
    changeImg: 0,
  },
  {
    // end
    webLink: 'javascript:void(0)',
    mobileLink: 'javascript:void(0)',
    appLink: 'javascript:void(0)',
    changeImg: 2,
  },
];
