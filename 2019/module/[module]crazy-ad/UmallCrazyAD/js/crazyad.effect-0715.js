$(function(){

	function crazyStage(){
		if(!document.getElementById('crazyStage')) return false;

		var timer;
        var disabledTimer;
		var crazyStage = document.getElementById('crazyStage');
		var rePlay = document.getElementById('rePlay');
		var stage = crazyStage.childNodes[1];
		var btnClose = stage.getElementsByTagName('a')[1];
		var subSlogn1 = stage.getElementsByTagName('img')[0];
		var subSlogn2 = stage.getElementsByTagName('img')[1];
		var subSlogn3 = stage.getElementsByTagName('img')[2];
		var subSlogn4 = stage.getElementsByTagName('img')[3];
		var role1 = stage.getElementsByTagName('img')[4];
		var role2 = stage.getElementsByTagName('img')[5];
		var role3 = stage.getElementsByTagName('img')[6];
		var role4 = stage.getElementsByTagName('img')[7];
		var role5 = stage.getElementsByTagName('img')[8];
		var role6 = stage.getElementsByTagName('img')[9];


		var $crazyStage = $(crazyStage);
		var $rePlay = $(rePlay);
		var $btnClose = $(btnClose);
		var $subSlogn1 = $(subSlogn1);
		var $subSlogn2 = $(subSlogn2);
		var $subSlogn3 = $(subSlogn3);
		var $subSlogn4 = $(subSlogn4);
		var $role1 = $(role1);
		var $role2 = $(role2);
		var $role3 = $(role3);
		var $role4 = $(role4);
		var $role5 = $(role5);
		var $role6 = $(role6);

        // temporarily disable repaly btn
        var disabledReplayBtn = function() {
            window.clearTimeout(disabledTimer);

            disabledTimer = window.setTimeout(function() {

                $rePlay.attr('disabled', false);

            }, 5500);


        }
        disabledReplayBtn();

		//first show
		var firstShow = function() {

        
            var exitTimer;

            //add exitBlinking fn
            var exitBlinking = function(exitElems, exitSpeeds){

                exitTimer = window.setTimeout(function(){

                    exitElems.addClass('blinking--effect-1');

                }, exitSpeeds);
            }

            //spread out fn
            var endFilm = function(endElems, endSpeeds){

                endElems.delay(2500).animate({

                    top: 570

                }, endSpeeds);

            }

            // start film
            var startFilm = function(startElems, startSpeeds){

                window.clearTimeout(exitTimer);

                startElems.animate({

                    top: 0

                }, startSpeeds, function(){

                    if($subSlogn4.attr('style') === 'top: 0px;') {

                        //blinking effect
                        exitBlinking($subSlogn1, 200); 
                        exitBlinking($subSlogn2, 400);
                        exitBlinking($subSlogn3, 600);
                        exitBlinking($subSlogn4, 800);

                        //spread out 
                        endFilm($subSlogn1, 250);
                        endFilm($subSlogn2, 350);
                        endFilm($subSlogn3, 450);
                        endFilm($subSlogn4, 550);
                    }



                });     

            }

            startFilm($subSlogn1, 400);
            startFilm($subSlogn2, 600);
            startFilm($subSlogn3, 700);
            startFilm($subSlogn4, 800);



        }

        //second show
        var secondShow = function() {

            $role1.delay(3800).animate({

                left: 105

            }, 300, function() {

                $role1.addClass('shake--effect-1');
                $role2.animate({

                    top: 70

                }, 300, function() {

                    $role2.addClass('shake--effect-2');

                    $role3.animate({

                        width: '50%',
                        opacity: 1

                    }, 300, function() {

                        $role3.addClass('zoom--effect-2')

                    });

                    $role4.animate({

                        right: 60

                    }, 300);

                    $role5.animate({

                        right: 160

                    }, 300, function() {

                        $role6.animate({

                            bottom: 80


                        }, 300, function() {

                            $role5.addClass('zoom--effect')

                        });


                    });

                });

            });


        }

        // main animate
        var mainShow = function () {

            $rePlay.attr('disabled', true);
			$crazyStage.animate(
				{
				top: '+=1100'
				},300, function(){

					firstShow();
					secondShow();

				}
			);


		}	
		mainShow();

		// set element back to init css
		var backInit = function (){

			$crazyStage.animate({

				right: '-1140px',
				top: '-1140px',
				width: 0,
				height: 0


			},300, function(){

				//$crazyStage.removeAttr('');

				crazyStage.removeAttribute('style'); 
				subSlogn1.removeAttribute('style'); 
				subSlogn2.removeAttribute('style'); 
				subSlogn3.removeAttribute('style'); 
				subSlogn4.removeAttribute('style'); 
				role1.removeAttribute('style'); 
				role2.removeAttribute('style'); 
				role3.removeAttribute('style'); 
				role4.removeAttribute('style'); 
				role5.removeAttribute('style'); 
				role6.removeAttribute('style'); 
                $subSlogn1.removeClass('blinking--effect-1');
                $subSlogn2.removeClass('blinking--effect-1');
                $subSlogn3.removeClass('blinking--effect-1');
                $subSlogn4.removeClass('blinking--effect-1');
				$role1.removeClass('shake--effect-1');
				$role2.removeClass('shake--effect-2');
				$role3.removeClass('zoom--effect-2');
				$role5.removeClass('zoom--effect');


			});
		}



		//replay btn

		$rePlay.click(function(e){
			e.preventDefault();
			mainShow();
			endAndStartTimer();
		});

		//close btns
		$btnClose.click(function(e){
			e.preventDefault();
            disabledReplayBtn();
			backInit();
		});

		// set timer 10 sec
        function endAndStartTimer() {
            window.clearTimeout(timer);

            timer = window.setTimeout(function() {

                backInit();

            }, 15000);
        }
        endAndStartTimer();

	}
	crazyStage();

});