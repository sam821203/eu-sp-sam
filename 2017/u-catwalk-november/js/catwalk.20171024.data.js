'use strict';


var iframeData = [

    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100787/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100788/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100789/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100790/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100791/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100792/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100793/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100794/index.html'
    },
    {
        url: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100795/index.html'
    }

]


var visualItemData = [
    {
        data: [
            {
                name: '媚比琳 女神御用氣墊1+1組',
                price: ' 1,020',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=64040&sc=02128816'
            },
            {
                name: 'LANEIGE 零毛孔無暇水晶V顏組',
                price: ' 1,420',
                url: 'https://www.u-mall.com.tw/Prod?sid=31133&sc=02163630'
            },
            {
                name: 'Dior LIP GLOW癮誘粉漾潤唇膏',
                price: ' 869',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=63375&sc=02146409'
            },
            {
                name: '薇姿VICHY 清透保濕礦物BB霜40ml',
                price: ' 748',
                url: 'https://http://www.etmall.com.tw/i/1738385'
            },
            {
                name: 'ESTEE LAUDER雅詩蘭黛 微霧光澤水粉底(30ml)',
                price: ' 1,369',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=63377&sc=02126144'
            },
            
        ]
    },
    {
        data: [
            {
                name: 'ASUS  GTX1070超強效電競專用筆電',
                price: ' 76,900',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31138&cid=33136&sc=02146776'
            },
            {
                name: 'ACER SF314-52G 新款8代14吋康寧玻璃輕薄筆電',
                price: ' 28,900',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31138&cid=33167&sc=02133645'
            },
            {
                name: '【Microsoft 微軟】萬用折疊式鍵盤',
                price: ' 2,790',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31138&cid=33115&sc=02125040'
            },
            {
                name: '【Microsoft 微軟】無線舒適滑鼠',
                price: ' 1,290',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31138&cid=33115&sc=02125022'
            },
        ]
    },
    {
        data: [
            {
                name: 'LG樂金 空氣清淨機大白PS-W309WI',
                price: ' 14,900',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=105026&sc=02006678'
            },
            {
                name: 'Electrolux 伊萊克斯 PURE i9 型動吸塵機器人',
                price: ' 32,900',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=33056&sc=02159307'
            },
            {
                name: '勳風 兩用對流式電暖器HF-2510',
                price: ' 2,980',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=101542&sc=01778800'
            },
        ]
    },
    {
        data: [
            {
                name: '日本味王-健字號暢快人生CX活力優惠組2盒(14包/盒)',
                price: ' 1,980',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=87593&sc=02131376'
            },
            {
                name: '【克補】B群+鐵 禮盒',
                price: ' 1,149',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=87658&sc=01773711'
            },
            {
                name: '【克補】B群+鋅 禮盒 ',
                price: ' 1,149',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=87721&sc=01774946'
            },
            {
                name: '【華齊堂】蜂王乳燕窩晶露禮盒買一送一組 ',
                price: ' 1,111',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=87648&sc=01575629'
            },
            {
                name: '白蘭氏養蔘飲60ml*64入',
                price: ' 2,699',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=87869&sc=01291278'
            },
            {
                name: '【信東生技】薑黃雙層錠 (60錠/盒)x2盒',
                price: ' 990',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=87634&sc=00574522'
            },
        ]
    },
    {
        data: [
            {
                name: '強生CHANSON CS-3000 飛輪有氧健身車',
                price: ' 7,920',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=33297&cid=107887&sc=01915761'
            },
            {
                name: 'tokuyo  3D俏腿機TF-655',
                price: ' 14,784',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=76045&sc=01851510'
            },  
        ]
    },
    {
        data: [
            {
                name: 'Timberland 小麥黃塗層斜紋布Radford 帆布靴',
                price: ' 2,990',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=30625&cid=55810&sc=02133915'
            },
            {
                name: 'COACH 旅行必備後背包',
                price: ' 7,888',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=30591&cid=43895&sc=02136015'
            },
            {
                name: 'K-Swiss Si-18 Trainer 2.5休閒運動鞋-男-黑/炭灰',
                price: ' 1,990',
                url: 'https://www.u-mall.com.tw/Prod?nm=K-Swiss-Si-18-Trainer-2-5%E4%BC%91%E9%96%92%E9%81%8B%E5%8B%95%E9%9E%8B-%E7%94%B7-%E9%BB%91-%E7%82%AD%E7%81%B0&sid=30625&cid=77799&sc=01496353'
            },
            {
                name: 'Oris豪利時 Aquis 專業潛水機械錶',
                price: ' 48,240',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=30591&cid=51120&sc=02162875'
            },
        ]
    },
    {
        data: [
            {
                name: '飛利浦PHILIPS智慧萬用鍋+內鍋+黑晶爐超值組',
                price: ' 5,400',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=32478&sc=02154385'
            },
            {
                name: '伊萊克斯Electrolux  美式咖啡機',
                price: '  4,491',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=32321&sc=01298836'
            },
            {
                name: '舒潔廚房紙巾-貼心巧撕108張(6卷x6串/組)',
                price: '  579',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=33598&cid=43510&sc=02021551'
            },
            {
                name: ' TIGER虎牌 3人份tacook微電腦電子鍋(JAJ-A55R) +電氣快煮壺(PCD-A10R)',
                price: '  7,280',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=82415&sc=01832500'
            },
        ]
    },
    {
        data: [
            {
                name: '法國皇家 貴賓成犬 專用配方 (7.5kg)',
                price: ' 1,200',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=33604&cid=36632&sc=02090497'
            },
            {
                name: '法國皇家E35 極度挑嘴貓配方(4kg)',
                price: ' 840',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=33604&cid=36714&sc=02090562'
            },
            {
                name: 'LG樂金 雙眼小精靈 掃地清潔機器人',
                price: ' 16,599',
                url: 'https://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=33056&sc=01934477'
            },
        ]
    }
]