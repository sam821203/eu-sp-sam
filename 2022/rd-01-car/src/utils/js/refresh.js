// jQuery觸發--手機下拉重整
$(window).bind('scroll', function(){
  var st = $(this).scrollTop();
  if(!is_forPC){
    if( !is_trigger && st < -120 ){
      is_trigger = true; // 重覆觸發
      // 滑動停止後觸發
      $(window).bind('scrollstop', function(){
        location.reload();
      })
    }
  }
});