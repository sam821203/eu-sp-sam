function makeRandom(obj,noRepeatObj){if(typeof obj!=="object"){return false}this.obj=obj;if(noRepeatObj===undefined){return this.init()}else if(typeof noRepeatObj==="object"){return this.initNoRepeat(noRepeatObj)}else if(typeof noRepeatObj!=="object"){}}makeRandom.prototype.sum=function(key){var obj=this.obj;var sum=0;for(var i in obj){sum+=obj[i][key]}return sum};makeRandom.prototype.init=function(){var result=null;var obj=this.obj;var sum=this.sum("p");for(var i in obj){var draw=parseInt(Math.random()*sum);if(draw<=obj[i].p){result=obj[i];if(typeof obj[i].r!=="undefined"&&obj[i].r===0){obj[i].p=0}break}else{sum-=obj[i].p}}return result};makeRandom.prototype.initNoRepeat=function(noRepeatObj){var result=null;var obj=this.obj;var sum=this.sum("p");for(var i in obj){var draw=parseInt(Math.random()*sum);if(draw<=obj[i].p&&!noRepeatObj[obj[i].i]){noRepeatObj[obj[i].i]=true;result=obj[i];obj[i].p = 0;break}else{sum-=obj[i].p}}return result};function setRandomData(times,noRepeat){var randomData=[];if(typeof noRepeat!=="undefined"){var noRepeatObj={};for(var i=0;i<times;i++){var dataItem=new makeRandom(obj,noRepeatObj);randomData.push(dataItem)}}else{for(var i=0;i<times;i++){var dataItem=new makeRandom(obj);randomData.push(dataItem)}}return randomData}function removeData(){var check=document.getElementById("check");var data=document.getElementById("dataScript");var controller=document.getElementById("controller");document.body.removeChild(check);document.body.removeChild(data);document.body.removeChild(controller)}function loadObjData(){var checkDataObjLoad=setInterval(function(){if(typeof obj!=="undefined"){if(typeof nr==="undefined"||nr===0||nr===false){arrayCardFronts=setRandomData(6)}else{arrayCardFronts=setRandomData(6,true)}removeData();clearInterval(checkDataObjLoad)}},100)}var arrayCardFronts;loadObjData();