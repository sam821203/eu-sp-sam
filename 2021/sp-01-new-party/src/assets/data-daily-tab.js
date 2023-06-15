// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用'price'，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊：頁籤
var dataDailyTab = [
  // 1/08
  [
    {
      'productNumber': 2850510,
      'name': '現+預【大嬸婆】圓滿團圓年菜10件組(東森獨家送冰糖酒粕滷豬腳)(10~12人)-網',
      'price':  2099,
    },
    {
      'productNumber': 2865433,
      'name': 'PS韓國美美妍_光圈霜口罩組(光圈霜50ml+口罩50片)(雙鋼印)-KIT',
      'price': 690,
    },
    {
      'productNumber': 2767941,
      'name': 'Apple Watch Series 6(GPS)44mm紅色鋁金屬錶殼+紅色運動錶帶',
      'price': 13205,
    },
  ],
  // 1/09
  [
    {
      'productNumber': 2841655,
      'name': '【澳洲YPL】AI智能光感塑型小狗褲',
      'price':  499,
    },
    {
      'productNumber': 2058880,
      'name': '台塑生醫醫之方舒暢益生菌2盒組',
      'price': 899,
    },
    {
      'productNumber': 2836292,
      'name': '小米手環 5限量送保護貼',
      'price': 889,
    },
  ],
  // 1/10
  [
    {
      'productNumber': 2729649,
      'name': '東風柔韌3層抽取式花紋衛生紙100抽x12包x5串',
      'price':  599,
    },
    {
      'productNumber': 2794133,
      'name': 'SK-II RNA超肌能緊緻活膚霜80g(輕盈版)',
      'price': 3140,
    },
    {
      'productNumber': 2716163,
      'name': '安博平板 UPAD PROＳ 4G TW 台灣版 2020全新款 安博盒子',
      'price': 5999,
    },
  ],
  // 1/11
  [
    {
      'productNumber': 2768955,
      'name': '【媚格德莉MIGRATORY】100%天然水鳥羽毛絨暖冬被-雙人',
      'price':  880,
    },
    {
      'productNumber': 5674474,
      'name': '【得意人生】高單位30mg葉黃素軟膠囊3＋1瓶組-網',
      'price': 1000,
    },
    {
      'productNumber': 2890090,
      'name': '禾聯 新一級能效 乾衣幫手 6L除濕機',
      'price': 4490,
    },
  ],
  // 1/12
  [
    {
      'productNumber': 2391877,
      'name': '【漢克嚴選】美國產日本和牛級嫩肩沙朗牛排_8包組(120g±10％/包)-網',
      'price':  569,
    },
    {
      'productNumber': 2795752,
      'name': '德國Dulgon 得而康尿素5%密集修護超保濕護手霜100ml6入-網',
      'price': 799,
    },
    {
      'productNumber': 2711159,
      'name': 'V8 Slim fluffy',
      'price':  16900,
    },
  ],
  // 1/13
  [
    {
      'productNumber': 2853894,
      'name': '[獨家限量優惠] Timberland 女小麥色磨砂革拼接反折中筒靴',
      'price':  2280,
    },
    {
      'productNumber': 2833656,
      'name': 'Angel LaLa天使娜拉_專利PO.OG膠原蛋白聚醣EX鐵2盒+蛋白聚醣膠原凍(5包)-網',
      'price': 888,
    },
    {
      'productNumber': 2890870,
      'name': '[新機預購] OPPO Reno5',
      'price':  15990,
    },
  ],
  // 1/14
  [
    {
      'productNumber': 5815603,
      'name': '【東森獨家】Visions美國康寧3.5L晶彩透明鍋 (寬鍋)，再送餐盤三件組',
      'price':  1799,
    },
    {
      'productNumber': 2599367,
      'name': 'La Roche-Posay理膚寶水 B5全面修復霜40mlx3入組-網',
      'price': 799,
    },
    {
      'productNumber': 2768608,
      'name': '大同 10人份電鍋TAC-10L-MCPEHS',
      'price':  2799,
    },
  ],
  // 1/15
  [
    {
      'productNumber': 2756228,
      'name': '【車樂事】M6 前後雙錄行車記錄器 5.5吋觸控螢幕 1080P 保固一年(贈16G記憶卡)-網',
      'price':  1680,
    },
    {
      'productNumber': 2857202,
      'name': '【GRANDE格安德】雙鋼印醫用成人平面口罩(50片裸裝/盒)(4色可挑選)',
      'price': 699,
    },
    {
      'productNumber': 2237791,
      'name': '飛利浦 55吋4K HDR聯網液晶顯示器+視訊盒55PUH6233-',
      'price':  12988,
    },
  ],
  // 1/16
  [
    {
      'productNumber': 2893860,
      'name': '2020聖誕限定兒童彈跳保溫壺350ml 2入組合',
      'price':  389,
    },
    {
      'productNumber': 2214545,
      'name': '[明星熱銷最低價] 女神光鑽爆水粉餅1空殼+3粉蕊 (SPF50+/PA+++ 兩色擇一)',
      'price': 999,
    },
    {
      'productNumber': 2782136,
      'name': '獨家下殺↘Viewsonic優派 VA2732-H 27型IPS面板104%sRGB液晶螢幕',
      'price':  3788,
    },
  ],
  // 1/17
  [
    {
      'productNumber': 2895985,
      'name': '預 妞新聞-名品點點名半伴伴手禮盒12入(8入鳳梨酥+4入蛋黃酥)-網',
      'price':  850,
    },
    {
      'productNumber': 2585415,
      'name': '大研生醫 omega-3 84%德國頂級魚油2盒(共120粒)-網',
      'price': 2099,
    },
    {
      'productNumber': 2809142,
      'name': '[全台最低價] 無痛升級-ASUS華碩X512JP獨顯雙碟戰鬥筆電',
      'price':  23900,
    },
  ],
  // 1/18
  [
    {
      'productNumber': 2879170,
      'name': '[全台最低價] 卡賀家犬零食-8包優惠組(多種口味任選)',
      'price':  859,
    },
    {
      'productNumber': 2878633,
      'name': '[79折東森幣再折] DeMon_BT21護手霜3盒_東森幣特惠',
      'price': 999,
    },
    {
      'productNumber': 2600837,
      'name': '【AFTERSHOKZ】AEROPEX AS800骨傳導藍牙運動耳機(曜夜黑)，快閃限定85折',
      'price':  4497,
    },
  ],
];