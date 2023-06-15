// 倒數計時＆商品
var linkTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ["2020/11/12 17:09"],
//   ["2020/10/19 12:00"],
//   ["2020/10/19 14:00"],
//   ["2020/10/19 16:00"],
//   ["2020/10/19 18:00"],
//   ["2020/10/19 20:00"],
//   ["2020/10/19 22:00"],
//   ["2020/10/19 24:00"],

//   ["2020/10/20 06:00"],
//   ["2020/10/20 08:00"],
//   ["2020/10/20 10:00"],
//   ["2020/10/20 12:00"],
//   ["2020/10/20 14:00"],
//   ["2020/10/20 16:00"],
//   ["2020/10/20 18:00"],
//   ["2020/10/20 20:00"],
//   ["2020/10/20 22:00"],
//   ["2020/10/20 24:00"],

//   ["2020/10/21 06:00"],
//   ["2020/10/21 08:00"],
//   ["2020/10/21 10:00"],
//   ["2020/10/21 12:00"],
//   ["2020/10/21 14:00"],
//   ["2020/10/21 16:00"],
//   ["2020/10/21 18:00"],
//   ["2020/10/21 20:00"],
//   ["2020/10/21 22:00"],
//   ["2020/10/21 24:00"],
  // 活動結束時間，需要新增插在這句前面
];
var linkData = [
  // 10/19
  {//1000
      webLink: '#note',
      mobileLink: 'aaa',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {//1200
      webLink: '#note',
      mobileLink: 'bbb',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_210febff79895100dfb5bf13945cde02&islogin=1',
  },
  {//1400
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_86344740a6fa33fc26d679af431451b1',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_86344740a6fa33fc26d679af431451b1&islogin=1',
  },
  {//1600
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_c71ac7815953822c1c11fbad830a0dd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_c71ac7815953822c1c11fbad830a0dd9&islogin=1',
  },
  {//1800
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_1855567a7ab800e9ea56ea68d122440c',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_1855567a7ab800e9ea56ea68d122440c&islogin=1',
  },
  {//2000
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_29a56400630c819c99b715571a534b09',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_29a56400630c819c99b715571a534b09&islogin=1',
  },
  {//2200
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_93b5d37b71c1192f585f8fe7014d0783',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_93b5d37b71c1192f585f8fe7014d0783&islogin=1',
  },
  {//2400
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_a51788d1911398f44cc12819122009c9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_a51788d1911398f44cc12819122009c9&islogin=1',
  },
  // 10/20
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  // 10/21
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
  {
      webLink: '#note',
      mobileLink: 'https://m.etmall.com.tw/Activity/EHSRedEnvelope/202010_68957de498985144942e1d3f6963fcd9',
      appLink: 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FEHSRedEnvelope%2F202010_68957de498985144942e1d3f6963fcd9&islogin=1',
  },
];

