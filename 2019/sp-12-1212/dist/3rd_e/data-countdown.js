// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var breakTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ["2019/12/13 10:00:00"],
  ["2019/12/16 10:00:00"],
  ["2019/12/19 10:00:00"],
  
  // 活動結束時間，需要新增插在這句前面
];
var productData = [
  // 每次顯示三品，final輪(最後一輪顯示後)全露出。
  // 需要複製請連著"{},"整個區塊複製，限28中文字。
  // 第一輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002501/2501075/2501075-1_XXL.jpg',
      'name': 'KAFEN 極致修護摩洛哥油 100ml-網',
      'price': '299',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002501/2501386/2501386-1_XXL.jpg',
      'name': '華陀扶元堂-天官靈芝龜鹿精1盒(9瓶/盒)-蛹蟲草(綠盒)-網',
      'price': '1299',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002465/2465908/2465908-1_XXL.jpg',
      'name': '集氣購-李易、六月代言推薦 蔬暢輕飲粉包x3盒(10包/盒)-網',
      'price': '299',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002501/2501174/2501174-1_XXL.jpg',
      'name': '高雄美濃 產銷履歷認證 橙蜜香小蕃茄(10斤±10%/箱)x1箱',
      'price': '759',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002320/2320192/2320192-1_XXL.jpg',
      'name': ' 倍潔雅 柔軟舒適抽取式衛生紙150抽x14包x6袋/箱-網',
      'price': '829',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002497/2497968/2497968-1_XXL.jpg',
      'name': '馬玉山無糖杏仁粉6件組-網',
      'price': '799',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002465/2465529/2465529-1_XXL.jpg',
      'name': 'DR.MANGO芒果科技 肩頸博士6種手感按摩器-網',
      'price': '359',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002495/2495075/2495075-1_XXL.jpg',
      'name': 'Route8 KREATE 3M 防水保暖手套 (5色)',
      'price': '539',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002502/2502624/2502624-1_XXL.jpg',
      'name': '凡思媚特魔力塑形束腹褲組',
      'price': '666',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/006223/6223830/6223830-1_XXL.jpg',
      'name': ' 3M 淨呼吸空氣清淨機-超舒淨型(4-10坪) FA-M13-網',
      'price': '4990',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002493/2493080/2493080-1_XXL.jpg',
      'name': '今日下殺↘德國百靈Oral-B 活力亮白電動牙刷D12.W',
      'price': '899',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002425/2425232/2425232-1_XXL.jpg',
      'name': '雙12狂降2千再送$500↓Dyson戴森Supersonic吹風機 雙髮梳豪華組HD01-庫-促-網 14',
      'price': '11999',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002357/2357254/2357254-1_XXL.jpg',
      'name': 'Dyson 戴森V8 Carbon Fibre SV10E 無線吸塵器(DM)-庫-網',
      'price': '15200',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002420/2420831/2420831-1_XXL.jpg',
      'name': '【聯名商品】GW水玻璃 Hello Kitty分離式除濕機 馬卡龍5件組(烘鞋管)-網',
      'price': '1099',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002498/2498593/2498593-1_XXL.jpg',
      'name': 'DOMO 32型HD低藍光多媒體數位液晶顯示器(DOM-32BM02)-送HDMI影音傳輸線',
      'price': '3488',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002346/2346876/2346876-1_XXL.jpg',
      'name': 'SONY Xperia XZ3 6吋 旗艦智慧型手機 6G/64G-網',
      'price': '15888',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/GroupSale',
      'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC',
      'productImg': 'https://media.etmall.com.tw/NXimg/002173/2173893/2173893-1_XXL.jpg',
      'name': '[聲猛季優惠]鴻海 富連網家 智能AI音箱',
      'price': '899',
    },
  ],
  // 第二輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '5',
    },
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '6',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '7',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1917049',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
      'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
      'price': '8',
    },
  ],
  // 第三輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '9',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '10',
    },
  ],
  // 第四輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '11',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1917049',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
      'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
      'price': '12',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '13',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '14',
    },
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '15',
    },
  ],
  // 第五輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '10',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1917049',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
      'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
      'price': '11',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '12',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '13',
    },
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '14',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '15',
    },
  ],
];