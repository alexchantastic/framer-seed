(function() {
function isHomeScreened() {
	return ('standalone' in window.navigator) && window.navigator.standalone == true;
}

function isCompatibleBrowser() {
	return Utils.isWebKit();
}

var alertNode;

function dismissAlert() {
	alertNode.parentElement.removeChild(alertNode);
}

function showAlert(html) {
	alertNode = document.createElement('div');

	alertNode.classList.add('framerAlertBackground');
	alertNode.innerHTML = html;

	document.addEventListener('DOMContentLoaded', function(event) {
		document.body.appendChild(alertNode);
	});

	window.dismissAlert = dismissAlert;
}

function showBrowserAlert() {
	var html = '';
	html += '<div class="framerAlert">';
	html += '<strong>Error: Not A WebKit Browser</strong>';
	html += 'Your browser is not supported. <br> Please use Safari or Chrome.<br>';
	html += '<a class="btn" href="javascript:void(0)" onclick="dismissAlert();">Try anyway</a>';
	html += '</div>';

	showAlert(html);
}

function setDefaultPageTitle() {
	// If no title was set we set it to the project folder name so
	// you get a nice name on iOS if you bookmark to desktop.
	document.addEventListener('DOMContentLoaded', function() {
		if (document.title == '') {
			if (window.FramerStudioInfo && window.FramerStudioInfo.documentTitle) {
				document.title = window.FramerStudioInfo.documentTitle;
			} else {
				document.title = window.location.pathname.replace(/\//g, '');
			}
		}
	});
}

function setViewportScale() {
	var scale = 1 / window.devicePixelRatio;
  var viewport = 'width=device-width, height=device-height, initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';
  var iOS = /iPad|iPhone|iPod/.test(navigator.platform);

  if (iOS) {
  	viewport += ', shrink-to-fit=no';
  }

  document.write('<meta name="viewport" content="' + viewport + '">');
}

function init() {
	setDefaultPageTitle();

	if (!isCompatibleBrowser()) {
		return showBrowserAlert();
	}

	setViewportScale();
}

init();
})();

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();
