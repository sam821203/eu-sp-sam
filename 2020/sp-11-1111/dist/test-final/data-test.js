// TODO: 此為data說明與範例檔，註解部分請只留在dev環境，prod環境請不要copy進去，減少體積與減少讓外人破解的機會
// 每個品項的格式可以使用銷編的字串、數字或是綜合物件三種
// 物件內有大網網址、小網網址、APP網址、圖片、品名、價格、促銷字、銷編共8種設定，至少要給銷編一種
// 可以圖片品名用銷編，網址價格用客製化這類操作
// 客製化預設大於銷編，有客製化走客製化
// 呈上，有客製化選項和銷編同時存在時以客製化為主
// 也可以純手動，三種網址、圖片、品名、價格/促銷字，全自己來
// 大網網址必填，沒填小網預設大網、沒填APP預設小網
// 銷售字和價格同時存在時以銷售字為主(有沒有$符號的差異)
// 註解掉的範例錯誤可以打開看看錯誤訊息
// 因為填銷編自動同步靠組版後上線時ajax伺服器同步資料，因此離線檔會因為CORS(同源政策)阻擋看不到同步的品名與價格

var dataDynamic2 = [
  '2647280',
  6068241,
  {
    'productNumber': 2725496,
    'name': '【Mine Phone】MIT製造 MCK-9527 迷你大容量 馬卡龍行動電源-網',
    'price': 614,
  },
  {
    'webLink': 'aaa',
    'productNumber': 2725496,
    'text': '呵呵',
  },
  {
    'webLink': 'bbb',
    'mobileLink': 'ccc',
    'imgSrc': 'https://media.etmall.com.tw/NXimg/002779/2779833/2779833-1_XL.jpg',
    // 'productNumber': 00000000, //FIXME: 這邊打開會因為銷售編號不正常報錯
    'name': '１２４６４６４６１４６１３１',
    'price': 1200,
    'text': '哇哈哈'
  },
  // { //FIXME: 這邊打開會因為沒有銷售編號也沒有客製化name、price而報錯
  //   'webLink': 'ddd',
  //   'mobileLink': 'eee',
  //   'appLink': 'fff',
  //   'imgSrc': 'https://media.etmall.com.tw/NXimg/002747/2747555/2747555-1_XL.jpg',
  // },
  {
    'webLink': 'ddd',
    'mobileLink': 'eee',
    'appLink': 'fff',
    'imgSrc': 'https://media.etmall.com.tw/NXimg/002747/2747555/2747555-1_XL.jpg',
    'name': '熊媽媽開館慶-青江菜250公克±10%',
    'text': '超便宜ㄉ',
  },
  2256603,
  2589575,
  2535006,
  2593370,
  1849443,
  // { //FIXME: 這邊打開會因為沒有銷售編號也沒有客製化name、price而報錯
  //   aaa:123
  // },
  {
    'productNumber': 2725496,
  },
];
