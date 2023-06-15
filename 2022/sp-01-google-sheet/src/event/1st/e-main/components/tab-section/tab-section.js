// 此為對應google宮格版型1的內容，特徵為沒有價格
export var initDailyGoods = tabSectionGoods();

function tabSectionGoods () {
  var getTabGoodsData = document.getElementById( 'contentBlock' );

  var sheetTabName = 'public1';
  var sheetRange = 'B2:Z1000';

  // 雲端有兩個位置供切換
  var spreadsheetId = '1LiRzNFW185PJxbpqAcSsMR4WchMYUUYzxbT_bsJSrcE';
  // var spreadsheetId = '12HevOC5kHqeIs5BZLTTfx_xoxTr0eQHPc3ej48RrZFs';

  var apiKey = 'AIzaSyCr81HCwqD6TQ8QHb8-2_IrCkJPg7br6f8';

  var preUrl = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/';
  var sheetRange = sheetTabName + '!' + sheetRange;
  var postUrl = '?key=' + apiKey;

  var dataUrl = preUrl + sheetRange + postUrl;
  // console.log( dataUrl );

  $.getJSON( dataUrl,
    function ( json ) {
      // console.log( json.values );
      var e = json.values;
      $( e ).each( function () {
        var content = '';
        content += '<li class="content__item">';
        content += '<div class="good__pic"><img src="' + this[2] + '" alt="' + this[0] + '"></div>';
        content += '<div class="good__title">' + this[0] + '</div>';
        content += '<div class="good__promo">' + this[1] + '</div>';
        content += '</li>';

        getTabGoodsData.innerHTML += content;
      } );
    }
  );
}