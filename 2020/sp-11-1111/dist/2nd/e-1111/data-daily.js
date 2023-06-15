// 注意複製時標點符號都不能少，少了會壞掉
// 區塊：大牌倒數
var dailyData = [
  // // 10/26
  // {
  //   'webLink': 'https://www.etmall.com.tw/c3/144586',
  //   'mobileLink': 'https://m.etmall.com.tw/c3/144586',
  //   'appLink': 'etmall://open?pgid=8&cd=144586',
  //   'linkTitle': 'realme X50(6G/128G)限時送Buds Air',
  // },

  // // 10/27
  // {
  //   'webLink': 'https://www.etmall.com.tw/gp/114426',
  //   'mobileLink': 'https://m.etmall.com.tw/gp/114426',
  //   'appLink': 'etmall://open?pgid=65&eid=114426',
  //   'linkTitle': 'LV x GUCCI 奢華大牌',
  // },

  // // 10/28
  // {
  //   'webLink': 'https://www.etmall.com.tw/p/111699',
  //   'mobileLink': 'https://m.etmall.com.tw/p/111699',
  //   'appLink': '',
  //   'linkTitle': '【Angel LaLa 天使娜拉】11/16前下殺六折再送膠原粉',
  // },

  // // 10/29
  // {
  //   'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202010/SP_1116584/w/index.html',
  //   'mobileLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202010/SP_1116584/w/index.html',
  //   'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202010%2fSP_1116584%2fm%2fapp.html&t=ASUS',
  //   'linkTitle': 'ASUS ZenFone 7系列限時送豪華大禮包',
  // },

  // // 10/30
  // {
  //   'webLink': 'https://www.etmall.com.tw/c3/27593',
  //   'mobileLink': 'https://m.etmall.com.tw/c3/27593',
  //   'appLink': 'etmall://open?pgid=8&cd=27593',
  //   'linkTitle': '奧利塔葡萄籽油500毫升*6罐+奧利塔頂級葵花油250毫升*2罐',
  // },

  // // 10/31
  // {
  //   'webLink': 'https://www.etmall.com.tw/gp/104286',
  //   'mobileLink': 'https://m.etmall.com.tw/gp/104286',
  //   'appLink': '',
  //   'linkTitle': '亞培獨家買一送四!指定再送好禮',
  // },

  // // 11/1
  // {
  //   'productNumber': 2637493,
  //   'linkTitle': 'Coway 濾淨智控飲水機 冰溫瞬熱桌上型 CHP-242N',
  // },

  // // 11/2
  // {
  //   'webLink': 'https://www.etmall.com.tw/c3/34251',
  //   'mobileLink': 'https://m.etmall.com.tw/c3/34251',
  //   'appLink': 'etmall://open?pgid=8&cd=34251',
  //   'linkTitle': '舒潔棉柔舒適抽取衛生紙(110抽x12包x6串/箱)',
  // },

  // 11/3
  {
    'webLink': 'https://www.etmall.com.tw/gp/111582',
    'mobileLink': 'https://m.etmall.com.tw/gp/111582',
    'appLink': 'etmall://open?pgid=65&eid=111582',
    'linkTitle': '京美銀纖維護膝/塑褲+醫療口罩 獨家組合',
  },

  // 11/4
  {
    'productNumber': 2788419,
    'linkTitle': 'Dyson 戴森 V7 Fluffy 無線吸塵器-紅色',
  },

  // 11/5
  {
    'webLink': 'https://www.etmall.com.tw/c3/47711',
    'mobileLink': 'https://m.etmall.com.tw/c3/47711',
    'appLink': 'etmall://open?pgid=9&sd=3&cd=47711',
    'linkTitle': 'sesedior 雙11限搶2件6折',
  },

  // 11/6
  {
    'webLink': 'https://www.etmall.com.tw/c2/21501',
    'mobileLink': 'https://m.etmall.com.tw/c2/21501',
    'appLink': 'etmall://open?pgid=8&sd=2&cd=21501',
    'linkTitle': 'SONY黑科技★旗艦新機皇',
  },

  // 11/7
  {
    'productNumber': 2786738,
    'linkTitle': 'Dyson戴森 Pure Cool Cryptomic清淨機風扇TP06(兩色任選)',
  },

  // 11/8
  {
    'webLink': 'https://www.etmall.com.tw/c3/144063',
    'mobileLink': 'https://m.etmall.com.tw/c3/144063',
    'appLink': 'etmall://open?pgid=9&sd=7&cd=144063',
    'linkTitle': 'OSIM 背樂樂 OS-260',
  },
  // 11/9
  {
    'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202011/SP_1116673/w/index.html',
    'mobileLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202011/SP_1116673/w/index.html',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fwww.etmall.com.tw%2FXML%2Fcontent%2FDMSetting%2FFinal%2F202011%2FSP_1116673%2Fm%2Fapp.html',
    'linkTitle': 'WMF 滿$1111抽111枚東森幣',
  },

  // 11/10
  {
    'webLink': 'https://www.etmall.com.tw/c3/47657',
    'mobileLink': 'https://m.etmall.com.tw/c3/47657',
    'appLink': 'etmall://open?pgid=65&eid=114426',
    'linkTitle': '雅聞倍優全館買就送倍優氨基酸玫瑰洗面皂20g',
  },

  // 11/11
  {
    'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202005/SP_1115505/w/index.html',
    'mobileLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202005/SP_1115505/w/index.html',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fwww.etmall.com.tw%2FXML%2Fcontent%2FDMSetting%2FFinal%2F202005%2FSP_1115505%2Fw%2Findex.html&t=APPLE%E6%97%97%E8%89%A6%E9%A4%A8',
    'linkTitle': 'Apple iPhone 12 現貨秒殺',
  },

  // 11/12
  {
    'webLink': 'https://www.etmall.com.tw/p/105751',
    'mobileLink': 'https://m.etmall.com.tw/p/105751',
    'appLink': 'etmall://open?pgid=53&eid=105751',
    'linkTitle': '品牌內衣$11up',
  },

  // 11/13
  {
    'webLink': 'https://www.etmall.com.tw/bs/98199',
    'mobileLink': 'https://m.etmall.com.tw/bs/98199',
    'appLink': 'etmall://open?pgid=54&sd=98199',
    'linkTitle': '碧歐斯年度盛典買1送1 滿額再享三重送',
  },

  // 11/14
  {
    'webLink': 'https://www.etmall.com.tw/gp/105377',
    'mobileLink': 'https://m.etmall.com.tw/gp/105377',
    'appLink': 'etmall://open?pgid=65&eid=105377',
    'linkTitle': '熹歐禾韓國冬款內衣1折',
  },

  // 11/15
  {
    'productNumber': 2407813,
    'linkTitle': 'SONY 55型 4K HDR智慧連網電視',
  },

  // 11/16
  {
    'webLink': 'https://www.etmall.com.tw/c3/131797',
    'mobileLink': 'https://m.etmall.com.tw/c3/131797',
    'appLink': 'etmall://open?pgid=8&cd=131797',
    'linkTitle': 'UCC AROMA BREW艾洛瑪黑咖啡525ml(24入)x2箱 下單再抽咖啡機',
  },

  // 11/17
  {
    'webLink': 'https://www.etmall.com.tw/gp/112383',
    'mobileLink': 'https://m.etmall.com.tw/gp/112383',
    'appLink': 'etmall://open?pgid=65&eid=112383',
    'linkTitle': '台塑生醫 箱購特惠↘56折，買就送旅行5小包，送完為止',
  },

  // 11/18
  {
    'webLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202010/SP_1116591/w/index.html',
    'mobileLink': 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202010/SP_1116591/w/index.html',
    'appLink': 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202010%2fSP_1116615%2fm%2fapp.html',
    'linkTitle': '三星S20系列手機登錄享好禮',
  },

  // 11/19
  {
    'webLink': 'https://www.etmall.com.tw/gp/114459',
    'mobileLink': 'https://m.etmall.com.tw/gp/114459',
    'appLink': 'etmall://open?pgid=65&eid=114459',
    'linkTitle': 'ESSE御璽名床全館85折 贈記憶枕',
  },

  // 11/20
  {
    'webLink': 'https://www.etmall.com.tw/gp/115267',
    'mobileLink': 'https://m.etmall.com.tw/gp/115267',
    'appLink': 'etmall://open?pgid=65&eid=115267',
    'linkTitle': '華陀雙11返場好碼延長',
  },

  // 11/21
  {
    'webLink': 'https://www.etmall.com.tw/c3/100246',
    'mobileLink': 'https://m.etmall.com.tw/c3/100246',
    'appLink': 'etmall://open?pgid=9&sd=3&cd=100246',
    'linkTitle': "AGE20's',瘋狂購物月下單滿$1500送撫紋眼霜",
  },

  // 11/22
  {
    'webLink': 'https://www.etmall.com.tw/p/92462',
    'mobileLink': 'https://m.etmall.com.tw/p/92462',
    'appLink': 'etmall://open?pgid=53&eid=92462',
    'linkTitle': '舒酸定 長效抗敏牙膏 超值8入組 滿額贈好禮',
  },

  // 11/23
  {
    'webLink': 'https://www.etmall.com.tw/p/114564',
    'mobileLink': 'https://m.etmall.com.tw/p/114564',
    'appLink': 'etmall://open?pgid=53&eid=114564',
    'linkTitle': 'ivenor 雙11搶孅購5折UP',
  },

  // 11/24
  {
    'productNumber': 2775258,
    'linkTitle': '[加碼回饋] GoProHERO9 Black全方位運動攝影機',
  },

  // 11/25
  {
    'webLink': 'https://www.etmall.com.tw/p/114565',
    'mobileLink': 'https://m.etmall.com.tw/p/114565',
    'appLink': 'etmall://open?pgid=53&eid=114565',
    'linkTitle': '日本味王全年最低3折up',
  },
];