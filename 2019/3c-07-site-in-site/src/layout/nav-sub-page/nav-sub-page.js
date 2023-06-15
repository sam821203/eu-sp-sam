// 因為有sticky版頭故移上去時要扣掉原版頭的高()
function animateMove(target){
  var headerHeight = document.getElementById('spHeader').offsetHeight;
  var targetTop = target.offsetTop - headerHeight;

  $('html, body').stop().animate({
    scrollTop: targetTop
  });  
}

export function connectSubNavCommonBuild(){
  var subNavCommonItems = document.querySelectorAll('#subNavCommon > .sub-nav__item > a');
  var brandListItems = document.querySelectorAll('#brandList .brand__item > a');

  subNavCommonItems.forEach(bindAnchorBuild);
  brandListItems.forEach(bindAnchorBuild);

  function bindAnchorBuild(el) {
    el.addEventListener('click', function(e){
      var hrefTarget = this.href;
      var targetId = document.getElementById(hrefTarget.split('#')[1]);
      var buildOrder = hrefTarget.split('buildOrder')[1] - 1;

      if (targetId) {
        e.preventDefault();

        animateMove(targetId);
      } else if (buildOrder >= 0) {
        e.preventDefault();

        var targetBuild = document.querySelectorAll('.build__wrap')[buildOrder];
        if (!targetBuild) return console.error('目標錯誤，請檢查填寫的數字是否大於總數量');
        
        animateMove(targetBuild);
      }
    });
  }
}