var confettiShower = [];
var numConfettis = 25;
var container = document.getElementById('confettiContainer');
var colors = [
  "#FFBFB3  ",
  "#58A893",
  "#FFE08C ",
  "#FF8872 ",
  "#FF9C89 "
];

class Confetti {
  constructor(x, y, w, h, c) {
    const currentWidth = window.innerWidth;
    this.w = currentWidth > 959 ? Math.floor(Math.random() * 11 + 8) : Math.floor(Math.random() * 6 + 6);
    this.h = this.w*1.3;
    this.x = Math.floor(Math.random() * 80);
    this.y = Math.floor(Math.random() * 100);
    this.c = colors[Math.floor(Math.random() * colors.length)];
  }
  create() {
        var newConfetti = '<div class="confetti" style="top:' + 0 +'%; left:' + this.x +'%;width:' +
          this.w +'px; height:' + this.h +'px;"><div class="rotate"><div class="askew" style="background-color:' + this.c + '"></div></div></div>';
        container.innerHTML+= newConfetti; 
      }
  };

function animateConfetti() {
  for (var i = 1; i <= numConfettis; i++) {
    var confetti = new Confetti();
    confetti.create();
  }
  var confettis = document.querySelectorAll('.confetti');
  for (var i = 0; i < confettis.length; i++) {
    var animated = confettis[i].animate([
      { transform: 'translate3d(0,0,0)'},
      { transform: 'translate3d(20vw,100vh,0)'}
    ], {
      duration: Math.random() * 3000 + 14000,
      iterations: Infinity,
      delay: -(Math.random() * 8000)
    });
    confettiShower.push(animated);
  }
}

export const initCssConfetti = document.addEventListener("DOMContentLoaded", animateConfetti);