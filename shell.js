(function (window, document) {
if (!window.XMPlayer) {
  window.XMPlayer = {};
}
var XMPlayer = window.XMPlayer;
if (!window.XMView) {
  window.XMView = {};
}
var XMView = window.XMView;

function loadXMAndInit(xmdata) {
  if (!XMPlayer.load(xmdata)) {
    return;
  }

  return XMPlayer.xm;
}

function downloadXM(uri) {
  var xmReq = new XMLHttpRequest();
  xmReq.open("GET", uri, true);
  xmReq.responseType = "arraybuffer";
  xmReq.onload = function (xmEvent) {
    var arrayBuffer = xmReq.response;
    if (arrayBuffer) {
      loadXMAndInit(arrayBuffer);
    } else {
      console.log("unable to load", uri);
    }
  };
  xmReq.send(null);
}

window.onload = function() {
  XMPlayer.init();
  downloadXM("music.xm");
};

})(window, document);
