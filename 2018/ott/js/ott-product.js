var href = location.href;
var originData = location.href.split('?')[1].split('&')[0];
var originDataPage = originData.substring(0,1).toUpperCase() + originData.substring(1);
var originDataArrayName = 'productContentIn' + originDataPage;
var array1st = location.href.split('?')[1].split('&')[1];
var array2nd = location.href.split('?')[1].split('&')[2];
var dataInArray = window[originDataArrayName][array1st][array2nd];
var videoId = dataInArray.video.split('embed')[1] || dataInArray.video.split('v=')[1];

if (videoId) {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoFrame', {
      height: '432',
      width: '768',
      videoId: videoId,
      allowfullscreen: true,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }      
    });
  }

  function onPlayerReady(event) {
    var $btnPlay = $('#btnPlay');

    $btnPlay.show();
  }

  function onPlayerStateChange(event) {
    changeBtn(event.data);
  }
  function customYoutubeBtn() {
    var $btnPlay = $('#btnPlay');
    var videoPlay = false;

    $btnPlay.hide();
    $btnPlay.on('click', function(e){
      e.preventDefault();


      if (!$btnPlay.hasClass('played')) {
        videoPlay = true;

        player.playVideo();
      } else {
        videoPlay = false;
        
        player.pauseVideo();
      }
    })
  }
  customYoutubeBtn();

  function changeBtn(playerStatus) {
    var $btnPlay = $('#btnPlay');

    if (playerStatus == -1) {
      $btnPlay.removeClass('played');
    } else if (playerStatus == 0) {
      $btnPlay.removeClass('played');
    } else if (playerStatus == 1) {
      $btnPlay.addClass('played');
    } else if (playerStatus == 2) {
      $btnPlay.removeClass('played');
    } 
  }
} else {
  var $btnPlay = $('#btnPlay');
  $btnPlay.remove();
}

function renderData() {
  var $videoWrap = $('#videoWrap');
  var $promo = $('#productPromo');
  var $name = $('#productName');
  var $spec = $('#productSpec p');
  var $id = $('#productId');
  var $price = $('#productPrice');
  var $btnBuy = $('#btnBuy');
  
  if(!dataInArray.video) {
    var productImg = '<img id="productImg" class="product__img" src="" alt="">';
    
    $videoWrap.removeClass('shadow');
    $videoWrap.append(productImg);


    var $productImg = $('#productImg');
    $productImg.attr('src', dataInArray.productImg);
  }

  $promo.append(dataInArray.promo);
  $name.append(dataInArray.name);
  $price.append(dataInArray.price);
  $spec.append(dataInArray.spec);
  $id.append(dataInArray.id);
  $btnBuy.attr('href', dataInArray.link);

}
renderData();

function goBack() {
  var $btnBack = $('#btnBack');
  var $html = $('html, body');
  var href = location.href;
  var originPage = location.href.split('?')[1].split('&')[0];

  $btnBack.on('click', function(e){
    e.preventDefault();

    parent.location.href= originPage + '.html';
  });    
}
goBack();