'use strict';


var iframeData = [

    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102419/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102411/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102412/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102413/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102414/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102415/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102416/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102417/index.html'
    },
    {
        url: 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102418/index.html'
    }

]


var visualItemData = [
    {
        data: [
            {
                name: '媚比琳 女神御用氣墊1+1組',
                price: ' 1,020',
                url: 'https://www.etmall.com.tw/i/1852457'
            },
            {
                name: 'LANEIGE 零毛孔無暇水晶V顏組',
                price: ' 1,420',
                url: 'http://www.etmall.com.tw/i/1887180 '
            },
            {
                name: 'Dior LIP GLOW癮誘粉漾潤唇膏',
                price: ' 869',
                url: 'https://www.etmall.com.tw/i/1869967'
            },
            {
                name: '薇姿VICHY 清透保濕礦物BB霜40ml',
                price: ' 748',
                url: 'https://http://www.etmall.com.tw/i/1738385'
            }, 
            {
                name: 'ESTEE LAUDER雅詩蘭黛 微霧光澤水粉底(30ml)',
                price: ' 1,369',
                url: 'https://www.etmall.com.tw/i/1849879'
            },
        ]
    },
    {
        data: [
            {
                name: 'ASUS  GTX1070超強效電競專用筆電',
                price: ' 76,900',
                url: 'https://www.etmall.com.tw/i/1870334'
            },
            {
                name: 'ACER SF314-52G 新款8代14吋康寧玻璃輕薄筆電',
                price: ' 28,900',
                url: 'https://www.etmall.com.tw/i/1857278'
            },
            {
                name: '【Microsoft 微軟】萬用折疊式鍵盤',
                price: ' 2,790',
                url: 'https://www.etmall.com.tw/i/1848776'
            },
            {
                name: '【Microsoft 微軟】無線舒適滑鼠',
                price: ' 1,290',
                url: 'https://www.etmall.com.tw/i/1848758'
            },
        ]
    },
    {
        data: [
            {
                name: 'LG樂金 空氣清淨機大白PS-W309WI',
                price: ' 14,900',
                url: 'https://www.etmall.com.tw/i/1746339'
            },
            {
                name: 'Electrolux 伊萊克斯 PURE i9 型動吸塵機器人',
                price: ' 32,900',
                url: 'https://www.etmall.com.tw/i/1882856'
            },
            {
                name: '勳風 兩用對流式電暖器HF-2510',
                price: ' 2,980',
                url: 'https://www.etmall.com.tw/i/6166892'
            },
        ]
    },
    {
        data: [
            {
                name: '日本味王-健字號暢快人生CX活力優惠組2盒(14包/盒)',
                price: ' 1,980',
                url: 'https://www.etmall.com.tw/i/1855009'
            },
            {
                name: '【克補】B群+鐵 禮盒',
                price: ' 1,149',
                url: 'https:www.etmall.com.tw/i/6161842'
            },
            {
                name: '【克補】B群+鋅 禮盒 ',
                price: ' 1,149',
                url: 'https://www.etmall.com.tw/i/6163084'
            },
            {
                name: '【華齊堂】蜂王乳燕窩晶露禮盒買一送一組 ',
                price: ' 1,111',
                url: 'https://www.etmall.com.tw/i/6100015'
            },
            {
                name: '白蘭氏養蔘飲60ml*64入',
                price: ' 2,699',
                url: 'https://www.etmall.com.tw/i/5846240'
            },
            {
                name: '【信東生技】薑黃雙層錠 (60錠/盒)x2盒',
                price: ' 990',
                url: 'https://www.etmall.com.tw/i/5244453'
            },
        ]
    },
    {
        data: [
            {
                name: '強生CHANSON CS-3000 飛輪有氧健身車',
                price: ' 7,920',
                url: 'https://www.etmall.com.tw/i/1729219'
            },
            {
                name: 'tokuyo  3D俏腿機TF-655',
                price: ' 14,784',
                url: 'https://www.etmall.com.tw/i/6211137'
            },  
        ]
    },
    {
        data: [
            {
                name: 'Timberland 小麥黃塗層斜紋布Radford 帆布靴',
                price: ' 2,990',
                url: 'https://www.etmall.com.tw/i/1857548'
            },
            {
                name: 'COACH 旅行必備後背包',
                price: ' 7,888',
                url: 'https://www.etmall.com.tw/i/1859574'
            },
            {
                name: 'K-Swiss Si-18 Trainer 2.5休閒運動鞋-男-黑/炭灰',
                price: ' 1,990',
                url: 'https://www.etmall.com.tw/i/6021875'
            },            
            {
                name: 'Oris豪利時 Aquis 專業潛水機械錶',
                price: ' 48,240',
                url: 'https://www.etmall.com.tw/i/1886425'
            },
        ]
    },
    {
        data: [
            {
                name: '飛利浦PHILIPS智慧萬用鍋+內鍋+黑晶爐超值組',
                price: ' 5,400',
                url: 'https://www.etmall.com.tw/i/1877935'
            },
            {
                name: '伊萊克斯Electrolux  美式咖啡機',
                price: '  4,491',
                url: 'https://www.etmall.com.tw/i/5853661'
            },
            {
                name: '舒潔廚房紙巾-貼心巧撕108張(6卷x6串/組)',
                price: '  579',
                url: 'https://www.etmall.com.tw/i/1758988'
            },
            {
                name: ' TIGER虎牌 3人份tacook微電腦電子鍋(JAJ-A55R) +電氣快煮壺(PCD-A10R)',
                price: '  7,280',
                url: 'https://www.etmall.com.tw/i/6192708'
            },
        ]
    },
    {
        data: [
            {
                name: '法國皇家 貴賓成犬 專用配方 (7.5kg)',
                price: ' 1,200',
                url: 'https://www.etmall.com.tw/i/1814340'
            },
            {
                name: '法國皇家E35 極度挑嘴貓配方(4kg)',
                price: ' 840',
                url: 'https://www.etmall.com.tw/i/1814405'
            },
            {
                name: 'LG樂金 雙眼小精靈 掃地清潔機器人',
                price: ' 16,599',
                url: 'https://www.etmall.com.tw/i/1736862'
            },
        ]
    }
]