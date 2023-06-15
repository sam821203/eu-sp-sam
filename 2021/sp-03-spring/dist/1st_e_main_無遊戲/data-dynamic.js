// 區塊：限時瘋搶
var dataDynamic = [
    // 每次顯示三品
    // 需要複製請連著"{},"整個區塊複製
    // 是價格的話請用'price'，會加上$符號，不是價格請用'text'，不會加上$符號
    [
        //- 03/17
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002954/2954386/2954386-1_xxl.jpg',
            'name': '北歐風實木純白花邊提把設計免組裝收納櫃 (兩層)',
            'price': '872',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002598/2598436/2598436-1_xxl.jpg',
            'name': '(買一送一)A3春夏款-緹花刺繡棉麻短袖上衣',
            'price': '699',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002611/2611013/2611013-1_xxl.jpg',
            'name': 'PAPAGO! GoSafe S20G GPS行車記錄器',
            'price': '1,990',
        },
    ],
    [
        //- 03/18
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002928/2928439/2928439-1_xxl.jpg',
            'name': '太力 立體免抽氣收納袋6件組(特大X2+中號X4)',
            'price': '399',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002677/2677975/2677975-1_xxl.jpg',
            'name': '【Eisai 衛采】Chocola BB 蜂王飲×10瓶(1盒10瓶裝 曾沛慈代言)',
            'price': '790',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002837/2837424/2837424-1_xxl.jpg',
            'name': 'DV 笛絲薇夢 醇養妍(水潤淨白版)x10盒',
            'price': '2,750',
        },
    ],
    [
        //- 03/19
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002750/2750142/2750142-1_xxl.jpg',
            'name': '優生酒精濕巾80抽X6包',
            'price': '499',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002846/2846724/2846724-1_xxl.jpg',
            'name': '【五桔國際】綜合堅果500g-(3包/組)',
            'price': '839',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002179/2179531/2179531-1_xxl.jpg',
            'name': 'Panssonic 清淨機',
            'price': '1,990',
        },
    ],
    [
        //- 03/20
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002767/2767530/2767530-1_xxl.jpg',
            'name': 'UDR專利濃密膠原蛋白粉PLUS+ x3盒',
            'price': '699',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002951/2951849/2951849-1_xxl.jpg',
            'name': '海尼根0.0零酒精 瓶裝 330mlx24入/箱',
            'price': '799',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002601/2601535/2601535-1_xxl.jpg',
            'name': '喜佳【NCC】CC-9803實用型縫紉機 Genie精靈',
            'price': '3,000',
        },
    ],
    [
        //- 03/21
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002698/2698766/2698766-1_xxl.jpg',
            'name': 'SanDisk Extreme Micro SDXC 讀/寫記憶卡',
            'price': '529',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002848/2848920/2848920-1_xxl.jpg',
            'name': 'BURBERRY 粉紅風格女性淡香水 TESTER 100M',
            'price': '866',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002925/2925717/2925717-1_xxl.jpg',
            'name': '史努比 / 拉拉熊三合一掃地機器人(掃吸拖一機多用)【正版授權】最後3台快搶!-網',
            'price': '990',
        },
    ],
    [
        //- 03/22
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002687/2687020/2687020-1_xxl.jpg',
            'name': 'SHISEIDO 資生堂 安耐曬金鑽高效防曬露',
            'price': '590',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002950/2950076/2950076-1_xxl.jpg',
            'name': 'GIORDANO 男裝素色線條POLO衫 (多色任選)',
            'price': '349',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002125/2125318/2125318-1_xxl.jpg',
            'name': '楠竹衣帽架 木質掛衣收納架 附滾輪',
            'price': '499',
        },
    ],
    [
        //- 03/23
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002858/2858395/2858395-1_xxl.jpg',
            'name': '印度 Himalaya喜馬拉雅 保濕香皂 125g(20入)ACTIVEX隨機6顆',
            'price': '769',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002664/2664351/2664351-1_xxl.jpg',
            'name': '亞尼克 季節生乳捲2條組(週六到貨限定優惠)',
            'price': '799',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002841/2841654/2841654-1_xxl.jpg',
            'name': 'IRIS PCF-HE15 空氣循環扇(二入組)',
            'price': '1399',
        },
    ],
    [
        //- 03/24
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002964/2964476/2964476-1_xxl.jpg',
            'name': 'Slider 兒童三輪折疊滑板車 XL1',
            'price': '1650',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002767/2767529/2767529-1_xxl.jpg',
            'name': 'UDR專利SOD蔓越莓益生菌EX x3盒',
            'price': '799',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/006087/6087771/6087771-1_xxl.jpg',
            'name': 'MIT科技羽絲絨枕2入',
            'price': '369',
        },
    ],
    [
        //- 03/25
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002965/2965068/2965068-1_xxl.jpg',
            'name': '德國百靈油暢銷組(10ml*1+5ml*1)',
            'price': '499',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002851/2851453/2851453-1_xxl.jpg',
            'name': '【LANAMI】小V透亮面膜組 (2+2)',
            'price': '688',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002955/2955315/2955315-1_xxl.jpg',
            'name': 'PB-02 18W 20000mAh PD+QC 快充行動電源(支援TYPE-C雙向)',
            'price': '2890',
        },
    ],
    [
        //- 03/26
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002391/2391889/2391889-1_xxl.jpg',
            'name': '【漢克嚴選】美國產日本和牛級厚切熟成凝脂鮮嫩牛排_5包組(300g±10％/包)',
            'price': '880',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002800/2800745/2800745-1_xxl.jpg',
            'name': 'Adonit Note 旗艦觸控筆王-黑 ADNB',
            'price': '695',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002750/2750142/2750142-1_xxl.jpg',
            'name': '優生酒精濕巾80抽X6包',
            'price': '499',
        },
    ],
    [
        //- 03/27
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002963/2963165/2963165-1_xxl.jpg',
            'name': '台鹽 超導肌活水面膜任選四盒(5片/盒)-傳明酸/多胜肽/黃金魚子',
            'price': '649',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/001884/1884070/1884070-1_xxl.jpg',
            'name': '胡媽媽灶腳 頂級黃金貝+干貝醬6件組',
            'price': '1199',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002845/2845478/2845478-1_xxl.jpg',
            'name': '德國德你雅TITANIA極致修護龜裂護足霜30ML買5送5',
            'price': '799',
        },
    ],
    [
        //- 03/28
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002710/2710911/2710911-1_xxl.jpg',
            'name': '義美 牛奶小泡芙(57gx3入)',
            'price': '69',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002954/2954149/2954149-1_xxl.jpg',
            'name': '【辰鑫生技】美國專利苦瓜胜肽 素食膠囊 2入組(苦瓜胜肽:綠咖啡:酵母鉻:每盒60顆:共120顆)',
            'price': '1190',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002815/2815858/2815858-1_xxl.jpg',
            'name': '台北寒舍艾美酒店【探索廚房】平日自助午晚餐單人券20ITF-票',
            'price': '1280',
        },
    ],
    [
        //- 03/29
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002809/2809673/2809673-1_xxl.jpg',
            'name': 'SK-II  R.N.A.超肌能緊緻活膚霜100g',
            'price': '3680',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002955/2955191/2955191-1_xxl.jpg',
            'name': '【Glico格力高】復刻大人味組合9件禮盒組',
            'price': '699',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002759/2759587/2759587-1_xxl.jpg',
            'name': '聿健 彈力膠原童顏美妍飲2盒(12包/盒)',
            'price': '799',
        },
    ],
    [
        //- 03/30
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002899/2899854/2899854-1_xxl.jpg',
            'name': '【GoPro】HERO9 Black超大電量組(公司貨)',
            'price': '18333',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/005947/5947073/5947073-1_xxl.jpg',
            'name': '日本味王 暢快人生激速加強版(60公克/瓶)x9瓶',
            'price': '1850',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002354/2354016/2354016-1_xxl.jpg',
            'name': 'Homelike 泰德貓抓皮收納椅(大)',
            'price': '1999',
        },
    ],
    [
        //- 03/31
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002520/2520165/2520165-1_xxl.jpg',
            'name': '【CookPower鍋寶】316不鏽鋼提把保鮮盒大尺寸野餐六件組',
            'price': '1180',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002889/2889960/2889960-1_xxl.jpg',
            'name': '德國BRITA 好水講究超值限量組 馬利拉濾水壺+4入去水垢濾芯 (共1壺5芯)',
            'price': '1699',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002978/2978528/2978528-1_xxl.jpg',
            'name': '買大送小 HAIER 海爾AP450 大H空氣清淨機 送AP225 小H空氣清淨機',
            'price': '12800',
        },
    ],
    [
        //- 04/01
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002419/2419068/2419068-1_xxl.jpg',
            'name': '理膚寶水LA Roche-Posay 全護清爽防曬液 UVA PRO 透明色/潤色 30ml',
            'price': '729',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002933/2933247/2933247-1_xxl.jpg',
            'name': '【好揪】啾蒟蒻拌麵 芝麻/椒麻醬料 任選 2盒',
            'price': '439',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/001725/1725144/1725144-1_xxl.jpg',
            'name': 'BAIRAN白朗 微電腦觸控式電陶爐 FBTI-E02',
            'price': '999',
        },
    ],
    [
        //- 04/02
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002776/2776210/2776210-1_xxl.jpg',
            'name': '任天堂 Nintendo Game&Watch: 超級瑪利歐兄弟 掌上型主機',
            'price': '1450',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002961/2961325/2961325-1_xxl.jpg',
            'name': '美式賣場 健司纖三薯脆片+華元波的多薯格格 組合包',
            'price': '509',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002439/2439106/2439106-1_xxl.jpg',
            'name': 'Ania Casa 多尺寸均一價-台灣製 精梳純棉 床包被套組',
            'price': '950',
        },
    ],
    [
        //- 04/03
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002942/2942611/2942611-1_xxl.jpg',
            'name': '3M 細滑牙線棒-薄荷木糖醇-2袋 共1272支/袋',
            'price': '1159',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002527/2527117/2527117-1_xxl.jpg',
            'name': 'LANCOME 蘭蔻 超緊顏5D太空乳霜面膜15ml 4入',
            'price': '270',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002788/2788155/2788155-1_xxl.jpg',
            'name': 'JHT U型包覆無線按摩枕 K-1588',
            'price': '555',
        },
    ],
    [
        //- 04/04
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002661/2661057/2661057-1_xxl.jpg',
            'name': '美國OSTER-Ball Mason Jar隨鮮瓶果汁機(彩繪米/藍)',
            'price': '1280',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002952/2952010/2952010-1_xxl.jpg',
            'name': '泰國頭等艙果乾(186g)-1包組',
            'price': '219',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002898/2898245/2898245-1_xxl.jpg',
            'name': '《台塑生醫》Dr’s Formula 強健逆齡喚黑洗髮精580g(3入組)',
            'price': '899',
        },
    ],
    [
        //- 04/05
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002667/2667897/2667897-1_xxl.jpg',
            'name': 'E SHINE經典圓圈水鑽項鍊',
            'price': '160',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002891/2891490/2891490-1_xxl.jpg',
            'name': '台中【日光溫泉】花見西餐廳 平日晚餐券(MO)',
            'price': '599',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002774/2774973/2774973-1_xxl.jpg',
            'name': '【ELASTINE 伊絲婷】專屬訂製奢華香水洗髮精買3送1',
            'price': '539',
        },
    ],
    [
        //- 04/06
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002799/2799027/2799027-1_xxl.jpg',
            'name': 'WEDAR 世界品質金獎金盞花葉黃素 限時囤貨8盒組(30顆/盒)',
            'price': '1380',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002840/2840196/2840196-1_xxl.jpg',
            'name': '東風 BT21柔韌抽取式衛生紙100抽x10包x10串',
            'price': '799',
        },
        {
            'webLink': 'https://www.etmall.com.tw/Activity/HourSale',
            'mobileLink': 'https://m.etmall.com.tw/Activity/HourSale',
            'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FHourSale&t=%E9%99%90%E6%99%82%E7%98%8B%E6%90%B6',
            // 'productNumber': 2840196,
            'imgSrc': 'https://media.etmall.com.tw/nximg/002073/2073874/2073874-1_xxl.jpg',
            'name': '【Avier】不鏽鋼金屬入耳式全音域耳機',
            'price': '289',
        },
    ],
];