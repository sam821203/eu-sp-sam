
//可拖移廣告icon
window.addEventListener("load",function () {


        let Area_hammerAD = '#Area_hammerAD';

        $(function Hammerfu(){
            var reqAnimationFrame = (function () {
                return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();
            var el = document.querySelector( Area_hammerAD );
            var es = el.style;
            var START_X = 0; //初始x軸
            var START_Y = -150; //初始y軸
            var px = START_X; //移動x軸
            var py = START_Y; //移動y軸
            var ticking = false;
            var transform;
            var elw = el.offsetWidth; //物件寬
            var elh = el.offsetHeight; //物件高
            var ww = window.innerWidth; //視窗寬
            var wh = window.innerHeight; //視窗高
            var mc = new Hammer( el );
            mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 })); //水平平移
            mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan')); //快速滑動
            mc.on("panstart panmove", onPan);
            mc.on("hammer.input", function(ev) {
                if(ev.isFinal) {
                    //更新Y軸
                    py = py + ev.deltaY;
                    START_Y = py;
                    if( START_Y > -elh * 0.5){
                        py = START_Y = -elh * 0.5;
                    } else if( START_Y < -( wh - elh ) ){
                        py = START_Y = -( wh - elh );
                    }
                    //貼齊X軸左右
                    if( ev.deltaX - elw * 0.5 > -ww * 0.5 ){
                        START_X = 0;
                        el.classList.remove('js-stickleft');
                        el.classList.add('js-stickright');
                    } else {
                        START_X = -ww + elw;
                        el.classList.remove('js-stickright');
                        el.classList.add('js-stickleft');
                    }
                    resetElement();
                }
            });
            function resetElement() {
                transform = {
                    translate: {
                        x: START_X,
                        y: START_Y
                    },
                    speed: 300,
                    scale: 1,
                    angle: 0,
                    rx: 0,
                    ry: 0,
                    rz: 0
                };
                requestElementUpdate();
            };
            function updateElementTransform() {
                es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d('+  transform.translate.x +'px,'+  transform.translate.y +'px,0px)';
                es.webkitTransitionDuration = es.MsTransition = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = ' '+ transform.speed + 'ms';
                ticking = false;
            };
            function requestElementUpdate() {
                if(!ticking) {
                    reqAnimationFrame(updateElementTransform);
                    ticking = true;
                };
            };
            function onPan(ev) {
                transform = {
                    translate:{
                        x: START_X + ev.deltaX,
                        y: START_Y + ev.deltaY
                    },
                    speed: 0,
                };
                requestElementUpdate();
            };
            resetElement();
        });


//jQuery scroll事件，支源scroll srart與scroll stop
        (function(){
            var special = jQuery.event.special,
                uid1 = 'D' + (+new Date()),
                uid2 = 'D' + (+new Date() + 1);
            special.scrollstart = {
                setup: function() {
                    var timer,
                        handler =  function(evt) {
                            var _self = this,
                                _args = arguments;
                            if (timer) {
                                clearTimeout(timer);
                            } else {
                                evt.type = 'scrollstart';
                                jQuery.event.dispatch.apply(_self, _args);
                            }
                            timer = setTimeout( function(){
                                timer = null;
                            }, special.scrollstop.latency);
                        };
                    jQuery(this).bind('scroll', handler).data(uid1, handler);
                },
                teardown: function(){
                    jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
                }
            };
            special.scrollstop = {
                latency: 300,
                setup: function() {
                    var timer,
                        handler = function(evt) {
                            var _self = this,
                                _args = arguments;
                            if (timer) {
                                clearTimeout(timer);
                            }
                            timer = setTimeout( function(){
                                timer = null;
                                evt.type = 'scrollstop';
                                jQuery.event.dispatch.apply(_self, _args);
                            }, special.scrollstop.latency);
                        };
                    jQuery(this).bind('scroll', handler).data(uid2, handler);
                },
                teardown: function() {
                    jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
                }
            };
        })();


        /*滑動過程狀態改變*/
        $(function(){
            var _self = $( Area_hammerAD );
            var dow = $(window);

            //收合
            function selfhide(val){
                if (_self.hasClass('js-stickleft')){
                    _self.css('right', _self.width() * val);
                } else {
                    _self.css('right', _self.width() * -val);
                };
            };

            //顯示
            function selfshow(val){
                if (_self.hasClass('js-stickleft')){
                    _self.css('right', val);
                } else {
                    _self.css('right', val);
                };
            };

            //初始
            selfhide(1);
            //大於300px才顯示
            dow.bind('scroll', function(){
                if ( $(this).scrollTop() < 300){
                    selfhide(1);
                };
            });
            //滑動時收合
            dow.bind('scrollstart', function(){
                if ( $(this).scrollTop() > 300){
                    selfhide(0.75);
                };
            });
            //滑動後出現
            dow.bind('scrollstop', function(){
                if ( $(this).scrollTop() > 300){
                    selfshow(0);
                };
            });
            //關掉廣告
            _self.find('.closeButton').click(function(){
                _self.hide();
            });


        });
});
