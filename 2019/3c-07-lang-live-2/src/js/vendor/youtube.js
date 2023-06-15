var videos = document.querySelectorAll('.video--youtube');

videos.forEach(function(el) {
    var player;

    el.addEventListener('load', function(){
      onYouTubePlayerAPIReady(el.id);
    });
});

function onYouTubePlayerAPIReady(id) {
  player = new YT.Player(id, {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  var pauseButton1 = document.getElementById("slickBtnPrev");
  var pauseButton2 = document.getElementById("slickBtnNext");

  pauseButton1.addEventListener("click", function () {
    event.target.pauseVideo();
  });
  pauseButton2.addEventListener("click", function () {
    event.target.pauseVideo();
  });
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);