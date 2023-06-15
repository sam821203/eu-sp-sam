// load indicator
function loading() {
	function preloading () {
		var overlay = document.createElement('div');
		var loadIndicator = document.createElement('div');
		var logoImg = document.createElement('img');
		var titleImg = document.createElement('img');
		var loadText = document.createElement('p');

		// basic attr in overlay
		var overlayBasicAttr = {
			'id': 'overlay',
			'class': 'overlay'
		};

		// style attr in overlay
		var overlayStyleAttr = {
			// basic 
			'position': 'fixed',
			'z-index': 650,
			'top': 0,
			'left': 0,
			'width': '100%',
			'height': '100%',
			// custom
			'background': '#f8960a radial-gradient(circle, #fac116, #f8960a)',
		}

		// basic attr in logo img 
		var logoImgBasicAttr = {
			'class': 'logo-img',
			'src': 'logo.png',
			'alt': 'logo',
		};

		// style attr in logo img
	  	var logoImgStyleAttr = {
	  		// basic 
	  		'position': 'absolute',
	  		'z-index': 0,
	  		//custom
	  		'top': '2%',
	  		'left': '15%',
	  		'width': '220px',
	  	}

		// basic attr in title img 
		var titleImgBasicAttr = {
			// basic
			'class': 'title-img',
			'src': 'title.png',
			// custom
			'alt': '3C享fun價',
		};

		// style attr in title img
	  	var titleImgStyleAttr = {
	  		// basic 
	  		'position': 'absolute',
	  		'z-index': 0,
	  		//custom
	  		'top': '15%',
	  		'left': 0,
	  		'right': 0,
	  		'bottom': 'auto',
	  		'margin': 'auto',
	  		'width': '631px',
	  	}

		// style attr in loading indicator
	  	var loadIndicatorStyleAttr = {
	  		// basic 
	  		'position': 'absolute',
	  		'z-index': 0,
	  		//custom
	  		'top': 'auto',
	  		'left': 0,
	  		'right': 0,
	  		'bottom': '20%',
	  		'margin': 'auto',
	  		'width': '100px',
	  		'height': '100px',
	  		'background-image': 'url(coin-small.png)',
	  		'filter': 'drop-shadow(2px 1px #ebcf40)',
	  		'animation': '3s 0.5s coin-flip infinite linear',
	  	}

		// style attr in loading text
	  	var loadTextStyleAttr = {
	  		// basic 
	  		'position': 'absolute',
	  		'z-index': 0,
	  		//custom
	  		'top': 'auto',
	  		'left': 0,
	  		'right': 0,
	  		'bottom': '15%',
	  		'padding-left': '25px',
	  		'color': '#fff',
	  		'font-size': '36px',
	  		'text-align': 'center',
	  		'opacity': 0,
	  		'animation': '1s self-flash infinite ease-out',
	  	}


	  	// set id. classname
		for (var attr in overlayBasicAttr) {
			overlay.setAttribute(attr , overlayBasicAttr[attr]);
		}

		for (var attr in logoImgBasicAttr) {
			logoImg.setAttribute(attr , logoImgBasicAttr[attr]);
		}

		for (var attr in titleImgBasicAttr) {
			titleImg.setAttribute(attr , titleImgBasicAttr[attr]);
		}

		loadIndicator.setAttribute('class', 'loading');

		// set style
		var overlayStyleValue = '';
		var logoImgStyleValue = '';
		var titleImgStyleValue = '';
		var loadIndicatorStyleValue = '';
		var loadTextStyleValue = '';
		

		for (var attr in overlayStyleAttr) {
			overlayStyleValue = overlayStyleValue + attr + ":" + overlayStyleAttr[attr] + ';';
		}
		overlay.setAttribute('style', overlayStyleValue);

		for (var attr in logoImgStyleAttr) {
			logoImgStyleValue = logoImgStyleValue + attr + ":" + logoImgStyleAttr[attr] + ';';
		}
		logoImg.setAttribute('style', logoImgStyleValue);

		for (var attr in titleImgStyleAttr) {
			titleImgStyleValue = titleImgStyleValue + attr + ":" + titleImgStyleAttr[attr] + ';';
		}
		titleImg.setAttribute('style', titleImgStyleValue);

		for (var attr in loadIndicatorStyleAttr) {
			loadIndicatorStyleValue = loadIndicatorStyleValue + attr + ":" + loadIndicatorStyleAttr[attr] + ';';
		}
		loadIndicator.setAttribute('style', loadIndicatorStyleValue);

		for (var attr in loadTextStyleAttr) {
			loadTextStyleValue = loadTextStyleValue + attr + ":" + loadTextStyleAttr[attr] + ';';
		}
		loadText.setAttribute('style', loadTextStyleValue);

		// set animation in style
		var animation = "@keyframes coin-flip{0%{transform:rotateY(0deg)}to{transform:rotateY(7200deg)}}@keyframes self-flash{to{opacity:1}}";
		var newStyleNode = document.createTextNode(animation);
		var newStyle = document.createElement('style');
		var bodyFirstChild = document.body.firstChild;

		var text = 'Loading...';
		var loadTextNode = document.createTextNode(text);
		loadText.appendChild(loadTextNode);

		newStyle.appendChild(newStyleNode);
		newStyle.setAttribute('id', 'overlayStyle');
		document.head.appendChild(newStyle);

		// set overlay. loading indicator in body
	  	document.body.insertBefore(overlay, bodyFirstChild);
	  	overlay.appendChild(logoImg);
	  	overlay.appendChild(titleImg);
	  	overlay.appendChild(loadIndicator);
	  	overlay.appendChild(loadText);
	  	document.head.appendChild(newStyle);
	}
	preloading();

	// turn off the overlay when load
	var timer = true;
	var opening = function() {
		var overlay = document.getElementById('overlay');
		var overlayStyle = document.getElementById('overlayStyle');

  		if (timer) {
	 		timer = false;
	 		overlay.style.opacity = '0';
	 		setTimeout(function(){
		  		overlay.style.display = 'none';
		  		
				// after load, remove all
				var loadJS = document.getElementById('loadJS');
		  		document.head.removeChild(overlayStyle);
		  		document.body.removeChild(overlay);
		  		document.body.removeChild(loadJS);	
	 		}, 500);

  		}
	};
	window.addEventListener('load', opening);
  	setTimeout(opening, 2500);
}
loading();