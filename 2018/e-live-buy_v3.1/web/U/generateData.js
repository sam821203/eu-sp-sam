function generateData() {
	// 第幾台與撥出時間
	const chNumber = {	'chData': 'CH34', 
						'liveTime': '20:00-20:40'
					};

	// 	今日商品內容請key在這
	const todayData = [
							{
								'link': 'http://www.u-mall.com.tw/Prod?nm=TIGER%E8%99%8E%E7%89%8C6%E4%BA%BA%E4%BB%BD%E5%9C%9F%E9%8D%8B%E5%A3%93%E5%8A%9BIH%E7%82%8A%E9%A3%AF%E9%9B%BB%E5%AD%90%E9%8D%8BJPX-A10R&sid=31402&cid=32478&sc=01851661&kw=6211286&pi=0&PHRef=search_resultPRod_Img_101_pic',
								'productImg': 'http://media.u-mall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
								'limit': '1/17',
								'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋',
								'price':'35,900',
							},
							{
								'link': 'http://www.u-mall.com.tw/Prod?nm=TIGER-%E8%99%8E%E7%89%8C%E4%B8%8D%E9%8F%BD%E9%8B%BC%E8%B6%85%E8%BC%95%E9%87%8F%E5%BD%88%E8%93%8B%E5%BC%8F%E4%BF%9D%E6%BA%AB%E4%BF%9D%E5%86%B7%E6%9D%AF%E4%BF%9D%E6%BA%AB%E7%93%B6MMP-S030&sid=33598&cid=37148&sc=02194010&kw=1917049&pi=0&PHRef=search_resultPRod_Img_101_pic',
								'productImg': 'http://media.u-mall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
								'limit': '1/17',
								'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
								'price':'590',
							},
							{
								'link': 'http://www.u-mall.com.tw/Prod?nm=Northern%E5%8C%97%E6%96%B9%E9%9B%BB%E5%AD%90%E5%BC%8F%E8%91%89%E7%89%87%E6%81%86%E6%BA%AB%E9%9B%BB%E6%9A%96%E7%88%9012%E8%91%89%E7%89%87NRD1281&sid=31402&cid=101549&sc=02173844&kw=1896888&pi=0',
								'productImg': 'http://media.u-mall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
								'limit': '1/17',
								'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
								'price':'5,880',
							},
						];

	// 明日商品內容請key在這
	const tomorrowData = [
							{
								'productImg': 'http://media.u-mall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
								'name': 'TIGER虎牌 日本製頂級款6人份土鍋壓力IH炊飯電子鍋JPX-A10R/買就送.....',
							},
							{
								'productImg': 'http://media.u-mall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
								'name': 'TIGER 虎牌300cc 不鏽鋼超輕量彈蓋式保溫保冷杯',
							},
							{
								'productImg': 'http://media.u-mall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
								'name': 'Northern北方電子式葉片恆溫電暖爐12葉片NRD1281',
							},
						];

	const $chNumber = $('.ch_num');
	const $slideShow = $('.cycle-slideshow');
	const $productNav = $('#productNav');
	const $tomorrowPt = $('.tomorrow_pt');

	let dataHtml = '';
	let dataNav = '';
	let dataTmr = '';
	const dataCh = chNumber.chData + '<div>' + chNumber.liveTime + '</div>';

	for (let i = 0; i < todayData.length; i++) {

		dataHtml += '<a href="' + todayData[i].link + '" target="_blank"><div class="today_pt"><div class="td_pt"><img src="' + todayData[i].productImg +
					'" border="0"></div><div class="td_rg"><div class="td_date">' + todayData[i].limit +'限定</div><div class="td_w">' + todayData[i].name +
					'</div><div class="td_prt">優惠價</div><div class="td_pr">' + todayData[i].price + '</div><div><img src="today_but.png" border="0"></div></div></div></a>';
	}

	for (let i = 0; i < 6; i++) {
		if (i < todayData.length){
			dataNav += '<a href="' + todayData[i].link + '"><div class="pts_pt"><img src="' + todayData[i].productImg + '"></div><p class="pts_w">' + todayData[i].name +
					   '</p><p class="pts_pr">'+ '<span class="fz-sm">$</span>' + todayData[i].price + '</p></a>';
		} else {
			dataNav += '<a href="#" class="no-pointer"><div class="pts_pt">' + (i+1) + '</div><p class="pts_w"></p><p class="pts_pr"></p></a>';
		}
	}

	for (let i= 0; i < tomorrowData.length; i++) {

		dataTmr += '<div class="tmr_pt"><div><img src="' + tomorrowData[i].productImg +'"></div><div class="tmr_w">' +
					tomorrowData[i].name + '</div></div>';
	}

	$chNumber.append(dataCh);
	$slideShow.append(dataHtml);
	$productNav.append(dataNav);
	$tomorrowPt.append(dataTmr);

}
generateData();