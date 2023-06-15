'use strict';


var iframeData = [

    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101162/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101163/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101164/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101165/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101166/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101167/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101168/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101169/index.html'
    },
    {
        url: 'http://www.u-mall.com.tw/XML/content/DMSetting/Final/201801/SP_1101170/index.html'
    }

]


var visualItemData = [
    {
        data: [
            {
                name: '資生堂 百優精純乳霜(增量版) 75ml',
                price: ' 2,388',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=45119&sc=01782446'
            },
            {
                name: 'SCHWARZKOPF 施華蔻',
                price: '  1,099 ',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=31505&sc=200422761'
            },
            {
                name: '帕瑪氏天然橄欖脂抗老修護超值3入組',
                price: ' 599',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=64525&sc=02205406'
            },
            {
                name: 'VASELINE凡士林 全效滋養/深層修護保濕/鎖水保濕(無香精)/可可深層保濕潤膚乳600ml 2入組',
                price: ' 379',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31133&cid=64576&sc=02208013'
            },
        ]
    },
    {
        data: [
            {
                name: '【Mammut 長毛象】防水保暖外套(男)',
                price: '  14,220',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=34980&cid=112788&sc=02216582'
            },
            {
                name: '【Mammut 長毛象】防水保暖外套(女)',
                price: ' 14,220',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=34980&cid=112788&sc=02208609'
            },
            {
                name: 'Palladium Pallabrouse HIKR-男-深灰色',
                price: ' 2,590',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=30625&cid=55810&sc=02205448'
            },
            {
                name: 'Palladium Pallabrouse HIKR LP-女-卡其色',
                price: ' 2,590',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=30625&cid=55643&sc=02217512'
            },
        ]
    },
    {
        data: [
            {
                name: 'OPPO R11s Plus',
                price: ' $17,990',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31132&cid=44246&sc=02211346'
            },
        ]
    },
    {
        data: [
            {
                name: 'ASUS華碩 筆電(附原廠觸控筆)',
                price: ' $39,900',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31138&cid=33132&sc=02186030'
            },
        ]
    },
    {
        data: [
            {
                name: '北方直立式電暖器(FH221)',
                price: ' 1,680',
                url: 'https://www.etmall.com.tw/i/1912384'
            }, 
            {
                name: '象印 彈跳式杯蓋不鏽鋼保溫杯超值組合購',
                price: ' 1,790',
                url: ''
            },
            {
                name: '日本大京電販 原木桑拿桶',
                price: ' 3,781',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31402&cid=103191&sc=01836869'
            },
        ]
    },
    {
        data: [
            {
                name: 'LG樂金 直立式手持無線吸塵器',
                price: ' 20,900',
                url: ''
            },
        ]
    },
    {
        data: [
            {
                name: 'BURBERRY HOUSE格紋拼皮革壓釦長夾(酒紅)',
                price: ' 11,900',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=30591&cid=34638&sc=02122738'
            },
            {
                name: '【CHANEL】荔枝皮復古金鏈後背包',
                price: ' 137,000',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=30591&cid=42344&sc=02170504'
            },
            {
                name: '【CASIO】2017-LOVER’S COLLECTION 星空雙顯對錶',
                price: ' 8,448',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=30591&cid=40852&sc=02208490'
            },
        ]
    },
    {
        data: [
            {
                name: '【三得利】芝麻明EX 90錠/瓶',
                price: ' 1,500',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=31149&cid=87668&sc=01358734'
            },
            {
                name: '【新東陽】人氣肉鬆蛋捲禮盒*2盒+鳳梨酥*2盒',
                price: ' 888',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=34954&cid=52455&sc=02216234'
            },
            {
                name: '【莊國顯】海王子特等烏魚子四兩x2',
                price: ' 1,380',
                url: 'http://www.u-mall.com.tw/Prod?nm=&sid=34954&cid=52419&sc=01759191'
            },
        ]
    }
]