playVideo();
document.body.addEventListener('click', () =>{
  playVideo();
},{ once: true });
document.body.addEventListener('touchstart', () =>{
  playVideo();
},{ once: true });

function playVideo(){
  const videoElements = Array.apply(null, document.querySelectorAll('video'));

  videoElements.forEach(el => {
    if(!el.playing) el.play();
  });
}