(function() {
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
	if (!isCompatibleBrowser()) {
		return showBrowserAlert();
	}

	setViewportScale();
}

init();
})();

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();
