// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用price，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊：天天開搶
var dataDailySlider = [
  // 6/30
  [
    {
      productNumber: 2974833,
      name: 'Elizabeth Arden雅頓 21天霜 75ml',
      price: 540,
    },
    {
      productNumber: 2944605,
      name: 'ORIGINS品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)',
      price: 748,
    },
    {
      productNumber: 2340256,
      name: 'Angel LaLa 天使娜拉_金好輕暢乳酸菌(30包/盒x8盒)',
      price: 2240,
    },
    {
      productNumber: 2384952,
      name: '【宏醫】百大蔬果酵素素食B群12盒-補給組',
      price: 1880,
    },
  ],
  // 7/1
  [
    {
      productNumber: 3059312,
      name: 'CL 居家UV-C紫外線消毒殺菌燈 雙重滅菌(遙控款)',
      price: 899,
    },
    {
      productNumber: 2017690,
      name: 'PRINCESS荷蘭公主1.5L半自動冰淇淋機282605',
      price: 1290,
    },
    {
      productNumber: 2902874,
      name: '【SAMPO聲寶】 時尚型晶鑽音波震動牙刷TB-Z1309L(共附5刷頭)-5色選-庫',
      price: 490,
    },
    {
      productNumber: 2999414,
      name: '獨家特惠組 鍋寶 SODAMASTER+萬用氣泡水機+CO2鋼瓶二入組+多功能蔬果隨行研磨機(鮮果黃)',
      price: 2990,
    },
  ],
  // 7/2
  [
    {
      productNumber: 2987381,
      name: 'iPhone 12 128G',
      price: 25650,
    },
    {
      productNumber: 2802221,
      name: 'Sandisk CZ410 256G隨身碟',
      price: 699,
    },
    {
      productNumber: 3086313,
      name: '【Amazfit華米】Bip U 健康運動心率智慧手錶(快速到貨/台灣繁體版/原廠公司貨)',
      price: 1795,
    },
    {
      productNumber: 2745754,
      name: 'aibo KB16C 撞色發光 USB多媒體有線鍵盤',
      price: 538,
    },
  ],
  // 7/3
  [
    {
      productNumber: 2570701,
      name: 'tokuyo 睛亮plus眼部按摩器 TS-173 (30秒內40度恆溫有感)',
      price: 1499,
    },
    {
      productNumber: 2231874,
      name: '【台灣茶人】比賽級高海拔金萱16件組(限量加贈：茶葉罐1入)',
      price: 1380,
    },
    {
      productNumber: 2700889,
      name: '德國WMF 料理剪刀 (黑色+紅色)二入組',
      price: 399,
    },
    {
      productNumber: 3078725,
      name: '【瑞士ODLO】男polo衫短銀離子 592512 (法拉利紅36100)',
      price: 578,
    },
  ],
  // 7/4
  [
    {
      productNumber: 3073476,
      name: '【全久榮】75%防疫酒精 (4000 ML/桶)',
      price: 899,
    },
    {
      productNumber: 2899351,
      name: 'OZIO歐姬兒 蜂王乳凝露75gx2入組',
      price: 1829,
    },
    {
      productNumber: 3054591,
      name: ' JO MALONE 青檸、羅勒與柑橘居室香氛工藝蠟燭 200g(TESTER環保紙盒)',
      price: 2099,
    },
    {
      productNumber: 2878633,
      name: 'DeMon BT21馬油修復護手霜30ml X3瓶 (三色可選)_東森幣特惠',
      price: 1260,
    },
  ],
  // 7/5
  [
    {
      productNumber: 3086987,
      name: '防疫超值組★InfoThink 高效UVC超薄隨身殺菌機+ Frigidaire 免耗材空氣清淨機',
      price: 2190,
    },
    {
      productNumber: 2811564,
      name: '限量贈鹼性離子水20桶~ 悅氏 S.A.Y智慧型 飲水機 YES-12L',
      price: 14800,
    },
    {
      productNumber: 3033610,
      name: '(全新福利品)Dyson戴森corrale直捲髮造型器 HS03(桃紅色)送美妝鏡',
      price: 12999,
    },
    {
      productNumber: 3041099,
      name: 'SAMPO聲寶 170L 直立無霜冷凍櫃 SRF-171F',
      price: 9862,
    },
  ],
  // 7/6
  [
    {
      productNumber: 2585309,
      name: '【味丹】味味A排骨雞麵-碗(12入/箱)',
      price: 229,
    },
    {
      productNumber:  2397403,
      name: '妙管家 薰衣草濃縮洗衣精補充包2000gx6包',
      price: 299,
    },
    {
      productNumber: 2279725,
      name: 'G.P 極輕量織帶旅行涼鞋G9278W-白黑色(SIZE:36-39 共三色)',
      price: 450,
    },
    {
      productNumber: 3085038,
      name: '特降下殺↘38折【NATURALLY JOJO】獨家!俐落熟女多功能包(多款任選)',
      price: 1540,
    },
  ],
  // 7/7
  [
    {
      productNumber: 2934983,
      name: '【LG 樂金】5.2Kg Styler 蒸氣電子衣櫥 白色 E523WR (送基本安裝)',
      price: 36900,
    },
    {
      productNumber: 2908148,
      name: 'LG 樂金 1級能效17公升 PuriCare WiFi變頻除濕機 晶鑽銀 ',
      price: 15500,
    },
    {
      productNumber: 2970790,
      name: 'DAIKIN大金 7-9坪經典系列一對一變頻冷暖分離式冷氣 RHF50RVLT/FTHF50RVLT(K)',
      price: 39582,
    },
    {
      productNumber: 2670314,
      name: 'HERAN禾聯 188L直立式冷凍櫃 HFZ-1862',
      price: 7821,
    },
  ],
  // 7/8
  [
    {
      productNumber: 3044166,
      name: 'FORTE台塑生醫金盞花葉黃素晶亮果凍10包/盒(3入組)',
      price: 1480,
    },
    {
      productNumber: 2978483,
      name: ' Kiehls契爾氏 金盞花植物精華化妝水 40ml*3 (隨行三入組)',
      price: 599,
    },
    {
      productNumber: 2759472,
      name: '(買一送一)VICHY薇姿 M89火山能量微精華50ml 共2入',
      price: 1399,
    },
    {
      productNumber: 2565129,
      name: '德國 好立善 純淨深海鮭魚油 (120粒/盒)x5盒-庫)',
      price: 1380,
    },
  ],
  // 7/9
  [
    {
      productNumber: 3081805,
      name: '【enac 依奈川】4D包覆聚攏深V棉花糖色系無鋼圈內衣3件組',
      price: 799,
    },
    {
      productNumber: 2675140,
      name: '【FENDI/GUCCI/YSL/ARMANI】光學/太陽眼鏡(共多款任選)',
      price: 3199,
    },
    {
      productNumber: 3050306,
      name: '【東森限定】chicco-We輕巧便攜秒收手推車-無盡黑',
      price: 7990,
    },
    {
      productNumber: 2704655,
      name: 'METROPET-屎立方貓砂盆',
      price: 1399,
    },
  ],
  // 7/10
  [
    {
      productNumber: 2856634,
      name: '小米手環 5限量送錶帶與保貼',
      price: 799,
    },
    {
      productNumber: 3019595,
      name: 'OPPO 福利品 A5 2020 (4G/64G) 超廣角四鏡頭大電量手機-湖光綠',
      price: 3590,
    },
    {
      productNumber: 3049505,
      name: 'Canon PIXMA MG2470 多功能相片複合機',
      price: 1390,
    },
    {
      productNumber: 2998700,
      name: '神魔之塔 MyCard 1000點 點數卡',
      price: 949,
    },
  ],
  // 7/11
  [
    {
      productNumber: 3028464,
      name: '獨家【買大送小】AB版吸濕排汗四季涼被-任選',
      price: 799,
    },
    {
      productNumber: 3083491,
      name: '3M HFB001 百利免手洗平板拖把桶組',
      price: 799,
    },
    {
      productNumber: 2994415,
      name: 'QIDINA MIT檸檬草香茅驅蟲防蚊香膏-6入組',
      price: 269,
    },
    {
      productNumber: 2654886,
      name: '森鮮天然無穀低敏-全貓雞肉配方 4磅(1.81kg) x2包組(395171)',
      price: 1699,
    },
  ],
  // 7/12
  [
    {
      productNumber: 2561462,
      name: '台鹽 絲易康60植萃養髮液-草本精華(60ml/瓶)',
      price: 490,
    },
    {
      productNumber: 2633711,
      name: 'Jealousness婕洛妮絲 黃金胜肽緊緻面膜150g(小明星大跟班推薦)',
      price: 1080,
    },
    {
      productNumber: 3048874,
      name: '【娘家】益生菌四盒組(60包/盒)',
      price: 7744,
    },
    {
      productNumber: 2829000,
      name: '旺旺水神 抗菌液居家瓶500ml x2',
      price: 499,
    },
  ],
  // 7/13
  [
    {
      productNumber: 3008340,
      name: '【HARIO】酒瓶冷泡咖啡壺650ml/ 焦糖色(FIC-70-MC)',
      price: 799,
    },
    {
      productNumber: 3005010,
      name: 'CS衣舖 涼感束口褲',
      price: 149,
    },
    {
      productNumber: 2778303,
      name: '【換季收納限定】雙開大容量北歐收納整理箱滑輪箱_三入組',
      price: 879,
    },
    {
      productNumber: 5931628,
      name: '【妙管家】攜帶式冰桶/冷藏箱22L HK-22L-行動',
      price: 688,
    },
  ],
  // 7/14
  [
    {
      productNumber: 2979222,
      name: 'HGST 4TB 企業級硬碟 【HMS5C4040ALE640】3年保固',
      price: 3280,
    },
    {
      productNumber: 2908051,
      name: 'EPSON T664系列原廠墨水匣超值組合包(3黑3彩)',
      price: 1390,
    },
    {
      productNumber: 2432479,
      name: 'MyCard LINE指定卡60元',
      price: 57,
    },
    {
      productNumber: 2952249,
      name: 'ASUS ROG Phone 5 (ROG5) ZS673KS (16G/256G)',
      price: 29990,
    },
  ],
  // 7/15
  [
    {
      productNumber: 2671608,
      name: '【Schwarzkopf 施華蔻】金緻潤澤護髮精油75ml 2入組',
      price: 299,
    },
    {
      productNumber: 3055385,
      name: ' FORTE 台塑生醫 防曬冰鎮超值組(防曬液55ml+冰鎮面膜15ml)',
      price: 579,
    },
    {
      productNumber: 2981776,
      name: '【達摩本草】祕魯魔果100%超級印加果油x5盒 (90顆/盒)《全素好油代謝、幫助循環》',
      price: 2670,
    },
    {
      productNumber: 1981118,
      name: '【悠活原力】YOYO敏立清益生菌-乳酸原味x1盒(60條/盒)買就送隨身包(5條/盒)',
      price: 1699,
    },
  ],
  // 7/16
  [
    {
      productNumber: 2937950,
      name: '凱堡 伊萊舒適腳靠後收扶手電腦椅/辦公椅',
      price: 1799,
    },
    {
      productNumber: 2480550,
      name: ' 【漢克嚴選】紐西蘭ps米其林星級熟成肋眼牛排150g_12片',
      price: 579,
    },
    {
      productNumber: 2835348,
      name: 'Mavis瑪薇絲-銀離子收腹蕾絲邊高腰內褲/冰絲內褲(6件組)',
      price: 2670,
    },
    {
      productNumber: 3077173,
      name: '【雙美】理科+科學日誌366送蘋果鹹食甜點食譜超值組',
      price: 1055,
    },
  ],
  // 7/17
  [
    {
      productNumber: 2963139,
      name: '小紫二代紅綠燈除蟎吸塵器+Coclean清淨機',
      price: 2999,
    },
    {
      productNumber: 2711660,
      name: ' 【國際牌Panasonic】1000ML塑膠杯果汁機 MX-EX1001',
      price: 890,
    },
    {
      productNumber: 2806039,
      name: '【晶工牌】11L節能環保冰溫熱開飲機/飲水機 (JD-8302) ',
      price: 5999,
    },
    {
      productNumber: 2800804,
      name: '爆殺2入組★義大利Giaretti 二合一熱壓三明治鬆餅機(經典白)',
      price: 1288,
    },
  ],
  // 7/18
  [
    {
      productNumber: 2801974,
      name: 'Apple 20W USB‑C 電源轉接器',
      price: 520,
    },
    {
      productNumber: 3025076,
      name: 'UNIQ AirTag Lino 液態矽膠掛扣防丟保護套(附雙面保護膜)',
      price: 590,
    },
    {
      productNumber: 3041993,
      name: '【Amazfit 華米】GTS 2 mini 超輕薄健康運動智慧手錶',
      price: 2790,
    },
    {
      productNumber: 2992415,
      name: 'aibo LA101 USB家庭劇院 單件式雙聲道立體聲喇叭',
      price: 692,
    },
  ],
  // 7/19
  [
    {
      productNumber: 3053901,
      name: '買一送一【京都手祚】花卉系列冰絲兩用涼蓆床包枕套3件組(雙人&加大 均一價/多款任選)',
      price: 998,
    },
    {
      productNumber: 2127000,
      name: '舒味思 氣泡水萊姆口味 寶特瓶 500ml x24入',
      price: 497,
    },
    {
      productNumber: 3064271,
      name: '電動防疫神器霧化酒精槍',
      price: 632,
    },
    {
      productNumber: 3007964,
      name: '捕夢網-8字形骨盆儀 骨盆訓練器 臀部腿部運動 收腹器 健身器',
      price: 399,
    },
  ],
  // 7/20
  [
    {
      productNumber: 2182805,
      name: '台酒生技 酒粕精粹逆齡活膚青春露限定版120MLx5入組',
      price: 1485,
    },
    {
      productNumber: 3075329,
      name: 'ESTEE LAUDER 雅詩蘭黛 Double Wear粉持久完美持妝粉底30ml +M.A.C. 妝前FIX+活力水噴霧100ml',
      price: 1799,
    },
    {
      productNumber: 3034136,
      name: 'WEDAR 夜眠芝麻E 舒壓好眠8+1盒限購組 (買8盒送1盒)',
      price: 1680,
    },
    {
      productNumber: 2845022,
      name: '摩戴舒醫用口罩(未滅菌)平面成人口罩(50片裸裝/盒)-雙鋼印(黑色)',
      price: 279,
    },
  ],
  // 7/21
  [
    {
      productNumber: 3038730,
      name: '期間下殺↘MATRIC松木1.7L藍光LED玻璃快煮壺(MY-KT1705)',
      price: 499,
    },
    {
      productNumber: 2897700,
      name: '【LG 樂金】15Kg WiFi變頻滾筒洗衣機(蒸洗脫烘) 冰磁白 WD-S15TBD (送基本安裝)',
      price: 39900,
    },
    {
      productNumber: 2996520,
      name: '【抑制病毒達99.99%】Panasonic國際牌 4-6坪RX頂級旗艦系列變頻冷暖分離式冷氣 CS-RX36GA2/CU-RX36GHA2(G)',
      price: 36713,
    },
    {
      productNumber: 2801207,
      name: 'ECOVACS 科沃斯 DEEBOT OZMO 900 智慧清潔掃拖機器人(限時6折↘再送清潔拖布3入)',
      price: 5999,
    },
  ],
  // 7/22
  [
    {
      productNumber: 2516928,
      name: 'Beroso 倍麗森 就愛挺升級加強腰背伸展針壓磁石氣墊按摩拉背器-升級二合一',
      price: 540,
    },
    {
      productNumber: 2335748,
      name: '預-築地一番鮮-空運10ROW華盛頓西北櫻桃1盒(2kg/禮盒)',
      price: 988,
    },
    {
      productNumber: 2885273,
      name: 'D.M.牛轉乾坤黃金手鍊(4款選1)',
      price: 2860,
    },
    {
      productNumber: 2785458,
      name: '【Color Play】可調扶手招財貓輕巧辦公椅 電腦椅',
      price: 999,
    },
  ],
];