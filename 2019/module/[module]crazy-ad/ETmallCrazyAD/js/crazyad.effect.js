$(function(){

	function crazyStage(){
		if(!document.getElementById('crazyStage')) return false;

		var timer;
		var crazyStage = document.getElementById('crazyStage');
		var rePlay = document.getElementById('rePlay');
		var stage = crazyStage.childNodes[1];
		var btnClose = stage.getElementsByTagName('a')[1];
		var runner = stage.getElementsByTagName('img')[0];
		var slogan1 = stage.getElementsByTagName('img')[1];
		var slogan2 = stage.getElementsByTagName('img')[2];
		var slogan3 = stage.getElementsByTagName('img')[3];
		var coin = stage.getElementsByTagName('img')[4];


		var $crazyStage = $(crazyStage);
		var $rePlay = $(rePlay);
		var $btnClose = $(btnClose);
		var $runner = $(runner);
		var $slogan1 = $(slogan1);
		var $slogan2 = $(slogan2);
		var $slogan3 = $(slogan3);
		var $coin = $(coin);
		var $content = $('#content');
		var $box = $('.box');


        // main animate
        var mainShow = function () {

			$crazyStage.animate(
				{
				top: '+=1100'
				},300, function(){

					$runner.animate(
						{
							left: 495
						},300, function(){

							$slogan1.animate({
								left: 207
							},300, function(){

								$slogan1.addClass('txt1--shake');

							});

							$slogan2.animate({
								left: 75
							},300, function(){

								$slogan2.addClass('txt2--shake');

							});

							$slogan3.animate({
								bottom: 83
							},300, function(){

								$slogan3.addClass('txt3--shake');

		                        $coin.animate({
		                            top: 385
		                        }, 100);

							});


						}
					);

				}
			);

		}	


		// set element back to init css
		var backInit = function (){

			$crazyStage.animate({

				right: '-1140px',
				top: '-1140px',
				width: 0,
				height: 0


			},300, function(){

				$crazyStage.removeAttr('style');
				$runner.removeAttr( 'style' );
				$slogan1.removeAttr( 'style' );
				$slogan1.removeClass( 'txt1--shake' );
				$slogan2.removeAttr( 'style' );
				$slogan2.removeClass( 'txt2--shake' );
				$slogan3.removeAttr( 'style' );
				$slogan3.removeClass( 'txt3--shake' );
				$coin.removeAttr( 'style' );

			});
		}

		// replay btn

		$rePlay.click(function(e){
			e.preventDefault();
			mainShow();
			endAndStartTimer();
		});
		$rePlay.click();

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
        endAndStartTimer();

	}


});