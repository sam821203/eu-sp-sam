$(function(){

	function crazyStage(){
		if(!document.getElementById('crazyStage')) return false;

		var timer;
		var crazyStage = document.getElementById('crazyStage');
		var rePlay = document.getElementById('rePlay');
		var stage = crazyStage.childNodes[1];
		var btnClose = stage.getElementsByTagName('a')[1];

		var $crazyStage = $(crazyStage);
		var $rePlay = $(rePlay);
		var $btnClose = $(btnClose);


        // main animate
        var mainShow = function() {

            $rePlay.attr('disabled', true);
            $crazyStage.animate({
                top: '+=1100'
            });


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

				crazyStage.removeAttribute('style'); 

			});
		}


		//close btns
		$btnClose.click(function(e){
			e.preventDefault();

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


        //invoking api form outside of tumult Hype
        //after invoking, can use hype api in here
        function invokingHype(hypeDocument, element, event) {

            //console.log(hypeDocument.documentName(), hypeDocument.documentId());

            //replay btn

            $rePlay.click(function(e) {
                e.preventDefault();
                mainShow();
                endAndStartTimer();
                
                //invoking hype api to setting replay
                hypeDocument.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);

            });


            return true;
        }


        if ("HYPE_eventListeners" in window === false) {
            window.HYPE_eventListeners = Array();
        }

        window.HYPE_eventListeners.push({
            "type": "HypeDocumentLoad",
            "callback": invokingHype
        });

	}
	crazyStage();

});