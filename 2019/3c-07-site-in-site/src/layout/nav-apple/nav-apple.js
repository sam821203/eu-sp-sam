export function navClickActive(){
  var subNavs = document.querySelectorAll('#subNavApple > li');
  var subNavlinks = document.querySelectorAll('#subNavApple a');
  var appleList = document.querySelector('#appleList');
  var appleListItems = document.querySelectorAll('.apple-list__item');
  var appListModified = false;

  subNavlinks.forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  subNavs.forEach(function(el, index) {
    el.addEventListener('click', function() {
      subNavs.forEach(function(el) {el.classList.remove('active')});
      appleListItems.forEach(function(el) {el.classList.remove('active')});

      el.classList.add('active');
      appListModified = true;
      appleList.classList.add('sticky');
      appleListItems[index].classList.add('active');
    });
  });

  window.addEventListener('scroll', function() {
    if (appListModified) {
      appleList.classList.remove('sticky');
      appListModified = false;
    }
  });
}