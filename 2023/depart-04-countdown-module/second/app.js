var n=new Date("2023/4/23 23:59");var t=["dayTens","dayUnits","hourTens","hourUnits","minTens","minUnits","secTens","secUnits"];var r=e(function(){var r=i(n,true);t.forEach(function(n){var t=document.getElementById(n);t.innerHTML=r[n]})},20);function e(r,e){var i=1;var e=e||1e3;var r=r||undefined;var a;var o=(new Date).getTime();s(e);function s(n){var t=setTimeout(function(){var n=(new Date).getTime();var t=n-(o+i*e);if(typeof r==="function"){r()}i++;s(e-t)},n);return a=t}return a}function i(n,t){var r=(new Date).getTime();var e=new Date(n).getTime();var t=t||false;var i=e-r;var a=Math.floor(i/10);var o=Math.floor(i/1e3);var s=Math.floor(o/60);var c=Math.floor(s/60);var m=Math.floor(c/24);c%=24;s%=60;o%=60;a%=100;if(!t)c+=m*24;if(i<=0){return{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0"}}else{return{day:m<10?"0"+m:m.toString(),dayTens:parseInt(m%100/10).toString(),dayUnits:parseInt(m%10).toString(),hour:c<10?"0"+c:c.toString(),hourTens:parseInt(c%100/10).toString(),hourUnits:parseInt(c%10).toString(),min:s<10?"0"+s:s.toString(),minTens:parseInt(s%100/10).toString(),minUnits:parseInt(s%10).toString(),sec:o<10?"0"+o:o.toString(),secTens:parseInt(o%100/10).toString(),secUnits:parseInt(o%10).toString()}}}