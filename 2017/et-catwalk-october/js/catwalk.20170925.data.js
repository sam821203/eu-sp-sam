'use strict';

var iframeData = [

    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102090/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102091/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102094/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102095/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102098/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102099/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102100/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102101/index.html'
    },
    {
        url: 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102102/index.html'
    }

]

var firstData = {
    name: 'ASUS ZenFone 4 Selfie Pro ZD552KL (4G/64G)',
    price: ' 9,990',
    url: 'http://www.etmall.com.tw/i/1825093'
}

var otherData = [
    {
        data: [
            {
                name: 'IOPE 極致遮瑕保濕玫瑰金週慶組',
                price: ' 2,380',
                url: 'http://www.etmall.com.tw/i/1854586'
            },
            {
                name: 'IOPE 青春活顏極致爆水組',
                price: ' 1,780',
                url: 'http://www.etmall.com.tw/i/1855859'
            },
            {
                name: 'LANGEIGE蘭芝 女神聚光氣墊買大送小組',
                price: ' 1,246',
                url: 'http://www.etmall.com.tw/i/1854585'
            },
            {
                name: 'LANEIGE蘭芝 睡美人煥白美唇組',
                price: ' 990',
                url: 'http://www.etmall.com.tw/i/1855418'
            }
        ]
    },
    {
        data: [
            {
                name: 'Kanebo佳麗寶 DEWS緊緻活顏修護超值8件組',
                price: ' 3,330',
                url: 'http://www.etmall.com.tw/i/1843851'
            },
            {
                name: 'LOREAL Paris 巴黎萊雅 獨家限定染護魅力組',
                price: ' 650',
                url: 'http://www.etmall.com.tw/i/1852558'
            },
            {
                name: 'SHISEIDO 資生堂 百優精純乳霜75ml (加大版)',
                price: ' 2,640',
                url: 'http://www.etmall.com.tw/i/6079659'
            },
            {
                name: 'NARUKO牛爾【1+1】白玉蘭鑽采超緊緻維他命K眼霜',
                price: ' 399',
                url: 'http://www.etmall.com.tw/i/1858828'
            }
        ]
    },
    {
        data: [
            {
                name: '【華齊堂 珍珠粉燕窩飲禮盒膠原蛋白活莓飲禮盒雙饗組',
                price: ' 888',
                url: 'http://www.etmall.com.tw/i/1781643'
            },
            {
                name: '力度伸 C+D+鋅 發泡錠柳橙口味(30錠/盒) 獨家買就送 素寶丁 綜合維他命發泡錠15錠',
                price: ' 699',
                url: 'http://www.etmall.com.tw/i/1846977'
            },
            {
                name: '【善存】女性綜合維他命 120錠',
                price: ' 739',
                url: 'http://www.etmall.com.tw/i/6163571'
            }
        ]
    },
    {
        data: [
            {
                name: 'ASUS ZenBook FlipS 極致輕薄翻轉筆電',
                price: ' 46,900',
                url: 'http://www.etmall.com.tw/i/1837379'
            },
            {
                name: 'ACER SP515-51GN美型翻轉最新8代15吋筆電',
                price: ' 33,900',
                url: 'http://www.etmall.com.tw/i/1844694'
            }
        ]
    },
    {
        data: [
            {
                name: '【挺立】鈣強化錠禮盒 共176錠',
                price: ' 1,199',
                url: 'http://www.etmall.com.tw/i/6182016'
            },
            {
                name: '【克補】B群+鋅禮盒 共180錠',
                price: ' 1,199',
                url: 'http://www.etmall.com.tw/i/6163084'
            },
            {
                name: '【克補】B群+鐵禮盒 共180錠',
                price: ' 1,199',
                url: 'http://www.etmall.com.tw/i/6161842'
            },
            {
                name: '【華齊堂】元氣蜜蔘飲禮盒(60ml/12入/盒)2盒',
                price: ' 888',
                url: 'http://www.etmall.com.tw/i/6169462'
            },
            {
                name: '善存銀寶禮盒',
                price: ' 1,549',
                url: 'http://www.etmall.com.tw/i/6182028'
            }
        ]
    },
    {
        data: [
            {
                name: 'Timberland 避震高筒戶外休閒鞋',
                price: ' 2,580',
                url: 'http://www.etmall.com.tw/i/1790590'
            },
            {
                name: 'Timberland七武士系列品牌標誌 T 恤',
                price: ' 1,288',
                url: 'http://www.etmall.com.tw/i/1857543'
            },
            {
                name: 'COACH Keith Haring聯名後背包-塗鴉小狗',
                price: ' 9,990',
                url: 'http://www.etmall.com.tw/i/1853772'
            },
            {
                name: 'CITIZEN 時尚都會三針腕錶FE6015-56E',
                price: ' 6,500',
                url: 'http://www.etmall.com.tw/i/6042158'
            }
        ]
    },
    {
        data: [
            {
                name: 'tokuyo SLOW Walk 慢走健走跑步機 TT-335',
                price: ' 12,144',
                url: 'http://www.etmall.com.tw/i/1834821'
            },
            {
                name: 'SHARP夏普 13公升除濕機DW-E13HT-W 獨家送 PHILIPS飛利浦不挑鍋黑晶爐HD4998(市值$1,680)',
                price: '  11,900',
                url: 'www.etmall.com.tw/i/1864953'
            },
            {
                name: '日本siroca crossline 自動研磨咖啡機-A1210R',
                price: ' 4,980',
                url: 'http://www.etmall.com.tw/i/6191739'
            },
            {
                name: '強生CHANSON CS-3000 飛輪有氧健身車',
                price: ' 4,980',
                url: 'http://www.etmall.com.tw/i/1729219'
            }
        ]
    },
    {
        data: [
            {
                name: '白蘭陽光馨香超濃縮洗衣精補充包(1.6kg x6包) 獨家買就送 台鹽水(1500ml)12入/箱(市值$635元)',
                price: ' 379',
                url: 'http://www.etmall.com.tw/i/5592159'
            },
            {
                name: '【將將好收納】Nice直取式整理箱-35L(1入)',
                price: ' 419',
                url: 'http://www.etmall.com.tw/i/6234092'
            },
            {
                name: 'LG樂金19kg WiFi蒸氣洗脫烘滾筒洗衣機',
                price: ' 65,900',
                url: 'http://www.etmall.com.tw/i/1853110'
            }
        ]
    }
]