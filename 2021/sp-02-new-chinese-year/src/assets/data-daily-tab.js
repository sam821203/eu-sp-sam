// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用'price'，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊：頁籤
var dataDailyTab = [
    // 1/19
    [
        {
            'productNumber': 2763391,
            'name': '喝茶閒閒 招財進寶台灣金萱茶葉禮盒組(3斤共6罐/附提袋)-網',
            'price': 1499,
        },
        {
            'productNumber': 2888957,
            'name': '日本味王 30:6:6高濃度金盞花葉黃素晶亮膠囊(30粒/盒)x7盒+贈晶亮葉黃素(7粒)+贈蔬果酵素錠15粒2包-網',
            'price': 3480,
        },
        {
            'productNumber': 2525916,
            'name': '健身大師 業界首創乾濕兩用電動腳底按摩泡腳機（乾式泡腳機/泡腳機）-網',
            'price': 2880,
        },
    ],
    // 1/20
    [
        {
            'productNumber': 2826092,
            'name': '【買就送City café】【東森獨家】【饗食天堂】假日下午茶餐券2張',
            'price': 1729,
        },
        {
            'productNumber': 5674523,
            'name': '【養命酒】藥用養命酒700mlX2入(乙類成藥)',
            'price': 1569,
        },
        {
            'productNumber': 2745792,
            'name': 'Acer宏碁 TC-875 六核效能桌上型電腦 i5-10400/8G/1T+256G SSD/GT1030 2G/W10',
            'price': 19900,
        },
    ],
    // 1/21
    [
        {
            'productNumber': 6124605,
            'name': '莊國勝特等獎金鑽烏魚子禮盒(4兩4片) -網',
            'price': 2690,
        },
        {
            'productNumber': 2893761,
            'name': ' (買一送一)理膚寶水LA Roche-Posay 身體濕潤霜 400ml 送 200ml',
            'price': 899,
        },
        {
            'productNumber': 2416334,
            'name': '輝葉 晶亮眼2眼部按摩器HY-Y03-網',
            'price': 2888,
        },
    ],
    // 1/22
    [
        {
            'productNumber': 1946296,
            'name': '白蘭氏黑醋栗+金盞花葉黃素精華飲48入＋贈養蔘飲冰糖燉梨60ml*2入★再贈【舒壓頸枕】★-網',
            'price': 2399,
        },
        {
            'productNumber': 2706281,
            'name': '單機降↓DAIKIN大金 15.5坪頂級美肌保濕空氣清淨機MCK70VSCT-W(白)-庫-網',
            'price': 18720,
        },
        {
            'productNumber': 2600795,
            'name': '【Divoom】TIMOO像素藍牙喇叭-天空藍',
            'price': 999,
        },
    ],
    // 1/23
    [
        {
            'productNumber': 2879091,
            'name': ' 迎旺納福-金牛迎旺禮盒-網',
            'price': 298,
        },
        {
            'productNumber': 2229910,
            'name': '華陀扶元堂 3A頂級即食燕盞1盒(330g/瓶)+冰糖燕窩1盒(6瓶/盒)-網',
            'price': 3980,
        },
        {
            'productNumber': 2903437,
            'name': '【暖手寶貝】石墨烯暖手寶/USB調溫電暖袋/暖暖寶(保暖的好朋友)',
            'price': 338,
        },
    ],
    // 1/24
    [
        {
            'productNumber': 2661048,
            'name': 'King Star 愛戀香氛鑽墜-任選',
            'price': 4980,
        },
        {
            'productNumber': 2903016,
            'name': 'LANCOME 蘭蔻 超極光精華水粉餅 (粉盒+粉餅蕊+粉撲) 多色可選',
            'price': 1450,
        },
        {
            'productNumber': 2896939,
            'name': '獨家組合↘台灣製宏瑋醫療口罩10片+TATUNG大同 4公升不鏽鋼電火鍋 TSB-4015S-庫(m)',
            'price': 990,
        },
    ],
    // 1/25
    [
        {
            'productNumber': 2546975,
            'name': '好神拖 輕清拖平板免手洗兩用刮水拖(1桶1拖2布)-超值加贈魔絲布',
            'price': 699,
        },
        {
            'productNumber': 1431817,
            'name': 'LP33益生菌膠囊2盒組(60顆/盒) -網',
            'price': 3040,
        },
        {
            'productNumber': 2904476,
            'name': '【歌林 Kolin】人體感知 個人陶瓷電暖器 KFH-LN601P',
            'price': 899,
        },
    ],
    // 1/26
    [
        {
            'productNumber': 2883807,
            'name': '3件【Mavis瑪薇絲】陽離子保暖發熱罩杯背心/BRA背心3件組',
            'price': 780,
        },
        {
            'productNumber': 2127860,
            'name': '【買一送一】Arenes孔雀石植萃香氛洗沐組',
            'price': 690,
        },
        {
            'productNumber': 2687540,
            'name': 'SONY Xperia 10 II (4G/128G)',
            'price': 8789,
        },
    ],
    // 1/27
    [
        {
            'productNumber': 2531190,
            'name': 'Normady 諾曼地】拼接時尚亮鑽純色牛皮專利磁石增高豆豆鞋(晶鑽黃)',
            'price': 390,
        },
        {
            'productNumber': 2408612,
            'name': 'ESTEE LAUDER雅詩蘭黛 特潤超導修護露50ml',
            'price': 2250,
        },
        {
            'productNumber': 2547774,
            'name': '一日下殺↘SAMPO聲寶 日式多功能料理鍋電火鍋湯鍋不沾塗層三公升 TQ-B19301CL(庫)-網',
            'price': 880,
        },
    ],
    // 1/28
    [
        {
            'productNumber': 2879025,
            'name': '西莎 牛年如意30入組-(餐盒24入+蒸鮮包16入)-網',
            'price': 1080,
        },
        {
            'productNumber': 2869727,
            'name': 'Kanebo 佳麗寶 TFM 修護潤唇晶(買一送一)',
            'price': 650,
        },
        {
            'productNumber': 2786289,
            'name': '美國AOC 70吋4K HDR聯網液晶顯示器+視訊盒70U6195',
            'price': 19999,
        },
    ],
    // 1/29
    [
        {
            'productNumber': 2236454,
            'name': 'Timberland男款淺灰色帆布帆船鞋A1W4WE02',
            'price': 990,
        },
        {
            'productNumber': 2824648,
            'name': '【GRANDE格安德】雙鋼印醫用成人平面口罩(50片裸裝/盒)(4色可挑選)',
            'price': 599,
        },
        {
            'productNumber': 2767865,
            'name': 'TOSHIBA東芝 燒烤料理微波爐 (34L) ER-SGS34(K)TW-庫',
            'price': 3888,
        },
    ],
    // 1/30
    [
        {
            'productNumber': 2510145,
            'name': '【築地一番鮮】回娘家必備年菜伴手禮(帝王蟹+烏魚子+大',
            'price': 1999,
        },
        {
            'productNumber': 2349628,
            'name': '享食尚滴雞精15入(60ml/入)*2盒-TVBS女人我最大藍心湄推薦NO.1',
            'price': 4364,
        },
        {
            'productNumber': 2845981,
            'name': 'Google Pixel 4a 5G (6G/128G-純粹黑)',
            'price': 15190,
        },
    ],
    // 1/31
    [
        {
            'productNumber': 2450137,
            'name': '【曼黛瑪璉】包覆提托經典內衣 B-E罩杯(深遂紅)',
            'price': 450,
        },
        {
            'productNumber': 2880927,
            'name': '【台酒生技】黑酵母酒粕逆齡活膚青春露 120ml五入組',
            'price': 1485,
        },
        {
            'productNumber': 5507010,
            'name': '防潮家 84公升電子防潮箱FD-82CW',
            'price': 3690,
        },
    ],
    // 2/01
    [
        {
            'productNumber': 2152661,
            'name': '100%天絲單/雙人/加大/特大均一價 KOSNEY TENCEL兩用被床包組',
            'price': 1480,
        },
        {
            'productNumber': 2123447,
            'name': '台塑生醫醫之方舒暢益生菌豪華6入組',
            'price': 2500,
        },
        {
            'productNumber': 2906350,
            'name': 'IFM-5008智能恆溫電動按摩足浴機',
            'price': 1780,
        },
    ],
    // 2/02
    [
        {
            'productNumber': 6122296,
            'name': 'Boden-莫比實木餐桌椅組(一桌四椅)',
            'price': 9768,
        },
        {
            'productNumber': 2827214,
            'name': '石墨烯發熱暖暖包/電暖袋/暖手寶/熱敷墊 無水暖手袋 USB供電',
            'price': 450,
        },
        {
            'productNumber': 2848508,
            'name': 'PHILIPS飛利浦 不挑鍋黑晶爐 HD4998(A)-網',
            'price': 1447,
        },
    ],
];