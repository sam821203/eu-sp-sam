import { detectApp } from 'utils/js/detect.js'

var navData = [
  {
    appLink: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108626%2fw%2fapp.html"
  },
  {
    appLink: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108627%2fw%2fapp.html"
  },
  {
    appLink: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108628%2fw%2fapp.html"
  },
  {
    appLink: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108629%2fw%2fapp.html"
  },
  {
    appLink: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108630%2fw%2fapp.html"
  },
  {
    appLink: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108631%2fw%2fapp.html"
  },
];

function addNavItems() {
  var navItems = document.querySelectorAll('#navBottom a');
  
  if(detectApp(true, false)) {
    navItems.forEach(function(el, index){
      el.href = navData[index].appLink;
    });
  }
}

function bodyAddNavHeight(){
  var writeHeight = function() {
    var navHeight = document.getElementById("navBottom").offsetHeight;
    document.body.style.paddingBottom = navHeight + 'px';
  };
  window.addEventListener('resize', writeHeight);
  writeHeight();
}

function NavBottomReady() {
  addNavItems(); // 如果要森森或不用JS取代nav時，關掉這行即可
  bodyAddNavHeight();
}

export var initNavBottom = NavBottomReady();