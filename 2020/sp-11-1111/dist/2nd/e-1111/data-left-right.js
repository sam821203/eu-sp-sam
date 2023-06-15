// 倒數計時＆商品
var linkTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ["2020/11/9 10:00"],
  ["2020/11/9 12:00"],
  ["2020/11/9 14:00"],
  ["2020/11/9 16:00"],
  ["2020/11/9 18:00"],
  ["2020/11/9 20:00"],
  ["2020/11/9 22:00"],
  ["2020/11/9 24:00"],

  ["2020/11/10 10:00"],
  ["2020/11/10 12:00"],
  ["2020/11/10 14:00"],
  ["2020/11/10 16:00"],
  ["2020/11/10 18:00"],
  ["2020/11/10 20:00"],
  ["2020/11/10 22:00"],
  ["2020/11/10 24:00"],

  ["2020/11/11 10:00"],
  ["2020/11/11 12:00"],
  ["2020/11/11 14:00"],
  ["2020/11/11 16:00"],
  ["2020/11/11 18:00"],
  ["2020/11/11 20:00"],
  ["2020/11/11 22:00"],
  ["2020/11/11 24:00"],

  ["2020/11/12 10:00"],
  ["2020/11/12 12:00"],
  ["2020/11/12 14:00"],
  ["2020/11/12 16:00"],
  ["2020/11/12 18:10"],
