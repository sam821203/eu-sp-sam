function generateData() {
	// 第幾台與撥出時間
	const chNumber = {	'chData': 'CH34', 
						'liveTime': '20:00-20:40'
					};

	// 	今日商品內容請key在這 
	const todayData = [
							{
								'link': 'https://www.etmall.com.tw/i/6211286',
								'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
								'limit': '1/17',
								'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋',
								'price':'35,900',
							},
							{
								'link': 'https://www.etmall.com.tw/i/1917049',
								'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
								'limit': '1/17',
								'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
								'price':'590',
							},
							{
								'link': 'https://www.etmall.com.tw/i/1896888',
								'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
								'limit': '1/17',
								'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
								'price':'5,880',
							},
						];

	// 明日商品內容請key在這
	const tomorrowData = [
							{
								'productImg': 'https://media.etmall.com.tw/NXimg/001790/1790593/1790593-1_XXL.jpg',
								'name': 'Timberland 女款麂皮綁帶休閒鞋',
							},
							{
								'productImg': 'https://media.etmall.com.tw/NXimg/001857/1857796/1857796-1_XXL.jpg',
								'name': 'TIGER Timberland女款海軍藍正絨面皮革／平針織布翻領靴',
							},
							{
								'productImg': 'https://media.etmall.com.tw/NXimg/001790/1790603/1790603-1_XXL.jpg',
								'name': 'Timberland 男款咖啡色休閒鞋A17HD',
							},
							{
								'productImg': 'https://media.etmall.com.tw/NXimg/001790/1790608/1790608-1_XXL.jpg',
								'name': 'Timberland 男款咖啡色休閒鞋A17ZO',
							},
							{
								'productImg': 'https://media.etmall.com.tw/NXimg/001935/1935990/1935990-1_XXL.jpg',
								'name': 'iRobot Roomba 690wifi掃地機器人 總代理保固1+1年-網',
							},
							{
								'productImg': 'https://media.etmall.com.tw/NXimg/001943/1943462/1943462-1_XXL.jpg',
								'name': 'COACH 新款燙印馬車 PVC 直紋拉鍊手拿包(5色選)',
							},
						];
	const $chNumber = $('.mch_num');
	const $slideShow = $('.cycle-slideshow');
	const $todayBox = $('.today_box');
	const $tomorrowPt = $('.tomorrow_pt');
	const dataCh = chNumber.chData + ' ' + chNumber.liveTime;

	let dataHtml = '';
	let dataNav = '';
	let dataTmr = '';

	for (let i = 0; i < todayData.length; i++) {

		dataHtml += '<a href="' + todayData[i].link + '" target="_parent"><div><img src="' + todayData[i].productImg +
					'"></div><div class="td_pt"><div class="td_date"><div class="datew"><span>' + todayData[i].limit +
					'</span><br>限定</div><img src="today_bg.png"></div><div class="td_w">' + todayData[i].name +
					'</div><div class="td_pr">優惠價$<span>' + todayData[i].price + '</span></div></div><div><img src="today_but.png"></div></a>';

		dataNav += '<a href="'+ todayData[i].link + '"><div class="pts_pt"><img src="' + todayData[i].productImg + '"></div><p class="pts_w">' + 
				   todayData[i].name + '</p><p class="pts_pr">' + todayData[i].price + '</p></a>';
	}

	for (let i= 0; i < tomorrowData.length; i++) {

		dataTmr += '<div class="tmr_pt"><div><img src="' + tomorrowData[i].productImg +'"></div><div class="tmr_w">' +
					tomorrowData[i].name + '</div></div>';
	}
	$chNumber.append(dataCh);
	$slideShow.append(dataHtml);
	$todayBox.append(dataNav);
	$tomorrowPt.append(dataTmr);

}
generateData();