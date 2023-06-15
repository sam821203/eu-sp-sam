/**
 * Created by jing on 2019/2/20.
 */


function getAnchor() {
    var domAnchor = document.querySelectorAll('[data-regist]');
    // console.log(domAnchor);

    for(var i = 0; i < domAnchor.length; i++) {
        domAnchor[i].addEventListener('click', addAnchor);
    }
}
getAnchor();

function addAnchor(e){
    // console.log(this);
    e.preventDefault();
    var anchor = this.dataset.regist.split(' ');
    
    if(anchor.length === 1) {
        location.href = this.href + '?regist=' + anchor[0];
        // console.log(this.href + '#' + anchor[0]);
    } else {
        var anchorHref = '';
        for(var i = 0; i < anchor.length; i++) {
            if (i === anchor.length - 1) {
                anchorHref += anchor[i];
            } else {
                anchorHref += anchor[i] + '+';
            }
        }
        // console.log(this.href + '#' + anchorHref);
        location.href = this.href + '?regist=' + anchorHref;
    }
}