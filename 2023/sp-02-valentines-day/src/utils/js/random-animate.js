export function randomAnimate(elClass, time, newClass) {
  var time = time || 160;
  var newClass = newClass || "animation";
  function getRandom(length) {
    return Math.floor(Math.random() * length);
  }

  // make node index
  function chooseChild(elClass, newClass) {
    var newClass = newClass || "animation";
    var targetNode = document.getElementsByClassName(elClass);
    var randomNumber = getRandom(targetNode.length);

    for (var i = 0; i < targetNode.length; i++) {
      targetNode[i].classList.remove(newClass);
    }
    targetNode[randomNumber].classList.add(newClass);
  }
  
  setInterval(function(){
    chooseChild(elClass, newClass);
  }, time);

}