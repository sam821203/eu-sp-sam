// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉)。
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var breakTime = [
                  // 活動開始時間，需要新增插在這句後面，日期不能相同
                  ["2019/6/11 9:00"],
                  ["2019/6/14 14:00"],
                  ["2019/6/18 23:00"],
                  ["2019/6/21"],
                  // 活動結束時間，需要新增插在這句前面
                ];
var productData = [
            // 每次顯示四品，前兩品露出後兩品預告，第0輪(活動開始前)全預告，final輪(最後一輪顯示後)全露出。
            // 需要複製請連著"{},"整個區塊複製
            {
              'link': '	https://www.etmall.com.tw/Activity/Reg/28',
			        'appLink': 'etmall://open?pgid=43&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fReg%2f28',
              'productImg': 'https://media.etmall.com.tw/NXimg/002152/2152245/2152245-1_XXL.jpg',
              'name': 'iPhone XR 128GB原價$28,900登錄抽折價券',
              'price':'19,999',
            },
            {
              'link': '	https://www.etmall.com.tw/Activity/Reg/28',
			        'appLink': 'etmall://open?pgid=43&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fReg%2f28',
              'productImg': 'https://media.etmall.com.tw/NXimg/002323/2323626/2323626-2_XXL.jpg',
              'name': 'ZenFone6 6G/128G原價$19,900登錄抽折價券',
              'price':'10,000',
            },
            {
              'link': '	https://www.etmall.com.tw/Activity/Reg/28',
			        'appLink': 'etmall://open?pgid=43&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fReg%2f28',
              'productImg': 'https://media.etmall.com.tw/NXimg/002289/2289414/2289414-2_XXL.jpg',
              'name': 'AirPods 二代原價$5,290登錄抽折價券',
              'price':'3,999',
            },
            {
              'link': '	https://www.etmall.com.tw/Activity/Reg/28',
			        'appLink': 'etmall://open?pgid=43&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fReg%2f28', 
              'productImg': 'https://media.etmall.com.tw/NXimg/002182/2182994/2182994-1_XXL.jpg',
              'name': 'Band 3e智慧手環原價$999登錄抽折價券',
              'price':'1',
            },

          ];

// 翻頁的連結
var flipLink = [
                  // link為點下去要連到的，title為滑鼠移過去時要的顯示文案
                  // 1-1
                  {
                    'link': '#notebank10',
				    'appLink': '#notebank10', 	
                    'title': '銀行回饋10%',
                  },
                  // 1-2
                  {
                    'link': '#note30month',
				    'appLink': '#note30month', 	
                    'title': '30分期0利率',
                  },

                  // 2-1
                  {
                    'link': '#notecoin5',
				    'appLink': '#notecoin5', 	 	
                    'title': '東森幣折抵5%',
                  },
                  // 2-2
                  {
                    'link': '#notecoin2',
				    'appLink': '#notecoin2', 	 	
                    'title': '東森幣回饋5%',
                  },

                  // 3-1
                  {
                    'link': '#note1000',
				    'appLink': '#note1000', 	 	
                    'title': '無敵券數量有限',
                  },
                  // 3-2
                  {
                    'link': '#note1000',
				    'appLink': '#note1000', 	 	
                    'title': '滿萬送千快來登記',
                  },

                  // 4-1
                  {
                    'link': '#note1dollar',
				    'appLink': '#note1dollar', 		
                    'title': '只要1元up',
                  },
                  // 4-2
                  {
                    'link': '#note1dollar',
				    'appLink': '#note1dollar', 		
                    'title': '登記就趁現在搶吧',
                  },
                ];