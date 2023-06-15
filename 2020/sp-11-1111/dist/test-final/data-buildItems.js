var dataBuildItems = [
    // 每次顯示三品
    // 需要複製請連著"{},"整個區塊複製
    // 是價格的話請用'text'，會加上$符號，不是價格請用'text'，不會加上$符號
    // 區塊：激殺一元搶購
    // open:0 => 關閉 ; open:1 => 開啟
    // 11/02
    {
        'productNumber': 2475716,
        'name': '(買一送一)Incare 手壓式旋轉拖把組',
        // 'text': '',
        'price': 666,
        // 判斷開關的
        'open': 0,
    },
    {
        'productNumber': 2570709,
        'name': '3件組【Glorils 高叡熙】德國纖塑科技微分子無痕美胸內衣',
        'price': 990,
        'open': 0,
    },
    {
        'productNumber': 6168098,
        'name': 'Sesedior燕窩抗老保濕限量福袋4件組',
        'price': 1111,
        'open': 0,
    },
    {
        'productNumber': 2709447,
        'name': '【Eisai】Chocola BB 膠原錠 120錠×3瓶',
        'price': 2099,
        'open': 0,
    },
    {
        'productNumber': 2776110,
        'name': '10000 realme 30W Dart閃充行動電源-黑色',
        'price': 999,
        'open': 0,
    },

    // 11/03
    {
        'productNumber': 2799839,
        'name': '【漢克嚴選】美國產日本和牛級嫩肩沙朗牛排(120g)_16片_送_超大去骨雞腿排(300g)1片',
        'price': 1111,
        'open': 0,
    },
    {
        'productNumber': 2473353,
        'name': '【SNOW TRAVEL】AR-18雪花摺邊款美麗諾85%羊毛帽',
        'price': 469,
        'open': 0,
    },
    {
        'productNumber': 2771040,
        'name': 'La Roche-Posay理膚寶水 多容安極效舒緩修護精華乳40ml X2入任選(清爽型/潤澤型)',
        'price': 1111,
        'open': 0,
    },
    {
        'productNumber': 2793412,
        'name': '白蘭氏養蔘飲60ml*84+12入',
        'price': 3699,
        'open': 0,
    },
    {
        'productNumber': 2566074,
        'name': '任天堂 Nintendo Switch 動物森友會 特別版主機 (台灣公司貨)',
        'open': 0,
        'price': 9780,
    },

    // 11/04
    {
        'productNumber': 2799792,
        'name': '捕夢網住宅用火災警報器 偵煙款三入組',
        'open': 0,
        'price': 1111,
    },
    {
        'productNumber': 2763518,
        'name': ' Mr.J家居生活 多功能創意收納鞋層架',
        'open': 0,
        'price': 221,
    },
    {
        'productNumber': 2170052,
        'name': '【買一送一】Arenes玫瑰香氛植萃身體乳霜(350ml)',
        'open': 0,
        'price': 299,
    },
    {
        'productNumber': 2619343,
        'name': '東森獨家限定價★ kolin歌林85L台灣製四層多功能紫外線殺菌烘碗機(美型白)KTK-UDR0185',
        'open': 0,
        'price': 3580,
    },
    {
        'productNumber': 2703127,
        'name': '小米手環5(送錶帶)',
        'open': 0,
        'price': 911,
    },

    // 11/05
    {
        'productNumber': 2802417,
        'name': '【華元】買一送一 全家平安福箱派對零食箱298g',
        'price': 150,
        'open': 0,
    },
    {
        'productNumber': 1997479,
        'name': '女神光鑽爆水粉餅1空殼+2粉蕊 (SPF50+/PA+++ 兩色擇一)',
        'price': 699,
        'open': 0,
    },
    {
        'productNumber': 2123447,
        'name': '台塑生醫醫之方舒暢益生菌豪華6入組',
        'price': 2300,
        'open': 0,
    },
    {
        'productNumber': 2370353,
        'name': 'TiDdi S290輕量化無線氣旋式除蟎吸塵器(贈吸塵拖地刷組件)',
        'price': 2880,
        'open': 0,
    },
    {
        'productNumber': 2644538,
        'name': '【AUKEY】65W 雙USB PD+QC3.0 USB-C快充行動電源(26800mAh)',
        'price': 2490,
        'open': 0,
    },

    // 11/06
    {
        'productNumber': 2587982,
        'name': '3+1件組【京美】X銀纖維極塑護腰3件+醫療口罩50片/1盒',
        'price': 1511,
        'open': 0,
    },
    {
        'productNumber': 2775636,
        'name': '[Simlife]NO.1高科技按摩頭美夢成真枕(二入組)',
        'price': 1211,
        'open': 0,
    },
    {
        'productNumber': 2126819,
        'name': '【順安】酸痛貼霸一條根120片獨家組合',
        'price': 1111,
        'open': 0,
    },
    {
        'productNumber': 2796640,
        'name': '歌林 Kolin-2.0L高級304不鏽鋼快煮壺KPK-UD2007S',
        'price': 999,
        'open': 0,
    },
    {
        'productNumber': 2728971,
        'name': 'ASUS ZenFone 7 - ZS670KS (6G/128G宇曜黑)',
        'price': 19990,
        'open': 0,
    },

    // 11/07
    {
        'productNumber': 2461895,
        'name': 'NEW FORCE 戶外機能保暖衝鋒褲 六色可選',
        'open': 0,
        'price': 333,
    },
    {
        'productNumber': 2782027,
        'name': '(東森獨家)【美國康寧 CORELLE】SNOOPY 復刻黑白7件式餐具組-G04',
        'open': 0,
        'price': 1480,
    },
    {
        'productNumber': 2794134,
        'name': 'SK-II 青春露230ml (公司貨)',
        'open': 0,
        'price': 3480,
    },
    {
        'productNumber': 2256600,
        'name': '日本味王 高劑量專利強效蔓越莓精華錠(30錠/瓶)共計10瓶',
        'open': 0,
        'price': 1211,
    },
    {
        'productNumber': 2717678,
        'name': 'realme X50 S765G (6G+128G) 5G四鏡頭暢速潮玩機-極地紫',
        'open': 0,
        'price': 7990,
    },

    // 11/08
    {
        'productNumber': 1718085,
        'name': '領先者 ES-15 前後雙鏡+停車監控+循環錄影行車記錄器   促銷999+送16G 成本12%',
        'price': 999,
        'open': 0,
    },
    {
        'productNumber': 2783164,
        'name': '【KOSE高絲】雪肌粹洗面乳120mlx6入 (雪花限定版)',
        'open': 0,
        'price': 1111,
    },
    {
        'productNumber': 2494082,
        'name': '[Jamieson健美生] 大包裝 鈣+D3 100顆(加拿大原裝進口)3入組(健美生Jamieson)',
        'open': 0,
        'price': 1111,
    },
    {
        'productNumber': 2768608,
        'name': '東森獨家★TATUNG大同 10人份全不鏽鋼電鍋 TAC-10L-MCPEHS-玫瑰粉',
        'open': 0,
        'price': 2799,
    },
    {
        'productNumber': 2763320,
        'name': '【現貨供應】Canon EOS R5(BODY)全片幅無反光鏡單眼相機',
        'open': 0,
        'price': 119000,
    },

    // 11/09
    {
        'productNumber': 2760962,
        'name': '2雙+2件組【京美】長效支撐X型舒緩護膝2雙+醫療口罩50片/1盒(買就送24cm深型不沾平炒鍋)',
        'open': 0,
        'price': 3111,
    },
    {
        'productNumber': 2795790,
        'name': '【德國Kamill卡蜜兒】經典不敗 德國經典洋甘菊護手霜100ml/75ml （經典/滋潤/柔敏/清爽）-網',
        'open': 0,
        'price': 111,
    },
    {
        'productNumber': 2408426,
        'name': '江宏恩代言 IVENOR 日夜塑崩爆燃代謝組(夜塑崩錠3盒+塑崩錠2盒)加碼送夜塑崩隨手包',
        'open': 0,
        'price': 2980,
    },
    {
        'productNumber': 2802658,
        'name': 'Panasonic 國際牌 LED (第四代) 調光調色遙控燈 LGC31102A09 全白燈罩 32.5W 110V',
        'open': 0,
        'price': 3380,
    },
    {
        'productNumber': 2728971,
        'name': 'ASUS ZenFone 7 - ZS670KS (6G/128G宇曜黑)',
        'open': 0,
        'price': 19990,
    },

    // 11/10
    {
        'productNumber': 2768955,
        'name': '媚格德莉 雙人100%天然水鳥羽毛絨暖冬被',
        'open': 0,
        'price': 899,
    },
    {
        'productNumber': 2028739,
        'name': '愛之味 純濃燕麥290ml(24瓶/箱)*2箱組',
        'open': 0,
        'price': 969,
    },
    {
        'productNumber': 2773560,
        'name': 'SHISEIDO 資生堂 百優精純乳霜75ml',
        'open': 0,
        'price': 2111,
    },
    {
        'productNumber': 2407813,
        'name': '限時送東森幣★SONY 55型 4K HDR智慧連網液晶電視 KD-55X7000G',
        'open': 0,
        'price': 23310,
    },
    {
        'productNumber': 2249496,
        'name': 'JAM Live True 真無線藍牙耳機',
        'open': 0,
        'price': 1111,
    },

    // 11/11
    {
        'productNumber': 2654184,
        'name': '舒潔 棉柔舒適抽取衛生紙 (100抽x20包x3串/箱)',
        'open': 0,
        'price': 599,
    },
    {
        'productNumber': 2587100,
        'name': 'COACH x MK 爆殺回饋檔托特包/後背包/斜背兩用包(多款選)',
        'open': 0,
        'price': 2911,
    },
    {
        'productNumber': 2799028,
        'name': 'WEDAR 超臨界沙棘油限時囤貨8盒組(30顆/盒)',
        'open': 0,
        'price': 2511,
    },
    {
        'productNumber': 2786738,
        'name': '雙11專案 Dyson戴森 Pure Cool Cryptomic清淨機風扇TP06(兩色任選)',
        'open': 0,
        'price': 19900,
    },
    {
        'productNumber': 2717678,
        'name': 'realme X50 S765G (6G+128G) 5G四鏡頭暢速潮玩機-極地紫',
        'open': 0,
        'price': 7990,
    },

    // 11/12
    {
        'productNumber': 2801462,
        'name': '買一箱送一箱 Casa卡薩 精選世界莊園綜合濾掛咖啡(60入)',
        'open': 0,
        'price': 1111,
    },
    {
        'productNumber': 2785585,
        'name': '下殺↘【GF 快時尚】簡約個性經典百搭風衣外套 (多款任選S-2XL)',
        'open': 0,
        'price': 611,
    },
    {
        'productNumber': 1935980,
        'name': ' 德國webner葦柏納 蜜香玫瑰五彩卸妝精油100ml 2入',
        'text': '',
        'price': 811,
    },
    {
        'productNumber': 2589575,
        'name': ' 【YM BIOMED 陽明生醫】龜鹿鴕鳥蟲草原膠42入超值組(TV熱銷)(本商品不開放體驗)',
        'open': 0,
        'price': 6980,
    },
    {
        'productNumber': 2796640,
        'name': '歌林 Kolin-2.0L高級304不鏽鋼快煮壺(KPK-UD2007S)',
        'open': 0,
        'price': 999,
    },
];
