// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！
// 區塊：第二顆

// 倒數計時＆商品
var linkTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ["2020/9/11 10:00"],
  ["2020/9/27 10:00"],

  // 活動結束時間，需要新增插在這句前面
];
var linkData = [
  {
    webLink: '#note',
    mobileLink: '#note',
    appLink: '#note',
  },
  {
    webLink: 'ddd',
    mobileLink: 'eee',
    appLink: 'fff',
  },
];

var imgData = [
  'promo-2.png',
  'promo-2-2.png',
];