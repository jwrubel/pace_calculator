function displayFullScreenStatus(){var a=isFullScreen()?"Document is now full screen.":"Document is currently not full screen.";document.querySelector("#status").innerHTML=a}function isFullScreen(){return!!(document.webkitIsFullScreen||document.mozFullScreen||document.isFullScreen)}function fullScreenElement(){return document.webkitFullScreenElement||document.webkitCurrentFullScreenEle