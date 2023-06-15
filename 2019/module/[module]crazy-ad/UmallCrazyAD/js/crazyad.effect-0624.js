$(function(){

	function crazyStage(){
		if(!document.getElementById('crazyStage')) return false;

		var timer;
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


		//first show
		var firstShow = function() {

            $subSlogn1.animate({

                top: 0

            }, 200, function() {

                //$subSlogn1.addClass('effect-blinking');
                $subSlogn2.delay(150).animate({

                    bottom: 0

                }, 200, function() {

                    //$subSlogn2.addClass('effect-blinking');
                    $subSlogn3.delay(200).animate({

                        top: 0

                    }, 200, function() {

                        //$subSlogn3.addClass('effect-blinking');
                        $subSlogn4.delay(250).animate({

                            bottom: 0

                        }, 200, function() {

                            //$subSlogn4.addClass('effect-blinking');
                            $subSlogn1.addClass('effect-blinking-sec');
                            $subSlogn2.addClass('effect-blinking-sec');
                            $subSlogn3.addClass('effect-blinking-sec');
                            $subSlogn4.addClass('effect-blinking-sec');

                            $subSlogn1.delay(1500).animate({

                                top: -570

                            }, 100, function() {

                                $subSlogn1.removeClass('effect-blinking effect-blinking-sec');

                            });

                            $subSlogn2.delay(1600).animate({

                                bottom: -570

                            }, 100, function() {

                                $subSlogn2.removeClass('effect-blinking effect-blinking-sec');

                            });

                            $subSlogn3.delay(1500).animate({

                                top: -570

                            }, 100, function() {

                                $subSlogn3.removeClass('effect-blinking effect-blinking-sec');

                            });

                            $subSlogn4.delay(1600).animate({

                                bottom: -570

                            }, 100, function() {

                                $subSlogn4.removeClass('effect-blinking effect-blinking-sec');

                            });


                        });

                    });

                });

            });


        }

        //second show
        var secondShow = function() {

        	$role1.delay(3000).animate({

        		left: 20

        	},150, function(){

        		$role1.addClass('txt1--shake');

        	});

        	$role2.delay(3000).animate({

        		right: 0

        	},150, function(){

        		$role2.addClass('man--shake');
        		$role3.animate({

        			width: '37%',
        			opacity: 1

        		},150, function(){

        			$role4.animate({

        				top: 170

        			}, 150);

        			$role5.animate({

        				bottom: 70

        			}, 150, function(){

        				$role5.addClass('shake-3');
        				$role6.animate({

        					bottom: 10

        				}, 100, function(){

        					$role6.addClass('shake');

        				});

        			});

        		});


        	});

        }

        // main animate
        var mainShow = function () {

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
				subSlogn1.removeAttribute('style'); 
				subSlogn1.removeAttribute('style'); 
				subSlogn1.removeAttribute('style'); 
				role1.removeAttribute('style'); 
				role2.removeAttribute('style'); 
				role3.removeAttribute('style'); 
				role4.removeAttribute('style'); 
				role5.removeAttribute('style'); 
				role6.removeAttribute('style'); 
				$role1.removeClass('txt1--shake');
				$role2.removeClass('man--shake');
				$role5.removeClass('shake-3');
				$role6.removeClass('shake');


			});
		}

		// replay btn

		$rePlay.click(function(e){
			e.preventDefault();
			mainShow();
			endAndStartTimer();
		});

		//close btns
		$btnClose.click(function(e){
			e.preventDefault();
			backInit();
		});

		// set timer 5 sec
        function endAndStartTimer() {
            window.clearTimeout(timer);

            timer = window.setTimeout(function() {

                backInit();

            }, 10000);
        }
        //endAndStartTimer();

	}
	crazyStage();

});