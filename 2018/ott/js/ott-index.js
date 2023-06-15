function enableBanner() {
  var $sliderWrap = $('#sliderWrap');

  $sliderWrap.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
}
enableBanner();

function enableNav() {
  var $document = $(document);
  var $btnDrop = $('#btnDrop');
  var $navWrap = $('#navWrap');
  var $dropWrap = $('#dropWrap');
  var $navList = $('#navList');
  var $subList = $('.sub__list');
  var $navInfo = $('#navInfo');
  var $listItem = $('.list__item');
  var $navItem = $('.nav__item');
  var $subItem = $('.sub__item');
  var $productWrap = $('.product__wrap');

  function btnDropActive(e) {
    e.preventDefault();
    $btnDrop.toggleClass('open');
    $navInfo.stop().toggle(200);
    $dropWrap.stop().toggle(200);
  }
  $btnDrop.on('click', function(e){
    e.stopPropagation();
    btnDropActive(e);
  });

  $document.on('click', function(e){
    if($btnDrop.hasClass('open')) {
      btnDropActive(e);
    }      
  });

  function bindDropNav(){
    $listItem.on('click', function(){
      var $this = $(this);
      var thisIndex = $this.index();
      var totalListItem = $listItem.length;

      function navAnimation(){
        var wrapOffsetLeft = $navWrap.offset().left;
        var offsetLeft = ($navItem.eq(thisIndex).offset().left - $navWrap.offset().left + $navList.scrollLeft()) - 60 + 2;
    
        $navList.stop().animate({
          scrollLeft: offsetLeft,
        });      
      }
      
      $listItem.removeClass('active');
      
      $listItem.eq(thisIndex).addClass('active');
      
      $listItem.eq(thisIndex + totalListItem / 2).addClass('active');
      $subList.removeClass('active');
      $subList.eq(thisIndex).addClass('active');
      $subList.eq(thisIndex).find($subItem).eq(0).trigger('click');
      navAnimation();
    });
  }
  bindDropNav();

  function itemActive(el) {
    el.on('click', function(){
      var $this = $(this);

      $this.siblings().removeClass('active');
      $this.addClass('active');
    });
  }
  itemActive($subItem);

  function productActive(){
    $subItem.on('click', function(){
      var $this = $(this);
      var thisIndex = $this.index();
      var thisParentIndex = $this.parent().index();
      var numberBeforeItem = 0;

      for(var i = thisParentIndex; i > 0; i--) {
        numberBeforeItem += $subList.eq(i).find($subItem).length;
      }

      var thisTrueIndex = numberBeforeItem + thisIndex;
      $productWrap.removeClass('active');
      $productWrap.eq(thisTrueIndex).addClass('active');
    });
  }
  productActive();
}
requestAnimationFrame(enableNav);

function AppendProductRankOrder(){
  var $productItem = $('.product__item');
  var flagDom = '<div class="flag--rank"><span></span></div>';

  $productItem.append(flagDom);

  var $productList = $('.product__list');
  var $flagOrder = $(".flag--rank span");
  for(var i = 0; i < $productList.length; i++) {
      var $productChild = $productList.eq(i).children();
      for(var j = 0; j < $productChild.length; j++) {
        var orderNumber = j + 1;
        $productChild.eq(j).find($flagOrder).append(orderNumber);
      }
  }
}

function initActive(el){
  el.eq(0).addClass('active');
}
$(document).ready(function(){
  var $subList = $('.sub__list');
  var $dropItem = $('.drop__item');
  var $navItem = $('.nav__item');
  var $subItem = $('.sub__item');
  var $productWrap = $('.product__wrap');

  initActive($subList);
  initActive($dropItem);
  initActive($navItem);
  initActive($productWrap);

  $subList.each(function(){
    var $subFirst = $(this).find($subItem).eq(0);
    initActive($subFirst);
  });
});

function navGoTopSticky(){
  var $window = $(window);
  var $goTop = $('#goTop');
  var $navBox = $('#navBox');
  var $nav = $('#nav');
  var navHeight = $nav.outerHeight();
  var navOffset = $nav.offset().top;

  $window.on('scroll', function(){
    var windowScrollTop = $window.scrollTop();
    var windowWidth = $window.innerWidth();
    
    if(windowScrollTop >= navOffset) {
      $navBox.css('height', navHeight);
      $nav.addClass('sticky');
      if(windowWidth < 1400) {
        $goTop.addClass('active');
      }
      
    } else if(windowScrollTop < navOffset){
      $navBox.css('height', 'auto');
      $nav.removeClass('sticky');
      $goTop.removeClass('active');
    }
  });
  $window.trigger('scroll');
}
$(window).on('load', function(){
  requestAnimationFrame(navGoTopSticky);
});

$(window).on('resize', function(){
  var $window = $(window);
  var $nav = $('#nav');
  var $navBox = $('#navBox');
  var windowWidth = $window.innerWidth();

  if(windowWidth < 1400){
    $nav.removeClass('sticky');
    $navBox.css('height', 'auto');
  }
  requestAnimationFrame(navGoTopSticky);
});

function goTop(){
  var $goTop = $('#goTop');

  $goTop.on('click', function(){
    $('html,body').stop().animate({
      scrollTop: 0,
    }); 
  });
}
goTop();

function callProduct(){
  var $productItem = $('.product__item');

  $productItem.on('click', function(e){
    var $this = $(this);
    var thisIndex = $this.index();
    var thisParentIndex = $this.parent().parent().index();
    var $body = $('body');
    var bodyName = $body.attr('class').split('--')[1];
    var dataUrl = 'product.html' + '?' + bodyName + '&' + thisParentIndex + '&' + thisIndex;
    var $productName = $('.product__name');
    var thisName = $this.find($productName).text();
    var windowWidth = $(window).innerWidth();
    var $wrap = $('#wrap');

    e.preventDefault();
    if (windowWidth < 1400) {
      location.href = dataUrl;
    } else {
      var productFrame = document.getElementById(productFrame);

      if (!productFrame) {
        var frameData = '<iframe id="productFrame" class="product__frame" src="' + dataUrl +
        '" width="1390" height="1080" frameborder="0"></iframe>';

        $wrap.append(frameData);
      }
    }
  });
}
callProduct();