//   ["2020/11/12 20:00"],
//   ["2020/11/12 22:00"],
//   ["2020/11/12 24:00"],
  // 活動結束時間，需要新增插在這句前面
];
var linkData = [
  // 11/9
  {//1000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_286537a14f893a090f5765dc00ffff1f',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_286537a14f893a090f5765dc00ffff1f',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_286537a14f893a090f5765dc00ffff1f&islogin=1',
  },
  {//1200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_f452f3a701b9c9e1fcd091080494a519',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_f452f3a701b9c9e1fcd091080494a519',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_f452f3a701b9c9e1fcd091080494a519&islogin=1',
  },
  {//1400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_1b680c7f8df32d845d9b595b21367084',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_1b680c7f8df32d845d9b595b21367084',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_1b680c7f8df32d845d9b595b21367084&islogin=1',
  },
  {//1600
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_82ed2d62abd5038d87bf66dcea5febe1',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_82ed2d62abd5038d87bf66dcea5febe1',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_82ed2d62abd5038d87bf66dcea5febe1&islogin=1',
  },
  {//1800
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e7f1c7f74d8039dba5b921904053b687',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e7f1c7f74d8039dba5b921904053b687',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_e7f1c7f74d8039dba5b921904053b687&islogin=1',
  },
  {//2000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_fcea668f25448068b792d7f93c43ce29',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_fcea668f25448068b792d7f93c43ce29',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_fcea668f25448068b792d7f93c43ce29&islogin=1',
  },
  {//2200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_02116c4e55149bb0a65c31b74e4b19e5',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_02116c4e55149bb0a65c31b74e4b19e5',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_02116c4e55149bb0a65c31b74e4b19e5&islogin=1',
  },
  {//2400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_6f0ab8db2c6e31369df04ddce7595254',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_6f0ab8db2c6e31369df04ddce7595254',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_6f0ab8db2c6e31369df04ddce7595254&islogin=1',
  },
  // 11/10
  {//1000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_7fa6f4d6ed9f5e3c0d7e930e54ba89de',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_7fa6f4d6ed9f5e3c0d7e930e54ba89de',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_7fa6f4d6ed9f5e3c0d7e930e54ba89de&islogin=1',
  },
  {//1200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_bcc659c3e5444f24146a89550618e886',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_bcc659c3e5444f24146a89550618e886',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_bcc659c3e5444f24146a89550618e886&islogin=1',
  },
  {//1400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_7c367fc84614843ca02dd3c0c2613b76',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_7c367fc84614843ca02dd3c0c2613b76',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_7c367fc84614843ca02dd3c0c2613b76&islogin=1',
  },
  {//1600
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_32bc59ca465b05e2b59936e98fc05d46',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_32bc59ca465b05e2b59936e98fc05d46',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_32bc59ca465b05e2b59936e98fc05d46&islogin=1',
  },
  {//1800
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e67ee3cdacb6ed3ecee95a8f5d495006',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e67ee3cdacb6ed3ecee95a8f5d495006',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_e67ee3cdacb6ed3ecee95a8f5d495006&islogin=1',
  },
  {//2000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_d3ba454c1155b4af022fa7dcab8ebcf3',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_d3ba454c1155b4af022fa7dcab8ebcf3',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_d3ba454c1155b4af022fa7dcab8ebcf3&islogin=1',
  },
  {//2200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_910d064f20000e6767f40424637bd873',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_910d064f20000e6767f40424637bd873',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_910d064f20000e6767f40424637bd873&islogin=1',
  },
  {//2400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_b16df66830c74ab7444304c4dbcf4c9b',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_b16df66830c74ab7444304c4dbcf4c9b',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_b16df66830c74ab7444304c4dbcf4c9b&islogin=1',
  },
  // 11/11
  {//1000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_2789ff89b2884d67fb183899bd0d42b5',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_2789ff89b2884d67fb183899bd0d42b5',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_2789ff89b2884d67fb183899bd0d42b5&islogin=1',
  },
  {//1200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e05646202e9a5a1b2902109083a6635e',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e05646202e9a5a1b2902109083a6635e',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_e05646202e9a5a1b2902109083a6635e&islogin=1',
  },
  {//1400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e800eca9e0420c5594001acea4ebea83',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e800eca9e0420c5594001acea4ebea83',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_e800eca9e0420c5594001acea4ebea83&islogin=1',
  },
  {//1600
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_501b7efc6dd9e389b642ad96ea72fc03',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_501b7efc6dd9e389b642ad96ea72fc03',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_501b7efc6dd9e389b642ad96ea72fc03&islogin=1',
  },
  {//1800
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_d0981099c98afbe81774c295ce69a2e6',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_d0981099c98afbe81774c295ce69a2e6',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_d0981099c98afbe81774c295ce69a2e6&islogin=1',
  },
  {//2000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_ab74aecb149bd143903c9b5e0f73068f',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_ab74aecb149bd143903c9b5e0f73068f',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_ab74aecb149bd143903c9b5e0f73068f&islogin=1',
  },
  {//2200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_b6e5d1d3e83fa47f4b8a10ce5f864b2f',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_b6e5d1d3e83fa47f4b8a10ce5f864b2f',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_b6e5d1d3e83fa47f4b8a10ce5f864b2f&islogin=1',
  },
  {//2400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_461e4fec34bed2f11043c83a3514626f',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_461e4fec34bed2f11043c83a3514626f',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_461e4fec34bed2f11043c83a3514626f&islogin=1',
  },
  //1112
  {//1000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e243f96747f4d7acd7fd695096ba177c',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_e243f96747f4d7acd7fd695096ba177c',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_e243f96747f4d7acd7fd695096ba177c&islogin=1',
  },
  {//1200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_b4d8fa1ea4cf4695d1ccaec5ebbd1657',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_b4d8fa1ea4cf4695d1ccaec5ebbd1657',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_b4d8fa1ea4cf4695d1ccaec5ebbd1657&islogin=1',
  },
  {//1400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_a7721fd5377a9a2ecc43ce0bfba71a9b',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_a7721fd5377a9a2ecc43ce0bfba71a9b',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_a7721fd5377a9a2ecc43ce0bfba71a9b&islogin=1',
  },
  {//1600
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_ab3efbe6cdda6e77c089e034f6f56066',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_ab3efbe6cdda6e77c089e034f6f56066',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_ab3efbe6cdda6e77c089e034f6f56066&islogin=1',
  },
  {//1800
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_3a878335fa872efbb8472a4e983588e5',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_3a878335fa872efbb8472a4e983588e5',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_3a878335fa872efbb8472a4e983588e5&islogin=1',
  },
  {//2000
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_2246bbf3d129a5791482856e160a5424',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_2246bbf3d129a5791482856e160a5424',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_2246bbf3d129a5791482856e160a5424&islogin=1',
  },
  {//2200
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_336a0c924faea2293d01b75045f8239b',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_336a0c924faea2293d01b75045f8239b',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_336a0c924faea2293d01b75045f8239b&islogin=1',
  },
  {//2400
      webLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_afd5542235574e9f05f1fb33157e7c0c',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202011_afd5542235574e9f05f1fb33157e7c0c',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202011_afd5542235574e9f05f1fb33157e7c0c&islogin=1',
  },
];

