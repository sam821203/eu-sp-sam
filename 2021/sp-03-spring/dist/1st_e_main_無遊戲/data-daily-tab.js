// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用'price'，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊：頁籤
var dataDailyTab = [
    // 3/17
    [
        {
            'productNumber': 2796987,
            'name': '倍潔雅 清新柔感抽取式衛生紙150抽x14包x6袋',
            'price': 799,
        },
        {
            'productNumber': 2910486,
            'name': 'ORIGINS 品木宣言 熱銷保養5件組',
            'price': 790,
        },
        {
            'productNumber': 2928651,
            'name': '一品夫人 萬能棒棒機CH-520-1',
            'price': 1880,
        },
    ],
    // 3/18
    [
        {
            'productNumber': 2770893,
            'name': '【味丹】多喝水MORE氣泡水(蜜桃風味)560ml(24瓶/箱)-網',
            'price': 399,
        },
        {
            'productNumber': 2901355,
            'name': '穆拉德 一氧化氮芯立強膠囊3盒-網',
            'price': 1990,
        },
        {
            'productNumber': 2888898,
            'name': 'Apple MacBook Air 13吋 M1 8核心 CPU 與 8核心 GPU/8G/512G',
            'price': 36955,
        },
    ],
    // 3/19
    [
        {
            'productNumber': 2658488,
            'name': '3套組【Dylce 黛歐絲】輕盈蕾絲鎖脂聚攏美胸無鋼圈內衣套組(M~2XL)',
            'price': 788,
        },
        {
            'productNumber': 2817733,
            'name': '高絲KOSE 雪肌精 淨白黑面膜 25gX3-網',
            'price': 340,
        },
        {
            'productNumber': 2761734,
            'name': '任天堂 Nintendo Switch《皮克敏 3 豪華版》台灣公司貨 中文版',
            'price': 1650 ,
        },
    ],
    // 3/20
    [
        {
            'productNumber': 2900377,
            'name': '西莎餐盒-經典組合30罐組(100g/罐)-口味任選-網',
            'price': 880,
        },
        {
            'productNumber': 2338926,
            'name': '華陀扶元堂 美人計淨善美蘋果精華膠3盒 (10包/盒)-2021.06-網',
            'price': 880,
        },
        {
            'productNumber': 2642690,
            'name': '日虎自動滾輪泡腳機 /SPA按摩泡腳機/ 長輩首選紅光按摩 防疫  三立電視台推薦★加贈10%東森幣',
            'price': 3088,
        },
    ],
    // 3/21
    [
        {
            'productNumber': 2596322,
            'name': 'MARC JACOBS Snapshot防刮牛皮相機包/斜背包',
            'price': 7580,
        },
        {
            'productNumber': 1953754,
            'name': '【沛莉緹Panatec】 逆齡無暇塑顏儀 A-310',
            'price': 990,
        },
        {
            'productNumber': 2836292,
            'name': '小米手環 5限量送保護貼',
            'price':  799 ,
        },
    ],
    // 3/22
    [
        {
            'productNumber': 2656729,
            'name': '買就送多功能枕 EILISHE 台灣製造 吸濕排汗天絲 兩用被床包組(單人/雙人/加大均一價 )',
            'price': 1280,
        },
        {
            'productNumber': 2780513,
            'name': '【白蘭氏】深海魚油+蝦紅素 8盒(30顆/盒)-網',
            'price': 2280,
        },
        {
            'productNumber': 2915383,
            'name': 'ViewSonic優派 VX3276-2K-MHD 32型AH-IPS面板2K解析度低輻射護眼液晶螢幕',
            'price': 6388,
        },
    ],
    // 3/23
    [
        {
            'productNumber': 2500926,
            'name': '舒酸定 長效抗敏牙膏 超值8入組-多元護理120g*6+深層潔淨100g*2',
            'price': 499,
        },
        {
            'productNumber': 2932905,
            'name': 'DHC 純欖護唇膏1.5gx3入組-史努比限定版 ',
            'price': 759,
        },
        {
            'productNumber': 2562031,
            'name': '中央牌 14吋DC節能內旋式遙控循環立扇風扇-絢麗白KDS-142SR-W 省電靜音',
            'price': 2880,
        },
    ],
    // 3/24
    [
        {
            'productNumber': 2550117,
            'name': '[Concern康生]摩力寶貝日式輕巧美腿機CM-999-網 ',
            'price': 999,
        },
        {
            'productNumber': 2934135,
            'name': '鹿港天后宮 祈福限量版 - 雙鋼印醫療口罩-祈福限量包(5片/袋，共15片/3款一套 )',
            'price': 268,
        },
        {
            'productNumber': 2932758,
            'name': 'ＨPOWER LED 13000MAH PD/QC 雙向快充 行動電源-網',
            'price': 599,
        },
    ],
    // 3/25
    [
        {
            'productNumber': 2883403,
            'name': 'Timberland 男款巴貝多櫻桃紅印花LOGO短袖T恤',
            'price': 975,
        },
        {
            'productNumber': 2848920,
            'name': ' BURBERRY 粉紅風格女性淡香水 TESTER 100ML',
            'price': 866,
        },
        {
            'productNumber': 1964797,
            'name': 'ACER宏碁 ED273 A 27型VA曲面144Hz更新率FreeSync電競液晶螢幕',
            'price': 5777,
        },
    ],
    // 3/26
    [
        {
            'productNumber': 2904142,
            'name': '泰山桂圓黑木耳露 310g(24入)-網',
            'price': 539,
        },
        {
            'productNumber': 2811978,
            'name': 'UDR專利凍晶蜂王乳舒眠膠原x3盒-集氣購-網',
            'price': 999,
        },
        {
            'productNumber': 2905241,
            'name': '送三明治鬆餅機★HITACHI日立 2-3坪變頻冷專分離式冷氣機 RAS-22SK1/RAC-22SK1-庫',
            'price': 19690,
        },
    ],
    // 3/27
    [
        {
            'productNumber': 2829340,
            'name': '華元 鹹酥餅XXL巨霸包482g/包-綜合10入組(附鹹酥餅帆布袋)-網',
            'price': 275,
        },
        {
            'productNumber': 2488532,
            'name': '【德國Kamill卡蜜兒】不黏膩好吸收特推 清爽保濕護手霜75ml+期間限定1+1護手霜組合 (德國原裝進口)',
            'price': 249,
        },
        {
            'productNumber': 2855715,
            'name': '【Amazfit華米】Bip U 健康運動心率智慧手錶(快速到貨/台灣繁體版/原廠公司貨)',
            'price':  1699,
        },
    ],
    // 3/28
    [
        {
            'productNumber': 2916409,
            'name': '莫菲思 快收升級90CM多功能玩美女孩六層竹鞋架/鞋櫃(茶色)-網',
            'price': 1190,
        },
        {
            'productNumber': 2793279,
            'name': 'WEDAR 蒸生薑紅茶 6盒搶購組(15包/盒)-網',
            'price': 1580,
        },
        {
            'productNumber': 2716565,
            'name': '【2021強音來襲】 台灣保固 harman/kardon 藍牙喇叭 Aura Studio 3 三代無線水母',
            'price': 8690,
        },
    ],
    // 3/29
    [
        {
            'productNumber': 2652500,
            'name': 'PUBT 寵物移動城堡 PLT-02B-55 公爵系列拉桿外出籠',
            'price': 5600,
        },
        {
            'productNumber': 2847255,
            'name': '(LINE直播限定)Labo Labo 零毛孔緊膚化妝水200mlx2入組-保存期限至:2021/09-網',
            'price': 680,
        },
        {
            'productNumber': 2441234,
            'name': 'MITSUBISHI三菱 1級能效25L日本製超強效變頻清淨除濕機 MJ-EV250HM-TW 庫(F)',
            'price': 24900,
        },
    ],
    // 3/30
    [
        {
            'productNumber': 2902641,
            'name': '(超值2件組_五層+三層)免安裝摺疊置物架/秒開折疊落地收納架',
            'price': 2210,
        },
        {
            'productNumber': 2809107,
            'name': 'CLINIQUE倩碧 水磁場72H超循環保濕凝膠 200ml',
            'price': 1900,
        },
        {
            'productNumber': 2035953,
            'name': '日本大河 迷你雙槽柔洗衣機(全新福利品)',
            'price': 1890,
        },
    ],
    // 3/31
    [
        {
            'productNumber': 2908003,
            'name': '新北【麗京棧酒店】彩京苑海陸自助百匯-單人吃到飽晚餐券MO(不分平假日)',
            'price': 660,
        },
        {
            'productNumber': 2552374,
            'name': '【Angel LaLa 天使娜拉】楊謹華代言EX C皙榖胱甘太膠原粉 日本專利蛋白聚醣(15包/盒x5盒)-網',
            'price': 1299,
        },
        {
            'productNumber': 2774784,
            'name': 'IRIS 日本 大拍5.0  雙氣旋偵測除蟎清淨機 HEPA13銀離子限定版 IC-FAC4-庫',
            'price': 3990,
        },
    ],
    // 4/01
    [
        {
            'productNumber': 2679909,
            'name': '任-【UZ EASY SHOP】愛的頻率 美背款B-E罩內衣(沉穩藍)',
            'price': 388,
        },
        {
            'productNumber': 2811774,
            'name': 'LANCOME 蘭蔻 溫和保濕水400ml',
            'price': 1280,
        },
        {
            'productNumber': 6001074,
            'name': 'PHILIPS飛利浦三刀頭水洗式電鬍刀 S5130',
            'price': 1447,
        },
    ],
    // 4/02
    [
        {
            'productNumber': 2522998,
            'name': '【加量包】白蘭 新升級含熊寶貝馨香精華洗衣精補充包2KGX12入 送衛生紙12包',
            'price': 999,
        },
        {
            'productNumber': 2849602,
            'name': '大研生醫 omega-3 84%德國頂級魚油5盒(共300粒)-網',
            'price': 4850,
        },
        {
            'productNumber': 2929685,
            'name': '小米 10T Pro (8+256) 5G手機',
            'price': 15999,
        },
    ],
    // 4/03
    [
        {
            'productNumber': 2949073,
            'name': '【京都手祚】冰絲涼感乳膠涼墊+枕套三件組(雙人&加大-均一價/4色可選)-網',
            'price': 799,
        },
        {
            'productNumber': 1820557,
            'name': '【Morocco GaGa Oil】摩洛哥5.5頭皮專科養髮舒緩洗髮精330mlX3入組',
            'price': 599,
        },
        {
            'productNumber': 2035266,
            'name': 'Canon PIXMA G2010 原廠大供墨複合機-網',
            'price': 2990,
        },
    ],
    // 4/04
    [
        {
            'productNumber': 2589321,
            'name': 'MONS 巴黎限定款造型上衣-網',
            'price': 621,
        },
        {
            'productNumber': 2565165,
            'name': '德國 好立善 EUREYE葉黃素複方軟膠囊 5入組 (30粒/盒)-網',
            'price': 1018,
        },
        {
            'productNumber': 2768609,
            'name': '東森獨家★義大利 Giaretti 二合一熱壓三明治鬆餅機GT-WSA06(經典白)-庫',
            'price': 799,
        },
    ],
    // 4/05
    [
        {
            'productNumber': 2781022,
            'name': '【GIVENCHY 紀梵希】法國質感經典飛行員大框太陽眼鏡',
            'price': 899,
        },
        {
            'productNumber': 2939624,
            'name': 'DeMon BT21微分子修護水凝面膜X5盒_贈小米手環-KIT',
            'price': 2049,
        },
        {
            'productNumber': 2767944,
            'name': 'Apple Watch Series 6(GPS)44mm太空灰色鋁金屬錶殼+黑色運動錶帶',
            'price': 13205,
        },
    ],
    // 4/06
    [
        {
            'productNumber': 2927916,
            'name': '領先者 ES-30 PRO 12吋全屏2K高清流媒體 GPS測速 全螢幕觸控後視鏡行車記錄器(加送32G卡)-網',
            'price': 3893,
        },
        {
            'productNumber': 1927515,
            'name': '華陀扶元堂 醇天然多酚精華飲Plus 3盒(12包/盒)-網',
            'price': 880,
        },
        {
            'productNumber': 2699963,
            'name': '(無痛升級)ASUS華碩 X509JB-0031G1035G1 戰鬥筆電 星空灰 15吋/i5-1035G1/12G/1T+PCIe 512G SSD/MX110/W10',
            'price': 21900,
        },
    ],
];