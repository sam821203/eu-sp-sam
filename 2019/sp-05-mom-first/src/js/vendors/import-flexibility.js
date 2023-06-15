import flexibility from 'flexibility'
export default (window.flexibility = flexibility);

function isIE() {
  var ua = navigator.userAgent
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  flexibility(document.documentElement)
}