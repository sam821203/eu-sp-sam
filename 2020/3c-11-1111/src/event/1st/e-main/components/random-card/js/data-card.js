// 此檔案壓縮混淆後在asset處直接引入資料夾、交由企劃填寫引入，此處只放程式碼備份

// data內需要兩種必須key：物品id(獨立)、prob(機率)，
// 以及各種欲填充到畫面上的圖片來源、連結、品名等key
// data範例：
// var obj = [
//  {id: 1, prob: 10},
// ];

// 而純前端為了混淆data來源，將data內的key值簡化，此處使用：
// var obj = [
//  {i: 1, n: 123456, p: 10},
// ];
// i表示物品id，1為大獎、2為銘謝惠顧、3以上是小獎；
// p表示機率參數prob(實際擲骰為全獎項機率參數總和，如{id:a ,prob:100},{id:b ,prob:50},則a的中獎率為100/(100+50))
// s表示圖片來源imgSrc除了大獎使用s: 666、沒中獎使用s: 978，(666.png、978.png)
// 小獎來源直接用i序號，並且將png檔用i序號數字命名，用js轉換成字串+.png寫入html
// n表示銷編productNumber，會判斷大小網app帶入相應的連結
// w表示webLink，不用銷編走手填大網連結
// m表示mobileLink，不用銷編走手填小網連結
// a表示appLink，不用銷編走手填APP連結
// t表示linkTitle，為滑鼠移到anchor上面時的title屬性要出現的字樣，可不填
// r表示repeat，當r=0時表示該品項不會重複，r=其他數值或是沒有r屬性時則「該品項」會重複被抽到

// 另外提供了由data內控制是否「整場遊戲」要骰出重複的設定，預設是重複，
// 只要另外給一個變數nr(noRepeat的意思)，只要不為undefined就可以觸發不重複，nr = 0或是沒該變數(為undefined)就會重複

// 跟窗口溝通好代表意義即可

var nr = 0;
var obj = [
  {
    i: 1,
    s: 666,
    p: 10,
    a: "google://aaa",
    r: 0,
  },
  {
    i: 2,
    s: 978,
    p: 20
  },
  {
    i: 3,
    p: 30,
    a: "google://aaa"
  },
  {
    i: 4,
    n: 56789,
    p: 30
  },
  {
    i: 5,
    n: 123456,
    p: 30
  },
  {
    i: 6,
    n: 56789,
    p: 30
  },
  {
    i: 7,
    n: 123456,
    p: 30
  },
  {
    i: 8,
    n: 56789,
    p: 30
  },
  {
    i: 9,
    n: 123456,
    p: 30
  },
  {
    i: 10,
    n: 56789,
    p: 30
  },
  {
    i: 11,
    n: 123456,
    p: 30
  },
  {
    i: 12,
    n: 56789,
    p: 30
  },
  {
    i: 13,
    n: 123456,
    p: 30
  },
  {
    i: 14,
    n: 56789,
    p: 30
  },
  {
    i: 15,
    n: 123456,
    p: 30
  },
  {
    i: 16,
    n: 56789,
    p: 30
  },
  {
    i: 17,
    n: 123456,
    p: 30
  },
  {
    i: 18,
    n: 56789,
    p: 30
  },
  {
    i: 19,
    n: 123456,
    p: 30
  },
  {
    i: 20,
    n: 56789,
    p: 30
  },
  {
    i: 21,
    n: 123456,
    p: 30
  },
  {
    i: 22,
    n: 56789,
    p: 30
  },
  {
    i: 23,
    n: 123456,
    p: 30
  },
  {
    i: 24,
    n: 56789,
    p: 30
  },
  {
    i: 25,
    n: 123456,
    p: 30
  },
];