// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉)。
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var breakTime = [
                  // 活動開始時間，需要新增插在這句後面
                  ["2018/11/1"],
                  ["2018/11/2"],
                  ["2018/11/3"],
                  ["2018/11/4"],
                  // 活動結束時間，需要新增插在這句前面
                ];
var productData = [
            // 每次顯示四品，前兩品露出後兩品預告，第0輪(活動開始前)全預告，final輪(最後一輪顯示後)全露出，預告不帶價格。
            // 需要複製請連著"{},"整個區塊複製
            // 第零輪預告 / 第一輪露出
            {
              'link': 'https://www.etmall.com.tw/i/6211286',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
              'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
              'price':'999,999',
            },
            {
              'link': 'https://www.etmall.com.tw/i/1917049',
              'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
              'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
              'price':'2,999',
            },
            // 第零輪預告 / 第一輪預告 / 第二輪露出
            {
              'link': 'https://www.etmall.com.tw/i/1896888',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
              'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
              'price':'3,999',
            },
            {
              'link': 'https://www.etmall.com.tw/i/6211286',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
              'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
              'price':'4,999',
            },
            // 第二輪預告 / 第三輪露出
            {
              'link': 'https://www.etmall.com.tw/i/1917049',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
              'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
              'price':'5',
            },
            {
              'link': 'https://www.etmall.com.tw/i/1896888',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
              'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
              'price':'6',
            },
            // 第三輪預告 / 第四輪露出
            {
              'link': 'https://www.etmall.com.tw/i/6211286',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
              'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
              'price':'7',
            },
            {
              'link': 'https://www.etmall.com.tw/i/1917049',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
              'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
              'price':'8',
            },
            // 第四輪預告 / fianl輪露出
            {
              'link': 'https://www.etmall.com.tw/i/1896888',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
              'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
              'price':'9',
            },
            {
              'link': 'https://www.etmall.com.tw/i/6211286',
              'appLink':'aaa',
              'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
              'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
              'price':'10',
            },
          ];

// 翻頁的連結
var flipLink = [
                  // link為點下去要連到的，title為滑鼠移過去時要的顯示文案
                  // 1-1
                  {
                    'link': 'https://www.etmall.com.tw/',
                    'appLink':'aaa',
                    'title': '驚爆好康',
                  },
                  // 1-2
                  {
                    'link': 'http://www.u-mall.com.tw/',
                    'appLink':'aaa',
                    'title': '優惠特賣',
                  },

                  // 2-1
                  {
                    'link': 'https://www.etmall.com.tw/',
                    'appLink':'aaa',
                    'title': '驚爆好康',
                  },
                  // 2-2
                  {
                    'link': 'http://www.u-mall.com.tw/',
                    'appLink':'aaa',
                    'title': '優惠特賣',
                  },

                  // 3-1
                  {
                    'link': 'https://www.etmall.com.tw/',
                    'appLink':'aaa',
                    'title': '驚爆好康',
                  },
                  // 3-2
                  {
                    'link': 'http://www.u-mall.com.tw/',
                    'appLink':'aaa',
                    'title': '優惠特賣',
                  },

                  // 4-1
                  {
                    'link': 'https://www.etmall.com.tw/',
                    'appLink':'aaa',
                    'title': '驚爆好康',
                  },
                  // 4-2
                  {
                    'link': 'http://www.u-mall.com.tw/',
                    'appLink':'aaa',
                    'title': '優惠特賣',
                  },
                ];