var dataCheckElevator;var notRightElevator;(function(){var a=new Date;var n="?"+a.getTime();var i;s("data-check-elevator.js",n);var o=setInterval(function(){if(typeof dataCheckElevator!=="undefined"){clearInterval(o);var e=dataCheckElevator.startDate;var t=dataCheckElevator.endDate;var r=dataCheckElevator.onlineElevatorUrl;i=v(e,a,t);l(r,n)}},100);function l(e,t){d();var r="localElevatorLeft";var a="localElevatorRight";var n=c(r);var o=c(a);if(i){var l="main-elevator-left.css";var v="main-elevator.js";notRightElevator=!o;m(e,l,f,t);if(n)E(r);m(e,v,u,t)}else{if(n||o)s("sp-elevator.js",t)}}function v(e,t,r){var e=new Date(e);var r=new Date(r);if(!e||t<e)return false;if(t>=e){if(t>=r)return false;else return true}else return false}function c(e){var t=document.getElementById(e);if(t)return true;else return false}function d(){var e=document.getElementById("elevatorHome");var t=document.getElementById("navRightBar");if(!e&&!t){console.error("HTML沒有電梯的家！");return false}}function f(e,t,r){var a=document.createElement("link");var e=t?e+t:e;var n=document.getElementById(r);a.rel="stylesheet";a.href=e;if(n)n.parentNode.insertBefore(a,n.nextSibling);else document.head.appendChild(a)}function u(e,t,r){var a=document.createElement("script");var e=t?e+t:e;var n=document.getElementById(r);a.src=e;a.async=true;if(n)document.body.insertBefore(a,n.nextSibling);else document.body.appendChild(a)}function s(e,t,r){var a=document.getElementById("checkElevator").src.split("check-elevator.js")[0];var n=a+e;var r=r;u(n,t,r)}function m(e,t,r,a,n){if(!e){console.error("沒有共用電梯網址");return false}var o=e.split("index.html")[0];var l=o+t;if(typeof r==="function"){var n=n;r(l,a,n)}}function E(e){var t=document.getElementById(e);t.parentNode.removeChild(t)}})();