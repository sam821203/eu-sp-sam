// 注意複製時標點符號都不能少，少了會壞掉
// 區塊：大牌倒數
var dailyData = [
  // 8/26
  {
    'webLink': 'https://www.etmall.com.tw/c2/40147',
    'mobileLink': 'https://m.etmall.com.tw/c2/40147',
    'appLink': 'etmall://open?pgid=8&cd=40147',
    'linkTitle': '日立冷氣送DC扇',
  },

  // 8/27
  {
    'webLink': 'https://www.etmall.com.tw/gp/104539',
    'mobileLink': 'https://m.etmall.com.tw/gp/104539',
    'appLink': 'etmall://open?pgid=65&eid=104539',
    'linkTitle': '台酒台鹽指定品結帳75折',
  },

  // 8/28
  {
    'webLink': 'https://www.etmall.com.tw/p/101584',
    'mobileLink': 'https://m.etmall.com.tw/p/101584',
    'appLink': 'etmall://open?pgid=53&eid=101584',
    'linkTitle': '妙管家任2件88折',
  },

  // 8/29
  {
    'webLink': 'https://www.etmall.com.tw/bs/141472',
    'mobileLink': 'https://m.etmall.com.tw/bs/141472',
    'appLink': 'etmall://open?pgid=54&sd=141472',
    'linkTitle': '東妮寢飾滿額送好禮',
  },

  // 8/30
  {
    'webLink': 'https://www.etmall.com.tw/p/67031',
    'mobileLink': 'https://m.etmall.com.tw/p/67031',
    'appLink': 'etmall://open?pgid=53&eid=67031',
    'linkTitle': 'Easy shop國民內衣$289up',
  },

  // 8/31
  {
    'webLink': 'https://www.etmall.com.tw/p/104685',
    'mobileLink': 'https://m.etmall.com.tw/p/104685',
    'appLink': 'etmall://open?pgid=53&eid=104685',
    'linkTitle': 'Louis Vuitton限量下殺3折up',
  },

  // 9/1
  {
    'webLink': 'https://www.etmall.com.tw/c3/119761',
    'mobileLink': 'https://m.etmall.com.tw/c3/119761',
    'appLink': 'etmall://open?pgid=8&cd=119761',
    'linkTitle': 'Timberland必備鞋靴5折up',
  },

  // 9/2
  {
    'webLink': 'https://www.etmall.com.tw/gp/108472',
    'mobileLink': 'https://m.etmall.com.tw/gp/108472',
    'appLink': 'etmall://open?pgid=65&eid=108472',
    'linkTitle': 'DeMon破盤再贈萬元禮',
  },

  // 9/3
  {
    'webLink': 'https://www.etmall.com.tw/gp/106592',
    'mobileLink': 'https://m.etmall.com.tw/gp/106592',
    'appLink': 'etmall://open?pgid=65&eid=106592',
    'linkTitle': '森下仁丹這夏好順暢75折起',
  },

  // 9/4
  {
    'webLink': 'https://www.etmall.com.tw/c3/131797',
    'mobileLink': 'https://m.etmall.com.tw/c3/131797',
    'appLink': 'etmall://open?pgid=8&cd=131797',
    'linkTitle': 'UCC精選熱銷5折up',
  },

  // 9/5
  {
    'webLink': 'https://www.etmall.com.tw/c2/138366',
    'mobileLink': 'https://m.etmall.com.tw/c2/138366',
    'appLink': 'etmall://open?pgid=8&cd=138366',
    'linkTitle': 'realme手機$3,990起',
  },

  // 9/6
  {
    'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202009/SP_1116254/w/index.html',
    'mobileLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202009/SP_1116254/w/index.html',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fwww.etmall.com.tw%2FXML%2Fcontent%2FDMSetting%2FFinal%2F202009%2FSP_1116254%2Fm%2Fapp.html&t=BRITA%E8%B2%B7%E5%B0%B1%E6%8A%BDSKII',
    'linkTitle': 'BRITA買就抽SKII',
  },

  // 9/7
  {
    'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202008/SP_1116211/w/index.html',
    'mobileLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202008/SP_1116211/w/index.html',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fwww.etmall.com.tw%2FXML%2Fcontent%2FDMSetting%2FFinal%2F202008%2FSP_1116211%2Fm%2Fapp.html&t=%E8%8F%AF%E5%85%83%E4%B8%AD%E5%85%83%E9%99%90%E5%AE%9A%E6%BB%BF%E9%A1%8D%E9%80%81',
    'linkTitle': '華元中元限定滿額送',
  },

  // 9/8
  {
    'webLink': 'https://www.etmall.com.tw/c3/145329',
    'mobileLink': 'https://m.etmall.com.tw/c3/145329',
    'appLink': 'etmall://open?pgid=8&cd=145329',
    'linkTitle': '鹿客新款電子鎖送安裝',
  },

  // 9/9
  {
    'webLink': 'https://www.etmall.com.tw/gp/109007',
    'mobileLink': 'https://m.etmall.com.tw/gp/109007',
    'appLink': 'etmall://open?pgid=65&eid=109007',
    'linkTitle': '蘭陵夏價出清$149起',
  },

  // 9/10
  {
    'webLink': 'https://www.etmall.com.tw/c3/139889',
    'mobileLink': 'https://m.etmall.com.tw/c3/139889',
    'appLink': 'etmall://open?pgid=8&cd=139889',
    'linkTitle': '輝葉指定品加贈好禮',
  },
];